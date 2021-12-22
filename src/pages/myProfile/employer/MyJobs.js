import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../../axios";
import { Link } from "react-router-dom";
import parseDate from "../../../hooks/useParseDate";

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
        <div lang="eng" className="text-sm xl:text-base grid grid-cols-12 lg:grid-cols-11 text-center min-w-[960px] bg-gray-50 rounded-md border">
          <p className="px-2 pl-4 py-4 font-medium border-b col-span-3 lg:col-span-2 text-left">Name</p>
          <p className="px-2 py-4 font-medium border-b col-span-2">Salary</p>
          <p className="px-2 py-4 font-medium border-b" title="Application">
            Application
          </p>
          <p className="px-2 py-4 font-medium border-b">Rejected</p>
          <p className="px-2 py-4 font-medium border-b">Accepted</p>
          <p className="px-2 py-4 font-medium border-b col-span-2">Posted</p>
          <p className="px-2 py-4 font-medium border-b">Status</p>
          <p className="px-2 py-4 font-medium border-b text-xs xl:text-sm" title="Close application">
            <span className="relative top-[3px] xl:top-[1px]">Stop hiring</span>
          </p>
          {jobs?.map((job, i) => (
            <React.Fragment key={job.job_id}>
              <p
                className={`p-2 pl-4 text-gray-700 truncate border-b col-span-3 lg:col-span-2 text-left hover:underline inline ${
                  i % 2 === 0 && "bg-gray-100"
                }`}>
                <Link to={`/jobDetail/${job.job_id}`}>{job.name}</Link>
              </p>
              <p className={`p-2 text-gray-700 border-b col-span-2 ${i % 2 === 0 && "bg-gray-100"}`}>{job.salary}</p>
              <p className={`p-2 text-gray-700 border-b ${i % 2 === 0 && "bg-gray-100"}`}>{job.appCount || 0}</p>
              <p className={`p-2 text-gray-700 border-b ${i % 2 === 0 && "bg-gray-100"}`}>{job.rejected || 0}</p>
              <p className={`p-2 text-gray-700 border-b ${i % 2 === 0 && "bg-gray-100"}`}>{job.accepted || 0}</p>
              <p className={`p-2 text-gray-700 border-b col-span-2 ${i % 2 === 0 && "bg-gray-100"}`}>{parseDate(job.date_added, "fromNow")}</p>
              <p className={`p-2 text-gray-700 border-b ${i % 2 === 0 && "bg-gray-100"}`}>{job.status}</p>
              <p
                className={`p-2 flex justify-center text-gray-700 ${job.status === "Hiring" && "text-red-700"} font-medium border-b ${
                  i % 2 === 0 && "bg-gray-100"
                }`}>
                <span className="hover:underline cursor-pointer">Stop </span>
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyJobs;
