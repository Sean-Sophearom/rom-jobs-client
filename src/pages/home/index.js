import React, { useEffect } from "react";

//components
import ImageSlider from "./HeroImageSliders";
import Loading from "../../components/Loading";
import SearchComponent from "./SearchComponent";
import Jobs from "./Jobs";
import Container from "../../components/Container";

//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../redux/slices/job";
import { resetJob } from "../../redux/slices/job";

const Home = () => {
  const { loading, page, data: jobs } = useSelector((state) => state.job);
  const dispatch = useDispatch();

  useEffect(() => {
    page === 0 && dispatch(fetchJobs({ page }));
    jobs.length === 0 && dispatch(resetJob());
  }, [dispatch, page]);

  if (loading) return <Loading />;
  return (
    <Container className="animate-onLoadAnimation main-bg">
      <ImageSlider />
      <SearchComponent />
      <Jobs />
    </Container>
  );
};

export default Home;
