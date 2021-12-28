import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import notFound from "../../static/undraw_page_not_found.svg";

const Index = () => {
  useEffect(() => (document.title = "Not found :( Rom JOBS"), []);

  return (
    <Container>
      <div className="box text-xl sm:text-2xl font-medium" lang="eng">
        <img src={notFound} className="max-w-2xl w-full mx-auto" alt="page not found" />
        <p className="text-center mt-4">The page you're looking for could not be found. You may have followed a broken link.</p>
        <div className="flex justify-center">
          <Link to="/" className="text-center bg-indigo-600 text-white p-2 rounded mt-2 hover:ring-4 ring-offset-4 ring-indigo-700 transition-all">
            Take me back
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Index;
