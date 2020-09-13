const Sequelize = require('sequelize');
require('dotenv/config');

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.pwd, {
    host: process.env.HOST,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};







