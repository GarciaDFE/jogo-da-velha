import React, { useState } from "react";
import TableGame from "../../objects/TableGame"
import PlayerGame from "../../objects/PlayerGame"

import "./styles.css"

const HashtagGame = () => {
     const [nextPlayer, setNextPlayer] = useState("x");
     const [players, setPlayers] = useState([
          {id:1, content:""},
          {id:2, content:""},
          {id:3, content:""},
          {id:4, content:""},
          {id:5, content:""},
          {id:6, content:""},
          {id:7, content:""},
          {id:8, content:""},
          {id:9, content:""},
     ]);
     const handleClick = (id) => {
          setPlayers(old => old.map(player => player.id === id ? {id, content: nextPlayer} : player))
          setNextPlayer(old => old === "x" ? "o" : "x");
     }

     return (
          <TableGame>
               <ul className="hashtag-game">
                    {players.map(({id, content}) => (
                         <li key={id} className="item" onClick={() => content === "" && handleClick(id)}>
                              <PlayerGame id={id} content={content}/>
                         </li>
                    ))}
               </ul>
          </TableGame>
     )
}

export default HashtagGame