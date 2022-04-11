import React, { useContext, useEffect, useState } from "react";
import MainLogic from "./Components/MainLogic/MainLogic";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./Components/Game/Game";
import { houseContext } from "./Components/Context/Context.jsx";
import { scoreContext } from "./Components/Context/ScoreContext.jsx";

function App() {
  const ACTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
    userSelected: "rock",
  };

  const houseSelected = Object.values(ACTIONS)[Math.floor(Math.random() * 3)];
  const [score, setScore] = useState(0);

  return (
    <>
      <scoreContext.Provider value={{ score, setScore }}>
        <Header />
        <BrowserRouter>
          <houseContext.Provider value={{ houseSelected }}>
            <Routes>
              <Route path='/' element={<MainLogic ACTIONS={ACTIONS} />} />
              <Route path='Game' element={<Game ACTIONS={ACTIONS} />} />
            </Routes>
          </houseContext.Provider>
        </BrowserRouter>
      </scoreContext.Provider>
    </>
  );
}

export default App;
