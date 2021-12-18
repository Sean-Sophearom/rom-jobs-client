import React from "react";
import parseDate from "../../../hooks/useParseDate";
import { Link } from "react-router-dom";

const UpdatesTable = ({ application }) => {
  const filteredApps = application.filter((item) => item.status !== "Pending");

  return (
    <div lang="eng" className="border-2 border-gray-200 rounded flex-1">
      <div className="py-3 px-5 flex justify-between items-center bg-gray-200">
        <span>New Applications</span>
        <Link to="/application" className="text-purple-500 font-medium hover:underline">
          View All
        </Link>
      </div>

      <div className="h-80 overflow-y-auto text-sm">
        <div className="flex items-stretch flex-col-reverse">
          {application?.map((app) => (
            <Link to={`/application/${app?.id}`} key={app?.id} className="odd:bg-gray-100 min-h-[48px] py-1 px-2 flex justify-between items-center gap-2">
              <span className="flex-1">
                A candidate applied to{" "}
                <span lang="eng" className="font-semibold text-purple-500 hover:underline">
                  {app?.job_name}
                </span>
                .
              </span>
              <span className="text-xs">{parseDate(app?.dateAdded, "fromNow")}</span>
            </Link>
          ))}
        </div>
        <p className="py-4 text-center">No more activities</p>
      </div>
    </div>
  );
};

export default UpdatesTable;
