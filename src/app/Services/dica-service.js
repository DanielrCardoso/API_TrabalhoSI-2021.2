const { DICAS } = require("../Banco/BD-dicas")

exports.salvarDica = (req, res) => {
    const dica = req.body;
    DICAS.push(dica)
    res.status(200).json({ message: 'Dica criada com sucesso' })
}

exports.listarDicas = (req, res) => {
    console.log("requisicao: Dicas")
    res.status(200).json(DICAS)
}