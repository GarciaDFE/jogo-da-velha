import React, { useState } from "react";
import "./styles.css";
let play = "x"

const PlayerGame = ({player = "false"}) => {
     const [statePlayer, setStatePlayer] = useState(player);

     const handleClick = () => {
          if (play === "x") {
               setStatePlayer("x")
               play = "o";
          } else {
               setStatePlayer("o")
               play = "x";
          }
     }

     return (
          <button onClick={handleClick} className={`player-game -${statePlayer}`}></button>
     )
}

export default PlayerGame