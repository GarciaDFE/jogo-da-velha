import React from "react";
import "./styles.css";
import logo from "../../img/logo.svg";

const Logo = () => {
     return (
     <a className="App-link" href="https://collabcode.training/" target="_blank"rel="noopener noreferrer">
     <img src={logo} className="logo" alt="logo" /></a>
     )
}

export default Logo