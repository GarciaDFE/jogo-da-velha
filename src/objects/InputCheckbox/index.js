import React from "react";
import LabelEvent from "../LabelEvent"
import MainInput from "../MainInput"
import "./styles.css"

const InputCheckbox = ({id = "", value = "", content = ""}) => (
     <>
          <MainInput id={id} type="checkbox" value={value} />
          <LabelEvent htmlFor={id} content={content} />
     </>
);

export default InputCheckbox