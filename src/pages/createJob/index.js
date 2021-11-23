import React, { useEffect, useRef, useState } from "react";
import { Switch, Route, useHistory, Link } from "react-router-dom";

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
  category: "Web Development",
  description: "",
  gender: "",
  industry: "Information Technology",
  job_type: "",
  age: 18,
  language: "",
  level: "",
  location: "Phnom Penh",
  qualification: "",
  salary: "",
  required_skills: "",
  available_position: 1,
  responsibilities: [],
  requirements: [],
  tags: [],
  img: 0,
};

const CreateJob = () => {
  const [newJob, setNewJob] = useState(jobInitialState);
  const history = useHistory();
  const headerRef = useRef();

  //upon loading, get the prev job from localstorage if exists
  useEffect(() => {
    if (localStorage.getItem("jobDraft")) {
      setNewJob(JSON.parse(localStorage.getItem("jobDraft")));
      history.push("/createjob/2");
    }
  }, [history]);

  useEffect(() => {
    localStorage.setItem("jobDraft", JSON.stringify(newJob));
  }, [newJob]);

  const incrementPage = () => {
    headerRef.current.scrollIntoView();
  };
  const decrementPage = () => {
    headerRef.current.scrollIntoView();
  };

  const NextPageBtn = ({ disabled, to }) => (
    <Link to={`/createjob/${disabled ? Number(to) - 1 : to}`}>
      <button onClick={incrementPage} disabled={disabled} className="btn flex items-center gap-1">
        <span className="text-sm sm:text-base">Next Page</span>
        <AiOutlineArrowRight className="hidden md:block" />
      </button>
    </Link>
  );

  const PrevPageBtn = ({ disabled, to }) => (
    <Link to={`/createjob/${disabled ? Number(to) + 1 : to}`}>
      <button onClick={decrementPage} disabled={disabled} className="btn flex items-center gap-1">
        <AiOutlineArrowLeft className="hidden md:block" />
        <span className="text-sm sm:text-base">Last Page</span>
      </button>
    </Link>
  );

  return (
    <Container>
      <div className="box" ref={headerRef}>
        <Switch>
          <Route path="/createjob/1" exact>
            <PageOne NextPageBtn={NextPageBtn} PrevPageBtn={PrevPageBtn} setNewJob={setNewJob} />
          </Route>
          <Route path="/createjob/2" exact>
            <PageTwo NextPageBtn={NextPageBtn} PrevPageBtn={PrevPageBtn} newJob={newJob} setNewJob={setNewJob} />
          </Route>
          <Route path="/createjob/3" exact>
            <PageThree NextPageBtn={NextPageBtn} PrevPageBtn={PrevPageBtn} newJob={newJob} setNewJob={setNewJob} />
          </Route>
          <Route path="/createjob/4" exact>
            <PageFour NextPageBtn={NextPageBtn} PrevPageBtn={PrevPageBtn} newJob={newJob} setNewJob={setNewJob} />
          </Route>
        </Switch>
      </div>
    </Container>
  );
};

export default CreateJob;
