const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const validator = require('../validators/user_validator');
const db = require('../models/user_dao');

exports.get_user = async (req, res) => {
    const id = req.params.id;

    const response = await db.get_user(id);

    if(response != null) {
        res.json({
            user_id: response.user_id,
            name: response.name,
            tel: response.tel,
            cpf_cnpj: response.cpf_cnpj,
            email: response.email,
            profile: response.profile
        });
    }
    else res.status(204).json({});
}


exports.get_wallets = async (req, res) => {
    const id = req.params.id;

    const response = await db.get_wallets(id);

    if(response != null) res.json(response);
    else res.status(204).json({});
}


exports.login = async (req, res) => {
    try {
        const v = validator.validate_login(req.body);
        if(!v.valid) {
            return res.status(400).send({message: v.errors})
        }

        const response = await db.login(req.body.email);

        if (response !== null) {
            const { user_id, name, password, profile } = response;

            bcrypt.compare(req.body.password, password, (err, result) => {
                if (result) {
                    const token = jwt.sign({
                        id: user_id, 
                        name, 
                        profile
                    },
                        process.env.JWD_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.json({ message: "Autenticado com sucesso", token: token});
                }
                return res.status(401).json({ message: "Senha incorreta!" });
            })
        } else {
            return res.status(401).json({ message: "Usuário não cadastrado!" });
        }

    } catch (error) {
        return res.status(500).json({ message: "Falha na autenticação" });
    }
}


exports.register_user =  async (req, res) => {
    let data = req.body;

    const v = validator.validate_user_insert(data);
    if(!v.valid) {
        return res.status(400).send({message: v.errors})
    }

    bcrypt.hash(data.password, 10, async (errBcrypt, hash) => {
        if (errBcrypt) {
            return res.status(500).json({ error: errBcrypt })
        }

        try {
            data.password = hash;
            const response = await db.register_user(data);

            if (response !== null) {
                return res.status(201).json({
                    message: "Usuário inserido com sucesso",
                    createdUser: {
                        user_id: response.user_id,
                        email: response.email
                    }
                });
            } else {
                return res.status(500).json({ message: "Erro ao inserir no banco" });
            }

        } catch (error) {
            return res.status(500).json({ message: "Erro ao inserir no banco" }, error);
        }
    });
}


exports.alter_user = async (req, res) => {
    let data = req.body;

    const v = validator.validate_user_update(data);
    if(!v.valid) {
        return res.status(400).send({message: v.errors})
    }

    if(!Object.keys(data).includes('password')) {
        try {
            const resp = await db.alter_user(data, req.params.id);

            if (resp) {
                return res.status(201).json({
                    message: "Usuário atualizado com sucesso",
                    updatedData: data
                });
            } else {
                return res.status(500).json({message: "Erro ao atualizar!"});
            }

        } catch (error) {
            return res.status(500).json({message: "Erro ao atualizar!"});
        }

    } else {
        bcrypt.hash(data.password, 10, async (errBcrypt, hash) => {
            if (errBcrypt) {
                return res.status(500).json({ error: errBcrypt })
            }
    
            try {
                data.password = hash;
                const resp = await db.alter_user(data, req.params.id);

                if (resp) {
                    return res.status(201).json({
                        message: "Usuário atualizado com sucesso",
                        updatedData: data
                    });
                } else {
                    return res.status(500).json({message: "Erro ao atualizar!"});
                }

            } catch (error) {
                return res.status(500).json({ message:"Erro ao atualizar!"});
            }
    
        });
    }
}


exports.delete_user = async (req, res) => {
    try {
        const resp = await db.delete_user(req.params.id);

        if (resp) {
            return res.json({message : "Usuário deletado com sucesso"});
        } else {
            return res.status(500).json({ message: "Erro ao deletar Usuário" });
        }

    }
    catch (error) {
        return res.status(500).json({ message: "Erro ao deletar Usuário" });
    }
}
