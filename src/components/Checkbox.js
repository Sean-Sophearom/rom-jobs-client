import React from "react";

import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const defaultClassName = "text-purple-500 cursor-pointer transition-all";

const Checkbox = (props) => {
  const { checked } = props;
  const className = `${defaultClassName} ${props.className}`;
  const newProps = { ...props, className, checked: undefined };

  return checked ? <ImCheckboxChecked {...newProps} fontSize={18} /> : <ImCheckboxUnchecked {...newProps} fontSize={18} />;

  // return (
  //   <div className="inline border-2 border-purple-500 rounded-[5px]">
  //     <ImCheckboxChecked {...newProps} />
  //   </div>
  // );
};

export default Checkbox;
