import React from "react";
import TableGame from "../../objects/TableGame"
import PlayerGame from "../../objects/PlayerGame"
import "./styles.css"

const HashtagGame = () => {
     return (
          <TableGame>
               <ul className="hashtag-game">
                    <li className="item"><PlayerGame player="x" /></li>
                    <li className="item"><PlayerGame player="o" /></li>
                    <li className="item"><PlayerGame player="x" /></li>

                    <li className="item"><PlayerGame player="o" /></li>
                    <li className="item"><PlayerGame player="x" /></li>
                    <li className="item"><PlayerGame player="o" /></li>

                    <li className="item"><PlayerGame player="x" /></li>
                    <li className="item"><PlayerGame player="o" /></li>
                    <li className="item"><PlayerGame player="x" /></li>
               </ul>
          </TableGame>
     )
}

export default HashtagGame