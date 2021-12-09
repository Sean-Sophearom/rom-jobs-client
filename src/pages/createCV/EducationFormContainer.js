import React, { useState, useEffect } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import EducationForm from "./EducationForm";
import { useSelector } from "react-redux";

const EducationFormContainer = ({ state, setState }) => {
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
      const updatedEducationState = state.map((education, i) => (i === index ? { ...education, [e.target.name]: e.target.value } : education));
      setState((prev) => ({ ...prev, education: updatedEducationState }));
    };
  };

  const addForm = () => {
    if (state.length >= 7) {
      setErr({ msg: text.errAdd[prefLang], show: true });
    } else {
      const newForm = { school: "", degree: "", major: "", city: "", country: "", start_date: "", end_date: "", description: "" };
      setState((prev) => ({ ...prev, education: [...prev.education, newForm] }));
    }
  };

  const removeForm = () => {
    if (state.length === 1) {
      setErr({ msg: text.errRemove[prefLang], show: true });
    } else {
      setState((prev) => ({ ...prev, education: prev.education.slice(0, -1) }));
    }
  };

  const text = {
    education: { kh: "ការអប់រំ", eng: "Education" },
    add: { kh: "ថែម", eng: "Add" },
    remove: { kh: "លុប", eng: "Remove" },
    errRemove: {
      kh: "សូមទុកប្រលោះចំនួនមួយ។​ បើអ្នកគ្ម្មានការអប់រំទេ​ សូមទុកចំហរចន្លោះទាំងអស់។",
      eng: "You must have at least 1 education. If you don't have any, please leave all the fields empty.",
    },
    errAdd: {
      kh: "សូមអ្នកបំពេញការអប់រំ​ត្រឹមតែប្រាំពីរប្រលោះបានហើយ។",
      eng: "Please fill at most 7 educations!",
    },
  };

  return (
    <div>
      <div>
        <h2 className="text-purple-500 font-semibold text-2xl">{text.education[prefLang]}</h2>
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
          <EducationForm key={index} state={item} handleChange={handleChange(index)} />
        ))}
      </div>
    </div>
  );
};

export default EducationFormContainer;
