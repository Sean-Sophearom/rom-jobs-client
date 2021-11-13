import React, { useEffect, useState } from "react";
import { HeroImageOne, HeroImageTwo, HeroImageThree } from "./HeroImages";

const ImageSliderrr = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const incrementIndex = () => {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    };
    const timeout = setTimeout(incrementIndex, 4000);
    return () => clearTimeout(timeout);
  }, [index]);
  return (
    <div className="box mt-12 md:mt-16">
      <div className="rounded-lg mt-4 bg-gradient-to-bl from-purple-300 to-purple-200 relative flex justify-center items-center overflow-x-hidden">
        <HeroImageOne index={index} />
        <HeroImageTwo index={index} />
        <HeroImageThree index={index} />
      </div>
    </div>
  );
};

export default ImageSliderrr;
