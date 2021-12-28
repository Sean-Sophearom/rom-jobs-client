import React from "react";
import Slider from "react-slick";
import TestimonialItem from "./TestimonialItem";
const items = [
  "Rom JOBS is truly the best job finding service I've used. I am satisfied with my current job thanks to Rom JOBS.",
  "I was able to find a suitable job for myself on Rom JOBS very easily and straight forward. I will definitely be using it again when I need to.",
  "The process is quick and simple and took no time at all and everything is easy to use on Rom JOBS.",
];

const Testimonial = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div className="py-6">
      <h1 lang="eng" className="text-center font-medium text-2xl sm:text-3xl lg:text-4xl">
        See what our users are saying
      </h1>
      <div lang="eng" className="box hidden sm:flex gap-6 py-6 my-6">
        {items.map((item, idx) => (
          <TestimonialItem text={item} key={idx} />
        ))}
      </div>
      <div className="sm:hidden pb-12 box">
        <Slider {...settings} className="sm:hidden md:hidden">
          {items.map((item, idx) => (
            <TestimonialItem text={item} key={idx} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
