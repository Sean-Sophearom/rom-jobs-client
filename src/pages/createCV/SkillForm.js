import React from "react";
import { useSelector } from "react-redux";
import Star from "../../components/Star";

const SkillForm = ({ state, handleChange }) => {
  //if one field is filled, require all field
  const required = Object.values({ ...state, id: undefined }).some((item) => item);
  const prefLang = useSelector((state) => state.prefLang);
  const text = {
    skill: { kh: "ជំនាញ", eng: "Skill" },
    level: { kh: "កម្រិត", eng: "Level" },
  };
  return (
    <div className="cv-grid-container">
      <div>
        <label htmlFor="skill" className="cv-input-label">
          {text.skill[prefLang]} {required && <Star />}
        </label>
        <input className="cv-input" type="text" name="skill" id="skill" value={state.skill} onChange={handleChange} required={required} />
      </div>

      <div>
        <label htmlFor="level_skill" className="cv-input-label">
          {text.level[prefLang]} {required && <Star />}
        </label>
        <select className="cv-input" name="level" id="level_skill" value={state.level} onChange={handleChange} required={required}>
          <option value=""></option>
          <option value="Newbie">Newbie</option>
          <option value="Novice">Novice</option>
          <option value="Beginner">Beginner</option>
          <option value="Skilled">Skilled</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Competent">Competent</option>
          <option value="Skillfull">Skillfull</option>
          <option value="Proficient">Proficient</option>
          <option value="Advanced">Advanced</option>
          <option value="Expert">Expert</option>
        </select>
      </div>
    </div>
  );
};

export default SkillForm;
