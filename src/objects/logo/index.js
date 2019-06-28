import React from "react";
import "./styles.css";
import ImgLogo from "../../img/logo.svg";

const Logo = () => {
     return (
          <a className="App-link" href="https://collabcode.training/" target="_blank"rel="noopener noreferrer">
               <img src={ImgLogo} className="logo" alt="imagem do logo da CollabCode" />
          </a>
     )
}

export default Logo