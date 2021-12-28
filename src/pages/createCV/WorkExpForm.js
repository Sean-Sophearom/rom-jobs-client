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
    jobTitle: { kh: "ចំណងជើងការងារ", eng: "Job Title" },
    jobLevel: { kh: "កម្រិតការងារ", eng: "Job Level" },
    company: { kh: "ស្ថាប័ន", eng: "Company" },
    typeOfExp: { kh: "ប្រភេទបទពិសោធន៍", eng: "Type of Experience" },
    city: { kh: "ទីក្រុង / ខេត្ត", eng: "City/Province" },
    country: { kh: "ប្រទេស", eng: "Country" },
    startDate: { kh: "កាលបរិច្ឆេទចាប់ផ្តើម", eng: "Start Date" },
    endDate: { kh: "កាលបរិច្ឆេទបញ្ចប់", eng: "End Date" },
    description: { kh: "បរិយាយអំពីបទពិសោធន៍", eng: "Experience Description" },
  };

  return (
    <div className="cv-grid-container">
      <div>
        <label htmlFor="job_title_work" className="cv-input-label">
          {text.jobTitle[prefLang]} {required && <Star />}
        </label>
        <input className="cv-input" type="text" name="job_title" id="job_title_work" value={state.job_title} onChange={handleChange} required={required} />
      </div>

      <div>
        <label htmlFor="job_level_work" className="cv-input-label">
          {text.jobLevel[prefLang]} {required && <Star />}
        </label>
        <select className="cv-input" name="job_level" id="job_level_work" value={state.job_level} onChange={handleChange} required={required}>
          <option value=""></option>
          <option value="Entry Level">Entry Level</option>
          <option value="Junior Level">Junior Level</option>
          <option value="Senior Level">Senior Level</option>
          <option value="Top Executive Level">Top Executive Level</option>
        </select>
      </div>

      <div>
        <label htmlFor="company_work" className="cv-input-label">
          {text.company[prefLang]} {required && <Star />}
        </label>
        <input className="cv-input" type="text" name="company" id="company_work" value={state.company} onChange={handleChange} required={required} />
      </div>

      <div>
        <label htmlFor="type_of_exp" className="cv-input-label">
          {text.typeOfExp[prefLang]} {required && <Star />}
        </label>
        <select className="cv-input" name="type_of_exp" id="type_of_exp" value={state.type_of_exp} onChange={handleChange} required={required}>
          <option value=""></option>
          <option value="Working Experience">Working Experience</option>
          <option value="Internship">Internship</option>
          <option value="Volunteering">Volunteering</option>
        </select>
      </div>

      <div>
        <label htmlFor="city_work" className="cv-input-label">
          {text.city[prefLang]} {required && <Star />}
        </label>
        <input className="cv-input" type="text" name="city" id="city_work" value={state.city} onChange={handleChange} required={required} />
      </div>

      <div>
        <label htmlFor="country_work" className="cv-input-label">
          {text.country[prefLang]} {required && <Star />}
        </label>
        <select className="cv-input" name="country" id="country_work" value={state.country} onChange={handleChange} required>
          <option value></option>
          {countryOptions.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="start_date_work" className="cv-input-label">
          {text.startDate[prefLang]} {required && <Star />}
        </label>
        <input
          className="cv-input"
          type="date"
          name="start_date"
          id="start_date_work"
          value={parseDate(state.start_date, "input-cv")}
          onChange={handleChange}
          required={required}
        />
      </div>

      <div>
        <label htmlFor="end_date_work" className="cv-input-label">
          {text.endDate[prefLang]} {required && <Star />}
        </label>
        <input
          className="cv-input"
          type="date"
          name="end_date"
          id="end_date_work"
          value={parseDate(state.end_date, "input-cv")}
          onChange={handleChange}
          required={required}
        />
      </div>

      <div>
        <label htmlFor="work_desc" className="cv-input-label">
          {text.description[prefLang]} {required && <Star />}
        </label>
        <input className="cv-input" type="text" name="description" id="work_desc" value={state.description} onChange={handleChange} required={required} />
      </div>
    </div>
  );
};

export default WorkExpForm;
