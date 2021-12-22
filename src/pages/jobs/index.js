import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
//redux
import { useDispatch, useSelector } from "react-redux";
import job, { fetchJobs, justSearched, justSort } from "../../redux/slices/job";
import Spinner from "../../components/Spinner";
import Loading from "../../components/Loading";
import SearchComponent from "../home/SearchComponent";
import JobCard from "../../components/JobCard";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiDollar, BiTimeFive } from "react-icons/bi";

const Index = () => {
  const { data: jobs, page, loading, bigLoading, noMore, searchTerm, justSearched: userSearch } = useSelector((state) => state.job);
  const dispatch = useDispatch();
  const [isSearch, setIsSearch] = useState(false);
  const [sort, setSort] = useState("");

  const fetchMore = () => dispatch(fetchJobs({ page, ...searchTerm }));

  useEffect(() => {
    const values = Object.values(searchTerm);
    if (values.some((value) => value)) setIsSearch(true);
    if (userSearch) dispatch(justSearched());
    if (page === 0) dispatch(fetchJobs({ page: 0, ...searchTerm }));
  }, [dispatch, page, userSearch]);

  useEffect(() => {
    dispatch(justSort(sort));
    dispatch(justSearched());
    dispatch(fetchJobs({ page: 0, ...searchTerm, sort }));
  }, [sort]);

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

      <div className="box flex justify-between items-center">
        <h3 className="font-semibold text-xl sm:text-2xl text-purple-600">{isSearch ? "Search Results:" : "Popular Jobs:"}</h3>
        <div className="group relative text-sm xs:text-base">
          <span className="px-2 py-[1px] sm:py-1 cursor-pointer border border-gray-500 flex items-center gap-1 sm:gap-2">
            Sort By{": " + sort}
            <MdOutlineKeyboardArrowDown className="transition-all group-hover:-rotate-180" fontSize={21} />
          </span>
          <div className="w-full flex transition-all flex-col absolute z-50 overflow-hidden bg-white max-h-0 group-hover:max-h-96">
            <span
              onClick={() => sort !== "Date" && setSort("Date")}
              className="w-full flex gap-2 items-center border border-t-0 hover:bg-purple-600 border-gray-500 hover:text-white transition-all py-1 px-3 cursor-pointer">
              <BiTimeFive /> Date
            </span>
            <span
              onClick={() => sort !== "Salary" && setSort("Salary")}
              className="w-full flex gap-2 items-center border border-t-0 hover:bg-purple-600 border-gray-500 hover:text-white transition-all py-1 px-3 cursor-pointer">
              <BiDollar /> Salary
            </span>
          </div>
        </div>
      </div>

      {jobs.length !== 0 && (
        <div className="box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
          {jobs.map((job) => (
            <JobCard key={job.job_id} job={job} />
          ))}
        </div>
      )}

      <div className="box flex justify-center" lang="eng">
        {loading ? (
          <Spinner />
        ) : jobs.length === 0 ? (
          <span className="text-center">No results found :( Perhaps, try a different keyword</span>
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
