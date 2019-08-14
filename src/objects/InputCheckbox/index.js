import React from "react";
import LabelEvent from "../LabelEvent"
import MainInput from "../MainInput"
import "./styles.css"

const InputCheckbox = ({ id = "", value = "", content = "", onClick }) => (
     <>
          <MainInput id={id} type="checkbox" value={value} />
          <LabelEvent onClick={onClick} htmlFor={id} content={content} />
     </>
);

export default InputCheckbox