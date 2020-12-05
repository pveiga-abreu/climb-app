const bodyParser = require('body-parser');
const express = require('express');
const cors = require("cors");

require('dotenv/config');
require('./config/database');

// Criando App Express
const app = express();

// Usando os middlewares 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Carregando as rotas
const userRoute = require('./routes/user');
const walletRoute = require('./routes/wallet');
const recordRoute = require('./routes/record');
const tickerRoute = require('./routes/ticker');

app.use('/user', userRoute);
app.use('/wallet', walletRoute);
app.use('/record', recordRoute);
app.use('/ticker', tickerRoute);

module.exports = app;
