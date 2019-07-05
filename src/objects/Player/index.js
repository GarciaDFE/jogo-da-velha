import React from "react";
import "./styles.css";

// const Player = (props) => {
/* abaixo opção pegando apenas o player da props acima */
/* e trocando todos props.player apenas por player */
const Player = ({player}) => {
     let players = 'player';

     if (player === 'x') {
          players = "player -x"; 
     } else if (player === 'o') {
          players = "player -o"
     }

     return (
          <button className={players}></button>
     )
}

export default Player