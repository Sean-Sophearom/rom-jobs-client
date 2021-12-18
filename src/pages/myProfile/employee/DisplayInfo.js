import React from "react";
import user_male from "../../../static/user_male.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import parseDate from "../../../hooks/useParseDate";

const DisplayInfo = ({ showModal, items, userInfo }) => {
  const user = useSelector((state) => state.user.data.name);

  return (
    <div lang="eng">
      <div className="flex items-center py-8 gap-2 flex-col">
        <img src={user_male} alt="user male icons" className="rounded-full border border-gray-300 w-52 md:w-72" />
        <button className="text-purple-500 underline font-medium hover:no-underline" onClick={showModal}>
          Update Profile
        </button>
      </div>

      <h2 className="font-semibold text-2xl uppercase">{user}</h2>
      <div className="flex flex-col gap-4 py-4">
        {items.map((item) => (
          <div className="flex gap-4 items-center text-sm xs:text-base" key={item.name}>
            <item.icon fontSize={21} />
            <p>{item.name === "date_of_birth" ? parseDate(userInfo[item.name]) : userInfo[item.name]}</p>
          </div>
        ))}
      </div>
      <Link to="/cv">
        <h3 className="text-center text-purple-500 underline font-medium hover:no-underline">My CV</h3>
      </Link>
    </div>
  );
};

export default DisplayInfo;
