import React, { useEffect, useState } from "react";

//compmonent
import Container from "../../components/Container";

//pages
import PageOne from "./PageOne";

//icons
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";

const jobInitialState = {
  name: "",
  category: "",
  description: "",
  gender: "",
  industry: "",
  job_type: "",
  language: "",
  level: "",
  location: "",
  qualification: "",
  salary: "",
  required_skills: "",
  available_positon: 0,
  responsibilities: [],
  requirements: [],
  tags: [],
  img: 0,
};

const CreateJob = () => {
  const [page, setPage] = useState(0);
  const [newJob, setNewJob] = useState(jobInitialState);

  //upon loading, get the prev job from localstorage if exists
  useEffect(() => {
    if (localStorage.getItem("jobDraft")) {
      setNewJob(JSON.parse(localStorage.getItem("jobDraft")));
      setPage(1);
    }
  }, []);

  const incrementPage = () => {
    setPage(page + 1);
    localStorage.setItem("jobDraft", JSON.stringify(newJob));
  };
  const decrementPage = () => {
    setPage(page - 1);
    localStorage.setItem("jobDraft", JSON.stringify(newJob));
  };

  const NextPageBtn = ({ disabled }) => (
    <button onClick={incrementPage} disabled={disabled} className="btn flex items-center gap-1">
      <span className="text-sm sm:text-base">Next Page</span>
      <AiOutlineArrowRight className="hidden md:block" />
    </button>
  );
  const PrevPageBtn = ({ disabled }) => (
    <button onClick={decrementPage} disabled={disabled} className="btn flex items-center gap-1">
      <AiOutlineArrowLeft className="hidden md:block" />
      <span className="text-sm sm:text-base">Last Page</span>
    </button>
  );
  return (
    <Container>
      <div className="box">
        {page === 0 && <PageOne NextPageBtn={NextPageBtn} PrevPageBtn={PrevPageBtn} setNewJob={setNewJob} />}
        {page === 1 && <PageTwo NextPageBtn={NextPageBtn} PrevPageBtn={PrevPageBtn} newJob={newJob} setNewJob={setNewJob} />}
        {page === 2 && <PageThree NextPageBtn={NextPageBtn} PrevPageBtn={PrevPageBtn} newJob={newJob} setNewJob={setNewJob} />}
        {page === 3 && <PageFour NextPageBtn={NextPageBtn} PrevPageBtn={PrevPageBtn} newJob={newJob} setNewJob={setNewJob} />}
      </div>
    </Container>
  );
};

export default CreateJob;
