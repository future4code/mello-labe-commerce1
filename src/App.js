import React from "react";

import "./App.css";
import Filtros from "./components/Filtros/Filtros";
import { Home } from "./components/Home/Home";

//import Carrinho from "./components/Carrinho/Carrinho";

function App() {
  return (
    <div>
      <Filtros />
      <hr />
      <Home />
    </div>
  );
}

export default App;
