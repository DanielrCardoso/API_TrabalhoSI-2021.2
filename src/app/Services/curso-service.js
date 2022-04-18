const { CURSOS } = require("../Banco/BD-cursos")

exports.salvarCursos = (req, res) => {
    const curso = req.body;
    CURSOS.push(curso)
    res.status(200).json({ message: 'Curso criado com sucesso' })
}

exports.listarCursos = (req, res) => {
    console.log("requisicao: Cursos")
    res.status(200).json(CURSOS)
}