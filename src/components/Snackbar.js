import React, { useEffect, useState } from "react";

const Snackbar = ({ close, open, timeout, color, children }) => {
  const defaultClass = "transition-all fixed -top-12 left-0 flex w-full justify-center";
  let pClassName = "border-2 px-4 py-2 rounded-sm ";
  switch (color) {
    case "green":
      pClassName += "border-green-300 text-green-400 bg-green-50";
      break;
    case "red":
      pClassName += "border-red-400 text-red-500 bg-red-50";
      break;
    case "yellow":
      pClassName += "border-yellow-400 text-yellow-500 bg-yellow-50";
      break;
    default:
      pClassName += "border-green-200 text-green-300 bg-green-50";
      break;
  }

  const [isVisible, setIsVisible] = useState(false);

  const className = `${defaultClass} ${isVisible && "translate-y-24"}`;

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        close();
      }, timeout);
    }
  }, [open, close, timeout]);
  return (
    <div className={className}>
      <p className={pClassName}>{children}</p>
    </div>
  );
};

export default Snackbar;
