const { Cursos } = require("./in-memory-db")

exports.salvarCursos = (req,res) => {
    const curso =  [
        {
            tituloCuso: "Curso 01",
            descricaoCurso: "Breve descricao"
        },
        {
            tituloCuso: "Curso 02",
            descricaoCurso: "Breve descricao"
        },
        {
            tituloCuso: "Curso 03",
            descricaoCurso: "Breve descricao"
        }
    ]

    for (itemcurso in curso){
        Cursos.push(itemcurso)
    }
}

exports.listarCursos = (req, res) => {
    console.log("requisicao")
    res.status(200).json(Cursos)
}