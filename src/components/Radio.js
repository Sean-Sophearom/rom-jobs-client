import React from "react";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
const defaultClass = "text-purple-500 cursor-pointer";

const Radio = (props) => {
  const checked = props.checked;
  const updatedProps = { ...props, checked: undefined };
  updatedProps.className = `${defaultClass} ${updatedProps.className}`;
  updatedProps.fontSize = updatedProps.fontSize || 20;
  return checked === true ? <MdRadioButtonChecked {...updatedProps} /> : <MdRadioButtonUnchecked {...updatedProps} />;
};

export default Radio;
