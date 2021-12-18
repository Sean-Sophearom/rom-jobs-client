import React from "react";
import { useEffect } from "react";

const Modal = ({ show, center, children }) => {
  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";
    if (!show) document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="z-[100] bg-black bg-opacity-40 w-screen h-screen fixed top-0 left-0">
      <div className={`fixed top-12 md:top-16 left-0 modal-container flex justify-center ${center ? "items-center" : "items-end"}`}>
        <div className="overflow-y-auto max-h-[100%] w-[90%] xs:w-5/6 sm:w-3/4 md:max-w-2xl mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
