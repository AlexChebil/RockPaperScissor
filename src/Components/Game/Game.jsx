import React, { useContext, useReducer } from "react";
import { houseContext } from "../Context/Context";
import rockSvg from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/icon-rock.svg";
import paperSvg from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/icon-paper.svg";
import scissorsSvg from "/Users/alex_/Documents/_WORK/rock-paper-scissors-game/RockPaperScissor/src/Assets/icon-scissors.svg";
function Game({ ACTIONS }) {
  const { houseSelected } = useContext(houseContext);

  return (
    <>
      <div className='userSelected'>
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
    </>
  );
}

export default Game;
