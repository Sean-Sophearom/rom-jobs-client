import React, { useState } from "react";
import { useSelector } from "react-redux";

//compmonent
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

//pages
import PageOne from "./PageOne";

const CreateJob = () => {
  const prefLang = useSelector((state) => state.prefLang);
  const [page, setPage] = useState(0);

  const incrementPage = () => setPage(page + 1);
  const decrementPage = () => setPage(page - 1);

  const NextPageBtn = ({ disabled }) => (
    <button onClick={incrementPage} disabled={disabled} className="btn">
      Next Page
    </button>
  );
  const PrevPageBtn = ({ disabled }) => (
    <button onClick={decrementPage} disabled={disabled} className="btn">
      Last Page
    </button>
  );
  return (
    <div lang={prefLang} className="main-bg animate-onLoadAnimation min-h-screen">
      <Navbar />
      <div className="box ">
        <PageOne prefLang={prefLang} NextPageBtn={NextPageBtn} />
      </div>
    </div>
  );
};

export default CreateJob;
