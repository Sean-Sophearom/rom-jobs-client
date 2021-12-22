import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from "../../components/Container";
import axios from "../../axios";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { GiFactory } from "react-icons/gi";
import { FaRegQuestionCircle } from "react-icons/fa";

//static svg
import waveOne from "./wave.svg";
import waveTwo from "./wave_two.svg";
import waveThree from "./wave_three.svg";
import waveFour from "./wave_four.svg";
import person_img from "./undraw_mathematics.svg";
import resume_img from "./undraw_resume.svg";
import resume_two_img from "./undraw_resume_two.svg";
import portfolio_img from "./undraw_portfolio.svg";
import team_img from "./undraw_team.svg";
import proud_img from "./undraw_proud.svg";
import at_work_img from "./undraw_at_work.svg";
import { Link } from "react-router-dom";

const faq = [
  { title: "How long did it take to build Rom JOBS?", answer: "It took about a month to build as I am a somewhat busy high school student." },
  {
    title: "What is the tech stack used to build Rom JOBS?",
    answer: (
      <span>
        For frontend, I used React as the library, Redux to manage my states and TailwindCSS for the styling. I know this can be bad for SEO which is exactly
        why I'm diving into Next.js after this project. For the backend or the api, I used Node.js and Express.js for the server and MySQL as the database. I
        also used Git and Github to control the version as well as keep tracks of all the changes on this site. The frontend is hosted on{" "}
        <a href="https://www.netlify.com/" target="_blank" className="underline font-medium text-blue-700">
          Netlify
        </a>{" "}
        and the backend on{" "}
        <a href="https://www.heroku.com/" target="_blank" className="underline font-medium text-blue-700">
          Heroku
        </a>
        .
      </span>
    ),
  },
  {
    title: "Why did I create Rom JOBS?",
    answer:
      "This site was created mainly and purely for educational purposes. In other words, it was meant to be a way for me to learn and improve my web development skill.",
  },
  {
    title: "Where did I get the inspiration?",
    answer: (
      <span>
        The design of this website is heavily inspired by{" "}
        <a href="https://www.jobify.works" target="_blank" className="underline font-medium text-blue-700">
          Jobify.works
        </a>
        {". "}
        However, it is, in no ways, meant to be a competition to their website. Everything done on this website is purely for educationcal purposes, as stated
        above.
      </span>
    ),
  },
  {
    title: "Where did I get my static assets?",
    answer: (
      <span>
        I got all the human illustrations from{" "}
        <a href="https://www.Undraw.co" target="_blank" className="underline font-medium text-blue-700">
          Undraw.co
        </a>{" "}
        and the wave svg (like the one above) from{" "}
        <a href="https://www.softr.io/tools/svg-wave-generator" target="_blank" className="underline font-medium text-blue-700">
          Softr.io
        </a>
      </span>
    ),
  },
];

