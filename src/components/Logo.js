import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ fontSize }) => {
  fontSize = fontSize || "text-2xl";
  return (
    <Link to="/" className={fontSize} lang="eng">
      <span className="text-purple-500 font-semibold">Rom </span>
      <span className="text-purple-500 font-semibold">JOBS</span>
    </Link>
  );
};

export default Logo;
