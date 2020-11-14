const express = require('express');
const router = express.Router();

const controller = require('../controllers/wallet_controller');

router.post('/register', controller.register_wallet);

router.put('/update/:id', controller.alter_wallet);

router.delete('/delete/:id', controller.delete_wallet);

module.exports = router;