const Index = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios.get("/stats").then(({ data }) => setStats(data));
  }, []);
  return (
    <Container lang="eng">
      <div className="py-10 md:pb-0 bg-white">
        <div className="box flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10">
          <img src={portfolio_img} alt="resume image" className="w-full mx-auto max-w-[280px] sm:max-w-xs md:max-w-full md:w-[40%] lg:w-[30%]" />
          <div className="w-full md:w-[60%] lg:w-[70%] pt-4 md:pt-0 md:px-6 lg:px-10 text-center md:text-left">
            <div className="h-full flex flex-col justify-center relative md:top-6">
              <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">What is Rom JOBS?</h1>
              <p className="font-medium xs:text-lg lg:text-xl my-3">
                Rom JOBS is a job finding service designed to help employees quickly and easily find and land their dream jobs.
              </p>
              <p className="my-3">
                <Link
                  to="/login"
                  className="py-2 px-4 transition-all text-white rounded-full inline self-start bg-indigo-600 hover:ring-4 ring-offset-4 ring-indigo-600">
                  Get Started
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="box py-6">
        <h2 className="text-purple-500 font-medium text-xl md:text-2xl">Frequently Asked Questions:</h2>
      </div> */}

      <img src={waveOne} className="bg-indigo-700 pb-4 md:pb-0 -mt-px relative md:-top-4 z-[-10]" />

      <div className="bg-indigo-700 py-6 md:pb-0 relative md:-top-4">
        <div className="box flex flex-col-reverse md:flex-row gap-4 md:gap-6 lg:gap-10 text-white">
          <div className="w-full md:w-[60%] lg:w-[70%] pt-4 md:pt-0 md:px-6 lg:px-10 text-center md:text-left">
            <div className="h-full flex flex-col justify-center">
              <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">Who created Rom JOBS?</h2>
              <p className="font-medium xs:text-lg lg:text-xl my-3">
                I am a 17 years old fully self-taught web developer specializing mainly in front-end development using React. More info about me below.
              </p>
              <p className="my-3 text-center md:text-left">
                <Link
                  to="/contact"
                  className="py-2 px-4 transition-all text-white rounded-full inline self-start bg-red-600 hover:ring-4 ring-offset-4 ring-red-600">
                  Contact Me
                </Link>
              </p>
            </div>
          </div>
          <img src={person_img} alt="person" className="w-full mx-auto max-w-[280px] sm:max-w-xs md:max-w-full md:w-[40%] lg:w-[30%]" />
        </div>
      </div>

      <img src={waveTwo} className="bg-yellow-300 border-t-0 pt-0 -mt-px pb-4 md:pb-0 relative md:-top-4 z-[-10]" />

      <div className="bg-yellow-300 pt-6 relative md:-top-4 text-black">
        <div className="box flex flex-col sm:flex-row gap-4 sm:gap-12 text-gray-500">
          <div className="flex flex-1 items-center flex-col text-xl bg-white p-4 rounded">
            <p className="text-3xl sm:text-2xl md:text-3xl font-medium text-gray-600">{stats.jobs || 0}</p>
            <p className="text-lg sm:text-base md:text-lg">Jobs Posted</p>
            <IoDocumentTextOutline fontSize={28} />
          </div>
          <div className="flex flex-1 items-center flex-col text-xl bg-white p-4 rounded">
            <p className="text-3xl sm:text-2xl md:text-3xl font-medium text-gray-600">{stats.employee || 0}</p>
            <p className="text-lg sm:text-base md:text-lg">User Accounts</p>
            <AiOutlineUser fontSize={28} />
          </div>
          <div className="flex flex-1 items-center flex-col text-xl bg-white p-4 rounded">
            <p className="text-3xl sm:text-2xl md:text-3xl font-medium text-gray-600">{stats.employer || 0}</p>
            <p className="text-lg sm:text-base md:text-lg">Employers</p>
            <GiFactory fontSize={28} />
          </div>
        </div>
      </div>

      <img src={waveThree} className="bg-purple-700 pb-4 md:pb-0 -mt-px relative md:-top-4 z-[-10]" />

      <div className="bg-purple-700 relative md:-top-8">
        <div className="box text-center text-white">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl">Features</h2>
          <h3 className="mt-1 md:my-4 px-4 xs:text-lg sm:text-xl font-medium">These are some of the features we provide</h3>

          <div className="flex flex-col divide-y divide-solid gap-8 md:flex-row md:divide-none md:gap-4 ">
            <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:gap-8 md:gap-4 md:flex-col md:items-start">
              <img src={resume_img} alt="resume image" className="w-full p-4 max-w-xs sm:max-w-[250px] mx-auto md:max-w-7xl md:h-[200px] lg:h-[230px] lg:p-8" />
              <div>
                <h4 className="font-semibold underline text-lg sm:text-xl md:text-2xl lg:text-3xl my-3">CV Builder</h4>
                <p>With our online CV builder, you can create the perfect Curriculum Vitae in 5 minutes.</p>
              </div>
            </div>
            <div className="p-4 flex flex-col sm:flex-row-reverse sm:items-center sm:gap-8 md:gap-4 md:flex-col md:items-start">
              <img
                src={at_work_img}
                alt="resume image"
                className="w-full p-4 max-w-xs sm:max-w-[250px] mx-auto md:max-w-7xl md:h-[200px] lg:h-[230px] lg:p-8"
              />
              <div>
                <h4 className="font-semibold underline text-lg sm:text-xl md:text-2xl lg:text-3xl my-3">Jobs Listing</h4>
                <p>Hundreds of jobs right at your fingertip. Find and land your dream job today!</p>
              </div>
            </div>
            <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:gap-8 md:gap-4 md:flex-col md:items-start">
              <img src={proud_img} alt="team image" className="w-full p-4 max-w-xs sm:max-w-[250px] mx-auto md:max-w-7xl md:h-[200px] lg:h-[230px] lg:p-8" />
              <div>
                <h4 className="font-semibold underline text-lg sm:text-xl md:text-2xl lg:text-3xl my-3">Fast Process</h4>
                <p>Sign up an account, create a CV and start applying today. Fast and completely hassle-free! </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src={waveFour} className="bg-pink-500 pb-4 md:pb-0 -mt-px relative md:-top-8 z-[-10]" />

      <div className="bg-pink-500 pb-6 relative md:-top-8">
        <div className="box">
          <h2 className="my-2 sm:my-4 font-semibold underline text-lg sm:text-2xl lg:text-3xl flex items-center gap-2">
            <FaRegQuestionCircle />
            <span className="hidden sm:inline">Frequently Asked Questions</span>
            <span title="frequently asked questions" className="sm:hidden text-2xl xs:text-3xl">
              FAQ
            </span>
          </h2>
          <div>
            {faq.map((q) => (
              <div className="py-3" key={q.title}>
                <p className="text-lg font-semibold mb-1">{q.title}</p>
                <p>{q.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Index;
