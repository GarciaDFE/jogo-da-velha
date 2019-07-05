import React from "react";
import "./styles.css";

const Table = ({children}) => {
     return (
          <article className="table">
               {children}
          </article>
     )

}

export default Table