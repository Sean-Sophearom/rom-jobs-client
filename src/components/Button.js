import React from "react";
import { CgSpinner } from "react-icons/cg";

let buttonStyle =
  "text-white px-4 py-1 rounded-sm content-box transition-all disabled:opacity-50 disabled:hover:bg-purple-500 flex justify-center items-center";

const Button = ({ type, onClick, className, children, loading, disabled }) => {
  if (className?.includes("bg")) {
    const bgColor = className
      .split(" ")
      .find((item) => item.includes("bg"))
      .split("-")
      .slice(1);
    const hoverStyle = `hover:bg-${bgColor[0]}-${Number(bgColor[1]) + 100}`;
    className = `${className} ${hoverStyle}`;
  }
  className = className ? `${buttonStyle} ${className}` : buttonStyle;
  return (
    <button onClick={onClick} type={type} className={className} disabled={loading || disabled}>
      <CgSpinner className={`animate-spin absolute ${!loading ? "hidden" : undefined}`} size={20} />
      <span className={loading ? "invisible" : undefined}>{children}</span>
    </button>
  );
};

export default Button;
