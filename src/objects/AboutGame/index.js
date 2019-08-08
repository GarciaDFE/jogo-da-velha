import React from "react";
import "./styles.css"

const AboutGame = ({ children, className = "" }) => (
     <article className={`about-game ${className}`}>{children}</article>
)

export default AboutGame