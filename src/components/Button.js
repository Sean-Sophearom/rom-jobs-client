import React from "react";

const buttonStyle = "bg-purple-500 hover:bg-purple-400 text-white px-4 py-1 rounded-sm content-box transition-all";

const Button = ({ type, onClick, className, children }) => {
  className = className ? `${buttonStyle} ${className}` : buttonStyle;
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
