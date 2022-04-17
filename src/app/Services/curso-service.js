const { Cursos } = require("../Banco/in-memory-db")

exports.salvarCursos = (req,res) => {
    const curso = req.body;
    Cursos.push(curso)
    res.status(200).json({message: 'Curso criado com sucesso'})
}

exports.listarCursos = (req, res) => {
    console.log("requisicao")
    res.status(200).json(Cursos)
}