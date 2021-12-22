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
import { useState } from "react";

const Home = () => {
  const { loading, page, data: jobs } = useSelector((state) => state.job);
  const dispatch = useDispatch();
  const [smallLoading, setSmallLoading] = useState(false);

  useEffect(() => {
    page === 0 && dispatch(fetchJobs({ page }));
    jobs.length === 0 && dispatch(resetJob());
  }, [dispatch, page]);

  useEffect(() => {
    if (loading) setSmallLoading(true);
  }, [loading]);

  useEffect(() => {
    let timeout = null;
    if (smallLoading) timeout = setTimeout(() => setSmallLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [smallLoading]);

  if (smallLoading) return <Loading />;
  return (
    <Container>
      <ImageSlider />
      <SearchComponent />
      <Jobs loading={loading} />
    </Container>
  );
};

export default Home;
