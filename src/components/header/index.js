import React from "react";
import Logo from "../../objects/Logo"
import NavItem from "../../objects/NavItem"
import MenuHamburg from "../../objects/MenuHamburg"
import "./styles.css"

const Header = () => {
     return (
        <header className="app-header">
            <Logo />
            <NavItem />
            <MenuHamburg />
        </header>)
}

export default Header