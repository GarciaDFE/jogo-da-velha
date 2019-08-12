import React, { useState } from "react";
import "./styles.css";
let nowPlay = "x";

const PlayerGame = ({player = ""}) => {
     const [statePlayer, setStatePlayer] = useState(player);
     const handleClick = () => {
         if (statePlayer === "" && nowPlay === "x") {
               setStatePlayer("x");
               nowPlay = "o";
         } else if (statePlayer === "" && nowPlay === "o") {
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