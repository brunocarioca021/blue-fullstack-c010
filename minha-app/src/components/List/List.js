import React from 'react';
import './List.css';

const List = (props) => {
  const dados = props.dados;

  return (
    <ul>
      {dados.map((dado) => (
        <li key={dado.id}>
          <h3 className="title">Nome: {dado.nome}</h3>
          <img className="banner" src={dado.imagem} alt={dado.nome}/>
        </li>
      ))}
    </ul>
  )
}

export default List;