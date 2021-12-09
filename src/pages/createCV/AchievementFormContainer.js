import React, { useState, useEffect } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import AchievementForm from "./AchievementForm";
import { useSelector } from "react-redux";

const AchievementFormCotanier = ({ state, setState }) => {
  const [err, setErr] = useState({ msg: "", show: false });
  const prefLang = useSelector((state) => state.prefLang);

  useEffect(() => {
    let myTimeout;
    if (err.show) {
      myTimeout = setTimeout(() => setErr((prev) => ({ ...prev, show: false })), 5000);
    }
    return () => clearTimeout(myTimeout);
  }, [err.show]);

  const handleChange = (index) => {
    return (e) => {
      const updatedAchievementState = state.map((achievement, i) => (i === index ? { ...achievement, [e.target.name]: e.target.value } : achievement));
      setState((prev) => ({ ...prev, achievement: updatedAchievementState }));
    };
  };

  const addForm = () => {
    if (state.length >= 5) {
      setErr({ msg: text.errAdd[prefLang], show: true });
    } else {
      const newForm = { title: "", date: "", description: "" };
      setState((prev) => ({ ...prev, achievement: [...prev.achievement, newForm] }));
    }
  };

  const removeForm = () => {
    if (state.length === 1) {
      setErr({ msg: text.errRemove[prefLang], show: true });
    } else {
      setState((prev) => ({ ...prev, achievement: prev.achievement.slice(0, -1) }));
    }
  };

  const text = {
    achievement: { kh: "សមិទ្ធិផល", eng: "Achievement" },
    add: { kh: "ថែម", eng: "Add" },
    remove: { kh: "លុប", eng: "Remove" },
    errRemove: {
      kh: "សូមទុកប្រលោះចំនួនមួយ។​ បើអ្នកគ្ម្មានសមិទ្ធិផលទេ​ សូមទុកចំហរចន្លោះទាំងអស់។",
      eng: "You must have at least 1 achievement. If you don't have any, please leave all the fields empty.",
    },
    errAdd: {
      kh: "សូមអ្នកបំពេញសមិទ្ធិផល​ត្រឹមតែប្រាំប្រលោះបានហើយ។",
      eng: "Please fill at most 5 achievements!",
    },
  };
  return (
    <div>
      <div>
        <h2 className="text-purple-500 font-semibold text-2xl">{text.achievement[prefLang]}</h2>
        <div className="flex gap-4 divide-x-2 divide-solid divide-purple-500 mt-4 mb-2">
          <button type="button" className="flex items-center gap-1 text-purple-500" onClick={addForm}>
            <BsPlusCircleFill fontSize={16} /> {text.add[prefLang]}
          </button>
          <button type="button" className="flex items-center gap-1 text-purple-500 pl-4" onClick={removeForm}>
            <AiFillMinusCircle fontSize={19} /> {text.remove[prefLang]}
          </button>
        </div>
        <h3 className={`bg-red-500 text-white font-semibold text-sm px-4 my-2 transition-all overflow-hidden ${err.show ? "max-h-96 py-2" : "max-h-0"}`}>
          {err.msg}
        </h3>
      </div>

      <div className="flex flex-col-reverse">
        {state.map((item, index) => (
          <AchievementForm key={index} state={item} handleChange={handleChange(index)} />
        ))}
      </div>
    </div>
  );
};

export default AchievementFormCotanier;
