const express = require('express');
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors())
app.use(express.static('public'))
app.use(express.json());

const rotaUsuarios = require('./usuarios');
const rotaWallets = require('./wallets');
app.use('/usuarios', rotaUsuarios);
app.use('/wallets', rotaWallets)

app.listen(PORT);