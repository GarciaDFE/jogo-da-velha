import React from "react";
import Table from "../../objects/Table"
import Player from "../../objects/Player"
import "./styles.css"

const Hashtag = () => {
     return (
          <Table>
               <ul className="hashtag">
                    <li className="item"><Player player="x" /></li>
                    <li className="item"><Player player="o" /></li>
                    <li className="item"><Player player="x" /></li>

                    <li className="item"><Player player="o" /></li>
                    <li className="item"><Player player="x" /></li>
                    <li className="item"><Player player="o" /></li>

                    <li className="item"><Player player="x" /></li>
                    <li className="item"><Player player="o" /></li>
                    <li className="item"><Player player="x" /></li>
               </ul>
          </Table>
     )
}

export default Hashtag