const axios = require('axios');

exports.asset_stats = async assets => {
    try {
        let response = [];

        const wlt_total = assets.reduce( (acc, cur) => {
            return acc + (cur.average_price*cur.quotas);
        }, 0);

        for(const asset of assets) {
            const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${asset.ticker}.SAO&apikey=T27TLF48T4KU5RFO`;
            const stats = await axios.get(url);
            
            const actual_price = parseFloat(stats.data['Global Quote']['05. price']);
            const avg_price = parseFloat(asset.average_price);
            
            response.push({
                ticker: asset.ticker,
                average_price: avg_price,
                actual_price: actual_price,
                quotas: asset.quotas,
                total: avg_price*asset.quotas,
                percent: ((avg_price*asset.quotas)/wlt_total)*100,
                result_total: (actual_price-avg_price),
                result_percent: ((actual_price-avg_price)/avg_price)*100
            });
        }

        return response;

    } catch(e) {
        console.log(e);
        return null;
    }

}
