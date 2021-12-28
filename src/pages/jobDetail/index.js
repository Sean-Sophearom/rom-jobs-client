import React, { useEffect, useState } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import Container from "../../components/Container";
import useFetchJob from "../../hooks/useFetchJob";
import Loading from "../../components/Loading";
import wp_img from "../../static/img_import";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../axios";
import Button from "../../components/Button";
import { showSnackbar } from "../../redux/slices/snackbar";
import parseDate from "../../hooks/useParseDate";

const Index = () => {
  const { id } = useParams();
  const history = useHistory();
  const [isFav, setIsFav] = useState({ loading: false, state: false });
  const [job, loading, notFound] = useFetchJob(id);
  const [applied, setApplied] = useState({ loading: false, state: false });
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const { isFavorite } = job;
    if (isFavorite) setIsFav((prev) => ({ ...prev, state: true }));
    if (!isFavorite) setIsFav((prev) => ({ ...prev, state: false }));

    const { applied } = job;
    if (applied) setApplied((prev) => ({ ...prev, state: true }));
    if (!applied) setApplied((prev) => ({ ...prev, state: false }));
  }, [job]);

  useEffect(() => (document.title = loading ? "Loading... | Rom JOBS" : `${job.name} | Rom JOBS`), [loading]);

  const toggleFav = () => {
    if (!user.user_id) return history.push("/login") || dispatch(showSnackbar({ msg: "Please log in first.", color: "red" }));

    setIsFav((prev) => ({ ...prev, loading: true }));

    if (!isFav.state) {
      axios
        .post(`/job/addFav/${id}`)
        .then(() => setIsFav({ state: true, loading: false }))
        .catch(() => setIsFav({ state: false, loading: false }));
    } else {
      axios
        .post(`/job/removeFav/${id}`)
        .then(() => setIsFav({ state: false, loading: false }))
        .catch(() => setIsFav({ state: true, loading: false }));
    }
  };

  const applyJob = () => {
    if (!user.name) return history.push("/login") || dispatch(showSnackbar({ msg: "Please log in first.", color: "red" }));

    setApplied((prev) => ({ ...prev, loading: true }));

    axios
      .post("/app", { job_id: id })
      .then(() => setApplied({ state: true, loading: false }))
      .catch(
        (err) =>
          setApplied({ state: false, loading: false }) ||
          (err.response.data.code === "no_cv" && history.push("/cv")) ||
          dispatch(showSnackbar({ msg: "Please create a curriculum vitae first.", color: "red" }))
      );
  };

  if (loading) return <Loading />;
  if (notFound) return <Redirect to="/404" />;

  return (
    <Container>
      <section className="bg-gray-200 py-2 sm:py-6" lang="eng">
        <div className="box flex flex-col md:flex-row md:gap-4 lg:gap-8">
          <div className="md:w-72 lg:w-96">
            <img src={wp_img[job.img]?.src} alt={wp_img[job.img]?.alt} />
          </div>
          <div className="flex-1">
            <h1 className="text-purple-500 font-semibold text-2xl my-4 md:mt-0 md:mb-1">{job.name}</h1>
            <div className="text-sm lg:text-base flex flex-col sm:flex-row gap-3 sm:gap-6 lg:gap-12 text-gray-900">
              <div className="flex flex-col gap-3 flex-1">
                <span>Industry: {job.industry}</span>
                <span>Salary: {job.salary}</span>
                <span>Job Type: {job.job_type}</span>
                <span>Age: {job.age}</span>
                <span>Level: {job.level} level</span>
                <span>Gender: {job.gender}</span>
                <span>Time posted: {parseDate(job.date_added, "fromNow")}</span>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <span>Qualification: {job.qualification}</span>
                <span>Language: {job.language}</span>
                <span>Category: {job.category}</span>
                <span>Location: {job.location}</span>
                <span>Required Skills: {job.required_skills}</span>
                <span>Available positons: {job.available_position} pax</span>
                <span className="text-red-500">Current Status: {job.status}</span>
              </div>
            </div>
            <div className="flex md:justify-end items-end pt-4 gap-3">
              <Button
                onClick={toggleFav}
                loading={isFav.loading}
                className={`px-2 py-1 disabled:hover:bg-transparent hover:scale-110 ${
                  isFav.state ? "bg-black text-white border" : "bg-gray-200 border border-gray-400 text-black"
                }`}>
                <div className={`flex items-center gap-2`}>
                  <span>{isFav.state ? "Saved" : "Save"}</span>
                  {isFav.state ? <FcLike className="hover:scale-110 transition-all" /> : <FcLikePlaceholder className="hover:scale-110 transition-all" />}
                </div>
              </Button>
              {user.acc_type !== "employer" && (
                <Button
                  onClick={applyJob}
                  disabled={applied.state || job.status === "Closed"}
                  className="btn border border-indigo-600 disabled:border-none disabled:hover:bg-gray-400 bg-indigo-600"
                  loading={applied.loading}>
                  {applied.state ? "Applied" : "Apply Now"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section lang="eng" className="box">
        <div className="text-sm sm:text-base">
          <h3 className="font-semibold text-lg text-purple-700 mt-6 mb-4 lg:mt-8 lg:mb-6">Job Descriptions</h3>
          <p className="leading-6 sm:leading-7 lg:leading-8">{job.description || "No Descriptions"}</p>
        </div>

        <div className="text-sm sm:text-base">
          <h3 className="font-semibold text-lg text-purple-700 mt-6 mb-4 lg:mt-8 lg:mb-6">Job Requirements</h3>
          <ul className="list-disc flex flex-col gap-4 sm:gap-3 list-inside">
            {job?.requirements?.map((req) => (
              <li key={req}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="text-sm sm:text-base">
          <h3 className="font-semibold text-lg text-purple-700 mt-6 mb-4 lg:mt-8 lg:mb-6">Job Responsibilities</h3>
          <ul className="list-disc flex flex-col gap-4 sm:gap-3 list-inside">
            {job?.responsibilities?.map((res) => (
              <li key={res}>{res}</li>
            ))}
          </ul>
        </div>

        {job?.tags?.lengh > 0 && (
          <div className="text-sm sm:text-base">
            <h3 className="font-semibold text-lg text-purple-700 mt-6 mb-4 lg:mt-8 lg:mb-6">Job tags</h3>
            <ul className="list-disc flex flex-col gap-2 sm:gap-1 list-inside">
              {job.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="box pb-10" lang="eng">
        <div className="mb-4 mt-2 pl-2 flex justify-between items-center text-gray-500">
          <h2 className="text-purple-600 font-semibold text-2xl">Related Jobs</h2>
          <Link to="/jobs" className="hover:underline cursor-pointer">
            See more
            <IoIosArrowForward className="inline" />
          </Link>
        </div>
        <div>
          <Carousel job={job} />
        </div>
      </section>
    </Container>
  );
};

export default Index;
