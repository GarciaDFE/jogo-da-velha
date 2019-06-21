import React from "react";
import Logo from "../../objects/logo"
import NavItem from "../../objects/navItem"
import Hamburg from "../../objects/hamburg"
import "./styles.css"

const Header = () => {
     return (
     <header className="app-header">
        <Logo />
        <div className="nav-bar">
            <NavItem />
            <Hamburg />
        </div>
     </header>)
}

export default Header