import React, { useEffect, useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { GiFactory } from "react-icons/gi";
import axios from "../../axios";

const Stats = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios.get("/stats").then(({ data }) => setStats(data));
  }, []);
  return (
    <div lang="eng" className="bg-purple-700 py-6 text-white my-8">
      <div className="box flex flex-col sm:flex-row gap-4 sm:gap-12 text-gray-500">
        <div className="flex flex-1 items-center flex-col text-xl bg-white p-4 rounded">
          <p className="text-3xl sm:text-2xl md:text-3xl font-medium text-gray-700">{stats.jobs || 0}</p>
          <p className="text-lg sm:text-base md:text-lg">Jobs Posted</p>
          <IoDocumentTextOutline fontSize={28} />
        </div>
        <div className="flex flex-1 items-center flex-col text-xl bg-white p-4 rounded">
          <p className="text-3xl sm:text-2xl md:text-3xl font-medium text-gray-700">{stats.employee || 0}</p>
          <p className="text-lg sm:text-base md:text-lg">User Accounts</p>
          <AiOutlineUser fontSize={28} />
        </div>
        <div className="flex flex-1 items-center flex-col text-xl bg-white p-4 rounded">
          <p className="text-3xl sm:text-2xl md:text-3xl font-medium text-gray-700">{stats.employer || 0}</p>
          <p className="text-lg sm:text-base md:text-lg">Employers</p>
          <GiFactory fontSize={28} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
