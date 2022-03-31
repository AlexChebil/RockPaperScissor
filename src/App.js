import React from "react";
import MainLogic from "./Components/MainLogic";

function App() {
  const ACTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
  };

  return (
    <>
      <MainLogic ACTIONS={ACTIONS} />
    </>
  );
}

export default App;
