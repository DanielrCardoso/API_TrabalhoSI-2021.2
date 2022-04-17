const { DUVIDAS } = require("../Banco/BD-forum")
const { RESPOSTAS } = require("../Banco/BD-forum")

exports.salvarDuvida = (req, res) => {
    const duvida = req.body;
    DUVIDAS.push(duvida)
    res.status(200).json({ message: 'Duvida criada com sucesso' })
}

exports.listarDuvidas = (req, res) => {
    console.log("requisicao: Duvidas")
    res.status(200).json(DUVIDAS)
}

exports.salvarResposta = (req, res) => {
    const resposta = req.body;
    RESPOSTAS.push(resposta)
    res.status(200).json({ message: 'Resposta criada com sucesso' })
}

exports.listarResposta = (req, res) => {
    console.log("requisicao: Respostas")
    res.status(200).json(RESPOSTAS)
}