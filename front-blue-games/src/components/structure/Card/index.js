import React from 'react';
const Card = (props) => {
  const game = props.game;
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Nome: {game.nome}</h5>
          <p className="card-text">Valor: {game.valor}</p>
          <p className="card-text">Ano Lancamento: {game.anoLancamento}</p>
          <p className="card-text">Plataforma: {game.plataforma}</p>
          <p className="card-text">Nota: {game.nota}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;