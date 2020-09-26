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
                let _id = resposta[0].user_id
                let _name = resposta[0].name
                let _email = resposta[0].email
                let _cpf_cnpj = resposta[0].cpf_cnpj
                let _tel = resposta[0].tel
                let _profile = resposta[0].profile

                
                if (result) {
                    const token = jwt.sign({
                        user_id: _id,
                        name: _name,
                        email: _email
                    },
                        process.env.jwd_key,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.json({ mensagem: "Autenticado com sucesso", token: token, id : _id, name : _name, 
                    email : _email, cpf_cnpj : _cpf_cnpj, tel : _tel, profile : _profile }, 200);
                }
                return res.json({ mensagem: "Falha na autenticação" }, 401);

            })
        }
    } catch (error) {
        return res.json({ mensagem: "Falha na autenticação" }, 401);
    }
});


router.patch('/update/:id', async (req, res)=>{
    bcrypt.hash(req.body.password, 10, async (errBcrypt, hash) => {

        if (errBcrypt) {
            return res.json({ error: errBcrypt }, 500)
        }
        try {
            const resposta =  await Usuario.update({
                name: req.body.name,
                tel: req.body.tel,
                password: hash,
                profile: req.body.profile
            },{
                where : {
                    user_id : req.params.id
                }
            });
            if (resposta) {
                const response = {
                    mensagem: "Usuário atualizado com sucesso",
                    UsuárioAtualizado: {
                        name: req.body.name,
                        tel: req.body.tel,
                        password: hash,
                        email : req.body.email,
                        profile: req.body.profile
                    }
                }
                return res.json(response, 201);
            }
        } catch (error) {
            return res.json({ Mensagem: "Erro ao atualizar no banco" }, 400);
        }
    });
});


router.delete('/delete/:id', async (req, res)=>{
    try {
        await Usuario.destroy({
            where : {
                user_id : req.params.id
            }
        })
        return res.json({Mensagem : "Usuário deletado com sucesso"}, 200)
    }
    catch (error) {
        return res.json({ Mensagem: "Erro ao deletar Usuário" }, 400);
    }
});
module.exports = router;

