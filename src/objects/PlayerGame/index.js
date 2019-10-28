import React from "react";
import "./styles.css";

const PlayerGame = ({content = ""}) => {
     return (
          <button className={`player-game -${content}`}></button>
     )
}

export default PlayerGame