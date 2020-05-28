import React from "react";
import styled from "styled-components";

const ContainerFiltro = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  width: 200px;
  height: 500px;
  padding: 10px;
  margin: 10px;
`;

class Filtros extends React.Component {
  render() {
    return (
      <ContainerFiltro>
        <h1>Filtros</h1>
        <label>Valor Mínimo:</label>
        <input type="number"></input>
        <label>Valor Máximo:</label>
        <input type="number"></input>
        <label>Buscar Produto</label>
        <input></input>
      </ContainerFiltro>
    );
  }
}
export default Filtros;
