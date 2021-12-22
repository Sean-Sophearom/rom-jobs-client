import React, { useState } from "react";
import wp_img_arr from "../../static/img_import";
import { IoMdCloudDone } from "react-icons/io";
import axios from "../../axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { showSnackbar } from "../../redux/slices/snackbar";

const PageFour = ({ PrevPageBtn, newJob }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const postJob = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/job", newJob);
      const job = response.data;
      dispatch(showSnackbar({ msg: "Job posted successfully.", color: "blue" }));
      setLoading(false);
      localStorage.removeItem("jobDraft");
      history.push("/jobDetail/" + job.job_id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div lang="eng" className="animate-onLoadAnimation">
      <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-12">
        <div className="max-w-2xl lg:max-w-sm">
          <img src={wp_img_arr[newJob.img].src} alt={wp_img_arr[newJob.img].alt} className="w-full" />
        </div>
        <div>
          <h1 className="text-purple-500 text-2xl xs:text-3xl font-semibold my-2 xs:my-4 sm:my-6 lg:my-2">{newJob.name}</h1>
          <div className="text-sm flex flex-col sm:flex-row sm:gap-20 lg:gap-8 xl:gap-16">
            <div className="flex flex-col gap-3">
              <p>Industry: {newJob.industry}</p>
              <p>Salary: {newJob.salary}</p>
              <p>Job Type: {newJob.job_type}</p>
              <p>Age: {newJob.age}</p>
              <p>Level: {newJob.level} level</p>
              <p>Gender: {newJob.gender}</p>
            </div>
            <div className="flex flex-col gap-3 mt-3 sm:mt-0">
              <p>Qualification: {newJob.qualification}</p>
              <p>Language: {newJob.language}</p>
              <p>Category: {newJob.category}</p>
              <p>Location: {newJob.location}</p>
              <p>Required Skills: {newJob.required_skills}</p>
              <p>Available positons: {newJob.available_position}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm sm:text-base">
        <h3 className="font-semibold text-lg text-purple-700 mt-6 mb-4 lg:mt-8 lg:mb-6">Job Descriptions</h3>
        <p className="leading-6 sm:leading-7 lg:leading-8">{newJob.description || "(No Descriptions)"}</p>
      </div>

      <div className="text-sm sm:text-base">
        <h3 className="font-semibold text-lg text-purple-700 mt-6 mb-4 lg:mt-8 lg:mb-6">Job Requirements</h3>
        <ul className="list-disc flex flex-col gap-4 sm:gap-3 list-inside">
          {newJob.requirements.map((req) => (
            <li key={req}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="text-sm sm:text-base">
        <h3 className="font-semibold text-lg text-purple-700 mt-6 mb-4 lg:mt-8 lg:mb-6">Job Responsibilities</h3>
        <ul className="list-disc flex flex-col gap-4 sm:gap-3 list-inside">
          {newJob.responsibilities.map((res) => (
            <li key={res}>{res}</li>
          ))}
        </ul>
      </div>

      {newJob.tags.lengh > 0 && (
        <div className="text-sm sm:text-base">
          <h3 className="font-semibold text-lg text-purple-700 mt-6 mb-4 lg:mt-8 lg:mb-6">Job tags</h3>
          <ul className="list-disc flex flex-col gap-2 sm:gap-1 list-inside">
            {newJob.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-between items-center py-2 mt-4" lang="eng">
        <PrevPageBtn to="3" />
        <p className="text-lg">4/4</p>
        <Button loading={loading} onClick={postJob} className="btn px-4 text-sm sm:text-base flex items-center gap-2">
          <span>Post</span> {<IoMdCloudDone className="inline" />}
        </Button>
      </div>
    </div>
  );
};

export default PageFour;
