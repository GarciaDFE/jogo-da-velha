import React from "react";
import Logo from "../../objects/logo"
import NavBar from "../../objects/navbar"
import "./styles.css"


const Header = () => {
     return (
     <header className="app-header">
        <Logo />
        <NavBar />
     </header>)
}

export default Header