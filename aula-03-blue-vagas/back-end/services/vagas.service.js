const blueVagas = [
    {
        id: 1,
        empresa: "Blue",
        salario: 3000,
        oportunidade: "Front-End Jr",
        tipo: "estágio"
    },
    {
        id: 2,
        empresa: "Google",
        salario: 10000,
        oportunidade: "Front-End Jr",
        tipo: "CLT"
    },
    {
        id: 3,
        empresa: "Facebook",
        salario: 20000,
        oportunidade: "Full Stack Sr",
        tipo: "PJ"
    },
    {
        id: 4,
        empresa: "Amazon",
        salario: 15000,
        oportunidade: "Full Stack Pl",
        tipo: "CLT"
    }
]

const getVagasService = () => {
    return blueVagas
}

const getVagasByIdService = (idParam) => {
    return blueVagas.find((vaga) => vaga.id == idParam)
}

// cadastra uma nova vaga(obj) na lista blueVagas
const addVaga = (newVaga) => {
    // monto um id falso para a minha nova vaga
    const newId = blueVagas.length + 1;
    newVaga.id = newId;
    // adiciono essa nova vaga no array
    blueVagas.push(newVaga);
    return newVaga;
}

module.exports = {
    getVagasService,
    getVagasByIdService,
    addVaga
}
