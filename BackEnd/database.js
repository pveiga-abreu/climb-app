const Sequelize = require('sequelize');
require('dotenv/config');

const sequelize = new Sequelize(process.env.DATABASE_URL,{
    define: {
        timestamps: false
    }
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};




