import React from "react";

const PageFour = ({ NextPageBtn, PrevPageBtn, newJob, setNewJob }) => {
  return (
    <div lang="eng" className="bg-white rounded-md p-2 md:p-4 lg:p-6 animate-onLoadAnimation">
      <div className="flex justify-center pb-4">
        <h1 className="h1 text-purple-600 text-center py-4 bg-white rounded-sm border-b border-gray-200">Create a new Job</h1>
      </div>

      <div className="flex justify-between items-center p-2 mt-4" lang="eng">
        <PrevPageBtn />
        <p className="text-lg">4/4</p>
        <NextPageBtn />
      </div>
    </div>
  );
};

export default PageFour;
