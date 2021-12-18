import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Container from "../../components/Container";
import JobCard from "../../components/JobCard";
import axios from "../../axios";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

const Index = () => {
  const prefLang = useSelector((state) => state.prefLang);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/job/fav")
      .then(({ data }) => setJobs(data) || setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  const text = {
    path: { kh: "ការងារ ≫ ការងារដែលបានរក្សាទុក", eng: "Jobs ≫ My Favorite Jobs" },
    heading: { kh: "ការងារដែលបានរក្សាទុក", eng: "My Favorite Jobs" },
    noJobs: { kh: "អ្នកមិនទាន់បានរក្សាទុកការងារណាមួយទេ។", eng: "You have not saved any jobs." },
    saveNow: { kh: "ទៅរក្សាឥឡូវនេះ", eng: "Go Now" },
  };

  if (loading) return <Loading />;
  return (
    <Container>
      <div lang={prefLang} className="bg-business-man bg-no-repeat bg-cover h-48 xs:h-64 sm:h-96 mb-4">
        <div className="box flex items-center justify-center h-full md:justify-start md:items-end md:pb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{text.path[prefLang]}</h1>
        </div>
      </div>

      <div className="box">
        <h1 className="text-purple-600 font-semibold text-2xl border-b py-4 mb-4">{text.heading[prefLang]}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
          {jobs.length > 0 && jobs.map((job) => <JobCard key={job.job_id} job={job} />)}
        </div>

        {jobs.length === 0 && (
          <>
            <p className="inline">{text.noJobs[prefLang]} </p>
            <Link to="/jobs" className="text-purple-500 hover:underline">
              {text.saveNow[prefLang]}
            </Link>
          </>
        )}
      </div>
    </Container>
  );
};

export default Index;
