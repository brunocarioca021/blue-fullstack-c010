// importar a nossa model para usar as funções do mongo no service
const Game = require("../models/game");

const getGames = async () => {
  // vai conectar com o banco de dados e retornar a lista de games
  const games = await Game.find();
  return games;
};

module.exports = {
  getGames,
};
