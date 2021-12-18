import React from "react";
import { useSelector } from "react-redux";
import { IoIosSend } from "react-icons/io";
import { RiLoader2Fill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import useFetchApplication from "../../hooks/useFetchApplication";
import Spinner from "../../components/Spinner";
import ActivityTable from "./employee/ActivityTable";
import UpdatesTable from "./UpdatesTable";

const Dashboard = () => {
  const prefLang = useSelector((state) => state.prefLang);
  const [application, loading] = useFetchApplication();

  const count = { pending: 0, accepted: 0, applied: application?.length || 0 };

  application.forEach((app) => {
    if (app?.status === "Pending") count.pending++;
    if (app?.status === "Accepted") count.accepted++;
  });

  const items = [
    { icon: IoIosSend, text: "applied", bg: "bg-purple-500" },
    { icon: RiLoader2Fill, text: "pending", bg: "bg-yellow-500" },
    { icon: TiTick, text: "accepted", bg: "bg-green-400" },
  ];

  const text = {
    myDB: { kh: "ផ្ទ្ទាំងរបស់ខ្ញុំ", eng: "My Dashboard" },
    applied: { kh: "បានដាក់ពាក្យ", eng: "Applied" },
    pending: { kh: "កំពុងរង់ចាំ", eng: "Pending" },
    accepted: { kh: "បានទទួល", eng: "Accepted" },
    myActivity: { kh: "សកម្ម្មភាពរបស់ខ្ញុំ", eng: "My Activity" },
  };

  return (
    <div lang={prefLang} className="lg:flex-1">
      <h2 className="font-semibold text-purple-600 text-2xl pt-8">{text.myDB[prefLang]}</h2>

      <div className="flex flex-col md:flex-row gap-6 py-6 text-white">
        {items.map((item) => (
          <div key={item.text} className={`flex rounded py-4 px-7 items-center gap-8 justify-between flex-1 ${item.bg}`}>
            <div className="w-[80px] text-center">
              <p className="text-3xl">{loading ? <Spinner /> : count[item.text]}</p>
              <span className="text-center">{text[item.text][prefLang]}</span>
            </div>
            <item.icon fontSize={52} />
          </div>
        ))}
      </div>

      <h2 className="font-semibold text-purple-600 text-2xl">{text.myActivity[prefLang]}</h2>
      <div className="flex flex-col md:flex-row gap-4 py-6 text-gray-500">
        <ActivityTable application={application} />
        <UpdatesTable application={application} />
      </div>
    </div>
  );
};

export default Dashboard;
