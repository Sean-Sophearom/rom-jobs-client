import React from "react";
import Container from "../../components/Container";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import TextareaAutosize from "react-textarea-autosize";
import { useDispatch } from "react-redux";
import { showSnackbar } from "../../redux/slices/snackbar";

const Index = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(showSnackbar({ msg: "Please fill in all the fields.", color: "red" }));
    dispatch(showSnackbar({ msg: "Your message have been sent successfuly.", color: "blue" }));
  };

  return (
    <Container lang="eng">
      <div className="bg-contact bg-no-repeat bg-center md:bg-bottom bg-cover h-48 xs:h-64 sm:h-96 mb-4">
        <div className="bg-white bg-opacity-40 h-full">
          <div className="box flex items-center justify-center h-full md:justify-start md:items-end">
            <h1 lang="eng" className="text-5xl sm:text-6xl md:text-7xl font-bold">
              Contact US
            </h1>
          </div>
        </div>
      </div>

      <div className="box flex flex-col gap-2 text-lg pt-6">
        <h2 className="mb-2 font-semibold text-2xl sm:text-3xl lg:text-4xl text-purple-600">Contact Info</h2>
        <p className="flex items-center gap-2">
          <AiOutlineMail /> romjobs.co@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <AiOutlinePhone /> 0964260853
        </p>
      </div>

      <div className="box">
        <h2 className="mb-4 font-semibold text-2xl sm:text-3xl lg:text-4xl text-purple-600">Send us a message</h2>
        <form onSubmit={handleSubmit}>
          <div className="md:flex gap-8">
            <div className="flex-1">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">
                  Your Name <span className="text-gray-400 text-xs">(Optional)</span>
                </label>
                <input id="name" type="text" className="cv-input rounded" />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="email">Your Email</label>
                <input id="email" type="email" required className="cv-input rounded" />
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4 md:mt-0 flex-1">
              <label htmlFor="message">Your Message</label>
              <TextareaAutosize minRows={3} maxRows={20} id="message" required className="cv-input md:flex-1 rounded" />
            </div>
          </div>
          <div className="py-2 pt-6 flex items-center justify-center">
            <button className="rounded-full bg-purple-600 px-6 py-2 hover:ring-2 ring-purple-600 ring-offset-2 transition-all text-white" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Index;
