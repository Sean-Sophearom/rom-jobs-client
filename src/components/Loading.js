import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <AiOutlineLoading3Quarters className="text-purple-500 animate-spin" fontSize={52} />
    </div>
  );
};

export default Loading;
