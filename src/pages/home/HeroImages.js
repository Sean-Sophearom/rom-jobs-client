import React from "react";

//react router
import { Link } from "react-router-dom";

//react redux
import { useSelector } from "react-redux";

//static
import webDevImg from "../../static/web_dev.svg";
import jobImgOne from "../../static/job_svg_one.svg";
import jobImgTwo from "../../static/job_svg_two.svg";
import Button from "../../components/Button";

const text = {
  aboutUs: {
    eng: "About Us",
    kh: "អំពីយើង",
    desc: {
      eng: "Rom Jobs is a job finding service in Cambodia. Sign in and start applying now!",
      kh: (
        <span lang="eng">
          Rom JOBS <span lang="kh">គឺជាអ្នកជំនាញស្វែងរកការងារ ឈានមុខគេនៅកម្ពុជា។ បង្កើតគណនី ហើយចាប់ផ្តើមដាក់ពាក្យឥឡូវនេះ។</span>
        </span>
      ),
    },
    btnTxt: { eng: "Learn More", kh: "ស្វែងយល់បន្ថែម" },
  },
  whyUs: {
    eng: "Why choose Rom JOBS?",
    kh: (
      <span>
        ហេតុអ្វីជ្រើសយក{" "}
        <span lang="eng" className="text-3xl">
          Rom JOBS?
        </span>
      </span>
    ),
    desc: {
      eng: "With hundreds of jobs at your fingertip, landing your dream job is just a few clicks away.",
      kh: "ជាមួយនឹងការងារជាច្រើនរបស់យើង លោកអ្នកអាចរកការងារដែលអ្នកចូលចិត្តចំណាយត្រឹមតែពីរបីជំហានប៉ុណ្ណោះ!",
    },
    btnTxt: { eng: "Register Now", kh: "ចុះឈ្មោះឥឡូវនេះ" },
  },
  jobAnnouncement: {
    eng: "Job Posting",
    kh: "ឱកាសការងារ",
    desc: {
      eng: "Be able to access to our huge pool of job opportunities. Beat the crowd and start applying for your next job now!",
      kh: "អ្នកអាចចូលរកការងារជាច្រើននៅក្នុងគេហទំព័ររបស់យើង ចាប់យកឱកាស ហើយចាប់ផ្តើមដាក់ពាក្យសុំការងារឥឡូវនេះ។",
    },
    btnTxt: { eng: "Explore Jobs", kh: "ស្វែងរកការងារ" },
  },
};

const CTAButton = ({ to, text }) => (
  <Link to={to} className="self-center">
    <Button className="bg-red-600 hover:scale-110">{text}</Button>
  </Link>
);

export const HeroImageOne = ({ index }) => {
  const prefLang = useSelector((state) => state.prefLang);
  let className = "";
  switch (index) {
    case 0:
      className = "translate-x-0";
      break;
    case 1:
      className = "-translate-x-full opacity-0";
      break;
    case 2:
      className = "translate-x-full opacity-0";
      break;
    default:
      console.log("something went wrong");
  }
  return (
    <div className={`hero-img-slider-container absolute ${className}`}>
      <div className="flex flex-col gap-4 lg:gap-8 text-center lg:text-left">
        <h1 className="text-purple-700 text-3xl sm:text-4xl font-bold">{text.jobAnnouncement[prefLang]}</h1>
        <p className="text-lg font-semibold">{text.jobAnnouncement.desc[prefLang]}</p>
        <CTAButton text={text.jobAnnouncement.btnTxt[prefLang]} to="/jobs" />
      </div>
      <img src={webDevImg} className="lg:w-[400px] w-[300px] pl-4" alt="decorative img" />
    </div>
  );
};

export const HeroImageTwo = ({ index }) => {
  const prefLang = useSelector((state) => state.prefLang);
  let className = "";
  switch (index) {
    case 0:
      className = "translate-x-full opacity-0";
      break;
    case 1:
      className = "translate-x-0";
      break;
    case 2:
      className = "-translate-x-full opacity-0";
      break;
    default:
      console.log("something went wrong");
  }
  return (
    <div className={`hero-img-slider-container absolute ${className}`}>
      <div className="flex flex-col gap-4 lg:gap-8 text-center lg:text-left">
        <h1 className="text-purple-700 text-3xl sm:text-4xl font-bold">{text.whyUs[prefLang]}</h1>
        <p className="text-lg font-semibold">{text.whyUs.desc[prefLang]}</p>
        <CTAButton text={text.whyUs.btnTxt[prefLang]} to="/register" />
      </div>
      <img src={jobImgTwo} className="lg:w-[400px] w-[300px] pl-4" alt="decorative img" />
    </div>
  );
};

export const HeroImageThree = ({ index }) => {
  const prefLang = useSelector((state) => state.prefLang);
  let className = "";
  switch (index) {
    case 0:
      className = "-translate-x-full opacity-0";
      break;
    case 1:
      className = "translate-x-full opacity-0";
      break;
    case 2:
      className = "translate-x-0";
      break;
    default:
      console.log("something went wrong");
  }
  return (
    <div className={`hero-img-slider-container ${className}`}>
      <div className="flex flex-col gap-4 lg:gap-8 text-center lg:text-left">
        <h1 className="text-purple-700 text-3xl sm:text-4xl font-bold">{text.aboutUs[prefLang]}</h1>
        <p className="text-lg font-semibold">{text.aboutUs.desc[prefLang]}</p>
        <CTAButton text={text.aboutUs.btnTxt[prefLang]} to="/about" />
      </div>
      <img src={jobImgOne} className="lg:w-[400px] w-[300px] pl-4 " alt="decorative img" />
    </div>
  );
};
