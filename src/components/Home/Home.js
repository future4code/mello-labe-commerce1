import React from "react";
import styled from "styled-components";

const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  background-color: green;
  width: 85vw;
  height: 100vh;
`;
const CrescenteDecrescente = styled.div`
  display: flex;
  flex-direction: row-reverse;
  /*background-color: blue;*/
  width: 60vw;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;

const ContainerCardECarrinho = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 85vw;
  height: 100vh;
`;
const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  background-color: yellow;
  border: 1px solid black;
  justify-content: space-around;
  align-items: center;
`;

const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid pink;
  justify-content: space-between;
  margin: 10px;
`;

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
        name: "Item H",
        value: 950.0,
        imageUrl: "https://picsum.photos/200/200?a=8",
        adicionado: false,
      },
    ],
    ordenado: false,
    contador: 1,
    novaListaCarrinho: [],
  };

  // ORDENAR PRODUTOS EM CRESCENTE E DECRESCENTE
  onChangeSelect = () => {
    const listaOrdenada = this.state.produtos.sort(function (a, b) {
      return a.value > b.value ? 1 : b.value > a.value ? -1 : 0;
    });
    this.setState({ produtos: listaOrdenada });
    this.setState({ ordenado: !this.state.ordenado });
    if (this.state.ordenado === false) {
      this.setState({ produtos: listaOrdenada.reverse() });
    }
  };

  // ADICIONAR PRODUTOS AO CARRINHO
  adicionarNoCarrinho = (produto) => {
    let carrinho = produto;
    this.setState({
      novaListaCarrinho: [...this.state.novaListaCarrinho, carrinho],
    });
    //
    if (produto.id === this.state.produtos.id) {
      let objeto = this.state;
      objeto.contador += 1;
      this.setState({ objeto });
      console.log(objeto);
    }
  };
  /*
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
  */

  render() {
    // MAP DO ARRAY DE PRODUTOS ADICIONADOS PARA PEGAR O VALOR DO PRODUTO
    const valorDoItem = this.state.novaListaCarrinho.map((item) => {
      return item.value;
    });

    // MAP DO ARRAY DE PRODUTOS ADICIONADOS PARA PEGAR O NOME DO PRODUTO
    const nomeDoItem = this.state.novaListaCarrinho.map((item) => {
      return <p>{item.name}</p>;
    });
    nomeDoItem.reduce(function (object, item) {
      if (!object[item]) {
        object[item] = 1;
      } else {
        object[item]++;
      }
      return object;
    }, {});
    console.log(object, item);

    // REDUCE PARA SOMAR OS VALORES DE TODOS OS PRODUTOS NO CARRINHO
    const soma = valorDoItem.reduce(
      (soma, valorDoItem) => soma + valorDoItem,
      0
    );
    console.log(soma);

    // MAP DO STATE PARA MOSTRAR O CARD COM INFOS DO PRODUTO
    const listaDeProdutos = this.state.produtos.map((produto) => {
      return (
        <div>
          <div>
            <img src={produto.imageUrl} alt="Imagem do produto" />
            <p>{produto.name}</p>
            <p>R$ {produto.value}</p>
            <button onClick={() => this.adicionarNoCarrinho(produto)}>
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      );
    });

    // CONST PARA INDICAR A QUANTIDADE DE PRODUTOS
    const numeroDeProdutos = this.state.produtos.length;

    // ============================================================
    return (
      <ContainerHome>
        <CrescenteDecrescente>
          <select onChange={this.onChangeSelect}>
            <option></option> {/*VAZIO DE INÍCIO*/}
            <option value="descrescente">Preço: Decrescente</option>
            <option value="crescente">Preço: Crescente</option>
          </select>
          <p>Quantidade de Produtos: {numeroDeProdutos}</p>
        </CrescenteDecrescente>

        <ContainerCardECarrinho>
          <ContainerCard>{listaDeProdutos}</ContainerCard>

          <ContainerCarrinho>
            <h1>Carrinho:</h1>
            {/*NOME DE CADA ITEM NO CARRINHO*/}
            {nomeDoItem}
            {/*TOTAL SOMA DOS PRODUTOS NO CARRINHO*/}
            <p>R${soma}</p>
          </ContainerCarrinho>
        </ContainerCardECarrinho>
      </ContainerHome>
    );
  }
}
export default Home;
// teste
