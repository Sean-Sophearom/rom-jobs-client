import React from "react";
import { ImSpinner9 } from "react-icons/im";

let buttonStyle =
  "bg-purple-500 hover:bg-purple-400 text-white px-4 py-1 rounded-sm content-box transition-all disabled:opacity-50 disabled:hover:bg-purple-500 flex justify-center items-center";

const Button = ({ type, onClick, className, children, loading }) => {
  className = className ? `${buttonStyle} ${className}` : buttonStyle;

  return (
    <button onClick={onClick} type={type} className={className} disabled={loading}>
      <ImSpinner9 className={`animate-spin absolute ${!loading ? "hidden" : undefined}`} size={20} />
      <span className={loading ? "invisible" : undefined}>{children}</span>
    </button>
  );
};

export default Button;
