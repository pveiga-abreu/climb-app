const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Wallet = require('./model/Wallet.js');
const jwt = require('jsonwebtoken');
require('dotenv/config');


router.post('/cadastro', async (req, res) => {
    try {
        const resposta = await Wallet.create({
            user_id: req.body.user_id,
            name: req.body.name,
            description: req.body.description
        });
        if (resposta) {
            const response = {
                mensagem: "Carteira criada com sucesso",
                CarteiraCriada: {
                    description: req.body.description,
                }
            }
            return res.json(response, 201);
        }
    } catch (error) {
        console.log(error);
        return res.json({ Mensagem: "Erro ao inserir no banco" }, error, 400);
    }
});

router.patch('/update/:id', async (req, res) => {
    try {
        const resposta = await Wallet.update({
            name: req.body.name,
            description: req.body.description
        }, {
            where: {
                wallet_id: req.params.id
            }
        });
        if (resposta) {
            const response = {
                mensagem: "Carteira atualizada com sucesso",
                WalletAtualizada: {
                    name: req.body.name,
                    description: req.body.description
                }
            }
            return res.json(response, 201);
        }
    } catch (error) {
        return res.json({ Mensagem: "Erro ao atualizar no banco" },error, 400);
    }
});


router.delete('/delete/:id', async (req, res) => {
    try {
        await Wallet.destroy({
            where: {
                wallet_id: req.params.id
            }
        })
        return res.json({ Mensagem: "Carteira deletada com sucesso" }, 200)
    }
    catch (error) {
        return res.json({ Mensagem: "Erro ao deletar Carteira" },error, 400);
    }
});

module.exports = router;

