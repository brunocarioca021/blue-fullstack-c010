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

// exportando as funcoes para serem usadas nas rotas
module.exports = {
    getVagas,
    getVagasById
}