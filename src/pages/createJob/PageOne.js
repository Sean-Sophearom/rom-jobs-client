import React, { useState } from "react";
import Radio from "../../components/Radio";
import jobTemplate from "./jobTemplate";
import { RiArrowDownSLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const text = {
  createANewJob: {
    kh: "បង្កើតការងារថ្មី",
    eng: "Post a new Job",
  },
  choices: {
    kh: "បង្កើតការងារថ្មីដោយខ្លួនអ្នក​ ឬក៏ជ្រើសរើសគម្រូមួយ?",
    eng: "Post a new job by yourself or choose from an existing template?",
  },
  choiceOne: {
    kh: "បង្កើតដោយខ្លួនឯង",
    eng: "Post by myself.",
  },
  choiceTwo: {
    kh: "ជ្រើសរើសពីគម្រូ",
    eng: "Choose from an existing template.",
  },
};

const SingleJob = ({ job, index, chosenTemplate, setChosenTemplate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <div key={job.id} className="bg-white first:rounded-t-md last:rounded-b-md">
      <div className="flex items-center pl-2 sm:pl-4">
        <Radio checked={chosenTemplate === index} onClick={() => setChosenTemplate(job, index)} className="text-red-500" />
        <div onClick={toggleIsOpen} className="flex items-center justify-between gap-2 p-2 sm:p-3 md:p-4 flex-1 cursor-pointer">
          <h2 className="text-sm sm:text-base md:text-lg">{job.name}</h2>
          <RiArrowDownSLine fontSize={20} className={`transition-all text-gray-700 ${isOpen ? "rotate-180" : "rotate-0"}`} />
        </div>
      </div>
      <div className={`transition-all duration-300 overflow-y-hidden ${isOpen ? "max-h-[2000px]" : "max-h-0"}`}>
        <div className="p-2 sm:p-3 text-sm sm:text-base">
          <h4 className="text-purple-600 font-semibold">Responsibilities:</h4>
          <ul className="list-disc flex flex-col gap-1 mt-2 list-inside">
            {job.resp.map((resp) => (
              <li key={resp}>{resp}</li>
            ))}
          </ul>
        </div>
        <div className="p-2 sm:p-3 text-sm sm:text-base">
          <h4 className="text-purple-600 font-semibold">Requirements:</h4>
          <ul className="list-disc flex flex-col gap-1 mt-2 list-inside">
            {job.req.map((req) => (
              <li key={req}>{req}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const PageOne = ({ NextPageBtn, PrevPageBtn, setNewJob }) => {
  const [template, setTemplate] = useState(null);
  const [chosenTemplate, setChosenTemplate] = useState(null);
  const prefLang = useSelector((state) => state.prefLang);

  const chooseTemplate = (jobTemplate, index) => {
    setChosenTemplate(index);
    setNewJob((prev) => ({
      ...prev,
      name: jobTemplate.name,
      responsibilities: jobTemplate.resp,
      requirements: jobTemplate.req,
      required_skills: jobTemplate.skills,
    }));
  };

  return (
    <div lang={prefLang} className="animate-onLoadAnimation">
      <div className="flex justify-center">
        <h1 className="h1 text-purple-600 text-center py-4 bg-white rounded-sm border-b border-gray-200">{text.createANewJob[prefLang]}</h1>
      </div>

      <form className="pt-4 text-sm sm:text-base">
        <p className="font-semibold text-xl">{text.choices[prefLang]}</p>
        <div className="flex mt-4 gap-2 items-center">
          <Radio checked={template === false} onClick={() => setTemplate(false)} />
          <p>{text.choiceOne[prefLang]}</p>
        </div>
        <div className="flex mt-2 gap-2 items-center">
          <Radio checked={template === true} onClick={() => setTemplate(true)} />
          <p>{text.choiceTwo[prefLang]}</p>
        </div>
      </form>

      {template === true && (
        <>
          <p className="font-semibold text-xl mt-4" lang="eng">
            Templates:
          </p>
          <div lang="eng" className="mt-4 shadow-md rounded-md flex border border-gray-300 flex-col divide-y divide-gray-300 divide-solid">
            {jobTemplate.map((job, index) => (
              <SingleJob job={job} index={index} chosenTemplate={chosenTemplate} setChosenTemplate={chooseTemplate} />
            ))}
          </div>
        </>
      )}

      <div className="flex justify-between items-center py-2 mt-4" lang="eng">
        <div className="opacity-0">
          <PrevPageBtn disabled={true} to="0" />
        </div>
        <p className="text-lg">1/4</p>
        <NextPageBtn disabled={template !== false && chosenTemplate === null} to="2" />
      </div>
    </div>
  );
};

export default PageOne;
