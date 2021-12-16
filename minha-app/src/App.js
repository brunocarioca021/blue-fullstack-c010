import './App.css';
import Contador from './components/Contador/Contador';
import Button from './components/Button/Button';
import List from './components/List/List'
import React, {useState} from 'react';

function App() {
  const [filmes, setFilmes] = useState([
    {
      id: 1,
      nome: 'Capitao America',
      imagem: 'https://hqrock.files.wordpress.com/2011/06/poster-capitao-31mai2011.jpg'
    },
    {
      id: 2, 
      nome: 'Capita Marvel',
      imagem: 'https://br.web.img2.acsta.net/pictures/19/02/04/18/35/1468867.jpg'
    }
  ])

  const [jogos, setJogos] = useState([
    {
      id: 1,
      nome: 'The last of us',
      imagem: 'http://s2.glbimg.com/CtI4IdCmNnl7nM0UK6Iv_2jGC8A=/290x376/s2.glbimg.com/IcTh3ZGHeebbUT8fpLATWYTysDI=/s.glbimg.com/jo/g1/f/original/2014/05/19/sem-titulo-2.jpg'
    },
    {
      id: 2, 
      nome: 'God of War',
      imagem: 'https://http2.mlstatic.com/D_NQ_NP_647624-MLB28455341336_102018-O.jpg'
    }
  ])

  return (
    <div>
      <h1>Olá Bluemers</h1>
      <Contador titulo="Blue Edtech"/>
      <Button text="Clique Aqui" estilo="primario"/>
      <Button text="Enviar" estilo="erro"/>
      <Button text="Enviar" estilo="erro"/>
      <Button text="Cancelar"estilo="sucesso"/>
      <Button text="Click" estilo="alerta"/>
      <Button text="Enviar" estilo="sucesso"/>
      <List dados={filmes}/>
      <List dados={jogos}/>
    </div>
  );
}

export default App;
