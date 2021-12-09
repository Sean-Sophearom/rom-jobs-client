import React from "react";
import { useSelector } from "react-redux";
import Star from "../../components/Star";

const ReferenceForm = ({ state, handleChange }) => {
  //if one field is filled, require all field
  const required = Object.values({ ...state, id: undefined }).some((item) => item);
  const prefLang = useSelector((state) => state.prefLang);

  const text = {
    name: { kh: "ឈ្មោះ", eng: "Name" },
    position: { kh: "មុខរបរ", eng: "Position" },
    company: { kh: "ស្ថ្ថាប័ន", eng: "Company" },
    contactNumber: { kh: "លេខទំនាក់ទំនង", eng: "Contact Number" },
    email: { kh: "អុីមែល", eng: "Email" },
  };
  return (
    <div className="cv-grid-container">
      <div>
        <label htmlFor="name_ref" className="cv-input-label">
          {text.name[prefLang]} {required && <Star />}
        </label>
        <input className="cv-input" type="text" name="name" id="name_ref" value={state.name} onChange={handleChange} required={required} />
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:gap-4">
        <div className="flex-1">
          <label htmlFor="position" className="cv-input-label">
            {text.position[prefLang]} {required && <Star />}
          </label>
          <input className="cv-input" type="text" name="position" id="position" value={state.position} onChange={handleChange} required={required} />
        </div>

        <div className="flex-1">
          <label htmlFor="company_ref" className="cv-input-label">
            {text.company[prefLang]} {required && <Star />}
          </label>
          <input className="cv-input" type="text" name="company" id="company_ref" value={state.company} onChange={handleChange} required={required} />
        </div>
      </div>

      <div>
        <label htmlFor="cr" className="cv-input-label">
          {text.contactNumber[prefLang]} {required && <Star />}
        </label>
        <div className="flex" lang="eng">
          <p className="min-h-full flex items-center px-2 bg-gray-300 text-gray-600">+855</p>
          <input className="cv-input" type="number" name="contact_number" id="cr" value={state.contact_number} onChange={handleChange} required={required} />
        </div>
      </div>

      <div>
        <label htmlFor="email_ref" className="cv-input-label">
          {text.email[prefLang]} {required && <Star />}
        </label>
        <input className="cv-input" type="email" name="email" id="email_ref" value={state.email} onChange={handleChange} required={required} />
      </div>
    </div>
  );
};

export default ReferenceForm;
