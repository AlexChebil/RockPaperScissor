import React, { useContext } from "react";
import { houseContext } from "../Context/Context";
function Game() {
  const { houseSelected } = useContext(houseContext);

  console.log(houseSelected);

  return (
    <div>
      <h1>GAAAAAME</h1>
    </div>
  );
}

export default Game;
