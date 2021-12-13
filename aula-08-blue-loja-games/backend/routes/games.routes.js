// importar o express
const express = require('express');
const gamesController = require('./../controllers/games.controller')

// inicializar o modulo de rotas
const router = express.Router();

//[ENDPOINTS]
// [GET] /games - Retorna uma lista de jogos pré cadastrados no banco
router.get('/', gamesController.getGames);

//[GET] /games/{id} - retorna um game de acordo com o seu id
router.get('/:id', gamesController.getGameById);

// [POST] /games/add - Cadastra um novo jogo no banco de dados
router.post('/add', gamesController.createGame);

//exportamos o modulo de rotas
module.exports = router;