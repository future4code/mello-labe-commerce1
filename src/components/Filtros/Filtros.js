import React from "react";

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
      <div>
        <h1>Filtros</h1>
        <label>Valor Mínimo:</label>
        <input type="number"></input>
        <label>Valor Máximo:</label>
        <input type="number"></input>
        <label>Buscar Produto</label>
        <input value={this.state.valorInputBusca} onChange={this.onChangeInputBusca}></input>
      </div>
    );
  }
}
export default Filtros;
