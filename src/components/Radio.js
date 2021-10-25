import React from "react";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

const Radio = (props) => {
  const checked = props.checked;
  const updatedProps = { ...props, checked: undefined };
  return checked === true ? <MdRadioButtonChecked {...updatedProps} /> : <MdRadioButtonUnchecked {...updatedProps} />;
};

export default Radio;
