import React from "react";
import "./Header.scss";
import logoSVG from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/logo.svg";

function Header() {
  return (
    <>
      <div className='headerContainer'>
        <img src={logoSVG} alt='' />
        <div className='score'>
          <h2>SCORE</h2>
          <h1>5</h1>
          {/* //placeholder */}
        </div>
      </div>
    </>
  );
}

export default Header;
