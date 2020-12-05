const db = require('../models/ticker_dao');

exports.get_tickers = async (req, res) => {
    const response = await db.get_tickers();

    if(response != null) res.json(response);
    else res.status(204).json({});
}
