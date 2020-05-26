import React from "react";

class Cards extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Item A",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200?a=1",
      },
      {
        id: 2,
        name: "Item B",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200?a=2",
      },
      {
        id: 3,
        name: "Item C",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200?a=3",
      },
      {
        id: 4,
        name: "Item D",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200?a=4",
      },
      {
        id: 5,
        name: "Item E",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200?a=5",
      },
      {
        id: 6,
        name: "Item F",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200?a=6",
      },
      {
        id: 7,
        name: "Item G",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200?a=7",
      },
      {
        id: 8,
        name: "Item G",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200?a=8",
      },
    ],
  };

  render() {
    const listaDeProdutos = this.state.produtos.map((produto) => {
      return (
        <div>
          <p>{produto.name}</p>
          <p>R$ {produto.value}</p>
          <img src={produto.imageUrl} alt="Imagem do produto" />
          <button onClick={()=> {} }>Adicionar ao Carrinho</button>
        </div>
      );
    });
    const numeroDeProdutos = this.state.produtos.length;
    console.log(numeroDeProdutos);

    return <div>{listaDeProdutos}</div>;
  }
}
export default Cards;
