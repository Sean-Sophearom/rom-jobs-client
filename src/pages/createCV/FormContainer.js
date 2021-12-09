import React, { useState } from "react";
import user_male from "../../static/user_male.png";
import { FiCamera } from "react-icons/fi";
import Button from "../../components/Button";
import axios from "../../axios";
import { useSelector } from "react-redux";

import UserInfoForm from "./UserInfoForm";
import WorkExpFormContainer from "./WorkExpFormContainer";
import EducationFormContainer from "./EducationFormContainer";
import AchievementFormCotanier from "./AchievementFormContainer";
import LanguageFormContainer from "./LanguageFormContainer";
import SkillFormContainer from "./SkillFormContainer";
import ReferenceFormContainer from "./ReferenceFormContainer";

const text = {
  createCV: { kh: "បង្កើត​ CV របស់អ្នក", eng: "Create your CV" },
  editCV: { kh: "កែសម្រួល​ CV របស់អ្នក", eng: "Edit your CV" },
  createBtn: { kh: "បង្កើត", eng: "Create" },
  editBtn: { kh: "កែសម្រួល", eng: "Update" },
  back: { kh: "ត្រឡប់ក្រោយ", eng: "Go Back" },
};

const FormContainer = ({ state, setState, setStatus, editing, setEditing }) => {
  const prefLang = useSelector((state) => state.prefLang);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const tables = ["work_exp", "education", "achievement", "language", "skill", "reference"];
    const filteredState = {};

    tables.forEach((table) => {
      const tempState = state[table];
      const filteredValues = tempState.filter((item) => {
        const values = Object.values(item);
        return values.every((i) => i);
      });
      if (filteredValues.length > 0) filteredState[table] = filteredValues;
    });

    const method = editing ? "put" : "post";

    axios[method]("/cv", { user_info: state.user_info, ...filteredState })
      .then(() => setStatus("viewing") || setEditing(false))
      .catch((err) => console.log(err) || setStatus("viewing") || setEditing(false) || setLoading(false));
  };
  return (
    <div className="animate-onLoadAnimation">
      <div className="flex py-4">
        <p className="border border-b-0 p-2 border-gray-300">{text[editing ? "editCV" : "createCV"][prefLang]}</p>
        <p className="flex-1 border-b border-gray-300"></p>
      </div>

      <div className="flex items-center py-8 flex-col">
        <img src={user_male} alt="user male icons" className="rounded-full border border-gray-300 w-52 md:w-72" />
        <FiCamera className="mt-4 text-gray-500" fontSize={24} />
      </div>
      <form onSubmit={handleSubmit}>
        <UserInfoForm state={state.user_info} setState={setState} />
        <WorkExpFormContainer state={state.work_exp} setState={setState} />
        <EducationFormContainer state={state.education} setState={setState} />
        <AchievementFormCotanier state={state.achievement} setState={setState} />
        <LanguageFormContainer state={state.language} setState={setState} />
        <SkillFormContainer state={state.skill} setState={setState} />
        <ReferenceFormContainer state={state.reference} setState={setState} />
        <div className="flex justify-center gap-4">
          {editing && (
            <Button onClick={() => setEditing(false)} type="button" className="btn px-2 sm:px-4 bg-red-600 disabled:hover:bg-gray-400">
              {text.back[prefLang]}
            </Button>
          )}
          <Button type="submit" className="btn px-2 sm:px-4 bg-purple-600 disabled:hover:bg-gray-400" loading={loading}>
            {editing ? text.editBtn[prefLang] : text.createBtn[prefLang]}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormContainer;
