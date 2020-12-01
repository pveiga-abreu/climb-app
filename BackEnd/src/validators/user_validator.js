const validate = require('jsonschema').validate;

login_schema = {
    type: "object",
    properties: {
        email: {type: "string", format: "email"},
        password: {type: "string"}
    },
    required: ["email","password"]
}

insert_user_schema = {
    type: "object",
    properties: {
        name: {type: "string"},
        tel: {type: "string"},
        cpf_cnpj: {type: "string"},
        password: {type: "string"},
        email: {type: "string", format: "email"},
        profile: {type: "string"}
    },
    required: ["name","tel","cpf_cnpj","password","email"]
}

update_user_schema = {
    type: "object",
    properties: {
        name: {type: "string"},
        tel: {type: "string"},
        cpf_cnpj: {type: "string"},
        password: {type: "string"},
        email: {type: "string", format: "email"},
        profile: {type: "string"}
    }
}

exports.validate_login = body => {
    const res = validate(body, login_schema);

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

exports.validate_user_insert = body => {
    const res = validate(body, insert_user_schema);

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

exports.validate_user_update = body => {
    const res = validate(body, update_user_schema);

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
