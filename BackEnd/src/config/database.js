const { Sequelize, DataTypes } = require('sequelize');

// CRIANDO CONEXÃO
const conn = new Sequelize(process.env.DATABASE_URL, {
    define: {
        timestamps: false
    }
});


// CRIANDO OS MODELOS
const users = conn.define('users', {
    user_id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name : {type : DataTypes.STRING(50), allowNull : false},
    tel : {type : DataTypes.STRING(20), allowNull : false},
    cpf_cnpj : {type : DataTypes.STRING(14), allowNull : false, unique: true},
    password : {type : DataTypes.STRING(60), allowNull : false},
    email : {type : DataTypes.STRING(50), allowNull : false, unique: true},
    profile : {type : DataTypes.STRING(15), validate: {isIn: [['conservador', 'moderado', 'arrojado']]}}
});

const wallets = conn.define('wallets', {
    wallet_id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    user_id: {type: DataTypes.INTEGER, allowNull : false},
    name : {type : DataTypes.STRING(30)},
    description : {type : DataTypes.STRING(100)}
});

const assets = conn.define('assets', {
    asset_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    wallet_id: {type: DataTypes.INTEGER, allowNull: false},
    average_price: {type: DataTypes.DECIMAL(9,2), allowNull: false},
    quotas: {type: DataTypes.INTEGER, allowNull: false},
    ticker: {type: DataTypes.INTEGER, allowNull: false}
});

const asset_records = conn.define('asset_records', {
    record_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    asset_id: {type: DataTypes.INTEGER, allowNull: false},
    dat: {type: DataTypes.DATE, allowNull: false},
    quotas: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.DECIMAL(9,2), allowNull: false},
    order_type: {type: DataTypes.STRING(1), allowNull: false}
});

const tickers = conn.define('tickers', {
    ticker: {type: DataTypes.STRING(50), primaryKey: true},
    asset_class_id: {type: DataTypes.INTEGER, allowNull: false}
});

const asset_classes = conn.define('asset_classes', {
    asset_class_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(30), allowNull: false}
});


// CRIANDO OS RELACIONAMENTOS
// users - wallets (1:n)
users.hasMany(wallets, {foreignKey: 'wallet_id'});
// wallets - users (1:1)
wallets.belongsTo(users, {foreignKey: 'user_id', onDelete: 'cascade', onUpdate: 'cascade'});

// wallets - assets (1:n)
wallets.hasMany(assets, {foreignKey: 'asset_id'});
// assets - wallets (1:1)
assets.belongsTo(wallets, {foreignKey: 'wallet_id', onDelete: 'cascade', onUpdate: 'cascade'});

// assets - asset_records (1:n)
assets.hasMany(asset_records, {foreignKey: 'record_id'});
// asset_records - assets (1:1)
asset_records.belongsTo(assets, {foreignKey: 'asset_id', onDelete: 'cascade', onUpdate: 'cascade'});

// tickers - assets (1:n)
tickers.hasMany(assets, {foreignKey: 'asset_id'});
// assets - tickers (1:1)
assets.belongsTo(tickers, {foreignKey: 'ticker', as: 'cod_ticker', onDelete: 'cascade', onUpdate: 'cascade'});

// asset_classes - ticker (1:n)
asset_classes.hasMany(tickers, {foreignKey: 'ticker'});
// tickers - asset_classes (1:1)
tickers.belongsTo(asset_classes, {foreignKey: 'asset_class_id', onDelete: 'cascade', onUpdate: 'cascade'});


// SICRONIZANDO OS MODELOS
conn.sync();

module.exports = {
    conn,
    users,
    wallets,
    assets,
    asset_records,
    tickers,
    asset_classes
};
