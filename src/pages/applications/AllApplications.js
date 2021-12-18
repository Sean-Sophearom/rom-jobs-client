import React from "react";

import parseDate from "../../hooks/useParseDate";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";

const AllApplications = ({ application }) => {
  return (
    <div className="animate-onLoadAnimation" lang="eng">
      <div className="bg-business-man bg-no-repeat bg-cover h-48 xs:h-64 sm:h-96 mb-4">
        <div className="box flex items-center justify-center h-full md:justify-start md:items-end md:pb-8">
          <h1 lang="eng" className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Jobs ≫ All Applications
          </h1>
        </div>
      </div>

      <div className="box">
        <h2 className="text-purple-500 text-2xl sm:text-3xl font-semibold pb-4 mb-4">All Applications</h2>

        {application.length === 0 && <p className="text-gray-600">There are no applications.</p>}

        <div className="flex flex-col-reverse">
          {application.map((app) => (
            <div className="border-t text-gray-600 py-2 mt-4" key={app.id}>
              <div className="flex justify-between gap-4 pt-2">
                <p className="text-sm sm:text-base">
                  <Link to={`/application/${app.id}`} className="text-purple-500 hover:underline font-medium">
                    {app.first_name} {app.last_name}
                  </Link>{" "}
                  applied to{" "}
                  <Link to={`/jobDetail/${app.job_id}`} className="text-purple-500 hover:underline font-medium">
                    {app.job_name}
                  </Link>{" "}
                  .
                </p>
                <Link
                  to={`/application/${app.id}`}
                  className={`text-xs sm:text-sm md:text-base font-medium capitalize ${
                    app.status === "rejected" ? "text-red-500" : app.status === "accepted" ? "text-green-400" : "text-gray-400"
                  }`}>
                  {app.status}
                </Link>
              </div>
              <p className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                <BiTimeFive />
                {parseDate(app.dateAdded, "fromNow")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllApplications;
