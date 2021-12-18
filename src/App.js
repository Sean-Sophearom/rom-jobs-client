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
import Jobs from "./pages/jobs";
import JobDetail from "./pages/jobDetail";
import CreateCV from "./pages/createCV";
import MyProfile from "./pages/myProfile";
import AppliedJobs from "./pages/appliedJobs";
import Applications from "./pages/applications";
import FavJobs from "./pages/favJobs";
import Setting from "./pages/setting";
import FourOFour from "./pages/fourOFour";

//protect route
import ProtectedRoute from "./components/ProtectedRoute";
import Snackbar from "./components/Snackbar";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserFromStorage());
    dispatch(getLangFromLocal());
  }, [dispatch]);
  return (
    <>
      <Snackbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/jobDetail/:id" component={JobDetail} />
          <ProtectedRoute path="/createjob" component={CreateJob} acc_type="employer" />
          <ProtectedRoute path="/cv" component={CreateCV} acc_type="employee" />
          <ProtectedRoute path="/myProfile" component={MyProfile} />
          <ProtectedRoute path="/appliedJobs" component={AppliedJobs} acc_type="employee" />
          <ProtectedRoute path="/application" component={Applications} />
          <ProtectedRoute path="/favJobs" component={FavJobs} />
          <ProtectedRoute path="/setting" component={Setting} />
          <Route path="*" component={FourOFour} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
