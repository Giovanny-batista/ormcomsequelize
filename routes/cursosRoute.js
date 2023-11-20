const express = require("express");
const bodyParser = require("body-parser");
const cursos = require("./cursosRoute");
const cursoController = require("../controllers/cursoController");

const router = express.Router(); // Crie um objeto router

module.exports = app => {
  app.use(bodyParser.json());
  app.use(cursos);

  app.get("/", (req, res) => {
    res.status(200).send({ message: "Bem-vindo!" });
  });

  // Adicione a rota para getCursos usando o objeto router
  router.get("/cursos", cursoController.getCursos);

  // Adicione a rota para postCurso usando o objeto router
  router.post("/cursos", cursoController.postCurso);

  // Adicione a rota para putCurso usando o objeto router
  router.put("/cursos/:id", cursoController.putCurso);

  // Adicione a rota para deleteCurso usando o objeto router
  router.delete("/cursos/:id", cursoController.deleteCurso);
  router.get("/alunoscurso/:id", cursosController.getAlunosPorCurso)

  // Use o objeto router no aplicativo
  app.use(router);
};
