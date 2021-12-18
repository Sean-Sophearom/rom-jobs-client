import { useState, useEffect } from "react";
import axios from "../axios";

const useFetchApplication = () => {
  const [application, setApplication] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("/app")
      .then((res) => setApplication(res.data) || setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  return [application, loading];
};

export default useFetchApplication;
