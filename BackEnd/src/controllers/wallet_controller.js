const db = require('../models/wallet_dao');

exports.register_wallet = async (req, res) => {
    try {
        const data = req.body;

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
        return res.status(500).json({message: "Erro ao atualizar!"},error);
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
