const moment = require('moment');

const { conn, assets, asset_records } = require('../config/database');
const { avg_price, full_avg_price } = require('../util/avg_price');

exports.get_record_by_id = async id => {
    try{
        const resp = await asset_records.findByPk(id);

        return resp;

    } catch (e) {
        console.log(e);

        return null;
    }
}

exports.get_asset_records = async asset => {
    try{
        const resp = await asset_records.findAll({
            where: {
                asset_id: asset
            }
        });
        
        if(resp.length) return resp;
        else return null;

    } catch (e) {
        console.log(e);

        return null;
    }
}

exports.get_wallet_records = async wallet => {
    try{
        const resp = await conn.query(`
        select
            ast.asset_id,
            ast.ticker,
            rec.record_id,
            rec.dat as 'date',
            rec.quotas,
            rec.price,
            rec.order_type
        from
            wallets wlt
            left join assets ast on (ast.wallet_id = wlt.wallet_id)
            left join asset_records rec on (rec.asset_id = ast.asset_id)
		where
			wlt.wallet_id = ${wallet}
        `);
        console.log(resp);
        if(resp) return resp[0];
        else return null;

    } catch (e) {
        console.log(e);

        return null;
    }
}

exports.get_last_record = async wallet => {
    try{
        const resp = await conn.query(`
        select
            ast.asset_id,
            ast.ticker,
            rec.record_id,
            rec.dat as 'date',
            rec.quotas,
            rec.price,
            rec.order_type
        from
            wallets wlt
            left join assets ast on (ast.wallet_id = wlt.wallet_id)
            left join asset_records rec on (rec.asset_id = ast.asset_id)
		where
			wlt.wallet_id = ${wallet}
        order by rec.dat desc, rec.record_id desc
		limit 1
        `);

        if(resp) return resp[0][0];
        else return null;

    } catch (e) {
        console.log(e);

        return null;
    }
}

exports.insert_record = async (wallet, data) => {
    try {
        const { ticker, price, quotas, type } = data;

        const [asset, created] = await assets.findOrCreate({
            where: { wallet_id: wallet, ticker: ticker},
            defaults: {
                average_price: price,
                quotas: quotas,
                type: type
            }
        });

        await asset_records.create({
            asset_id: asset.asset_id,
            dat: moment().format("YYYY-MM-DD"),
            quotas: quotas,
            price: price,
            order_type: type 
        });

        if(!created){
            const old = {
                price: asset.average_price,
                quotas: asset.quotas
            }
            const new_ = {
                price: price,
                quotas: quotas
            }

            const { new_average_price, new_total_quotas } = avg_price(old, new_, type);

            await assets.update({average_price: new_average_price, quotas: new_total_quotas}, {
                where: {
                    asset_id: asset.asset_id
                }
            });
        }

        return true;

    } catch(e) {
        console.log(e);

        return false;

    }
}

exports.alter_record = async (data, id) => {
    try {
        const rec_data = await asset_records.findByPk(id);

        await asset_records.update(data, {
            where : {
                record_id: id
            }
        });

        const records = await conn.query(`
            select 
                *
            from 
                asset_records
            where
                asset_id = ${rec_data.asset_id}
        `);

        const {new_average_price, new_total_quotas} = full_avg_price(records[0]);

        await assets.update({
            average_price: new_average_price, 
            quotas: new_total_quotas
        }, 
        {
            where: {
                asset_id: rec_data.asset_id
            }
        })

        return true;

    } catch(e) {
        console.log(e);

        return false;

    }  
}

exports.delete_record = async id => {    
    try {
        const rec_data = await asset_records.findByPk(id);

        await asset_records.destroy({
            where : {
                record_id : id
            }
        });

        const records = await conn.query(`
            select 
                *
            from 
                asset_records
            where
                asset_id = ${rec_data.asset_id}
        `);

        const {new_average_price, new_total_quotas} = full_avg_price(records[0]);

        await assets.update({
            average_price: new_average_price, 
            quotas: new_total_quotas
        }, 
        {
            where : {
                asset_id: rec_data.asset_id
            }
        });

        return true;

    } catch (e) {
        console.log(e);

        return false;

    }
}
