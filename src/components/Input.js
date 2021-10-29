import React from "react";

const Input = (props) => {
  const Icon = props.icon;
  const { iconOnClick, error } = props;
  const propsList = { ...props, className: `${props.className} flex-1` };
  delete propsList.icon;
  delete propsList.iconOnClick;
  delete propsList.error;
  return (
    <>
      <div className="flex justify-between items-center w-full relative ">
        <input {...propsList} />
        {Icon && (
          <Icon onClick={iconOnClick} fontSize={24} color="gray" className="absolute right-2 cursor-pointer"></Icon>
        )}
      </div>
      {error && <p className="text-red-500 text-xs pt-1 w-full">*{error}</p>}
    </>
  );
};

export default Input;
