// importar o express
const express = require('express');

// inicializar o modulo de rotas
const router = express.Router();

//[ENDPOINTS]

router.get('/', gamesController.getGames);

//exportamos o modulo de rotas
module.exports = router;