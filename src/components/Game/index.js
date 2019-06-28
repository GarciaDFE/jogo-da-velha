import React from "react";
import Table from "../../objects/Table"
import PlayerX from "../../objects/PlayerX"
import PlayerO from "../../objects/PlayerO"
import "./styles.css"

const Game = () => {
     return (
          <>
          <Table />
          <PlayerX />
          <PlayerO />
          </>
     )
}

export default Game