import React, { useContext, useReducer, useState } from "react";
import { houseContext } from "../Context/Context";
import rockSvg from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/icon-rock.svg";
import paperSvg from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/icon-paper.svg";
import scissorsSvg from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/icon-scissors.svg";
import "./Game.scss";

function Game({ ACTIONS }) {
  const { houseSelected } = useContext(houseContext);

  let tt = "false";

  switch (ACTIONS.userSelected !== false) {
    case ACTIONS.userSelected === ACTIONS.ROCK:
      if (houseSelected === ACTIONS.ROCK) {
        //setwinningState("equality");
        tt = "true";
      } else if (houseSelected === ACTIONS.PAPER) {
        //setwinningState(false);
      } else {
        //setwinningState(true);
      }
      break;

    case ACTIONS.userSelected === ACTIONS.PAPER:
      if (houseSelected === ACTIONS.PAPER) {
        //setwinningState("equality");
      } else if (houseSelected === ACTIONS.SCISSORS) {
        //setwinningState(false);
      } else {
        //setwinningState(true);
      }
      break;

    case ACTIONS.userSelected === ACTIONS.SCISSORS:
      if (houseSelected === ACTIONS.SCISSORS) {
        //setwinningState("equality");
      } else if (houseSelected === ACTIONS.ROCK) {
        //setwinningState(false);
      } else {
        //setwinningState(true);
      }
      break;
    default:
      throw new Error("USER RELATED ERROR");
  }

  return (
    <>
      <h1>{tt} </h1>

      <div className='flexCont'>
        <div className='userSelected '>
          {ACTIONS.userSelected && ACTIONS.userSelected === ACTIONS.PAPER ? (
            <img src={paperSvg} alt='' />
          ) : ACTIONS.userSelected === ACTIONS.ROCK ? (
            <img src={rockSvg} alt='' />
          ) : (
            <img src={scissorsSvg} alt='' />
          )}
        </div>

        <div className='houseSelected'>
          {houseSelected === ACTIONS.PAPER ? (
            <img src={paperSvg} alt='' />
          ) : houseSelected === ACTIONS.ROCK ? (
            <img src={rockSvg} alt='' />
          ) : (
            <img src={scissorsSvg} alt='' />
          )}
        </div>
      </div>
    </>
  );
}

export default Game;
