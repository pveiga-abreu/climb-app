const express = require('express');
const router = express.Router();

const controller = require('../controllers/record_controller');

// :asset -> código do ativo | :wallet -> código da carteira | :id -> código do registro

router.get('/:asset', controller.get_records);

router.get('/:id', controller.get_record_by_id);

router.get('/last/:wallet', controller.get_last_record);

router.post('/:wallet', controller.insert_record);

router.put('/:id', controller.alter_record);

router.delete('/:id', controller.delete_record);

module.exports = router;
