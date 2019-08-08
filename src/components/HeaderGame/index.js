import React from "react";
import LogoCollab from "../../objects/LogoCollab"
import NavItem from "../../objects/NavItem"
import MenuHamburg from "../../objects/MenuHamburg"
import "./styles.css"

const HeaderGame = ({ onClick }) => {
     return (
        <header className="header-game">
            <LogoCollab />
            <NavItem onClick={onClick}/>
            <MenuHamburg onClick={onClick}/>
        </header>)
}

export default HeaderGame