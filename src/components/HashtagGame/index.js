import React from "react";
import TableGame from "../../objects/TableGame"
import PlayerGame from "../../objects/PlayerGame"
import "./styles.css"

const HashtagGame = () => {
     return (
          <TableGame>
               <ul className="hashtag-game">
                    <li className="item"><PlayerGame /></li>
                    <li className="item"><PlayerGame /></li>
                    <li className="item"><PlayerGame /></li>

                    <li className="item"><PlayerGame /></li>
                    <li className="item"><PlayerGame /></li>
                    <li className="item"><PlayerGame /></li>

                    <li className="item"><PlayerGame /></li>
                    <li className="item"><PlayerGame /></li>
                    <li className="item"><PlayerGame /></li>
               </ul>
          </TableGame>
     )
}

export default HashtagGame