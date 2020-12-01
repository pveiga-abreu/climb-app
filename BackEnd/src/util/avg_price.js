exports.avg_price = (old, new_, type) => {
    const response =  {
        new_average_price: 0,
        new_total_quotas: 0
    }

    if(type === 'B' || type === 'b') {
        response.new_total_quotas = old.quotas + new_.quotas;
        response.new_average_price = ((old.price*old.quotas) + (new_.price*new_.quotas))/(old.quotas+new_.quotas);
    }
    else if (type === 'S' || type === 's') {
        response.new_total_quotas = old.quotas - new_.quotas;
        response.new_average_price = ((old.price*old.quotas) - (new_.price*new_.quotas))/(old.quotas-new_.quotas);
    }

    return response;
}

exports.full_avg_price = records => {
    const response =  {
        new_average_price: 0,
        new_total_quotas: 0
    }

    const buy = records.filter(rec => {
        if(rec.order_type === 'B') { return rec; }
    })
    const sell = records.filter(rec => {
        if(rec.order_type === 'S') { return rec; }
    })

    let price = 0;
    let quotas = 0;

    for(const rec of buy) {
        price += rec.price*rec.quotas;
        quotas += rec.quotas;
    }
    for(const rec of sell) {
        price -= rec.price*rec.quotas;
        quotas -= rec.quotas;
    }

    response.new_average_price = (price/quotas);
    response.new_total_quotas = quotas;
    
    return response;
}
