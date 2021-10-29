import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//redux to fetch user upon initial load either from session storage
//or from seesion storage
import { getUserFromStorage } from "./redux/slices/userSlice";
import { useDispatch } from "react-redux";

//components
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserFromStorage());
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
