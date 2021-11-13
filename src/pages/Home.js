import React, { useState } from "react";
import { useSelector } from "react-redux";
import ImageSlider from "../components/HeroImageSliders";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import SearchComponent from "../components/SearchComponent";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const prefLang = useSelector((state) => state.prefLang);
  return (
    <div lang={prefLang} className="animate-onLoadAnimation bg-blue-50">
      <Navbar />
      <ImageSlider />
      <SearchComponent />
    </div>
  );
};

export default Home;
