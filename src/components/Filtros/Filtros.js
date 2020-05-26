import React from "react";

class Filtros extends React.Component {
  render() {
    return (
      <div>
        <h1>Filtros</h1>
        <label>Valor Mínimo:</label>
        <input type="number"></input>
        <label>Valor Máximo:</label>
        <input type="number"></input>
        <label>Buscar Produto</label>
        <input></input>
      </div>
    );
  }
}
export default Filtros;
