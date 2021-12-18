import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../../axios";
import { Link } from "react-router-dom";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("/job/myJobs").then((res) => setJobs(res.data));
  }, []);
  return (
    <>
      <h2 className="font-semibold text-purple-600 text-2xl py-6" lang="eng">
        My Jobs
      </h2>

      <div className="overflow-x-auto drop-shadow-sm">
        <div lang="eng" className="text-sm sm:text-base grid grid-cols-7 lg:grid-cols-6 text-center min-w-[860px] bg-gray-50 rounded-md border">
          <p className="px-2 pl-4 py-4 font-medium border-b col-span-3 lg:col-span-2 text-left">Name</p>
          <p className="px-2 py-4 font-medium border-b">Salary</p>
          <p className="px-2 py-4 font-medium border-b">Applications</p>
          <p className="px-2 py-4 font-medium border-b">Rejected</p>
          <p className="px-2 py-4 font-medium border-b">Accepted</p>
          {jobs?.map((job, i) => (
            <React.Fragment key={job.job_id}>
              <p className={`p-2 pl-4 text-gray-700 border-b col-span-3 lg:col-span-2 text-left hover:underline inline ${i % 2 === 0 && "bg-gray-100"}`}>
                <Link to={`/jobDetail/${job.job_id}`}>{job.name}</Link>
              </p>
              <p className={`p-2 text-gray-700 border-b ${i % 2 === 0 && "bg-gray-100"}`}>{job.salary}</p>
              <p className={`p-2 text-gray-700 border-b ${i % 2 === 0 && "bg-gray-100"}`}>{job.appCount || 0}</p>
              <p className={`p-2 text-gray-700 border-b ${i % 2 === 0 && "bg-gray-100"}`}>{job.rejected || 0}</p>
              <p className={`p-2 text-gray-700 border-b ${i % 2 === 0 && "bg-gray-100"}`}>{job.accepted || 0}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyJobs;
