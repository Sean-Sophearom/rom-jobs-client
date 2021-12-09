import React from "react";
import JobCard from "../../components/JobCard";
import Slider from "react-slick";

const Carousel = ({ job }) => {
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {job?.moreJobs?.map((job) => (
        <JobCard job={job} key={job.job_id} paddingInline />
      ))}
    </Slider>
  );
};

export default Carousel;
