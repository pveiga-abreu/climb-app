const validate = require('jsonschema').validate;

insert_record_schema = {
    type: "object",
    properties: {
        ticker: {type: "string"},
        price: {type: "number"},
        quotas: {type: "integer", minimum: 1},
        type: {type: "string", enum: ["S", "B"]}
    },
    required: ["ticker","price","quotas","type"]
}

update_record_schema = {
    type: "object",
    properties: {
        price: {type: "number"},
        quotas: {type: "integer", minimum: 1},
        type: {type: "string", enum: ["S", "B"]}
    }
}

exports.validate_insert_record = body => {
    const res = validate(body, insert_record_schema);

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

exports.validate_update_record = body => {
    const res = validate(body, update_record_schema);

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
