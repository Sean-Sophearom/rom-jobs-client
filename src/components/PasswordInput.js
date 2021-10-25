import React from "react";

const PasswordInput = (props) => {
  const Icon = props.icon;
  const { iconOnClick } = props;
  const propsList = { ...props, className: `${props.className} flex-1` };
  delete propsList.icon;
  delete propsList.iconOnClick;
  return (
    <div className="flex justify-between items-center w-full relative ">
      <input {...propsList} />
      <Icon onClick={iconOnClick} fontSize={24} color="gray" className="absolute right-3 cursor-pointer"></Icon>
    </div>
  );
};

export default PasswordInput;
