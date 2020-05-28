import React from "react";
import "./App.css";
import Filtros from "./components/Filtros/Filtros";
import Home from "./components/Home/Home";
import styled from "styled-components";

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: row;
  background-color: gray;
`;

const ContainerH = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: green;
  width: 800px;
`;

function App() {
  return (
    <ContainerGeral>
      <Filtros />
      <ContainerH>
        <Home />
      </ContainerH>
    </ContainerGeral>
  );
}

export default App;
