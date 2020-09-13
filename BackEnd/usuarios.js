const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Usuario = require('./model/Usuario');
const jwt = require('jsonwebtoken');
require('dotenv/config');


router.post('/cadastro', (req, res) => {
    bcrypt.hash(req.body.password, 10, async (errBcrypt, hash) => {

        if (errBcrypt) {
            return res.json({ error: errBcrypt }, 500)
        }

        try {
            const resposta = await Usuario.create({
                name: req.body.name,
                tel: req.body.tel,
                cpf_cnpj: req.body.cpf_cnpj,
                password: hash,
                email: req.body.email,
                profile: req.body.profile
            });
            if (resposta) {
                const response = {
                    mensagem: "Usuário inserido com sucesso",
                    UsuárioCriado: {
                        email: req.body.email,
                    }
                }
                return res.json(response, 201);
            }
        } catch (error) {
            return res.json({ Mensagem: "Erro ao inserir no banco" }, 400);
        }
    });
});



router.post('/login', async (req, res) => {

    try {
        const resposta = await Usuario.findAll({
            where: {
                email: req.body.email,
            }
        })
        if (resposta) {
            const senha = resposta[0].password
            bcrypt.compare(req.body.password, senha, (err, result) => {
                if (result) {
                    const token = jwt.sign({
                        user_id: resposta[0].user_id,
                        name: resposta[0].name,
                        email: resposta[0].email
                    },
                        process.env.jwd_key,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.json({ mensagem: "Autenticado com sucesso", token: token }, 200);
                }
                return res.json({ mensagem: "Falha na autenticação" }, 401);

            })
        }
    } catch (error) {
        return res.json({ mensagem: "Falha na autenticação" }, 401);
    }
});

module.exports = router;

