import { useState, useEffect } from "react";
import axios from "../axios";

const useFetchJob = (job_id) => {
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/job/get/${job_id}`)
      .then(({ data }) => {
        setJob(data);
        setLoading(false);
        if (Object.keys(data).length === 0) return setNotFound(true);
      })
      .catch(() => {
        setLoading(false);
        return setNotFound(true);
      });
  }, [job_id]);

  return [job, loading, notFound];
};

export default useFetchJob;
