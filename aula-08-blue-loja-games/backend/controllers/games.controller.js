// importo o service para poder ter acesso as funções que cuidam dos dados
const gamesService = require("../services/games.service");

// vai retornar uma lista de games pré cadastrados para o frontend
const getGames = async (req, res) => {
  const games = await gamesService.getGames();
  res.send(games);
}

module.exports = {
  getGames,
}