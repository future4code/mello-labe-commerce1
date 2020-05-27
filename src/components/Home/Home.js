import React from "react";

class Home extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Item A",
        value: 500.0,
        imageUrl: "https://picsum.photos/200/200?a=1",
        adicionado: false,
      },
      {
        id: 2,
        name: "Item B",
        value: 20.0,
        imageUrl: "https://picsum.photos/200/200?a=2",
        adicionado: false,
      },
      {
        id: 3,
        name: "Item C",
        value: 150.0,
        imageUrl: "https://picsum.photos/200/200?a=3",
        adicionado: false,
      },
      {
        id: 4,
        name: "Item D",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200?a=4",
        adicionado: false,
      },
      {
        id: 5,
        name: "Item E",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200?a=5",
        adicionado: false,
      },
      {
        id: 6,
        name: "Item F",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200?a=6",
        adicionado: false,
      },
      {
        id: 7,
        name: "Item G",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200?a=7",
        adicionado: false,
      },
      {
        id: 8,
        name: "Item G",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200?a=8",
        adicionado: false,
      },
    ],

    novaListaCarrinho: [],

    /* idCarrinho: "",
    nameCarrinho: "",
    valueCarrinho: "",*/
  };
  //recebe um argumento
  adicionarNoCarrinho = (produto) => {
    let carrinho = produto;

    this.setState({
      novaListaCarrinho: [...this.state.novaListaCarrinho, carrinho],
    });

    /*const itemCarrinho = {
      id: this.state.id,
      name: this.state.name,
      value: this.state.value,
      adicionado: false,
    };
    const itensCarrinho = itemCarrinho;

    this.setState({
      novaListaCarrinho: [...this.state.novaListaCarrinho, produto],
    });
    console.log(this.novaListaCarrinho);
    /*  this.setState({
      produtos: itensCarrinho,
    });
  */
  };

  selectItem = (id) => {
    //passar por todos ids da array, quando for igual o id do on click esse vai ter que riscar. if tarefa.id === id, tarefa.id = true, colocar em um novo array e dar um set state

    const listaItensAdicionados = this.state.produtos.map(
      (produto, index, array) => {
        if (id === produto.id) {
          const itensAdicionados = {
            ...produto,
            adicionado: !produto.adicionado,
          };
          //console.log(itensAdicionados);
          return itensAdicionados;
        } else {
          return produto;
        }
      }
    );

    this.setState({ tarefas: listaItensAdicionados });
  };

  render() {
    //console.log(this.state.produtos);

    const listaFinalProdutos = this.state.novaListaCarrinho.map((item) => {
      return (
        <section>
          <p>{item.value}</p>
        </section>
      );
    });
    const soma = listaFinalProdutos;
    console.log(soma);
    const listaDeProdutos = this.state.produtos.map((produto) => {
      return (
        <div>
          <p>{produto.name}</p>
          <p>R$ {produto.value}</p>
          <img src={produto.imageUrl} alt="Imagem do produto" />
          <button onClick={() => this.adicionarNoCarrinho(produto)}>
            Adicionar ao Carrinho
          </button>
        </div>
      );
    });

    const numeroDeProdutos = this.state.produtos.length;

    return (
      <div>
        <select>
          <option value="descrescente">Preço: Decrescente</option>
          <option value="crescente">Preço: Crescente</option>
        </select>
        <p>Quantidade de Produtos: {numeroDeProdutos}</p>
        <div>{listaDeProdutos}</div>
        <div>
          <h1>Carrinho:</h1>
          {listaFinalProdutos}
        </div>
      </div>
    );
  }
}

export default Home;

// listaDeProdutos.sort(function (a, b) {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   return 0;
// });
