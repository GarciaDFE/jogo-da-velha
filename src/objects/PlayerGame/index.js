import React from "react";
import "./styles.css";

const PlayerGame = ({player}) => {
     let players = 'player-game';

     if (player === 'x') {
          players = "player-game -x"; 
     } else if (player === 'o') {
          players = "player-game -o"
     }

     return (
          <button className={players}></button>
     )
}

export default PlayerGame