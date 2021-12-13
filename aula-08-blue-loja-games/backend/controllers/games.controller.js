// importo o service para poder ter acesso as funções que cuidam dos dados
const gamesService = require("../services/games.service");

// vai retornar uma lista de games pré cadastrados para o frontend
const getGames = async (req, res) => {
  const games = await gamesService.getGames();
  // recebemos os jogos encontrados pelo servico via banco de dadados (atravez do model)
  // enviamos como resposta para o front-end
  res.send(games);
}

// recebe um id via parametro da requisicao e busca um game no banco de dados
const getGameById = async (req, res) => {
  // acesso o id via parametro da requisicao
  const id = req.params.id;
  // chamo a funcao do servico passando o id recolhido via parametro
  const game = await gamesService.getGameById(id);
  res.send(game);
}

// funcao que recebe um objeto via requisicao(front-end) e envia para ser cadastrado no banco de dados
const createGame = async (req, res) => {
  // acessar o objeto no body vindo do front-end
  const game = req.body;

  await gamesService.createGame(game)
  .then(() => {
    res.send({message: `Game ${game.nome} cadastrado com sucesso!`})
  })
  .catch((err) => {
    res.status(500).send({message: `Erro no servidor: ${err}`});
  })
}

module.exports = {
  getGames,
  getGameById,
  createGame
}