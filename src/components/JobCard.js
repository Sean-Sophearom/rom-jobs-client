import React, { useState } from "react";
import wp_img from "../static/img_import";
import { MdLocationPin } from "react-icons/md";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { Link, useHistory } from "react-router-dom";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { showSnackbar } from "../redux/slices/snackbar";
import { BiTimeFive } from "react-icons/bi";
import parseDate from "../hooks/useParseDate";

const JobCard = ({ job, paddingInline }) => {
  const user = useSelector((state) => state.user.data);
  const isUrgent = job.job_id % 4 === 0;
  const [isFavorite, setIsFavorite] = useState(job.favorite);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const toggleFav = async () => {
    if (!user.token) history.push("/login") || dispatch(showSnackbar({ msg: "Please log in first.", color: "red" }));
    setLoading(true);
    let apiLink;
    if (isFavorite) {
      apiLink = `/job/removeFav/${job.job_id}`;
    } else {
      apiLink = `/job/addFav/${job.job_id}`;
    }
    axios
      .post(apiLink)
      .then(() => {
        setIsFavorite(!isFavorite);
        setLoading(false);
      })
      .catch(() => setLoading(false) || history.push("/login"));
  };

  return (
    <div lang="eng" className={paddingInline ? "px-2" : null}>
      <div className="rounded-md flex flex-col border border-gray-200 shadow-md">
        <div className="relative overflow-hidden rounded-t-md">
          <Link to={`/jobDetail/${job.job_id}`}>
            <img src={wp_img[job.img].src} alt={wp_img[job.img].alt} className="hover:scale-110 transition-all duration-500" />
          </Link>

          <span className="text-sm py-[1px] px-1 bg-white absolute z-10 bottom-3 ml-3">{job.industry}</span>
          {isUrgent && <div className="absolute bg-indigo-700 z-10 top-4 -right-7 text-white px-8 py-[1px] text-sm rotate-45 font-semibold">Urgent</div>}
          <div title={isFavorite ? "Remove from my Favorite Jobs" : "Add to My Favorite Jobs"} className="absolute z-10 top-3 left-3 cursor-pointer">
            {loading ? (
              <AiOutlineLoading3Quarters fontSize={24} className="text-purple-600 animate-spin" />
            ) : isFavorite ? (
              <FcLike fontSize={24} onClick={toggleFav} />
            ) : (
              <FcLikePlaceholder fontSize={24} onClick={toggleFav} />
            )}
          </div>
        </div>
        <Link to={`/jobDetail/${job.job_id}`}>
          <div className="mx-3">
            <div className="flex justify-between pt-3 items-center text-sm">
              <span className="bg-purple-500 text-white py-1 px-2">{job.job_type}</span>
              <span>{job.salary}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-1 items-center text-sm my-2">
                <MdLocationPin fontSize={22} />
                <span>{job.location}</span>
              </div>
              <div className="flex gap-1 items-center text-sm my-2 text-gray-600">
                <BiTimeFive />
                <span>{parseDate(job.date_added, "fromNow")}</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">{job.name}</h3>
            </div>
            <div>
              <span className="text-red-500">{job.status}</span>
            </div>
            <div className="flex justify-between my-4 h-16 items-center">
              <div className="flex-1">
                {job?.tags?.map((tag) => (
                  <span key={tag} className="text-xs text-gray-400 border-gray-400 border py-[1px] px-1 inline-block mx-1 my-1">
                    {tag}
                  </span>
                ))}
              </div>
              {user.acc_type !== "employer" && (
                <div className="flex items-center">
                  <button className="btn text-sm bg-purple-600 rounded-sm">Apply Now!</button>
                </div>
              )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
