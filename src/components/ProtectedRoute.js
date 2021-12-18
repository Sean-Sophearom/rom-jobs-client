import React from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { showSnackbar } from "../redux/slices/snackbar";

const ProtectedRoute = (props) => {
  const dispatch = useDispatch();

  let user = {};
  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user"));
  } else if (sessionStorage.getItem("user")) {
    user = JSON.parse(sessionStorage.getItem("user"));
  }

  if (!user.name) {
    dispatch(showSnackbar({ msg: "Please login first.", color: "red" }));
    return <Redirect to="/login" />;
  }

  if (props.acc_type && user.acc_type !== props.acc_type) return <Redirect to="/" />;

  return <Route {...props} />;
};

export default ProtectedRoute;
