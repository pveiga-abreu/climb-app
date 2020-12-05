const { tickers } = require('../config/database');

exports.get_tickers = async () => {
    try{
        const resp = await tickers.findAll();

        return resp;

    } catch (e) {
        console.log(e);

        return null;
    }
}