import React, { useReducer, useState } from "react";
import rockSvg from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/icon-rock.svg";
import paperSvg from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/icon-paper.svg";
import scissorsSvg from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/icon-scissors.svg";

function MainLogic({ ACTIONS }) {
  const [houseSelected, setHouseSelected] = useState(
    Object.values(ACTIONS)[Math.floor(Math.random() * 3)]
  );

  const [state, dispatch] = useReducer(reduF, ACTIONS);

  function reduF(state, action) {
    switch (action.type) {
      case ACTIONS.ROCK:
        if (houseSelected === ACTIONS.PAPER) {
          console.log("YOU LOST");
        } else if (action.type === houseSelected) {
          console.log("Equality");
        } else {
          console.log("YOU WON");
        }

        break;
      case ACTIONS.PAPER:
        if (houseSelected === ACTIONS.SCISSORS) {
          console.log("YOU LOST");
        } else if (action.type === houseSelected) {
          console.log("Equality");
        } else {
          console.log("YOU WON");
        }
        break;
      case ACTIONS.SCISSORS:
        if (houseSelected === ACTIONS.ROCK) {
          console.log("YOU LOST");
        } else if (action.type === houseSelected) {
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
        <button onClick={() => dispatch({ type: ACTIONS.ROCK })}>
          <img src={rockSvg} alt='SVG HERE' />
        </button>

        <button onClick={() => dispatch({ type: ACTIONS.PAPER })}>
          <img src={paperSvg} alt='SVG HERE' />
        </button>

        <button onClick={() => dispatch({ type: ACTIONS.SCISSORS })}>
          <img src={scissorsSvg} alt='SVG HERE' />
        </button>
      </div>
    </>
  );
}

export default MainLogic;
