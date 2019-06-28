import React from "react";
import Table from "../../objects/Table"
import PlayerX from "../../objects/PlayerX"
import PlayerO from "../../objects/PlayerO"
import PlayerEmpty from "../../objects/PlayerEmpty"
import Grid from "../../objects/Grid"
import "./styles.css"

const Game = () => {
     return (
          <div className="game">
               <Table />
               <Grid />
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