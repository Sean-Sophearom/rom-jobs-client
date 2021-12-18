import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import axios from "../../axios";
import { useSelector } from "react-redux";
import parseDate from "../../hooks/useParseDate";
import Loading from "../../components/Loading";
import { BiTimeFive } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";
import TextAreaAutoSize from "react-textarea-autosize";
import Button from "../../components/Button";
import { useRef } from "react";

const Text = ({ t1, t2, spanTwo }) => (
  <span className={spanTwo ? "md:col-span-2" : undefined}>
    {t1}: <span className="cv-text">{t2}</span>
  </span>
);

const Application = () => {
  const { id } = useParams();
  const [application, setApplication] = useState({});
  const [loading, setLoading] = useState(false);
  const [subLoading, setSubLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.user.data);

  const prefLang = useSelector((state) => state.prefLang);
  // const { user_info: info, work_exp: experiences, education, achievement, language, skill: skills, reference } = application?.cv;
  const info = application?.cv?.user_info || {};
  const experiences = application?.cv?.work_exp || [{}];
  const education = application?.cv?.education || [{}];
  const achievement = application?.cv?.achievement || [{}];
  const language = application?.cv?.language || [{}];
  const skills = application?.cv?.skill || [{}];
  const reference = application?.cv?.reference || [{}];
  const app = application?.application || {};

  const text = {
    appDetail: { kh: "ការដាក់ពាក្យ", eng: "Application Details" },
    edit: { kh: "កែសម្រួល", eng: "Edit" },

    jobDetail: { kh: "ព័ត៌មានអំពីការងារ", eng: "Job Details" },
    jobIndustry: { kh: "ស្ថ្ថាប័ន", eng: "Industry" },
    salary: { kh: "ប្រាក់ខែ", eng: "Salary" },
    job_type: { kh: "ប្រភេទការងារ", eng: "Job Type" },
    age: { kh: "អាយុ", eng: "Age" },
    level: { kh: "កម្រិតការងារ", eng: "Level" },
    gender: { kh: "ភេទ", eng: "Gender" },
    qualification: { kh: "កម្រិតអប់រំ", eng: "Qualification" },
    language: { kh: "ភាសា", eng: "Language" },
    category: { kh: "ផ្នែក", eng: "Category" },
    location: { kh: "ទីកន្លែង", eng: "Location" },
    required_skills: { kh: "ជំនាញចាំបាច់", eng: "Required Skills" },
    available_position: { kh: "ចំនួនជ្រើសរើស", eng: "Available Position" },

    applicantDetail: { kh: "ព័ត៌មានផ្ទ្ទាល់ខ្លួន", eng: "Applicant Details" },
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
    noWorkExp: { kh: "គ្ម្មានបទពិសោធន៍ការងារ", eng: "No work experiences" },
    company: { kh: "ស្ថាប័ន", eng: "Company" },
    typeOfExp: { kh: "ប្រភេទបទពិសោធន៍", eng: "Type of Experience" },
    startDate: { kh: "កាលបរិច្ឆេទចាប់ផ្តើម", eng: "Start Date" },
    endDate: { kh: "កាលបរិច្ឆេទបញ្ចប់", eng: "End Date" },
    workExpDesc: { kh: "បរិយាយអំពីបទពិសោធន៍", eng: "Experience Description" },

    education: { kh: "ការអប់រំ", eng: "Education" },
    noEducation: { kh: "គ្ម្មានការអប់រំ", eng: "No educations" },
    school: { kh: "សាលា / សាកលវិទ្យាល័យ", eng: "School / University" },
    degree: { kh: "កម្រិតសិក្សា", eng: "Degree" },
    major: { kh: "មុខជំនាញ", eng: "Major" },
    eduStartDate: { kh: "កាលបរិច្ឆេទចូលរៀន", eng: "Start Date" },
    eduEndDate: { kh: "កាលបរិច្ឆេទបញ្ចប់ការសិក្សា", eng: "End Date" },

    achievement: { kh: "សមិទ្ធិផល", eng: "Achievement" },
    noAchievement: { kh: "គ្ម្មានសមិទ្ធិផល", eng: "No achievements" },
    title: { kh: "ឈ្មោះសមិទ្ធិផល", eng: "Achievement Title" },
    achievementDate: { kh: "កាលបរិច្ឆេទ", eng: "Achievement Date" },
    achievementDesc: { kh: "លម្អិតអំពីសមិទ្ធិផល", eng: "Achievement Detail" },

    language: { kh: "ភាសា", eng: "Language" },
    noLanguage: { kh: "គ្ម្មានភាសា", eng: "No languages" },
    level: { kh: "កម្រិត", eng: "Level" },

    skill: { kh: "ជំនាញ", eng: "Skill" },
    noSkill: { kh: "គ្ម្មានជំនាញ", eng: "No skills" },

    reference: { kh: "អ្នកធានា", eng: "Reference" },
    noReference: { kh: "គ្ម្មានអ្ន្នកធានា", eng: "No references" },
    name: { kh: "ឈ្មោះ", eng: "Name" },
    position: { kh: "មុខរបរ", eng: "Position" },

    message: { kh: "ការឆ្លើយតបទៅ​ នឹងការដាក់ពាក្យ", eng: "Message to candidate" },
    msgDetail: { kh: "ប្រាប់ពីមូលហេតុដែលអ្នកយល់ព្រម ឬបដិសេដនឹងការដាក់ពាក្យនេះ", eng: "Explain why you accept or reject this candidate" },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/app/${id}`)
      .then(({ data }) => setApplication(data) || setLoading(false) || (data.message && setMessage(data.message)))
      .catch(() => setLoading(false) || setErr(true));
  }, []);

  useEffect(() => {
    subLoading || window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [subLoading]);

  const handleSubmit = (status) => {
    setSubLoading(true);
    axios
      .put(`/app/${id}`, { status, message })
      .then(() => setSubLoading(false) || setApplication({ ...application, application: { ...application.application, status } }));
  };

  if (loading) return <Loading />;
  if (err) return <Redirect to="/myProfile" />;

  return (
    <div className="animate-onLoadAnimation">
      <div className="bg-job-application bg-no-repeat bg-cover h-48 xs:h-64 sm:h-96 mb-4">
        <div className="bg-black bg-opacity-20 w-full h-full">
          <div className="box flex items-center justify-center h-full md:justify-start md:items-end md:pb-8">
            <h1 lang="eng" className="text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold">
              Jobs ≫ Application Detail
            </h1>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="pt-4">
          <h2 className="display-cv-header">{text.appDetail[prefLang]}</h2>
          <div lang="eng" className="border-t pt-4 border-gray-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <span>
                <span className="text-purple-600 font-medium">
                  {info.first_name} {info.last_name}
                </span>{" "}
                applied to{" "}
                <Link to={`/jobDetail/${app.job_id}`} className="text-purple-600 font-medium">
                  {app.name}
                </Link>
                .
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-500">
                <BiTimeFive />
                <span>{parseDate(app.dateAdded, "fromNow")}</span>
              </span>
            </div>
            <span
              className={`mt-2 block font-medium ${
                app.status === "rejected" ? "text-red-500" : app.status === "accepted" ? "text-green-400" : "text-gray-600"
              }`}>
              Status: {app.status}
            </span>
          </div>
        </div>

        <div className="py-4">
          <h2 className="display-cv-header">{text.jobDetail[prefLang]}</h2>
          <div className="display-cv-grid">
            <Text t1={text.jobIndustry[prefLang]} t2={app.industry} />
            <Text t1={text.salary[prefLang]} t2={app.salary} />
            <Text t1={text.job_type[prefLang]} t2={app.job_type} />
            <Text t1={text.age[prefLang]} t2={app.age} />
            <Text t1={text.level[prefLang]} t2={app.level} />
            <Text t1={text.gender[prefLang]} t2={app.gender} />
            <Text t1={text.qualification[prefLang]} t2={app.qualification} />
            <Text t1={text.language[prefLang]} t2={app.language} />
            <Text t1={text.category[prefLang]} t2={app.category} />
            <Text t1={text.location[prefLang]} t2={app.location} />
            <Text t1={text.required_skills[prefLang]} t2={app.required_skills} />
            <Text t1={text.available_position[prefLang]} t2={app.available_position + " pax"} />
          </div>
        </div>

        <div className="py-4">
          <h2 className="display-cv-header">{text.applicantDetail[prefLang]}</h2>
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
            <Text t1={text.description[prefLang]} t2={info.description} />
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

        {app.status === "pending" && user.acc_type === "employer" && (
          <div className="py-4">
            <h2 className="display-cv-header mb-1">{text.message[prefLang]}</h2>
            <p className="mb-4 text-gray-500 font-light">{text.msgDetail[prefLang]}</p>
            <TextAreaAutoSize
              placeholder="Enter a message for candidate..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="cv-input min-h-[90px]"
            />
            <div lang="eng" className="py-2 flex gap-4 justify-end font-semibold">
              <Button loading={subLoading} onClick={() => handleSubmit("accepted")} className="btn rounded py-2 px-4 disabled:hover:bg-gray-400 bg-green-500">
                Accept
                <TiTick fontSize={22} className="inline mb-1" />
              </Button>
              <Button loading={subLoading} onClick={() => handleSubmit("rejected")} className="btn rounded py-2 px-4 disabled:hover:bg-gray-400 bg-red-500">
                Reject
                <IoCloseSharp fontSize={22} className="inline mb-1" />
              </Button>
            </div>
          </div>
        )}

        {(app.status !== "pending" || user.acc_type !== "employer") && (
          <div lang="eng" className="py-4">
            <h2 lang={prefLang} className="display-cv-header mb-1">
              {text.message[prefLang]}
            </h2>
            <p className="py-2 pb-4" lang="eng">
              {app.message || "No message"}
            </p>
            <Link to={user.acc_type === "employer" ? "/application" : "/appliedJobs"} className="btn inline-flex items-center gap-2 bg-red-500">
              Back
              <MdArrowBack fontSize={22} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Application;
