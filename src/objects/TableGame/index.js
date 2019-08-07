import React from "react";
import "./styles.css";

const TableGame = ({children}) => {
     return (
          <article className="table-game">
               {children}
          </article>
     )

}

export default TableGame