import React from "react";
import Star from "../../components/Star";
import TextareaAutosize from "react-textarea-autosize";
import countryOptions from "./countryOptions";
import { useSelector } from "react-redux";
import RichEditor from "../../components/Editor";
import parseDate from "../../hooks/useParseDate";

const industryOptions = [
  "Accounting/Audit/Tax Services",
  "Agriculture/Foresty/Fishing",
  "Airline",
  "Chemical/Plastic/Paper/Petrochemical",
  "Civil Services",
  "Cosmetics And Beauty",
  "Electronics/Electrical/Mechanical Equipment",
  "Energy/Power/Water/Oil And Gas",
  "Engineering",
  "Hotel/Hospitality",
  "Human Resources/Consultancy",
  "Industrial Machinery/Automation Equipment",
  "Information Technology",
  "Insurance",
  "Jewellery/Gems/Watches",
  "Legal Services",
  "Manufacturing",
  "Packaging",
  "Performance/Musical/Artistic",
  "Property Development/Management",
  "Real Estate",
  "Recruiting Services",
  "Health/Personal Care",
  "Tourism",
  "Food And Beverages",
  "Sports And Recreation",
  "Telecommunication",
  "Catering",
  "Automotive - Vehicle",
  "Café/Resturant",
  "Education",
  "Banking And Finance",
  "Clothing/Garment/Textile",
  "Entertainment",
  "Trading",
  "Others",
];

const UserInfoForm = ({ state, setState }) => {
  const prefLang = useSelector((state) => state.prefLang);

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, user_info: { ...prev.user_info, [e.target.name]: e.target.value } }));
  };

  const text = {
    personalDetail: { kh: "ព័ត៌មានផ្ទ្ទាល់ខ្លួន", eng: "Personal Details" },
    firstName: { kh: "នាមខ្លួន", eng: "First Name" },
    lastName: { kh: "នាមត្រកូល", eng: "Last Name" },
    contactNumber: { kh: "លេខទំនាក់ទំនង", eng: "Contact Number" },
    email: { kh: "អុីមែល", eng: "Email" },
    dateOfBirth: { kh: "ថ្ងៃខែឆ្នាំកំណើត", eng: "Date of Birth" },
    jobTitle: { kh: "ចំណងជើងការងារ", eng: "Job Title" },
    jobLevel: { kh: "កម្រិតការងារ", eng: "Job Level" },
    industry: { kh: "ប្រភេទអាជីវកម្ម", eng: "Industry" },
    address: { kh: "អាស័យដ្ឋាន", eng: "Address" },
    city: { kh: "ទីក្រុង/ខេត្ត", eng: "City/Province" },
    country: { kh: "ប្រទេស", eng: "Country" },
    description: { kh: "បរិយាយអំពីខ្លួនឯង", eng: "Description of Yourself" },
  };

  return (
    <div>
      <div>
        <h2 className="text-purple-500 font-semibold text-2xl pb-4">{text.personalDetail[prefLang]}</h2>
      </div>
      <div className="cv-grid-container">
        <div>
          <label htmlFor="first_name" className="cv-input-label">
            {text.firstName[prefLang]} <Star />
          </label>
          <input className="cv-input" type="text" name="first_name" id="first_name" value={state.first_name} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="last_name" className="cv-input-label">
            {text.lastName[prefLang]} <Star />
          </label>
          <input className="cv-input" type="text" name="last_name" id="last_name" value={state.last_name} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="contact_number" className="cv-input-label">
            {text.contactNumber[prefLang]} <Star />
          </label>
          <div className="flex" lang="eng">
            <p className="min-h-full flex items-center px-2 bg-gray-300 text-gray-600">+855</p>
            <input className="cv-input" type="number" name="contact_number" id="contact_number" value={state.contact_number} onChange={handleChange} required />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="cv-input-label">
            {text.email[prefLang]} <Star />
          </label>
          <input className="cv-input" type="email" name="email" id="email" value={state.email} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="date_of_birth" className="cv-input-label">
            {text.dateOfBirth[prefLang]} <Star />
          </label>
          <input
            className="cv-input"
            type="date"
            name="date_of_birth"
            id="date_of_birth"
            value={parseDate(state.date_of_birth, "input-cv")}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="job_title" className="cv-input-label">
            {text.jobTitle[prefLang]} <Star />
          </label>
          <input className="cv-input" type="text" name="job_title" id="job_title" value={state.job_title} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="job_level" className="cv-input-label">
            {text.jobLevel[prefLang]} <Star />
          </label>
          <select className="cv-input" name="job_level" id="job_level" value={state.job_level} onChange={handleChange} required>
            <option value></option>
            <option value="Entry Level">Entry Level</option>
            <option value="Junior Level">Junior Level</option>
            <option value="Senior Level">Senior Level</option>
            <option value="Top Executive Level">Top Executive Level</option>
          </select>
        </div>

        <div>
          <label htmlFor="industry" className="cv-input-label">
            {text.industry[prefLang]} <Star />
          </label>
          <select className="cv-input" name="industry" id="industry" value={state.industry} onChange={handleChange} required>
            <option value></option>
            {industryOptions.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-1 lg:col-span-2">
          <label htmlFor="address" className="cv-input-label">
            {text.address[prefLang]} <Star />
          </label>
          <TextareaAutosize className="cv-input" type="text" name="address" id="address" value={state.address} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="city" className="cv-input-label">
            {text.city[prefLang]} <Star />
          </label>
          <input className="cv-input" type="text" name="city" id="city" value={state.city} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="country" className="cv-input-label">
            {text.country[prefLang]} <Star />
          </label>
          <select className="cv-input" name="country" id="country" value={state.country} onChange={handleChange} required>
            <option value></option>
            {countryOptions.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div lang="eng">
          <label htmlFor="github" className="cv-input-label">
            Your Github Username
          </label>
          <input className="cv-input" type="text" name="github" id="github" value={state.github} onChange={handleChange} />
        </div>

        <div className="col-span-1 lg:col-span-2">
          <label htmlFor="description" className="cv-input-label">
            {text.description[prefLang]}
          </label>

          <RichEditor value={state.description} onChange={(e) => handleChange({ target: { name: "description", value: e } })} />
        </div>
      </div>
    </div>
  );
};

export default UserInfoForm;
