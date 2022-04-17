const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require('cors');

const {listarCursos,salvarCursos} = require('./src/app/Services/curso-service')

app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

app.route('/api/cursos').post(salvarCursos)
app.route('/api/cursos').get(listarCursos);

const HOST = 'localhost';
const PORT = 9000;

app.listen(PORT, HOST, () => {
    console.log(`Rodando em http://${HOST}:${PORT}`)
})
