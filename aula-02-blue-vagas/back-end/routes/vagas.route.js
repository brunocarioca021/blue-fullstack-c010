// LOCAL ONDE VAI FICAR AS ROTAS DA APLICACAO OU SEJA OS ENDPOINTS [GET/POST/PUT/DELETE]
// importo o express para poder trabalhar com rotas
const express = require('express');

// inicializar o modulo de rotas do express
const router = express.Router();

//importo as funcoes do controller;
const vagasController = require('../controllers/vagas.controller');

// [GET] /vagas = Retorna uma lista de vagas
router.get('/', vagasController.getVagas)

// GET /vagas/{id} = retorna uma vaga de acordo com o seu id
router.get('/:id', vagasController.getVagasById)


// exporto as rotas para serem ultilizadas no index
module.exports = router;

