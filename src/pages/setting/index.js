import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../../components/Container";
import Input from "../../components/Input";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";
import Modal from "../../components/Modal";
import { BsTrash } from "react-icons/bs";
import { clearUser } from "../../redux/slices/userSlice";
import { useHistory } from "react-router-dom";
import axios from "../../axios";

const Index = () => {
  const prefLang = useSelector((state) => state.prefLang);
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const close = () => setShow(false);
  const open = () => setShow(true);

  const updatePW = () => {
    axios.put("/auth/updatePW", { password }).then(() => history.push("/"));
  };

  const text = {
    path: { kh: "ទំព័រដើម ≫ ការកំណត់", eng: "Home ≫ Setting" },
    changePW: { kh: "ប្តូរលេខសម្ង្ងាត់របស់អ្នក", eng: "Change your password" },
    changePWDesc: { kh: "សូមវាយលេខសម្ង្ងាត់ថ្មីរបស់អ្នក", eng: "Enter your new password." },
    save: { kh: "រក្សាទុក", eng: "Save" },
  };

  return (
    <>
      <Container>
        <div lang={prefLang} className="bg-cv-2 bg-no-repeat bg-bottom bg-cover h-48 xs:h-64 sm:h-96 mb-4">
          <div className="bg-black bg-opacity-30 h-full w-full text-white">
            <div className="box flex items-center justify-center h-full md:justify-start md:items-end md:pb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{text.path[prefLang]}</h1>
            </div>
          </div>
        </div>

        <div className="box">
          <h2 className="pt-4 pb-2 text-purple-600 font-semibold text-2xl">{text.changePW[prefLang]}</h2>
          <p className="pb-2 text-gray-600">{text.changePWDesc[prefLang]}</p>
          <div className="flex flex-col justify-center items-center gap-4">
            <Input
              lang="eng"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              type={showPw ? "text" : "password"}
              className="cv-input"
              placeholder="Enter your password"
              icon={showPw ? AiOutlineEyeInvisible : AiOutlineEye}
              iconOnClick={() => setShowPw(!showPw)}
            />
            <button className="btn py-1 px-3 block mb-4" disabled={!password} onClick={updatePW}>
              {text.save[prefLang]}
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Index;
