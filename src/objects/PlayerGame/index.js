import React, { useState } from "react";
import "./styles.css";


const PlayerGame = ({player = "false"}) => {
     const [statePlayer, setStatePlayer] = useState(player);
     
     const handleClick = () => setStatePlayer("x")
     return (
          <button onClick={handleClick} className={`player-game -${statePlayer}`}></button>
     )
}

export default PlayerGame