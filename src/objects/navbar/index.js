import React from "react";
import "./styles.css";
import NavItem from "../../objects/navItem"
import Hamburg from "../../objects/hamburg"


const NavBar = () => {
     return (
       <nav className="nav-bar">
          <NavItem />
          <Hamburg />
       </nav>
     )
}

export default NavBar