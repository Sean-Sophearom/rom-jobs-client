import React from "react";
import { useSelector } from "react-redux";
import EmployeePage from "./employee";
import EmployerPage from "./employer";

const Index = () => {
  const user = useSelector((state) => state.user.data);
  if (user.acc_type === "employee") return <EmployeePage />;
  return <EmployerPage />;
};

export default Index;
