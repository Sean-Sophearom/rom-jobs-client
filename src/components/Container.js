import React from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Container = ({ children, lang }) => {
  const prefLang = useSelector((state) => state.prefLang);

  return (
    <div lang={lang || prefLang} className="animate-onLoadAnimation min-h-screen overflow-x-hidden flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-hidden">{children}</div>
      <Footer />
    </div>
  );
};

export default Container;
