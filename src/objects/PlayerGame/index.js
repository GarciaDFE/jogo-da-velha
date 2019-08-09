import React, { useState } from "react";
import "./styles.css";
let nowPlay = "x";

const PlayerGame = ({player = "false"}) => {
     const [statePlayer, setStatePlayer] = useState(player);
     const handleClick = () => {
          if (nowPlay === "x") {
               setStatePlayer("x");
               nowPlay = "o";
          } else {
               setStatePlayer("o");
               nowPlay = "x";
          }
     }

     return (
          <button 
               onClick={handleClick} 
               className={`player-game -${statePlayer}`}>  
          </button>
     )
}

export default PlayerGame