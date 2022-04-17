const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require('cors');

const { listarCursos, salvarCursos } = require('./src/app/Services/curso-service')
const { listarDicas, salvarDica } = require('./src/app/Services/dica-service')
const { listarResposta, salvarResposta, listarDuvidas, salvarDuvida } = require('./src/app/Services/forum-service')
const { listarUsuarios, salvarUsuarios } = require('./src/app/Services/usuario-service')

app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

app.route('/api/cursos').post(salvarCursos);
app.route('/api/cursos').get(listarCursos);

app.route('/api/DICAS').post(salvarDica);
app.route('/api/DICAS').get(listarDicas);

app.route('/api/DUVIDAS').post(salvarDuvida);
app.route('/api/DUVIDAS').get(listarDuvidas);

app.route('/api/RESPOSTAS').post(salvarResposta);
app.route('/api/RESPOSTAS').get(listarResposta);

app.route('/api/USUARIOS').post(salvarUsuarios);
app.route('/api/USUARIOS').get(listarUsuarios);

const HOST = 'localhost';
const PORT = 9000;

app.listen(PORT, HOST, () => {
    console.log(`Rodando em http://${HOST}:${PORT}`)
})
