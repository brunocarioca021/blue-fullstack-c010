import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const View = () => {
  // incializo o estado game para poder fazer atualizacao no dom
  const [game, setGame] = useState({});
  
  useEffect(() => {
    getGameById();
  }, [])

  // acesso o id no parametro da url
  const { id } = useParams();
  console.log(id);
  
  const getGameById = async () => {
    // realiza requisicao GET para api
    const request = await fetch(`http://localhost:3001/games/${id}`);
    // retorna o jogo encontrado e salva na variavel game
    const game = await request.json();

    // atualiza o estado com o valor vindo da api
    setGame(game);
    console.log(game);
  }


  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col-12'>
          <div className='card p-3'>
            <h4>Nome: {game.nome} </h4>
            <p>Genero: {game.genero}</p>
            <p>Nota: {game.nota}</p>
            <p>Plataforma: {game.plataforma}</p>
            <p>Valor: {game.valor}</p>
            <p>Ano Lancamento: {game.anoLancamento}</p>
            <div className='btn-group my-3 w-100'>
              <button className='btn btn-info text-white'>Editar</button>
              <button className='btn btn-danger'>Excluir</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default View
