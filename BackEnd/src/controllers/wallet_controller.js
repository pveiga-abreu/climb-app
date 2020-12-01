const validator = require('../validators/wallet_validators');
const asset_stats = require('../util/asset_stats');
const db = require('../models/wallet_dao');

exports.get_info = async (req, res) => {
    const id = req.params.id;

    const wlt_response = await db.wallet_info(id);
    if(wlt_response === null) return res.status(204).json({});

    const response = {
        wallet: {
            id: wlt_response.wallet_id,
            name: wlt_response.name,
            description: wlt_response.description
        }
    }

    const ast_response = await db.assets_info(id);

    response.assets = await asset_stats.asset_stats(ast_response);

    res.json(response);

}


exports.register_wallet = async (req, res) => {
    try {
        let data = req.body;

        const v = validator.validate_wallet_insert(data);
        if(!v.valid) {
            return res.status(400).send({message: v.errors})
        }

        data.user_id = req.params.user;

        const response = await db.register_wallet(data);

        if (response !== null) {
            return res.status(201).json({
                message: "Carteira criada com sucesso",
                createdWallet: {
                    id: response.wallet_id,
                    name: response.name
                }
              });
        } else {
            return res.status(500).json({message: "Erro ao inserir no banco"});
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Erro ao inserir no banco"}, error);
    }
}


exports.alter_wallet = async (req, res) => {
    try {
        const data = req.body;

        const v = validator.validate_wallet_update(data);
        if(!v.valid) {
            return res.status(400).send({message: v.errors})
        }
        
        const response = await db.alter_wallet(data, req.params.id)
        
        if (response) {
            return res.status(201).json({
                message: "Carteira atualizada com sucesso",
                updatedWallet: data
            });
        } else {
            return res.status(500).json({message: "Erro ao atualizar!"});
        }
        
    } catch (error) {
        return res.status(500).json({message: "Erro ao atualizar!"}, error);
    }
}


exports.delete_wallet = async (req, res) => {
    try {
        const response = await db.delete_wallet(req.params.id);
        
        if (response) return res.json({message: "Carteira deletada com sucesso!"});
        else return res.status(500).json({message: "Erro ao deletar carteira!"});

    }
    catch (error) {
        return res.status(500).json({message: "Erro ao deletar carteira!"}, error);
    }
}
