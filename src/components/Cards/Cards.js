import React from "react";

export function Cards(props) {
  return (
    <div>
      <img src={props.urlImagem} alt={"Imagem Produto"} />
      <p> {props.titulo} </p>
      <p> R${props.valor} </p>

      <button>Adicionar ao Carrinho</button>
    </div>
  );
}
