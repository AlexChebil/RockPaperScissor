import React, { useContext, useEffect, useState } from "react";
import { houseContext } from "../Context/Context";
import rockSvg from "../../Assets/icon-rock.svg";
import paperSvg from "../../Assets/icon-paper.svg";
import scissorsSvg from "../../Assets/icon-scissors.svg";
import "./Game.scss";
import "./GameMediaQ.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { scoreContext } from "../Context/ScoreContext";

function Game({ ACTIONS }) {
  const { houseSelected } = useContext(houseContext);
  const [userWon, setUserWon] = useState();

  const { score, setscore } = useContext(scoreContext);

  useEffect(() => {
    switch (ACTIONS.userSelected !== false) {
      case ACTIONS.userSelected === ACTIONS.ROCK:
        if (houseSelected === ACTIONS.ROCK) {
          setUserWon("Equality");
        } else if (houseSelected === ACTIONS.PAPER) {
          setUserWon("You Lost");
        } else {
          setUserWon("You Won");
        }
        break;

      case ACTIONS.userSelected === ACTIONS.PAPER:
        if (houseSelected === ACTIONS.PAPER) {
          setUserWon("Equality");
        } else if (houseSelected === ACTIONS.SCISSORS) {
          setUserWon("You Lost");
        } else {
          setUserWon("You Won");
        }
        break;

      case ACTIONS.userSelected === ACTIONS.SCISSORS:
        if (houseSelected === ACTIONS.SCISSORS) {
          setUserWon("Equality");
        } else if (houseSelected === ACTIONS.ROCK) {
          setUserWon("You Lost");
        } else {
          setUserWon("You Won");
        }
        break;
      default:
        throw new Error("USER RELATED ERROR");
    }
  }, []);

  function test(params) {
    setTimeout(() => {
      window.top.location.reload();
    }, 25);
  }

  return (
    <>
      <h1 className='winningState'> {userWon} </h1>
      <div className='flexCont'>
        <div
          className={`userSelected ${userWon === "You Won" ? "win" : null} `}
          //the win class in css makes the image bigger
        >
          {ACTIONS.userSelected && ACTIONS.userSelected === ACTIONS.PAPER ? (
            <img src={paperSvg} alt='' />
          ) : ACTIONS.userSelected === ACTIONS.ROCK ? (
            <div className='test'>
              <img src={rockSvg} alt='' />
            </div>
          ) : (
            <img src={scissorsSvg} alt='' />
          )}
        </div>

        <div
          className={`houseSelected ${userWon === "You Lost" ? "win" : null}`}
          //the win class in css makes the image bigger
        >
          {houseSelected === ACTIONS.PAPER ? (
            <img src={paperSvg} alt='' />
          ) : houseSelected === ACTIONS.ROCK ? (
            <img src={rockSvg} alt='' />
          ) : (
            <img src={scissorsSvg} alt='' />
          )}
        </div>
      </div>
      <Link style={{ textDecoration: "none" }} to='/'>
        <Button onClick={test} id='buttonMUI' variant='outlined'>
          TRY AGAIN
        </Button>
      </Link>
    </>
  );
}

export default Game;
