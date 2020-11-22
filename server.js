const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir') //Importação de um diretorio inteiro

//Inicializando o app
const app = express();
app.use(express.json()); //Permitir que envie dados em json
app.use(cors()); //Permitir acesso de qualquer domínio

//Inicialiando o BD
mongoose.connect(
    "mongodb://localhost:27017/producthunt", 
    { 
        useUnifiedTopology: true, 
        useNewUrlParser: true 
    }
);

requireDir('./src/models');

app.use('/api', require('./src/routes'));
app.listen(3001);

