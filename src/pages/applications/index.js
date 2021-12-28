import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from "../../components/Container";
import axios from "../../axios";
import Loading from "../../components/Loading";
import AllApplications from "./AllApplications";
import Application from "./Application";
import { Route, Switch } from "react-router-dom";

const Index = () => {
  const [application, setApplication] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.location.pathname.split("/")[2]) return;

    setLoading(true);
    axios
      .get("/app")
      .then(({ data }) => console.log(data) || setApplication(data) || setLoading(false))
      .catch(() => setLoading(false));
  }, [window.location.pathname]);

  useEffect(() => (document.title = "Applications | Rom JOBS"), []);

  if (loading) return <Loading />;

  return (
    <Container>
      <Switch>
        <Route path="/application/:id" component={Application} />
        <Route path="/application">
          <AllApplications application={application} />
        </Route>
      </Switch>
    </Container>
  );
};

export default Index;
