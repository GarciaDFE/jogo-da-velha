import React from "react";
import "./styles.css";

const NavItem = ({ className= "" }) => (
     <a href="#to-do" className={`nav-item ${className}`}>
          Sobre
     </a>
)

export default NavItem