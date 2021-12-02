// importo o service para poder ter acesso as funcoes que cuidam dos dados.
const vagasService = require('../services/vagas.service');

// vai retornar uma lista de vagas pré cadastradas para o front-end
const getVagas = (req, res) => {
    const vagas = vagasService.getVagasService();
    res.send(vagas);
}

// vai retornar uma unica vaga de acordo com o seu id
const getVagasById = (req, res) => {
    // REQ = o que vem do front pro back
    // RES = o que o backend retornar pro front
    const id = req.params.id;
    const vaga = vagasService.getVagasByIdService(id);
    res.send(vaga)
}

// vai cadastrar uma nova vaga de acordo com o obj vindo do front
const postVaga = (req, res) => {
    // pegamos o objeto da requisicao para ser cadastro
    const vaga = req.body;
    console.log(req.body);
    // estou enviando a vaga que recebi via corpo da requisicao para o servico adicionar na lista
    const newVaga = vagasService.addVaga(vaga);
    res.send({message: `Vaga ${ newVaga.oportunidade } na empresa ${ newVaga.empresa }cadastrada com sucesso`})
}

// exportando as funcoes para serem usadas nas rotas
module.exports = {
    getVagas,
    getVagasById,
    postVaga
}