import React from "react";
import Cards from "../Cards/Cards"

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Quantidade de Produtos({this.props.numeroDeP}).</p>
        <Cards
        // key={produto.id}
        />    
      </div>
    );
  }
}
export default Home;
