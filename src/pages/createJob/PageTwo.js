import React, { useEffect, useState } from "react";
import img_arr from "../../static/img_import";
import { TiTick } from "react-icons/ti";
import Radio from "../../components/Radio";
import Snackbar from "../../components/Snackbar";

const industries = [
  "Banking & Finance",
  "Information Technology",
  "Telecommunication",
  "Manufacturings",
  "Food and Beverages",
  "Real Estate",
  "Entertainment",
  "Automotive",
  "Insurance",
];

const categories = [
  "Backend Developer",
  "Manager",
  "Web Development",
  "Network Engineering",
  "System Development",
  "Mobile App Development",
  "Software Development",
  "System Administration",
  "Sale Consultant",
  "Project Management",
  "ERP Development",
  "Quality Assurance",
  "Design",
  "Business Analysis",
  "Data Science",
  "Communication",
  "Artifical Intelligence",
  "Digital Marketing",
];

const PageTwo = ({ NextPageBtn, PrevPageBtn, newJob, setNewJob }) => {
  const chooseImg = (imgIndex) => setNewJob({ ...newJob, img: imgIndex });
  const handleChange = (e) => setNewJob({ ...newJob, [e.target.name]: e.target.value });
  const [isOpen, setIsOpen] = useState(false);

  //check if there is a draft in localstorage
  useEffect(() => {
    if (newJob.salary) setTimeout(() => setIsOpen(true), 1000);
  }, []);
  return (
    <div lang="eng" className="bg-white rounded-md p-2 md:p-4 lg:p-6 animate-onLoadAnimation">
      <Snackbar open={isOpen} close={() => setIsOpen(false)} timeout={6000} color="green">
        Your draft has been restored.
      </Snackbar>
      <div className="flex justify-center pb-4">
        <h1 className="h1 text-purple-600 text-center py-4 bg-white rounded-sm border-b border-gray-200">Create a new Job</h1>
      </div>

      <div className="flex flex-col gap-6">
        <section>
          <h4 className="text-lg font-semibold my-2">Select a cover image</h4>
          <div className="flex flex-col gap-2 xs:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {img_arr.map((img, index) => (
              <div key={img.alt} className="w-full rounded-md relative flex justify-center items-center" onClick={() => chooseImg(index)}>
                <img
                  className={`transition-all w-full rounded-md cursor-pointer ${newJob.img === index ? "opacity-50" : "opacity-100"}`}
                  src={img.src}
                  alt={img.alt}
                />
                <TiTick className={`absolute ${newJob.img !== index && "hidden"}`} fontSize={28} />
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="py-2">
            <h4 className="text-lg font-semibold">Enter Job name:</h4>
            <h5 className="text-sm text-gray-500 mb-2">ex: Web Developer</h5>
            <input className="input" placeholder="job name..." name="name" value={newJob.name} onChange={handleChange} />
          </div>

          <div className="py-2">
            <h4 className="text-lg font-semibold">Enter Job salary:</h4>
            <h5 className="text-sm text-gray-500 mb-2">ex: 1000$ ~ 1500$</h5>
            <input className="input" placeholder="job salary..." name="salary" value={newJob.salary} onChange={handleChange} />
          </div>

          <div className="py-2">
            <h4 className="text-lg font-semibold">Enter Job description:</h4>
            <h5 className="text-sm text-gray-500 mb-2">enter a short paragraph describing the job.</h5>
            <input className="input" placeholder="description..." name="description" value={newJob.description} onChange={handleChange} />
          </div>

          <div className="py-2">
            <h4 className="text-lg font-semibold">Enter Job language:</h4>
            <h5 className="text-sm text-gray-500 mb-2">enter the prefered language for the job.</h5>
            <input className="input" placeholder="prefered language..." name="language" value={newJob.language} onChange={handleChange} />
          </div>

          <div className="py-2">
            <h4 className="text-lg font-semibold mb-2">Choose the Job category:</h4>
            <select className="select" name="category" value={newJob.category} onChange={handleChange}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="py-2">
            <h4 className="text-lg font-semibold mb-2">Choose the Job industry:</h4>
            <select className="select" name="industry" value={newJob.industry} onChange={handleChange}>
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>

          <div className="py-2">
            <h4 className="text-lg font-semibold mb-2">Choose a Job type:</h4>
            <div className="flex items-center ml-2 gap-2 mt-1">
              <Radio checked={newJob.job_type === "Full Time"} onClick={() => setNewJob({ ...newJob, job_type: "Full Time" })} />
              <p>Full Time</p>
            </div>
            <div className="flex items-center ml-2 gap-2 mt-1">
              <Radio checked={newJob.job_type === "Part Time"} onClick={() => setNewJob({ ...newJob, job_type: "Part Time" })} />
              <p>Part Time</p>
            </div>
            <div className="flex items-center ml-2 gap-2 mt-1">
              <Radio checked={newJob.job_type === "Both"} onClick={() => setNewJob({ ...newJob, job_type: "Both" })} />
              <p>Both</p>
            </div>
          </div>

          <div className="py-2">
            <h4 className="text-lg font-semibold mb-2">Choose Gender type:</h4>
            <div className="flex items-center ml-2 gap-2 mt-1">
              <Radio
                checked={newJob.gender === "Female (Prefered)"}
                onClick={() => setNewJob({ ...newJob, gender: "Female (Prefered)" })}
              />
              <p>Female (Prefered)</p>
            </div>
            <div className="flex items-center ml-2 gap-2 mt-1">
              <Radio checked={newJob.gender === "Male (Prefered)"} onClick={() => setNewJob({ ...newJob, gender: "Male (Prefered)" })} />
              <p>Male (Prefered)</p>
            </div>
            <div className="flex items-center ml-2 gap-2 mt-1">
              <Radio checked={newJob.gender === "Male (Only)"} onClick={() => setNewJob({ ...newJob, gender: "Male (Only)" })} />
              <p>Male (Only)</p>
            </div>
            <div className="flex items-center ml-2 gap-2 mt-1">
              <Radio checked={newJob.gender === "Female (Only)"} onClick={() => setNewJob({ ...newJob, gender: "Female (Only)" })} />
              <p>Female (Only)</p>
            </div>
            <div className="flex items-center ml-2 gap-2 mt-1">
              <Radio checked={newJob.gender === "Both"} onClick={() => setNewJob({ ...newJob, gender: "Both" })} />
              <p>Both</p>
            </div>
          </div>

          <div className="py-2">
            <h4 className="text-lg font-semibold mb-2">Choose a Job level:</h4>
            <div className="flex items-center ml-2 gap-2 mt-1">
              <Radio checked={newJob.level === "Entry"} onClick={() => setNewJob({ ...newJob, level: "Entry" })} />
              <p>Entry</p>
            </div>
            <div className="flex items-center ml-2 gap-2 mt-1">
              <Radio checked={newJob.level === "Junior"} onClick={() => setNewJob({ ...newJob, level: "Junior" })} />
              <p>Junior</p>
            </div>
            <div className="flex items-center ml-2 gap-2 mt-1">
              <Radio checked={newJob.level === "Senior"} onClick={() => setNewJob({ ...newJob, level: "Senior" })} />
              <p>Senior</p>
            </div>
            <div className="flex items-center ml-2 gap-2 mt-1">
              <Radio checked={newJob.level === "Top Executive"} onClick={() => setNewJob({ ...newJob, level: "Top Executive" })} />
              <p>Top Executive</p>
            </div>
          </div>

          <div className="py-2">
            <h4 className="text-lg font-semibold mb-2">Choose a Job qualification:</h4>
            <div className="flex items-center ml-2 gap-2 mt-1">
              <Radio checked={newJob.qualification === "None"} onClick={() => setNewJob({ ...newJob, qualification: "None" })} />
              <p>None</p>
            </div>
            <div className="flex items-center ml-2 gap-2 mt-1">
              <Radio checked={newJob.qualification === "Bachelor"} onClick={() => setNewJob({ ...newJob, qualification: "Bachelor" })} />
              <p>Bachelor</p>
            </div>
            <div className="flex items-center ml-2 gap-2 mt-1">
              <Radio checked={newJob.qualification === "Master"} onClick={() => setNewJob({ ...newJob, qualification: "Master" })} />
              <p>Master</p>
            </div>
            <div className="flex items-center ml-2 gap-2 mt-1">
              <Radio checked={newJob.qualification === "PhD"} onClick={() => setNewJob({ ...newJob, qualification: "PhD" })} />
              <p>PhD</p>
            </div>
          </div>
        </section>
      </div>

      <div className="flex justify-between items-center p-2 mt-4" lang="eng">
        <PrevPageBtn />
        <p className="text-lg">2/4</p>
        <NextPageBtn />
      </div>
    </div>
  );
};

export default PageTwo;
