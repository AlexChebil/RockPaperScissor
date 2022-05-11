import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import rockSvg from "../../Assets/icon-rock.svg";
import paperSvg from "../../Assets/icon-paper.svg";
import scissorsSvg from "../../Assets/icon-scissors.svg";
import "./MainLogic.scss";
import "./MainLogicMediaQ.scss";
import Button from "@mui/material/Button";
import Sound from "../../Assets/Sound/sfx-pop.mp3";

function MainLogic({ ACTIONS }) {
  const [newUserSelected, setnewUserSelected] = useState(0);
  const [state, dispatch] = useReducer(reduF, ACTIONS);
  const audio = new Audio(Sound);

  function reduF(state, action) {
    switch (action.type) {
      case ACTIONS.ROCK:
        ACTIONS.userSelected = ACTIONS.ROCK;
        setnewUserSelected((prev) => prev + 1); //dummy var to update the selected state on the dom

        break;

      case ACTIONS.PAPER:
        ACTIONS.userSelected = ACTIONS.PAPER;
        setnewUserSelected((prev) => prev + 1); //dummy var to update the selected state on the dom
        break;

      case ACTIONS.SCISSORS:
        ACTIONS.userSelected = ACTIONS.SCISSORS;
        setnewUserSelected((prev) => prev + 1); //dummy var to update the selected state on the dom

        break;

      default:
        break;
    }
  }
  function Rock() {
    dispatch({ type: ACTIONS.ROCK });
    audio.play();
  }
  function Paper() {
    dispatch({ type: ACTIONS.PAPER });
    audio.play();
  }
  function Scissors() {
    dispatch({ type: ACTIONS.SCISSORS });
    audio.play();
  }

  return (
    <>
      <div className='mainGame'>
        <div className='Proceed'>
          <h1>{ACTIONS.userSelected.toUpperCase()}</h1>
          <Link style={{ textDecoration: "none" }} to='/Game'>
            <Button id='buttonMUI' variant='outlined'>
              Proceed
            </Button>
          </Link>
        </div>
        <div className='mainGameFlexCont'>
          <div>
            <div className='rockPaperScissor rock' onClick={Rock}>
              <img id='rockSVG' src={rockSvg} alt='SVG HERE' />
            </div>
          </div>

          <span className='line'></span>

          <div className='rockPaperScissor paper' onClick={Paper}>
            <img src={paperSvg} alt='SVG HERE' />
          </div>
          <div className='rockPaperScissor scissors' onClick={Scissors}>
            <img src={scissorsSvg} alt='SVG HERE' />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLogic;
