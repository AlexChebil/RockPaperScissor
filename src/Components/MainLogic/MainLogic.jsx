import React, { useContext, useEffect, useReducer, useState } from "react";
import rockSvg from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/icon-rock.svg";
import paperSvg from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/icon-paper.svg";
import scissorsSvg from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/icon-scissors.svg";
import "./MainLogic.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { houseContext } from "../Context/Context";

function MainLogic({ ACTIONS }) {
  const houseSelected = useContext(houseContext);
  const [newUserSelected, setnewUserSelected] = useState(0);
  const [state, dispatch] = useReducer(reduF, ACTIONS);

  function reduF(state, action) {
    switch (action.type) {
      case ACTIONS.ROCK:
        console.log(ACTIONS.userSelected);
        ACTIONS.userSelected = ACTIONS.ROCK;
        console.log(ACTIONS.userSelected);
        setnewUserSelected((prev) => prev + 1);
        console.log(newUserSelected);

        if (houseSelected.houseSelected === ACTIONS.PAPER) {
          console.log("YOU LOST");
        } else if (action.type === houseSelected.houseSelected) {
          console.log("Equality");
        } else {
          console.log("YOU WON");
        }

        break;

      case ACTIONS.PAPER:
        ACTIONS.userSelected = ACTIONS.PAPER;
        setnewUserSelected((prev) => prev + 1);

        if (houseSelected.houseSelected === ACTIONS.SCISSORS) {
          console.log("YOU LOST");
        } else if (action.type === houseSelected.houseSelected) {
          console.log("Equality");
        } else {
          console.log("YOU WON");
        }
        break;

      case ACTIONS.SCISSORS:
        ACTIONS.userSelected = ACTIONS.SCISSORS;
        setnewUserSelected((prev) => prev + 1);

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

  useEffect(() => {}, [newUserSelected]);

  return (
    <>
      <div className='mainGame'>
        <div className='Proceed'>
          <h1>{ACTIONS.userSelected.toUpperCase()}</h1>
          <Link to='/Game'>
            <Button id='buttonMUI' variant='outlined'>
              Proceed
            </Button>
          </Link>
        </div>
        <div className='mainGameFlexCont'>
          <div>
            <div
              className='rockPaperScissor rock'
              onClick={() => dispatch({ type: ACTIONS.ROCK })}
            >
              <img id='rockSVG' src={rockSvg} alt='SVG HERE' />
            </div>
          </div>

          <span className='line'></span>

          <div
            className='rockPaperScissor paper'
            onClick={() => dispatch({ type: ACTIONS.PAPER })}
          >
            <img src={paperSvg} alt='SVG HERE' />
          </div>
          <div
            className='rockPaperScissor scissors'
            onClick={() => dispatch({ type: ACTIONS.SCISSORS })}
          >
            <img src={scissorsSvg} alt='SVG HERE' />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLogic;
