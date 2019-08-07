import React from "react";
import LabelEvent from "../LabelEvent"
import MainInput from "../MainInput"
import "./styles.css"

const CheckboxEvents = ({id = "", value = "", content = ""}) => (
     <>
          <MainInput id={id} type="checkbox" value={value} />
          <LabelEvent htmlFor={id} content={content} />
     </>
);

export default CheckboxEvents