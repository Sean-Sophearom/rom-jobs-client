import React from "react";
import parseDate from "../../../hooks/useParseDate";
import { Link } from "react-router-dom";

const UpdatesTable = ({ application }) => {
  const filteredApps = application.filter((item) => item.status !== "pending");

  return (
    <div lang="eng" className="border-2 border-gray-200 rounded flex-1">
      <div className="py-3 px-5 flex justify-between items-center bg-gray-200">
        <span>New Updates</span>
      </div>

      <div className="h-80 overflow-y-auto text-sm">
        <div className="flex items-stretch flex-col-reverse">
          {filteredApps?.map((app) => (
            <Link to={`/application/${app?.id}`} key={app?.id} className="odd:bg-gray-100 min-h-[48px] py-1 px-2 flex justify-between items-center gap-2">
              <span className="flex-1">
                You have been{" "}
                <span className={app.status === "rejected" ? "text-red-500 font-medium" : app.status === "accepted" ? "text-green-400 font-medium" : null}>
                  {app.status}
                </span>{" "}
                a role for{" "}
                <Link to={`/jobDetail/${app.job_id}`} className="font-semibold text-purple-500 hover:underline">
                  {app?.job_name}
                </Link>
                .
              </span>
              <span>{parseDate(app?.dateUpdated, "fromNow")}</span>
            </Link>
          ))}
        </div>
        <p className="py-4 text-center">No more updates</p>
      </div>
    </div>
  );
};

export default UpdatesTable;
