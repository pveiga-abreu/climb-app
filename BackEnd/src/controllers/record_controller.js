const db = require('../models/record_dao');

const validator = require('../validators/record_validators');

exports.get_record_by_id = async (req, res) => {
    const id = req.params.id;
    
    const response = await db.get_record_by_id(id);

    if(response != null) res.json(response);
    else res.status(204).json({});

}

exports.get_asset_records = async (req, res) => {
    const asset = req.params.asset;
    
    const response = await db.get_asset_records(asset);

    if(response != null) res.json(response);
    else res.status(204).json({});

}

exports.get_wallet_records = async (req, res) => {
    const wallet = req.params.wallet;
    
    const response = await db.get_wallet_records(wallet);

    if(response != null) res.json(response);
    else res.status(204).json({});
    
}

exports.get_last_record = async (req, res) => {
    const wallet = req.params.wallet;

    const response = await db.get_last_record(wallet);

    if(response != null) res.json(response);
    else res.status(204).json({});

}

exports.insert_record = async (req, res) => {
    const wallet = req.params.wallet;
    let data = req.body;

    const v = validator.validate_insert_record(data);
    if(!v.valid) {
        return res.status(400).send({message: v.errors});
    }

    const response = await db.insert_record(wallet, data);
    
    if(response) {
        res.status(201).json({
            message: "Registro incluído com sucesso!"
        });
    } else {
        res.status(500).json({
            message: "Erro ao incluir registro!"
        });
    }

}

exports.alter_record = async (req, res) => {
    const id = req.params.id;
    let data = req.body;
    const v = validator.validate_update_record(data);

    if(!v.valid) {
        return res.status(400).send({message: v.errors});
    }

    const response = await db.alter_record(data, id);

    if(response) {
        res.status(201).json({
            message: "Registro atualizado com sucesso!"
        });
    } else {
        res.status(500).json({
            message: "Erro ao atualizar registro!"
        });
    }

}

exports.delete_record = async (req, res) => {
    const id = req.params.id;

    const response = await db.delete_record(id);

    if(response) {
        res.json({
            message: "Registro apagado com sucesso!"
        });
    } else {
        res.status(500).json({
            message: "Erro ao apagar registro!"
        });
    }

}
