import React from "react";
import "./styles.css";

const MenuGame = ({ onClick }) => (
     <a className="menu-game"
          onClick={onClick}
          href="#menu">
          <span className="center">Menu</span>
     </a>    
)

export default MenuGame