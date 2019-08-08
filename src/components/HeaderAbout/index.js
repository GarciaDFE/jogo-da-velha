import React from "react";
import LogoCollab from "../../objects/LogoCollab"
import NavItem from "../../objects/NavItem"
import IconClose from "../../objects/IconClose"
import "./styles.css"

const HeaderAbout = ({ onClick }) => (
        <header className="header-about">
            <LogoCollab light />
            <NavItem className="-light" onClick={onClick}/>
            <IconClose onClick={onClick}/>
        </header>
)

export default HeaderAbout