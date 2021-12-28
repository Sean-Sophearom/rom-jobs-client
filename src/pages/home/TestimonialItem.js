import React from "react";
import { AiOutlineUser } from "react-icons/ai";

const TestimonialItem = ({ text }) => {
  return (
    <div className="min-h-[220px] sm:min-h-0 group flex items-end justify-center flex-1">
      <div
        lang="eng"
        className="max-w-[400px] sm:group-odd:h-[90%] lg:group-odd:h-[85%] mx-auto sm:max-w-full border px-4 bg-gray-100 sm:group-even:border-gray-400 rounded flex flex-col items-center text-center">
        <AiOutlineUser className="border-2 z-50 rounded-full border-gray-300 bg-white text-gray-400 relative bottom-8" fontSize={64} />
        <blockquote className="relative bottom-5">"{text}"</blockquote>
      </div>
    </div>
  );
};

export default TestimonialItem;
