import React from "react";
import LogoCollab from "../../objects/LogoCollab"
import NavItem from "../../objects/NavItem"
import MenuHamburg from "../../objects/MenuHamburg"
import "./styles.css"

const HeaderGame = () => {
     return (
        <header className="header-game">
            <LogoCollab />
            <NavItem />
            <MenuHamburg />
        </header>)
}

export default HeaderGame