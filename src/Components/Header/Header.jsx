import React, { useContext } from "react";
import "./Header.scss";
import "./HeaderMediaQ.scss";
import { scoreContext } from "../Context/ScoreContext";
import logoSVG from "../../Assets/logo.svg";
function Header() {
  const { score } = useContext(scoreContext);

  return (
    <>
      <div className='headerContainer'>
        <img src={logoSVG} alt='' />
        <div className='score'>
          <h2>SCORE</h2>
          <h1>{score} </h1>
        </div>
      </div>
    </>
  );
}

export default Header;
