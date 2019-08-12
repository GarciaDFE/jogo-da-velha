import React from "react";
import TableGame from "../../objects/TableGame"
import PlayerGame from "../../objects/PlayerGame"
import "./styles.css"

const HashtagGame = ({ onClick }) => {
     return (
          <TableGame>
               <ul className="hashtag-game">
                    <li onClick={onClick} className="item"><PlayerGame/></li>
                    <li onClick={onClick} className="item"><PlayerGame/></li>
                    <li onClick={onClick} className="item"><PlayerGame/></li>

                    <li onClick={onClick} className="item"><PlayerGame/></li>
                    <li onClick={onClick} className="item"><PlayerGame/></li>
                    <li onClick={onClick} className="item"><PlayerGame/></li>

                    <li onClick={onClick} className="item"><PlayerGame/></li>
                    <li onClick={onClick} className="item"><PlayerGame/></li>
                    <li onClick={onClick} className="item"><PlayerGame/></li>
               </ul>
          </TableGame>
     )
}

export default HashtagGame