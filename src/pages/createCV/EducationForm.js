import React from "react";
import { useSelector } from "react-redux";
import Star from "../../components/Star";
import countryOptions from "./countryOptions";
import parseDate from "../../hooks/useParseDate";

const WorkExpForm = ({ state, handleChange }) => {
  //if one field is filled, require all field
  const required = Object.values({ ...state, id: undefined }).some((item) => item);
  const prefLang = useSelector((state) => state.prefLang);

  const text = {
    school: { kh: "សាលា / សាកលវិទ្យាល័យ", eng: "School / University" },
    degree: { kh: "កម្រិតសិក្សា", eng: "Degree" },
    major: { kh: "មុខជំនាញ", eng: "Major" },
    startDate: { kh: "កាលបរិច្ឆេទចូលរៀន", eng: "Start Date" },
    endDate: { kh: "កាលបរិច្ឆេទបញ្ចប់ការសិក្សា", eng: "End Date" },
    city: { kh: "ទីក្រុង / ខេត្ត", eng: "City / Province" },
    country: { kh: "ប្រទេស", eng: "Country" },
    currentlyGoingHere: { kh: "បច្ចុប្បន្នខ្ញុំកំពុងបន្តថ្នាក់បរិញ្ញាប័ត្ររបស់ខ្ញុំ", eng: "I am currently pursuing my degree." },
  };

  return (
    <div className="cv-grid-container">
      <div>
        <label htmlFor="school" className="cv-input-label">
          {text.school[prefLang]} {required && <Star />}
        </label>
        <input className="cv-input" type="text" name="school" id="school" value={state.school} onChange={handleChange} required={required} />
      </div>

      <div>
        <label htmlFor="degree" className="cv-input-label">
          {text.degree[prefLang]} {required && <Star />}
        </label>
        <select className="cv-input" name="degree" id="degree" value={state.degree} onChange={handleChange} required={required}>
          <option value=""></option>
          <option value="High School">High School</option>
          <option value="Associate">Associate</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Master">Master</option>
          <option value="Doctoral">Doctoral</option>
        </select>
      </div>

      <div>
        <label htmlFor="major" className="cv-input-label">
          {text.major[prefLang]} {required && <Star />}
        </label>
        <input className="cv-input" type="text" name="major" id="major" value={state.major} onChange={handleChange} required={required} />
      </div>

      <div className="flex gap-4 flex-1 flex-col row-span-2 lg:row-span-1 lg:flex-row">
        <div className="flex-1">
          <label htmlFor="start_date_edu" className="cv-input-label">
            {text.startDate[prefLang]} {required && <Star />}
          </label>
          <input
            className="cv-input"
            type="date"
            name="start_date"
            id="start_date_edu"
            value={parseDate(state.start_date, "input-cv")}
            onChange={handleChange}
            required={required}
          />
        </div>

        <div className="flex-1">
          <label htmlFor="end_date_education" className="cv-input-label">
            {text.endDate[prefLang]} {required && <Star />}
          </label>
          <input
            className="cv-input"
            type="date"
            name="end_date"
            id="end_date_education"
            value={parseDate(state.end_date, "input-cv")}
            onChange={handleChange}
            required={required}
          />
        </div>
      </div>

      <div>
        <label htmlFor="city_education" className="cv-input-label">
          {text.city[prefLang]} {required && <Star />}
        </label>
        <input className="cv-input" type="text" name="city" id="city_education" value={state.city} onChange={handleChange} required={required} />
      </div>

      <div>
        <label htmlFor="country_education" className="cv-input-label">
          {text.country[prefLang]} {required && <Star />}
        </label>
        <select className="cv-input" name="country" id="country_education" value={state.country} onChange={handleChange} required>
          <option value></option>
          {countryOptions.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2 items-center">
        <input type="checkbox" className="cursor-pointer" />
        <p>{text.currentlyGoingHere[prefLang]}</p>
      </div>
    </div>
  );
};

export default WorkExpForm;
