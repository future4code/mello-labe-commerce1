import React from "react";
import { Cards } from "../Cards/Cards";

export function Home() {
  return (
    <div>
      <Cards
        urlImagem={"https://picsum.photos/200/150?a=1"}
        titulo={"Ítem A"}
        valor={40.5}
      />
    </div>
  );
}
