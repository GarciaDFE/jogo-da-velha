import React from "react";
import Table from "../../objects/Table"
import Player from "../../objects/Player"
import "./styles.css"

const Game = () => {
     return (
          <div className="game">
               <Table>
                    <Player />
                    <Player player="o" />
                    <Player player="x" />

                    <Player player="o" />
                    <Player player="x" />
                    <Player player="o" />

                    <Player player="x" />
                    <Player player="o" />               
                    <Player player="x" />
               </Table>
          </div>
     )
}

export default Game