import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import notFound from "../../static/undraw_page_not_found.svg";

const index = () => {
  return (
    <Container>
      <div className="box" lang="eng">
        <img src={notFound} className="max-w-2xl w-full mx-auto" alt="page not found" />
        <p className="text-center text-xl sm:text-2xl font-medium mt-4">
          The page you're looking for is not found. You may have followed a broken link.
          <Link to="/" className="block text-center text-purple-600 underline hover:no-underline">
            Go back to homepage
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default index;
