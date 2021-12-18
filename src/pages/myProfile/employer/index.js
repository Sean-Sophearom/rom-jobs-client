import React from "react";
import Modal from "../../../components/Modal";
import Container from "../../../components/Container";
import Dashboard from "./Dashboard";
import MyJobs from "./MyJobs";

const Index = () => {
  return (
    <>
      <Modal></Modal>
      <Container>
        <div className="box">
          <Dashboard />
          <MyJobs />
        </div>
      </Container>
    </>
  );
};

export default Index;
