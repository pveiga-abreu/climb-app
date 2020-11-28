const express = require('express');
const router = express.Router();

const controller = require('../controllers/record_controller');

// :asset -> código do ativo | :wallet -> código da carteira | :id -> código do registro

router.get('/:id', controller.get_record_by_id);

router.get('/asset/:asset', controller.get_asset_records); // Buscar todos os registros de um ativo

router.get('/wallet/:wallet', controller.get_wallet_records); // Buscar todos os registros de uma carteira

router.get('/last/:wallet', controller.get_last_record); // Buscar o último registro de uma carteira

router.post('/:wallet', controller.insert_record);

router.put('/:id', controller.alter_record);

router.delete('/:id', controller.delete_record);

module.exports = router;
