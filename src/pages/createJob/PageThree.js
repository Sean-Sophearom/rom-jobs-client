import React, { useState } from "react";

import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

const tagsList = [
  "PHP",
  "Python",
  "JavaScript",
  "Java",
  "C#",
  ".Net",
  "Web dev",
  "Mobile Dev",
  "Backend",
  "Frontend",
  "C++",
  "Laravel",
  "ReactJs",
  "NodeJs",
  "VueJs",
  "AngularJs",
  "JQuery",
  "Ajax",
  "API dev",
];

const TagComponent = ({ primary, setNewJob, newJob }) => {
  const [isChosen, setIsChosen] = useState(newJob.tags.includes(primary));
  const onClick = () => {
    setIsChosen(false);
    if (newJob.tags.includes(primary)) {
      setNewJob({ ...newJob, tags: newJob.tags.filter((item) => item !== primary) });
    } else if (newJob.tags.length < 5) {
      setNewJob({ ...newJob, tags: [...newJob.tags, primary] });
      setIsChosen(true);
    }
  };
  const className = `cursor-pointer transition-all rounded-full border-2 text-center inline-block py-1 px-3 mx-1 my-1 ${
    isChosen ? "bg-purple-500 text-white" : newJob.tags.length < 5 ? "border-purple-500" : "border-gray-300 text-gray-600"
  }`;
  return (
    <p className={className} onClick={onClick}>
      {primary}
    </p>
  );
};

const ReqComponent = ({ primary, index, editReq, setEditReq, setNewJob, newJob }) => {
  const [input, setInput] = useState(primary);
  const updateReq = (e) => {
    e.preventDefault();
    const updatedReq = newJob.requirements.map((req, i) => (index === i ? input : req));
    setNewJob({ ...newJob, requirements: updatedReq });
    setEditReq(-1);
  };
  return (
    <div className="text-sm sm:text-base first:mt-2 last:mb-2">
      {editReq !== index ? (
        <div className="flex items-center gap-2">
          <div className="w-8 h-4 flex gap-1">
            <MdOutlineEdit onClick={() => setEditReq(index)} className="cursor-pointer text-gray-700" />
            <FaRegTrashAlt
              onClick={() => setNewJob((prev) => ({ ...prev, requirements: prev.requirements.filter((item) => item !== primary) }))}
              className="cursor-pointer text-red-600"
            />
          </div>
          <p>{primary}</p>
        </div>
      ) : (
        <form className="flex items-center gap-2" onSubmit={updateReq}>
          <input className="input border" value={input} onChange={(e) => setInput(e.target.value)} placeholder={primary} />
          <button type="submit" disabled={!input} className="btn self-stretch sm:px-5">
            update
          </button>
        </form>
      )}
    </div>
  );
};

const ResComponent = ({ primary, index, editRes, setEditRes, setNewJob, newJob }) => {
  const [input, setInput] = useState(primary);
  const updateRes = (e) => {
    e.preventDefault();
    const updatedRes = newJob.responsibilities.map((res, i) => (index === i ? input : res));
    setNewJob({ ...newJob, responsibilities: updatedRes });
    setEditRes(-1);
  };
  return (
    <div className="text-sm sm:text-base first:mt-2 last:mb-2">
      {editRes !== index ? (
        <div className="flex items-center gap-2">
          <div className="w-8 h-4 flex gap-1">
            <MdOutlineEdit onClick={() => setEditRes(index)} className="cursor-pointer text-gray-700" />
            <FaRegTrashAlt
              onClick={() => setNewJob((prev) => ({ ...prev, requirements: prev.responsibilities.filter((item) => item !== primary) }))}
              className="cursor-pointer text-red-600"
            />
          </div>
          <p>{primary}</p>
        </div>
      ) : (
        <form className="flex items-center gap-2" onSubmit={updateRes}>
          <input className="input border" value={input} onChange={(e) => setInput(e.target.value)} placeholder={primary} />
          <button type="submit" disabled={!input} className="btn self-stretch sm:px-5">
            update
          </button>
        </form>
      )}
    </div>
  );
};

