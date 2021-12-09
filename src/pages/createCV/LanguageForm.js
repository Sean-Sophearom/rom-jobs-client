import React from "react";
import { useSelector } from "react-redux";
import Star from "../../components/Star";

const LanguageForm = ({ state, handleChange }) => {
  //if one field is filled, require all field
  const required = Object.values({ ...state, id: undefined }).some((item) => item);
  const prefLang = useSelector((state) => state.prefLang);
  const text = {
    language: { kh: "ភាសា", eng: "Language" },
    level: { kh: "កម្រិត", eng: "Level" },
  };
  return (
    <div className="cv-grid-container">
      <div>
        <label htmlFor="language" className="cv-input-label">
          {text.language[prefLang]} {required && <Star />}
        </label>
        <input className="cv-input" type="text" name="language" id="language" value={state.language} onChange={handleChange} required={required} />
      </div>

      <div>
        <label htmlFor="level_language" className="cv-input-label">
          {text.level[prefLang]} {required && <Star />}
        </label>
        <select className="cv-input" name="level" id="level_language" value={state.level} onChange={handleChange} required={required}>
          <option value=""></option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Native">Native</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageForm;
