import React, { useEffect, useState } from "react";
import "./Header.scss";
import logoSVG from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/logo.svg";

function Header({ ACTIONS }) {
  setInterval(() => {
    console.log(ACTIONS.SCORE);
    setfirst((prev) => prev + 1);
  }, 3000);
  const [first, setfirst] = useState(0);

  return (
    <>
      <div className='headerContainer'>
        <img src={logoSVG} alt='' />
        <div className='score'>
          <h2>SCORE</h2>
          <h1>{ACTIONS.SCORE} </h1>
          {/* //placeholder */}
        </div>
      </div>
    </>
  );
}

export default Header;
