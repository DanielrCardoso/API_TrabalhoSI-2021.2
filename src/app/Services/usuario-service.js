const { USUARIOS } = require("../Banco/BD-usuario")

exports.salvarUsuarios = (req, res) => {
    const usuario = req.body;
    USUARIOS.push(usuario)
    res.status(200).json({ message: 'Usuario criado com sucesso' })
}

exports.listarUsuarios = (req, res) => {
    console.log("requisicao: Usuarios")
    res.status(200).json(USUARIOS)
}