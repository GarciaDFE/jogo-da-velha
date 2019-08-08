import React from "react";
import "./styles.css";

const NavItem = ({ className= "", onClick }) => (
     <a href="#to-do" 
        className={`nav-item ${className}`} 
        onClick={onClick}>
          Sobre
     </a>
)

export default NavItem