import React from "react";
import "./styles.css"

const LabelEvent = ({htmlFor, content}) => (
     <label className="label-event" htmlFor={htmlFor}>{content}</label>
);

export default LabelEvent;