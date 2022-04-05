import React, { useContext, useReducer, useState } from "react";
import rockSvg from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/icon-rock.svg";
import paperSvg from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/icon-paper.svg";
import scissorsSvg from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/icon-scissors.svg";
import "./MainLogic.scss";
import { Link } from "react-router-dom";
import { houseContext } from "../Context/Context";

function MainLogic({ ACTIONS }) {
  const houseSelected = useContext(houseContext);
  const [state, dispatch] = useReducer(reduF, ACTIONS);

  function reduF(state, action) {
    switch (action.type) {
      case ACTIONS.ROCK:
        if (houseSelected.houseSelected === ACTIONS.PAPER) {
          console.log("YOU LOST");
        } else if (action.type === houseSelected.houseSelected) {
          console.log("Equality");
        } else {
          console.log("YOU WON");
        }

        break;
      case ACTIONS.PAPER:
        if (houseSelected.houseSelected === ACTIONS.SCISSORS) {
          console.log("YOU LOST");
        } else if (action.type === houseSelected.houseSelected) {
          console.log("Equality");
        } else {
          console.log("YOU WON");
        }
        break;
      case ACTIONS.SCISSORS:
        if (houseSelected.houseSelected === ACTIONS.ROCK) {
          console.log("YOU LOST");
        } else if (action.type === houseSelected.houseSelected) {
          console.log("Equality");
        } else {
          console.log("YOU WON");
        }
        break;

      default:
        break;
    }
  }

  return (
    <>
      <div className='mainGame'>
        {/* <div className='houseSelected'>
          {houseSelected === ACTIONS.ROCK ? (
            <img id='rockSVG' src={rockSvg} alt='SVG HERE' />
          ) : houseSelected === ACTIONS.PAPER ? (
            <img src={paperSvg} alt='SVG HERE' />
          ) : (
            <img src={scissorsSvg} alt='SVG HERE' />
          )}
        </div> */}
        <div className='mainGameFlexCont'>
          <Link to='/Game'>
            <div
              className='rockPaperScissor rock'
              onClick={() => dispatch({ type: ACTIONS.ROCK })}
            >
              <img id='rockSVG' src={rockSvg} alt='SVG HERE' />
            </div>
          </Link>

          <span className='line'></span>

          <Link to='/Game'>
            <div
              className='rockPaperScissor paper'
              onClick={() => dispatch({ type: ACTIONS.PAPER })}
            >
              <img src={paperSvg} alt='SVG HERE' />
            </div>
          </Link>
          <Link to='/Game'>
            <div
              className='rockPaperScissor scissors'
              onClick={() => dispatch({ type: ACTIONS.SCISSORS })}
            >
              <img src={scissorsSvg} alt='SVG HERE' />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainLogic;
