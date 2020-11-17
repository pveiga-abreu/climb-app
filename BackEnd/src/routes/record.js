const express = require('express');
const router = express.Router();

const controller = require('../controllers/record_controller');

// :user -> código do usuário | :id -> código do registro

router.get('/:user', controller.get_records); // query params "asset" "wallet"

router.get('/:user/:id', controller.get_record_by_id); // query params "asset" "wallet"

router.get('/last/:user', controller.get_last_record); // query params "wallet"

router.post('/:user', controller.insert_record);

router.put('/:id', controller.alter_record);

router.delete('/:id', controller.delete_record);

module.exports = router;
