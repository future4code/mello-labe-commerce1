import React from "react";

class Home extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Item A",
        value: 500.0,
        imageUrl: "https://picsum.photos/200/200?a=1",
      },
      {
        id: 2,
        name: "Item B",
        value: 20.0,
        imageUrl: "https://picsum.photos/200/200?a=2",
      },
      {
        id: 3,
        name: "Item C",
        value: 150.0,
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
          <button onClick={() => {}}>Adicionar ao Carrinho</button>
        </div>
      );
    });

    // listaDeProdutos.sort(function (a, b) {
    //   if (a.value > b.value) {
    //     return 1;
    //   }
    //   if (a.value < b.value) {
    //     return -1;
    //   }
    //   return 0;
    // });

    const numeroDeProdutos = this.state.produtos.length;
    
    return (
      <div>
        <select >
          <option value="descrescente">Preço: Decrescente</option>
          <option value="crescente">Preço: Crescente</option>
        </select>
        <p>Quantidade de Produtos: {numeroDeProdutos}</p>
        <div>{listaDeProdutos}</div>
      </div>
    );
  }
}
export default Home;
