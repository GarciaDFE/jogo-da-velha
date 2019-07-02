import React from "react";
import Table from "../../objects/Table"
import PlayerX from "../../objects/PlayerX"
import PlayerO from "../../objects/PlayerO"
import PlayerEmpty from "../../objects/PlayerEmpty"
import "./styles.css"

const Game = () => {
     return (
          <div className="game">
               <Table />
               <div className="players">
                    <PlayerEmpty />
                    <PlayerO />
                    <PlayerX />
                    <PlayerO />
                    <PlayerX />
                    <PlayerO />
                    <PlayerX />
                    <PlayerO />
                    <PlayerX />
               </div>
          </div>
     )
}

export default Game