const express = require('express');

const app = express();
app.use(express.json());

const rotaUsuarios = require('./usuarios');
app.use('/usuarios', rotaUsuarios);

app.listen(3000);