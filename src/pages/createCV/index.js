import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Container from "../../components/Container";
import axios from "../../axios";

//component
import FormContainer from "./FormContainer";
import DisplayCV from "./DisplayCV";

//loading
import Loading from "../../components/Loading";

const initialState = {
  user_info: {
    first_name: "",
    last_name: "",
    contact_number: "",
    email: "",
    date_of_birth: "",
    job_title: "",
    job_level: "",
    industry: "",
    address: "",
    city: "",
    country: "",
    github: "",
    description: "",
  },
  work_exp: [{ job_title: "", job_level: "", company: "", type_of_exp: "", city: "", country: "", start_date: "", end_date: "", description: "" }],
  education: [{ school: "", degree: "", major: "", city: "", country: "", start_date: "", end_date: "", description: "" }],
  achievement: [{ title: "", date: "", description: "" }],
  language: [{ language: "", level: "" }],
  skill: [{ skill: "", level: "" }],
  reference: [{ name: "", position: "", company: "", contact_number: "", email: "" }],
};

const text = { homeCV: { kh: "ទំព័រដើម ≫ ប្រវត្តិរូប", eng: "Home ≫ CV" }, cv: { kh: "ប្រវត្តិរូប CV", eng: "Curriculum Vitae" } };

const Index = () => {
  const prefLang = useSelector((state) => state.prefLang);
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("creating");
  const [editing, setEditing] = useState(false);
  const { user_id } = useSelector((state) => state.user.data);

  useEffect(() => (document.title = "Create CV | Rom JOBS"), []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (user_id) {
        try {
          const { data: apiRes } = await axios.get(`/cv/${user_id}`);
          const newState = { user_info: apiRes.user_info };
          const keys = Object.keys(initialState).filter((i) => i !== "user_info");
          keys.forEach((key) => (newState[key] = apiRes[key] || initialState[key]));
          setState(newState);
          setStatus("viewing");
          setLoading(false);
        } catch (err) {
          setLoading(false);
        }
      }
    })();
  }, [user_id, status]);

  const changeToEdit = () => setEditing(true);

  if (loading) return <Loading />;

  return (
    <Container>
      <div className="bg-cv bg-white bg-opacity-25 bg-center bg-cover h-64 md:h-96">
        <div className="box flex flex-col  justify-center items-center md:justify-end md:items-start h-full py-8">
          <p className="text-xl hidden md:block font-semibold">{text.homeCV[prefLang]}</p>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold">{text.cv[prefLang]}</h1>
        </div>
      </div>

      <div className="box" lang={prefLang}>
        {(status === "creating" || editing) && (
          <FormContainer state={state} setState={setState} setStatus={setStatus} setEditing={setEditing} editing={editing} />
        )}
        {status === "viewing" && !editing && <DisplayCV state={state} changeToEdit={changeToEdit} />}
      </div>
    </Container>
  );
};

export default Index;
