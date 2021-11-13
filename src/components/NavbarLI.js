import React from "react";
import { Link } from "react-router-dom";

const NavbarLI = ({ to, className, primary }) => {
  const defaultClass = "inline-block no-underline hover:underline ";
  return (
    <div className={`${defaultClass} ${className}`}>
      <Link to={to}>{primary}</Link>
    </div>
  );
};

export default NavbarLI;
