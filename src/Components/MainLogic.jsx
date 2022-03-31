import React, { useReducer, useState } from "react";

function MainLogic({ ACTIONS }) {
  const [userSelected, setUserSelected] = useState();
  const [houseSelected, setHouseSelected] = useState(
    Object.values(ACTIONS)[Math.floor(Math.random() * 3)]
  );

  const [state, dispatch] = useReducer(reduF, ACTIONS);

  function reduF(state, action) {
    switch (action.type) {
      case ACTIONS.ROCK:
        console.log(houseSelected);
        if (houseSelected === ACTIONS.PAPER) {
          console.log("YOU WON", houseSelected);
        } else {
          console.log("YOU LOST", houseSelected);
        }

        break;

      default:
        break;
    }
  }

  return (
    <>
      <div>
        <button onClick={() => dispatch({ type: ACTIONS.ROCK })}>Rock</button>
        <button>Paper</button>
        <button>Scissors</button>
      </div>
    </>
  );
}

export default MainLogic;
