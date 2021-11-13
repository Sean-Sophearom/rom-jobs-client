import React, { useEffect, useState } from "react";

const Snackbar = ({ close, open, timeout, color, children }) => {
  const defaultClass = "transition-all duration-500 fixed top-5 left-0 flex w-full justify-center";
  let pClassName = "px-4 py-2 rounded-sm font-semibold ";
  switch (color) {
    case "green":
      pClassName += "text-white bg-green-400";
      break;
    case "red":
      pClassName += "text-white bg-red-500";
      break;
    case "yellow":
      pClassName += "text-black bg-yellow-300";
      break;
    default:
      pClassName += "text-white bg-blue-500";
      break;
  }

  const className = `${defaultClass} ${open ? "opacity-100" : "opacity-0"}`;

  // useEffect(() => {
  //   if (open) {
  //     setIsVisible(true);
  //     setTimeout(() => {
  //       setIsVisible(false);
  //       close();
  //     }, timeout);
  //   }
  // }, [open, close, timeout]);
  return (
    <div className={className}>
      <p className={pClassName}>{children}</p>
      <div className="dur"></div>
    </div>
  );
};

export default Snackbar;
