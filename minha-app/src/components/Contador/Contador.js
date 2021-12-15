import React, { useState } from 'react';

function Contador(props) {
 const [contador, setContador] = useState(0);

  const titulo = props.titulo;

  const incrementa = () => {
    setContador(contador + 1);
  }

  return(
    <div>
      <p>contador {titulo}: {contador}</p>
      <button onClick={incrementa}>Incrementar</button>
    </div>
  )
}

export default Contador