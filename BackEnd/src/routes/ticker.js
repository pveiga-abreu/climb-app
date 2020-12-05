const express = require('express');
const router = express.Router();

const controller = require('../controllers/ticker_controller');

router.get('/', controller.get_tickers);

module.exports = router;
