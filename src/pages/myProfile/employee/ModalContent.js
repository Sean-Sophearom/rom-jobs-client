import React, { useState } from "react";
import Button from "../../../components/Button";
import { GrFormClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import user_male from "../../../static/user_male.png";
import { FiCamera } from "react-icons/fi";
import TextareaAutosize from "react-textarea-autosize";
import axios from "../../../axios";
import parseData from "../../../hooks/useParseDate";

const ModalContent = ({ close, userInfo, items, handleChange }) => {
  const prefLang = useSelector((state) => state.prefLang);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("/user/profileInfo", { ...userInfo, date_of_birth: parseData(userInfo.date_of_birth, "input") })
      .then(close)
      .catch(close);
  };

  const text = {
    update: { kh: "ធ្វើបច្ចុប្បន្នភាពព័ត៏មានផ្ទាល់ខ្លួន", eng: "Update Information" },
    close: { kh: "បិទ", eng: "Close" },
    save: { kh: "រក្សាទុក", eng: "Save" },
  };

  return (
    <div className="bg-white px-4 sm:px-8" lang={prefLang}>
      <div className="flex justify-between items-center p-4 border-b text-lg font-medium">
        <span>{text.update[prefLang]}</span>
        <GrFormClose onClick={close} fontSize={24} className="text-gray-300 cursor-pointer" />
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center py-8 flex-col">
            <img src={user_male} alt="user male icons" className="rounded-full border border-gray-300 w-52 md:w-72" />
            <div className="relative flex justify-center items-center mt-4 cursor-pointer overflow-x-hidden p-1">
              <input type="file" className="absolute -left-8 opacity-0 cursor-pointer" />
              <FiCamera className="text-gray-500 cursor-pointer" fontSize={24} />
            </div>
          </div>

          <div className="flex flex-col gap-6 text-sm xs:text-base">
            {items.map((item) => (
              <div key={item.name} className="flex gap-1 flex-col sm:flex-row sm:gap-8">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 sm:w-[140px] md:w-[180px]">
                  <item.icon fontSize={21} />
                  <label htmlFor={item.name}>{item.display[prefLang]}</label>
                </div>
                {item.name === "address" ? (
                  <TextareaAutosize
                    className="flex-1 border rounded px-2 py-1 outline-none transition-all focus:ring-2 focus:ring-purple-500"
                    id={item.name}
                    name={item.name}
                    value={userInfo[item.value]}
                    placeholder={item.placeholder[prefLang]}
                    type={item.type}
                    required={item.required}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    className="flex-1 border rounded px-2 py-1 outline-none transition-all focus:ring-2 focus:ring-purple-500"
                    id={item.name}
                    name={item.name}
                    value={item.value === "date_of_birth" ? parseData(userInfo[item.value], "input") : userInfo[item.value]}
                    placeholder={item.placeholder[prefLang]}
                    type={item.type}
                    required={item.required}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-2 py-6 justify-end">
            <button type="button" onClick={close} className="text-purple-500 hover:bg-gray-100 transition-all px-4">
              {text.close[prefLang]}
            </button>
            <Button type="submit" className="btn bg-purple-600 px-4" loading={loading}>
              {text.save[prefLang]}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalContent;
