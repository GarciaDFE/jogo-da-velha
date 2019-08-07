import React from "react";
import "./styles.css";
import ImgLogoDark from "../../img/logo-dark.svg";
import ImgLogoLight from "../../img/logo-light.svg";

const LogoCollab = ({ light = false }) => (
     <img className="logo-collab"
          src={light ? ImgLogoLight : ImgLogoDark}
          alt="imagem do logo da CollabCode" />
)

export default LogoCollab