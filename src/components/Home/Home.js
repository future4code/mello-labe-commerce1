import React from "react";

class Home extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Item A",
        value: 50.0,
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
        value: 349.0,
        imageUrl: "https://picsum.photos/200/200?a=4",
        adicionado: false,
      },
      {
        id: 5,
        name: "Item E",
        value: 23.55,
        imageUrl: "https://picsum.photos/200/200?a=5",
        adicionado: false,
      },
      {
        id: 6,
        name: "Item F",
        value: 123.0,
        imageUrl: "https://picsum.photos/200/200?a=6",
        adicionado: false,
      },
      {
        id: 7,
        name: "Item G",
        value: 27.0,
        imageUrl: "https://picsum.photos/200/200?a=7",
        adicionado: false,
      },
      {
        id: 8,
        name: "Item G",
        value: 950.0,
        imageUrl: "https://picsum.photos/200/200?a=8",
        adicionado: false,
      },
    ],
    ordenado: false,
    novaListaCarrinho: [],
    valorInputBusca: "",
    valorInputMinimo: "",
    valorInputMaximo: "",
  };

  onChangeSelect = (event) => {
    const listaOrdenada = this.state.produtos.sort(function (a, b) {
      return a.value > b.value ? 1 : b.value > a.value ? -1 : 0;
    });
    this.setState({ produtos: listaOrdenada });
    this.setState({ ordenado: !this.state.ordenado });

    if (this.state.ordenado === false) {
      this.setState({ produtos: listaOrdenada.reverse() });
    }
  };

  onChangeInputMinimo = (event) => {
    this.setState({ valorInputMinimo: event.target.value });
  };

  onChangeInputMaximo = (event) => {
    this.setState({ valorInputMaximo: event.target.value });
  };

  onChangeInputBusca = (event) => {
    this.setState({ valorInputBusca: event.target.value });
    console.log(this.state.valorInputBusca);
  };
  filtraProdutos = (event) => {};

  adicionarNoCarrinho = (produto) => {
    let carrinho = produto;

    this.setState({
      novaListaCarrinho: [...this.state.novaListaCarrinho, carrinho],
    });
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
    let listaDoEstado = this.state.produtos;
    if (this.state.valorInputBusca !== "") {
      listaDoEstado = listaDoEstado.filter((produto) => {
        return produto.name.includes(this.state.valorInputBusca);
      });
    } else if (this.state.valorInputMaximo !== "") {
      listaDoEstado = listaDoEstado.filter((produto) => {
        return produto.value <= this.state.valorInputMaximo;
      });
    } else if (this.state.valorInputMinimo !== "") {
      listaDoEstado = listaDoEstado.filter((produto) => {
        return produto.value >= this.state.valorInputMinimo;
      });
    }

    const listaFinalProdutos = this.state.novaListaCarrinho.map((item) => {
      return (
        <section>
          <p>{item.value}</p>
        </section>
      );
    });

    const soma = listaFinalProdutos;

    const listaRenderizada = listaDoEstado.map((produto) => {
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

    const numeroDeProdutos = listaDoEstado.length;

    return (
      <div>
        <div>
          <h1>Filtros</h1>
          <label>Valor Mínimo:</label>
          <input
            type="number"
            value={this.state.valorInputMinimo}
            onChange={this.onChangeInputMinimo}
          ></input>
          <label>Valor Máximo:</label>
          <input
            type="number"
            value={this.state.valorInputMaximo}
            onChange={this.onChangeInputMaximo}
          ></input>
          <label>Buscar Produto</label>
          <input
            value={this.state.valorInputBusca}
            onChange={this.onChangeInputBusca}
          ></input>
          <hr />
        </div>
        <select onChange={this.onChangeSelect}>
          <option></option>
          <option value="descrescente">Preço: Decrescente</option>
          <option value="crescente">Preço: Crescente</option>
        </select>
        <p>Quantidade de Produtos: {numeroDeProdutos}</p>
        <div>{listaRenderizada}</div>
        <div>
          <h1>Carrinho:</h1>
          {listaFinalProdutos}
        </div>
      </div>
    );
  }
}
export default Home;
