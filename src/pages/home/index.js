import React, { useState } from "react";
import { useSelector } from "react-redux";

//components
import ImageSlider from "./HeroImageSliders";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import SearchComponent from "./SearchComponent";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const prefLang = useSelector((state) => state.prefLang);
  return (
    <div lang={prefLang} className="animate-onLoadAnimation main-bg">
      <Navbar />
      <ImageSlider />
      <SearchComponent />
    </div>
  );
};

export default Home;
