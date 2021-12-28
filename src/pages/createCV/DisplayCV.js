import React from "react";
import { useSelector } from "react-redux";
import parseDate from "../../hooks/useParseDate";
import { BiEditAlt } from "react-icons/bi";
import Parser from "html-react-parser";

const Text = ({ t1, t2, spanTwo }) => (
  <span className={spanTwo ? "md:col-span-2" : undefined}>
    {t1}:{" "}
    <span className="cv-text" lang="eng">
      {t2}
    </span>
  </span>
);

const DisplayCV = ({ state, changeToEdit }) => {
  const prefLang = useSelector((state) => state.prefLang);
  const { user_info: info, work_exp: experiences, education, achievement, language, skill: skills, reference } = state;

  const text = {
    myCv: { kh: "ប្រវត្តិរូបខ្ញុំ", eng: "My CV" },
    edit: { kh: "កែសម្រួល", eng: "Edit" },

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
    city: { kh: "ទីក្រុង / ខេត្ត", eng: "City / Province" },
    country: { kh: "ប្រទេស", eng: "Country" },
    description: { kh: "បរិយាយអំពីខ្លួនឯង", eng: "Description" },

    workExp: { kh: "បទពិសោធន៍ការងារ", eng: "Work Experience" },
    noWorkExp: {
      kh: "គ្ម្មានបទពិសោធន៍ការងារ",
      eng: (
        <span>
          No work experiences{" "}
          <span className="text-gray-500 text-sm block">(We recommend you fill out this field to improve your chances of getting hired.)</span>
        </span>
      ),
    },
    company: { kh: "ស្ថាប័ន", eng: "Company" },
    typeOfExp: { kh: "ប្រភេទបទពិសោធន៍", eng: "Type of Experience" },
    startDate: { kh: "កាលបរិច្ឆេទចាប់ផ្តើម", eng: "Start Date" },
    endDate: { kh: "កាលបរិច្ឆេទបញ្ចប់", eng: "End Date" },
    workExpDesc: { kh: "បរិយាយអំពីបទពិសោធន៍", eng: "Experience Description" },

    education: { kh: "ការអប់រំ", eng: "Education" },
    noEducation: {
      kh: "គ្ម្មានការអប់រំ",
      eng: (
        <span>
          No educations. <span className="text-gray-500 text-sm block">(We recommend you fill out this field to improve your chances of getting hired.)</span>
        </span>
      ),
    },
    school: { kh: "សាលា / សាកលវិទ្យាល័យ", eng: "School / University" },
    degree: { kh: "កម្រិតសិក្សា", eng: "Degree" },
    major: { kh: "មុខជំនាញ", eng: "Major" },
    eduStartDate: { kh: "កាលបរិច្ឆេទចូលរៀន", eng: "Start Date" },
    eduEndDate: { kh: "កាលបរិច្ឆេទបញ្ចប់ការសិក្សា", eng: "End Date" },

    achievement: { kh: "សមិទ្ធិផល", eng: "Achievement" },
    noAchievement: {
      kh: "គ្ម្មានសមិទ្ធិផល",
      eng: (
        <span>
          No achievements. <span className="text-gray-500 text-sm block">(We recommend you fill out this field to improve your chances of getting hired.)</span>
        </span>
      ),
    },
    title: { kh: "ឈ្មោះសមិទ្ធិផល", eng: "Achievement Title" },
    achievementDate: { kh: "កាលបរិច្ឆេទ", eng: "Achievement Date" },
    achievementDesc: { kh: "លម្អិតអំពីសមិទ្ធិផល", eng: "Achievement Detail" },

    language: { kh: "ភាសា", eng: "Language" },
    noLanguage: {
      kh: "គ្ម្មានភាសា",
      eng: (
        <span>
          No languages. <span className="text-gray-500 text-sm block">(We recommend you fill out this field to improve your chances of getting hired.)</span>
        </span>
      ),
    },
    level: { kh: "កម្រិត", eng: "Level" },

    skill: { kh: "ជំនាញ", eng: "Skill" },
    noSkill: {
      kh: "គ្ម្មានជំនាញ",
      eng: (
        <span>
          No skills. <span className="text-gray-500 text-sm block">(We recommend you fill out this field to improve your chances of getting hired.)</span>
        </span>
      ),
    },

    reference: { kh: "អ្នកធានា", eng: "Reference" },
    noReference: {
      kh: "គ្ម្មានអ្ន្នកធានា",
      eng: (
        <span>
          No references. <span className="text-gray-500 text-sm block">(We recommend you fill out this field to improve your chances of getting hired.)</span>
        </span>
      ),
    },
    name: { kh: "ឈ្មោះ", eng: "Name" },
    position: { kh: "មុខរបរ", eng: "Position" },
  };

  return (
    <div className="animate-onLoadAnimation">
      <div className="flex py-4 mb-4">
        <p className="border border-b-0 py-2 px-4 border-gray-300">{text.myCv[prefLang]}</p>
        <div className="flex-1 border-b border-gray-300 flex justify-end items-center">
          <div>
            <button onClick={changeToEdit} className="btn bg-purple-600 px-4">
              <BiEditAlt />
              {text.edit[prefLang]}
            </button>
          </div>
        </div>
      </div>

      <div className="py-4">
        <h2 className="display-cv-header">{text.personalDetail[prefLang]}</h2>
        <div className="display-cv-grid">
          <Text t1={text.firstName[prefLang]} t2={info.first_name} />
          <Text t1={text.lastName[prefLang]} t2={info.last_name} />
          <Text t1={text.contactNumber[prefLang]} t2={"0" + info.contact_number} />
          <Text t1={text.email[prefLang]} t2={info.email} />
          <Text t1={text.dateOfBirth[prefLang]} t2={parseDate(info.date_of_birth)} />
          <Text t1={text.jobTitle[prefLang]} t2={info.job_title} />
          <Text t1={text.jobLevel[prefLang]} t2={info.job_level} />
          <Text t1={text.industry[prefLang]} t2={info.industry} />
          <Text t1={text.city[prefLang]} t2={info.city} />
          <Text t1={text.address[prefLang]} t2={info.address} spanTwo />
          <Text t1={text.description[prefLang]} t2={Parser(info.description)} />
        </div>
      </div>

      <div className="py-4">
        <h2 className="display-cv-header">{text.workExp[prefLang]}</h2>
        {experiences[0]?.jobTitle ? (
          experiences.map((exp) => (
            <div className="display-cv-grid" key={exp.id}>
              <Text t1={text.jobTitle[prefLang]} t2={exp.job_title} />
              <Text t1={text.jobLevel[prefLang]} t2={exp.job_level} />
              <Text t1={text.company[prefLang]} t2={exp.company} />
              <Text t1={text.typeOfExp[prefLang]} t2={exp.type_of_exp} />
              <Text t1={text.city[prefLang]} t2={exp.city} />
              <Text t1={text.country[prefLang]} t2={exp.country} />
              <Text t1={text.startDate[prefLang]} t2={parseDate(exp.start_date)} />
              <Text t1={text.endDate[prefLang]} t2={parseDate(exp.end_date)} />
              <Text t1={text.workExpDesc[prefLang]} t2={exp.description} spanTwo />
            </div>
          ))
        ) : (
          <p>{text.noWorkExp[prefLang]}</p>
        )}
      </div>

      <div className="py-4">
        <h2 className="display-cv-header">{text.education[prefLang]}</h2>
        {education[0]?.school ? (
          education.map((edu) => (
            <div className="display-cv-grid" key={edu.id}>
              <Text t1={text.school[prefLang]} t2={edu.school} />
              <Text t1={text.degree[prefLang]} t2={edu.degree} />
              <Text t1={text.major[prefLang]} t2={edu.major} />
              <Text t1={text.eduStartDate[prefLang]} t2={edu.start_date} />
              <Text t1={text.eduEndDate[prefLang]} t2={edu.end_date} />
              <Text t1={text.city[prefLang]} t2={edu.city} />
              <Text t1={text.country[prefLang]} t2={edu.country} />
            </div>
          ))
        ) : (
          <p>{text.noEducation[prefLang]}</p>
        )}
      </div>

      <div className="py-4">
        <h2 className="display-cv-header">{text.achievement[prefLang]}</h2>
        {achievement[0]?.title ? (
          achievement.map((ach) => (
            <div className="display-cv-grid" key={ach.id}>
              <Text t1={text.title[prefLang]} t2={ach.title} />
              <Text t1={text.achievementDate[prefLang]} t2={parseDate(ach.date)} />
              <Text t1={text.achievementDesc[prefLang]} t2={ach.description} spanTwo />
            </div>
          ))
        ) : (
          <p>{text.noAchievement[prefLang]}</p>
        )}
      </div>

      <div className="py-4">
        <h2 className="display-cv-header">{text.language[prefLang]}</h2>
        {language[0]?.language ? (
          language.map((lang) => (
            <div className="display-cv-grid" key={lang.id}>
              <Text t1={text.language[prefLang]} t2={lang.language} />
              <Text t1={text.level[prefLang]} t2={lang.level} />
            </div>
          ))
        ) : (
          <p>{text.noLanguage[prefLang]}</p>
        )}
      </div>

      <div className="py-4">
        <h2 className="display-cv-header">{text.skill[prefLang]}</h2>
        {skills[0]?.skill ? (
          skills.map((skill) => (
            <div className="display-cv-grid" key={skill.id}>
              <Text t1={text.skill[prefLang]} t2={skill.skill} />
              <Text t1={text.level[prefLang]} t2={skill.level} />
            </div>
          ))
        ) : (
          <p>{text.noSkill[prefLang]}</p>
        )}
      </div>

      <div className="py-4">
        <h2 className="display-cv-header">{text.reference[prefLang]}</h2>
        {reference[0].name ? (
          reference.map((ref) => (
            <div className="display-cv-grid" key={ref.id}>
              <Text t1={text.name[prefLang]} t2={ref.name} />
              <Text t1={text.position[prefLang]} t2={ref.position} />
              <Text t1={text.company[prefLang]} t2={ref.company} />
              <Text t1={text.contactNumber[prefLang]} t2={ref.contact_number} />
              <Text t1={text.email[prefLang]} t2={ref.email} />
            </div>
          ))
        ) : (
          <p>{text.noReference[prefLang]}</p>
        )}
      </div>
    </div>
  );
};

export default DisplayCV;
