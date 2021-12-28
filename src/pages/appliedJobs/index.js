import React from "react";

import parseDate from "../../hooks/useParseDate";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../axios";
import Loading from "../../components/Loading";
import Container from "../../components/Container";

const Index = () => {
  const [application, setApplication] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("/app").then(({ data }) => setApplication(data) || setLoading(false));
  }, []);

  if (loading) return <Loading />;
  return (
    <Container>
      <div className="animate-onLoadAnimation" lang="eng">
        <div className="bg-business-man bg-no-repeat bg-cover md:bg-center h-48 xs:h-64 sm:h-96 mb-4">
          <div className="box flex items-center justify-center h-full md:justify-start md:items-end md:pb-8">
            <h1 lang="eng" className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Jobs ≫ All Applied Jobs
            </h1>
          </div>
        </div>

        <div className="box">
          <h2 className="text-purple-500 text-2xl sm:text-3xl font-semibold pb-4">All applied jobs</h2>

          {application.length === 0 && (
            <p className="text-gray-600 mt-4">
              You have not applied to any jobs.{" "}
              <Link className="text-purple-500 hover:underline" to="/jobs">
                Apply now.
              </Link>
            </p>
          )}

          <div className="flex flex-col-reverse">
            {application.map((app) => (
              <Link to={`/application/${app.id}`} className="border-t text-gray-600 pt-2 pb-6 hover:bg-gray-50" key={app.id}>
                <>
                  <div className="flex justify-between gap-4 pt-2">
                    <span>
                      You applied to{" "}
                      <Link to={`/jobDetail/${app.job_id}`} className="text-purple-500 hover:underline font-medium">
                        {app.job_name}
                      </Link>
                      .
                    </span>{" "}
                    <span
                      to={`/application/${app.id}`}
                      className={`text-xs sm:text-sm md:text-base font-medium capitalize ${
                        app.status === "rejected" ? "text-red-500" : app.status === "accepted" ? "text-green-400" : "text-gray-400"
                      }`}>
                      {app.status}
                    </span>
                  </div>
                  <p className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                    <BiTimeFive />
                    {parseDate(app.dateAdded, "fromNow")}
                  </p>
                </>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Index;
