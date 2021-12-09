import React, { useState, useEffect } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import LanguageForm from "./LanguageForm";
import { useSelector } from "react-redux";

const LanguageFormContainer = ({ state, setState }) => {
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
      const updatedLanguageState = state.map((language, i) => (i === index ? { ...language, [e.target.name]: e.target.value } : language));
      setState((prev) => ({ ...prev, language: updatedLanguageState }));
    };
  };

  const addForm = () => {
    if (state.length >= 7) {
      setErr({ msg: text.errAdd[prefLang], show: true });
    } else {
      const newForm = { language: "", level: "" };
      setState((prev) => ({ ...prev, language: [...prev.language, newForm] }));
    }
  };

  const removeForm = () => {
    if (state.length === 1) {
      setErr({ msg: text.errRemove[prefLang], show: true });
    } else {
      setState((prev) => ({ ...prev, language: prev.language.slice(0, -1) }));
    }
  };

  const text = {
    language: { kh: "ភាសា", eng: "Language" },
    add: { kh: "ថែម", eng: "Add" },
    remove: { kh: "លុប", eng: "Remove" },
    errRemove: {
      kh: "សូមទុកប្រលោះចំនួនមួយ។​ បើអ្នកគ្ម្មានភាសាទេ​ សូមទុកចំហរចន្លោះទាំងអស់។",
      eng: "You must have at least 1 language. If you don't have any, please leave all the fields empty.",
    },
    errAdd: {
      kh: "សូមអ្នកបំពេញភាសាត្រឹមតែប្រាំពីរប្រលោះបានហើយ។",
      eng: "Please fill at most 7 languages!",
    },
  };
  return (
    <div>
      <div>
        <h2 className="text-purple-500 font-semibold text-2xl">{text.language[prefLang]}</h2>
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
          <LanguageForm key={index} state={item} handleChange={handleChange(index)} />
        ))}
      </div>
    </div>
  );
};

export default LanguageFormContainer;
