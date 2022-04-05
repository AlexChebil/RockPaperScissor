import React, { useContext, useState } from "react";
import MainLogic from "./Components/MainLogic/MainLogic";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./Components/Game/Game";
import { houseContext } from "./Components/Context/Context.jsx";

function App() {
  const ACTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
  };
  const [houseSelected, setHouseSelected] = useState(
    Object.values(ACTIONS)[Math.floor(Math.random() * 3)]
  );
  return (
    <>
      <Header />
      <BrowserRouter>
        <houseContext.Provider value={{ houseSelected }}>
          <Routes>
            <Route path='/' element={<MainLogic ACTIONS={ACTIONS} />} />
            <Route path='Game' element={<Game />} />
          </Routes>
        </houseContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
