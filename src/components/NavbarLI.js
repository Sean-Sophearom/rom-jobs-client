import React from "react";
import { Link } from "react-router-dom";

const NavbarLI = ({ to, className, primary }) => {
  let currentPathClass = "font-extrabold text-purple-600";
  let defaultClass = "inline-block no-underline hover:underline ";
  if (window.location.pathname === to) defaultClass += currentPathClass;
  return (
    <div className={`${defaultClass} ${className}`}>
      <Link to={to}>{primary}</Link>
    </div>
  );
};

export default NavbarLI;