const PageThree = ({ NextPageBtn, PrevPageBtn, newJob, setNewJob }) => {
  const [editReq, setEditReq] = useState(-1);
  const [editRes, setEditRes] = useState(-1);
  const [newReq, setNewReq] = useState("");
  const [newRes, setNewRes] = useState("");
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState(tagsList);

  const disabled = newJob.tags.length === 0;

  const addNewReq = (e) => {
    e.preventDefault();
    setNewJob((prev) => ({ ...prev, requirements: [...prev.requirements, newReq] }));
    setNewReq("");
  };

  const addNewRes = (e) => {
    e.preventDefault();
    setNewJob((prev) => ({ ...prev, responsibilities: [...prev.responsibilities, newRes] }));
    setNewRes("");
  };

  const addNewTag = (e) => {
    e.preventDefault();
    setNewJob((prev) => ({ ...prev, tags: [...prev.tags, newTag] }));
    setTags((prev) => [...prev, newTag]);
    setNewTag("");
  };
  return (
    <div lang="eng" className="animate-onLoadAnimation">
      <div className="flex justify-center pb-4">
        <h1 id="title" className="h1 text-purple-600 text-center py-4 bg-white rounded-sm border-b border-gray-200">
          Create a new Job
        </h1>
      </div>

      <section className="flex flex-col gap-4">
        <div className="py-2">
          <h4 className="text-lg font-semibold">Choose tags</h4>
          <h5 className="text-sm text-gray-500 mb-4">You may choose up to five tags.</h5>
          <div>
            {tags.map((tag) => (
              <TagComponent primary={tag} key={tag} newJob={newJob} setNewJob={setNewJob} />
            ))}
          </div>
          <form onSubmit={addNewTag} className="flex flex-col sm:flex-row justify-center gap-2 pt-2">
            <input type="text" className="input" value={newTag} placeholder="new tag..." onChange={(e) => setNewTag(e.target.value)} />
            <button className="btn self-center sm:self-stretch px-6 sm:px-8">Add</button>
          </form>
        </div>

        {/* <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4"> */}

        <div className="py-2">
          <h4 className="text-lg font-semibold">Job requirements</h4>
          <div>
            <h5 className="text-sm text-gray-700">Add a new requirement</h5>
            <form onSubmit={addNewReq} className="flex flex-col sm:flex-row justify-center gap-2">
              <input value={newReq} onChange={(e) => setNewReq(e.target.value)} className="input" placeholder="new requirement..." />
              <button type="submit" disabled={!newReq} className="btn self-center sm:self-stretch px-6 sm:px-8">
                Add
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-3">
            {newJob.requirements.map((req, index) => (
              <ReqComponent key={req} primary={req} index={index} editReq={editReq} setEditReq={setEditReq} setNewJob={setNewJob} newJob={newJob} />
            ))}
          </div>
        </div>

        <div className="py-2">
          <h4 className="text-lg font-semibold">Job responsibilities</h4>
          <div>
            <h5 className="text-sm text-gray-700">Add a new responsibility</h5>
            <form onSubmit={addNewRes} className="flex flex-col sm:flex-row justify-center gap-2">
              <input value={newRes} onChange={(e) => setNewRes(e.target.value)} className="input" placeholder="new responsibility..." />
              <button type="submit" disabled={!newRes} className="btn self-center sm:self-stretch px-6 sm:px-8">
                Add
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-3">
            {newJob.responsibilities.map((res, index) => (
              <ResComponent key={res} primary={res} index={index} editRes={editRes} setEditRes={setEditRes} setNewJob={setNewJob} newJob={newJob} />
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-between items-center p-2 mt-4" lang="eng">
        <PrevPageBtn to="2" />
        <p className="text-lg">3/4</p>
        <div className="group relative flex justify-end">
          <NextPageBtn to="4" disabled={disabled} />
          {disabled && (
            <p className="absolute whitespace-nowrap bg-gray-500 text-white p-1 text-sm transition-all -top-8 scale-0 group-hover:scale-100">
              Please select at least 1 tag.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageThree;
