import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//redux to fetch user upon initial load either from session storage
//or from session storage
import { getUserFromStorage } from "./redux/slices/userSlice";
import { useDispatch } from "react-redux";

//redux to fetch prefered language from local storage upon load
import { getLangFromLocal } from "./redux/slices/languageSlice";

//components
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/home/";
import CreateJob from "./pages/createJob/";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserFromStorage());
    dispatch(getLangFromLocal());
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/createjob" component={CreateJob} />
      </Switch>
    </Router>
  );
};

export default App;
