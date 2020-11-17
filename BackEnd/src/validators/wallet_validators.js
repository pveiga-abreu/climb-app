const validate = require('jsonschema').validate;

insert_wallet_schema = {
    type: "object",
    properties: {
        name: {type: "string"},
        description: {type: "string"}
    },
    required: ["name"]
}

update_wallet_schema = {
    type: "object",
    properties: {
        name: {type: "string"},
        description: {type: "string"}
    }
}

exports.validate_wallet_insert = body => {
    const res = validate(body, insert_wallet_schema);

    if(res.errors.length > 0) {
        return {
            valid: false,
            errors: res.errors.map(x => {
                return x.message;
            })
        };
    } else {
        return {
            valid: true,
            errors: []
        }
    }
}

exports.validate_wallet_update = body => {
    const res = validate(body, update_wallet_schema);

    if(res.errors.length > 0) {
        return {
            valid: false,
            errors: res.errors.map(x => {
                return x.message;
            })
        };
    } else {
        return {
            valid: true,
            errors: []
        }
    }
}