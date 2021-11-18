import React, { useEffect, useState } from "react";

const Snackbar = ({ close, open, timeout, color, children }) => {
  const [isDisplay, setIsDisplay] = useState(true);
  const defaultClass = "transition-all duration-500 fixed top-20 z-50 left-0 flex w-full justify-center";
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

  useEffect(() => {
    if (open) {
      setIsDisplay(true);
      setTimeout(() => {
        close();
        setTimeout(() => setIsDisplay(false), 2000);
      }, timeout);
    }
  }, [open]);

  if (isDisplay) {
    return (
      <div className={className}>
        <p className={pClassName}>{children}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default Snackbar;
