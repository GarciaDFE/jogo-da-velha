import React from "react";
import LogoCollab from "../../objects/LogoCollab"
import NavItem from "../../objects/NavItem"
import MenuGame from "../../objects/MenuGame"
import "./styles.css"

const HeaderGame = ({ onClick }) => {
     return (
        <header className="header-game">
            <LogoCollab />
            <NavItem onClick={onClick}/>
            <MenuGame onClick={onClick}/>
        </header>)
}

export default HeaderGame