import React from "react";

const Logo = ({ fontSize }) => {
  fontSize = fontSize || "text-2xl";
  return (
    <div className={fontSize}>
      <span className="text-purple-500 font-semibold">Rom </span>
      <span className="text-purple-500 font-semibold">JOBS</span>
    </div>
  );
};

export default Logo;
