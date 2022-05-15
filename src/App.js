import React, { useState } from "react";
import MainLogic from "./Components/MainLogic/MainLogic";
import Header from "./Components/Header/Header";
import Game from "./Components/Game/Game";
import BasicModal from "./Components/MUI/Modal/BasicModal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { houseContext } from "./Components/Context/Context.jsx";
import { scoreContext } from "./Components/Context/ScoreContext.jsx";
// STILL learing SQL
function App() {
  const ACTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
    userSelected: "rock",
  };

  const houseSelected = Object.values(ACTIONS)[Math.floor(Math.random() * 3)];
  const [score, setscore] = useState(0);

  return (
    <>
      <scoreContext.Provider value={{ score, setscore }}>
        <Header />
        <BrowserRouter>
          <houseContext.Provider value={{ houseSelected }}>
            <Routes>
              <Route path='/' element={<MainLogic ACTIONS={ACTIONS} />} />
              <Route path='Game' element={<Game ACTIONS={ACTIONS} />} />
            </Routes>
          </houseContext.Provider>
        </BrowserRouter>
        <BasicModal />
      </scoreContext.Provider>
    </>
  );
}

export default App;
