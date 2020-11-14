const { wallets } = require('../config/database');


exports.register_wallet = async data => {
    try {
        const resp = await wallets.create(data);

        return resp;
    } catch (e) {
        console.log(e);
        return null;
    }
}


exports.alter_wallet = async (data, id) => {
    try {
        const resp = await wallets.update(data, {
            where: {
                wallet_id: id
            }
        });

        if(resp[0] == 1 || resp == 1) return true;
        else return false;

    } catch (e) {
        console.log(e);
        return false;
    }
}


exports.delete_wallet = async id => {
    try {
        const resp = await wallets.destroy({
            where : {
                wallet_id : id
            }
        })

        if(resp == 1 || resp[0] == 1) return true;
        else return false;

    } catch (e) {
        console.log(e);
        return false;
    }
}
