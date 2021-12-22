import React from "react";
import JobCard from "../../components/JobCard";
import Spinner from "../../components/Spinner";

//for carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//icon
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Jobs = ({ loading }) => {
  const jobs = useSelector((state) => state.job.data);
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

  if (loading) return <Spinner />;

  return (
    <div className="box" lang="eng">
      <div className="my-6 pl-2 flex justify-between items-center text-gray-500">
        <h2 className="text-purple-600 font-semibold text-2xl">Top Results</h2>
        <Link to="/jobs" className="hover:underline cursor-pointer">
          See more
          <IoIosArrowForward className="inline" />
        </Link>
      </div>
      <Slider {...settings}>
        {jobs?.slice(0, 6)?.map((job) => (
          <JobCard job={job} key={job.job_id} paddingInline />
        ))}
      </Slider>
    </div>
  );
};

export default Jobs;
