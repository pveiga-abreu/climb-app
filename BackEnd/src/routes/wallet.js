const express = require('express');
const router = express.Router();

const controller = require('../controllers/wallet_controller');

// :user -> código do usuário | :id -> código da carteira

// router.get('/:user', controller.get_wallets);

router.post('/:user', controller.register_wallet);

router.put('/:id', controller.alter_wallet);

router.delete('/:id', controller.delete_wallet);

module.exports = router;
