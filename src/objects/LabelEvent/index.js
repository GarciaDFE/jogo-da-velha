import React from "react";
import "./styles.css"

const LabelEvent = ({ htmlFor, content, onClick }) => (
     <label onClick={onClick} className="label-event" htmlFor={htmlFor}>{content}</label>
);

export default LabelEvent;