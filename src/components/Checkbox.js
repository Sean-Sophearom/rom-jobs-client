import React from "react";

import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";

const defaultClassName = "text-purple-500 cursor-pointer";

const Checkbox = (props) => {
  const { checked } = props;
  const className = `${defaultClassName} ${props.className}`;
  const newProps = { ...props, className, checked: undefined };

  return checked ? <ImCheckboxChecked {...newProps} /> : <ImCheckboxUnchecked {...newProps} />;
};

export default Checkbox;
