import React from "react";
import { BsGear } from "react-icons/bs";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { useSelector } from "react-redux";

const Footer = () => {
  const prefLang = useSelector((state) => state.prefLang);
  return (
    <footer className="bg-purple-700 text-white font-medium">
      <div className="box">
        <div className="flex justify-between flex-col md:flex-row">
          <div lang="eng" className="flex-1 flex flex-col items-center py-4">
            <p lang={prefLang} className="text-xl mb-2">
              {prefLang === "eng" ? "Contact Us" : "ទំនាក់ទំនងយើង"}
            </p>
            <p className="flex items-center gap-2">
              <AiOutlineMail /> romjobs.co@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <AiOutlinePhone /> 0964260853
            </p>
          </div>
          <div lang="eng" className="flex-1 flex flex-col text-lg items-center py-4">
            <div className="flex gap-2 items-center pb-2">
              <BsGear />
              <span>Developed by Sophearom</span>
            </div>
            <div>
              <span>Copyright © Sophearom 2021</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
