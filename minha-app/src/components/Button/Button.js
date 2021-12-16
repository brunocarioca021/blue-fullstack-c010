import React from 'react';
import './Button.css';

const Button = (props) => {
  const text = props.text;
  const estilo = props.estilo;
  const onclick = props.onclick;

  return(
    <button className={'btn ' + estilo} onClick={onclick}>{text}</button>
  )

}
export default Button;