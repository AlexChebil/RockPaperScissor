import React from "react";
import MainLogic from "./Components/MainLogic/MainLogic";
import Header from "./Components/Header/Header";

function App() {
  const ACTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
  };

  return (
    <>
      <Header />
      <MainLogic ACTIONS={ACTIONS} />
    </>
  );
}

export default App;
