import React from "react";
import styled from "styled-components";

const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 200px;
  height: 95vh;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
`;

class Filtros extends React.Component {
  state = {
    valorInputBusca: "",
  };
  onChangeInputBusca = (event) => {
    this.setState({valorInputBusca: event.target.value})
  };
  render() {
    console.log(this.state.valorInputBusca);
    return (
      <ContainerFiltro>
        <h1>Filtros</h1>
        <label>Valor Mínimo:</label>
        <input type="number"></input>
        <label>Valor Máximo:</label>
        <input type="number"></input>
        <label>Buscar Produto</label>

        <input value={this.state.valorInputBusca} onChange={this.onChangeInputBusca}></input>
      </div>

        <input></input>
      </ContainerFiltro>

    );
  }
}
export default Filtros;
