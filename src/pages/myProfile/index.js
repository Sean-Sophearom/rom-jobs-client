import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import EmployeePage from "./employee";
import EmployerPage from "./employer";

const Index = () => {
  useEffect(() => (document.title = "My Profile | Rom JOBS"), []);

  const user = useSelector((state) => state.user.data);
  if (user.acc_type === "employee") return <EmployeePage />;
  return <EmployerPage />;
};

export default Index;
