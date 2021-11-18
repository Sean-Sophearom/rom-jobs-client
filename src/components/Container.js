import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const Container = ({ children }) => {
  const prefLang = useSelector((state) => state.prefLang);
  return (
    <div lang={prefLang} className="main-bg animate-onLoadAnimation min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Container;
