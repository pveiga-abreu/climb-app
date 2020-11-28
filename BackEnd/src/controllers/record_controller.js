const db = require('../models/record_dao');

const validator = require('../validators/record_validators');

exports.get_records = async (req, res) => {
    const asset = req.params.asset;
    
    const resp = await db.get_records(asset)
}

exports.get_record_by_id = async (req, res) => {
    const id = req.params.id;
    

}

exports.get_last_record = async (req, res) => {
    const wallet = req.params.wallet;
    

}

exports.insert_record = async (req, res) => {
    const wallet = req.params.wallet;
    let data = req.body;

    const v = validator.validate_insert_record(data);
    if(!v.valid) {
        return res.status(400).send({message: v.errors});
    }

    const resp = await db.insert_record(wallet, data);
    
    if(resp) {
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
        return res.status(400).send({message: v.errors})
    }

    const resp = await db.alter_record(data, id);

    if(resp) {
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

    const resp = await db.delete_record(id);

    if(resp) {
        res.status(200).json({
            message: "Registro apagado com sucesso!"
        });
    } else {
        res.status(500).json({
            message: "Erro ao apagar registro!"
        });
    }

}
