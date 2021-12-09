import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs, justSearched } from "../../redux/slices/job";
import Spinner from "../../components/Spinner";
import Loading from "../../components/Loading";
import SearchComponent from "../home/SearchComponent";
import JobCard from "../../components/JobCard";

const Index = () => {
  const { data: jobs, page, loading, bigLoading, noMore, searchTerm, justSearched: userSearch } = useSelector((state) => state.job);
  const dispatch = useDispatch();
  const [isSearch, setIsSearch] = useState(false);

  const fetchMore = () => dispatch(fetchJobs({ page, ...searchTerm }));

  useEffect(() => {
    const values = Object.values(searchTerm);
    if (values.some((value) => value)) setIsSearch(true);
    if (userSearch) dispatch(justSearched());
    if (page === 0) dispatch(fetchJobs({ page: 0, ...searchTerm }));
  }, [dispatch, page, userSearch]);

  if (bigLoading) return <Loading />;
  return (
    <Container>
      <div className="bg-business-man bg-no-repeat bg-cover h-48 xs:h-64 sm:h-96 mb-4">
        <div className="box flex items-center justify-center h-full md:justify-start md:items-end">
          <h1 lang="eng" className="text-5xl sm:text-6xl md:text-7xl font-bold">
            Jobs
          </h1>
        </div>
      </div>

      <SearchComponent />

      <div className="box">
        <h3 className="font-semibold text-2xl text-purple-600">{isSearch ? "Search Results:" : "Popular Jobs:"}</h3>
      </div>

      <div className="box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
        {jobs.map((job) => (
          <JobCard key={job.job_id} job={job} />
        ))}
      </div>

      <div className="box flex justify-center" lang="eng">
        {loading ? (
          <Spinner />
        ) : jobs.length === 0 ? (
          <span>No results found</span>
        ) : noMore ? (
          <button className="btn" disabled>
            No More Jobs
          </button>
        ) : (
          <button className="btn" onClick={fetchMore}>
            Show More
          </button>
        )}
      </div>
    </Container>
  );
};

export default Index;
