import React, { useContext, useEffect, useState } from "react";
import "./Header.scss";
import "./HeaderMediaQ.scss";
import { scoreContext } from "../Context/ScoreContext";
import logoSVG from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/logo.svg";

function Header({ score }) {
  // const { score } = useContext(scoreContext);

  return (
    <>
      <div className='headerContainer'>
        <img src={logoSVG} alt='' />
        <div className='score'>
          <h2>SCORE</h2>
          <h1>{score.score} </h1>
        </div>
      </div>
    </>
  );
}

export default Header;
