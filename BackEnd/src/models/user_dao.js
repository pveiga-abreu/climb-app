const { users } = require('../config/database');


exports.login = async email => {
    try {
        const resp = await users.findOne({
            where: {
                email
            }
        });

        return resp;
    } catch (e) {
        console.log(e);
        return null;
    }
}


exports.register_user = async data => {
    try {
        const resp = await users.create(data);

        return resp;
    } catch (e) {
        console.log(e);
        return null;
    }
}


exports.alter_user = async (data, id) => {
    try {
        const resp = await users.update(data, {
            where : {
                user_id : id
            }
        });

        if(resp[0] == 1 || resp == 1) return true;
        else return false;

    } catch (e) {
        console.log(e);
        return false;
    }
}


exports.delete_user = async id => {
    try {
        const resp = await users.destroy({
            where : {
                user_id : id
            }
        })
        
        if(resp == 1 || resp[0] == 1) return true;
        else return false;

    } catch (e) {
        console.log(e);
        return false;
    }

}
