import React from "react";

const MainInput = ({id = "", value = "", type = "text"}) => (
        <input className="main-input" type={type} id={id} value={value} />
);

export default MainInput