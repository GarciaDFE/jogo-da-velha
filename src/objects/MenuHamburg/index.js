import React from "react";
import "./styles.css";

const MenuHamburg = ({ onClick }) => (
     <a className="menu-hamburg"
          onClick={onClick}
          href="#menu">
          <span className="center">Menu</span>
     </a>    
)

export default MenuHamburg