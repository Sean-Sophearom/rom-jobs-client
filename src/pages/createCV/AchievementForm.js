import React from "react";
import { useSelector } from "react-redux";
import Star from "../../components/Star";

const AchievementForm = ({ state, handleChange }) => {
  //if one field is filled, require all field
  const required = Object.values({ ...state, id: undefined }).some((item) => item);
  const prefLang = useSelector((state) => state.prefLang);

  const text = {
    title: { kh: "ឈ្មោះសមិទ្ធិផល", eng: "Achievement Title" },
    date: { kh: "កាលបរិច្ឆេទ", eng: "Achievement Date" },
    description: { kh: "លម្អិតអំពីសមិទ្ធិផល", eng: "Achievement Detail" },
  };
  return (
    <div className="cv-grid-container">
      <div>
        <label htmlFor="title" className="cv-input-label">
          {text.title[prefLang]} {required && <Star />}
        </label>
        <input className="cv-input" type="text" name="title" id="title" value={state.title} onChange={handleChange} required={required} />
      </div>

      <div>
        <label htmlFor="date" className="cv-input-label">
          {text.date[prefLang]} {required && <Star />}
        </label>
        <input className="cv-input" type="date" name="date" id="date" value={state.date} onChange={handleChange} required={required} />
      </div>

      <div>
        <label htmlFor="description" className="cv-input-label">
          {text.description[prefLang]} {required && <Star />}
        </label>
        <input className="cv-input" type="text" name="description" id="description" value={state.description} onChange={handleChange} required={required} />
      </div>
    </div>
  );
};

export default AchievementForm;
