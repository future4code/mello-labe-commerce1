import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0;
  background-color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  height: 600px;
`;
const ContainerGeral = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
`;

const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 300px;
  height: 80vh;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
`;

const CrescenteDecrescente = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: white;
  width: 50vw;
  height: 80px;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`;

const ContainerCard = styled.div`
  display: flex;
  /*flex-direction: row;*/
  flex-wrap: wrap;

  background-color: white;

  justify-content: space-between;
  align-items: center;
  height: 900px;
`;
const Card = styled.div`
  flex-direction: column;
  border: 1px solid orange;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 400px;
  width: 250px;
  margin: 2px;
`;
const Button = styled.div`
  background-color: black;
  color: white;
  height: 50px;
  width: 10vw;
  text-align: center;
  font-size: small;
  flex-wrap: wrap;
`;

const ContainerCarrinho = styled.div`
  flex-direction: column;
  background-color: white;
  width: 400px;
  height: 95vh;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
`;

class Home extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Item A",
        value: 50.0,
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
        value: 349.0,
        imageUrl: "https://picsum.photos/200/200?a=4",
      },
      {
        id: 5,
        name: "Item E",
        value: 23.55,
        imageUrl: "https://picsum.photos/200/200?a=5",
      },
      {
        id: 6,
        name: "Item F",
        value: 123.0,
        imageUrl: "https://picsum.photos/200/200?a=6",
      },
      {
        id: 7,
        name: "Item G",
        value: 27.0,
        imageUrl: "https://picsum.photos/200/200?a=7",
      },
      {
        id: 8,
        name: "Item H",
        value: 950.0,
        imageUrl: "https://picsum.photos/200/200?a=8",
      },
    ],
    ordenado: false,
    contador: 1,
    novaListaCarrinho: [],

    valorInputBusca: "",
    valorInputMinimo: "",
    valorInputMaximo: "",
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

  onChangeInputMinimo = (event) => {
    this.setState({ valorInputMinimo: event.target.value });
  };

  onChangeInputMaximo = (event) => {
    this.setState({ valorInputMaximo: event.target.value });
  };

  onChangeInputBusca = (event) => {
    this.setState({ valorInputBusca: event.target.value });
  };

  // ADICIONAR PRODUTOS AO CARRINHO

  adicionarNoCarrinho = (produto) => {
    let carrinho = produto;
    this.setState({
      novaListaCarrinho: [...this.state.novaListaCarrinho, carrinho],
    });
  };
  //Deletar produto do carrinho
  apagarItemCarrinho = (itemId) => {
    //console.log("apagar produto", itemId);
    const listaItensCarrinho = this.state.novaListaCarrinho.filter((itens) => {
      if (itemId === itens.id) {
        return false;
      } else {
        return true;
      }
    });
    this.setState({ novaListaCarrinho: listaItensCarrinho });
  };
  //renderização condicional do filtro
  render() {
    let maiusculas = this.state.valorInputBusca.toUpperCase();
    let listaDoEstado = this.state.produtos;
    if (this.state.valorInputBusca !== "") {
      listaDoEstado = listaDoEstado.filter((produto) => {
        return produto.name.includes(maiusculas);
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
    // Cópia do state produtos
    const listaRenderizada = listaDoEstado.map((produto) => {
      return (
        <Card>
          <img src={produto.imageUrl} alt="Imagem do produto" />
          <p>{produto.name}</p>
          <p>R$ {produto.value}</p>

          <Button onClick={() => this.adicionarNoCarrinho(produto)}>
            Adicionar ao Carrinho
          </Button>
        </Card>
      );
    });

    // MAP DO ARRAY DE PRODUTOS ADICIONADOS PARA PEGAR O VALOR DO PRODUTO
    const valorDoItem = this.state.novaListaCarrinho.map((item) => {
      return item.value;
    });

    // NOVO ARRAY COM OS PRODUTOS ADICIONADOS PARA PEGAR A QUANTIDADE DE CADA PRODUTO
    let arrayProdutoAdicionado = [];
    this.state.novaListaCarrinho.forEach((produto) => {
      const estaNoArray = arrayProdutoAdicionado.findIndex(
        (prod) => prod.id === produto.id
      );
      if (estaNoArray === -1) {
        const novoProduto = {
          id: produto.id,
          name: produto.name,
          quantidade: 1,
        };
        arrayProdutoAdicionado.push(novoProduto);
      } else {
        const quantidadeEncontrada =
          arrayProdutoAdicionado[estaNoArray].quantidade;
        arrayProdutoAdicionado[estaNoArray] = {
          ...arrayProdutoAdicionado[estaNoArray],
          quantidade: quantidadeEncontrada + 1,
        };
      }
    });
    // MAP DO ARRAY DE PRODUTOS ADICIONADOS PARA PEGAR A QUANTIDADE DE
    //CADA PRODUTO E O RESPECTIVO NOME
    const nomeDoItem = arrayProdutoAdicionado.map((item) => {
      return (
        <div>
          <p onClick={() => this.apagarItemCarrinho(item.id)}>
            {item.quantidade}x {item.name} - <strong>X</strong>
          </p>
        </div>
      );
    });
    console.log(nomeDoItem);

    // REDUCE PARA SOMAR OS VALORES DE TODOS OS PRODUTOS NO CARRINHO
    const soma = valorDoItem.reduce(
      (soma, valorDoItem) => soma + valorDoItem,
      0
    );
    console.log(soma);

    // CONST PARA INDICAR A QUANTIDADE DE PRODUTOS
    const numeroDeProdutos = listaDoEstado.length;

    // ============================================================
    return (
      <Container>
        <CrescenteDecrescente>
          {" "}
          <select onChange={this.onChangeSelect}>
            <option></option>
            <option value="descrescente">Preço: Decrescente</option>
            <option value="crescente">Preço: Crescente</option>
          </select>
          <p>Quantidade de Produtos: {numeroDeProdutos}</p>
        </CrescenteDecrescente>
        <ContainerGeral>
          {/*filtro*/}
          <ContainerFiltro>
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
          </ContainerFiltro>

          {/*cards*/}
          <ContainerCard>{listaRenderizada}</ContainerCard>
          {/*crescente decrescente*/}

          {/*carrinho*/}
          <ContainerCarrinho>
            <h1>Carrinho:</h1>
            {/*NOME DE CADA ITEM NO CARRINHO*/}
            {nomeDoItem}
            {}
            {/*TOTAL SOMA DOS PRODUTOS NO CARRINHO*/}
            <p>R${soma}</p>
          </ContainerCarrinho>
        </ContainerGeral>
      </Container>
    );
  }
}
export default Home;
