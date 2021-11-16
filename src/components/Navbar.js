import React, { useEffect, useState } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";
import { toggleLang } from "../redux/slices/languageSlice";

//component
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavbarLI from "./NavbarLI";
import Button from "./Button";

//icons component
import ReactCountryFlag from "react-country-flag";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

//react router
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const prefLang = useSelector((state) => state.prefLang);
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const text = {
    home: { kh: "ទំព័រដើម", eng: "Home" },
    aboutUs: { kh: "អំពីយើង", eng: "About Us" },
    jobs: user.acc_type === "employer" ? { kh: "បង្កើតការងារ", eng: "Add Job" } : { kh: "ការងារ", eng: "Jobs" },
    contact: { kh: "ទាក់ទង", eng: "Contact" },
    login: { kh: "ចូលគណនី", eng: "Login" },
    register: { kh: "ចុះឈ្មោះ", eng: "Register" },
    toggleLangText: { kh: "ផ្លាស់ប្តូរភាសា", eng: "Toggle Language" },
  };

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    const open = () => (window.innerWidth >= 1024 ? setIsOpen(true) : setIsOpen(false));
    window.addEventListener("resize", open);
    return () => window.removeEventListener("resize", open);
  }, []);

  const toggleLanguage = () => dispatch(toggleLang());
  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  const LanguageComponent = () => (
    <div className="flex justify-center items-center group relative hover:scale-110">
      <ReactCountryFlag
        className="cursor-pointer transition-all"
        onClick={() => {
          toggleLanguage();
          setIsOpen(false);
        }}
        style={{ width: "2.5em", height: "1.5em" }}
        countryCode={prefLang === "eng" ? "KH" : "GB"}
        svg
      />
      <p
        className="top-7 p-1 bg-gray-500 text-white rounded-sm text-xs absolute scale-0 group-hover:scale-100 transition-all duration-75"
        lang={prefLang === "eng" ? "kh" : "eng"}
      >
        {text.toggleLangText[prefLang === "eng" ? "kh" : "eng"]}
      </p>
    </div>
  );
  return (
    <div lang={prefLang}>
      <div className="border-b bg-gray-50 border-gray-200 whitespace-nowrap fixed w-screen top-0 z-50">
        <div className="box flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <GiHamburgerMenu fontSize={24} className={`${isOpen ? "hidden" : "block"} cursor-pointer block lg:hidden `} onClick={openNav} />
          <ImCross fontSize={20} className={`${isOpen ? "block" : "hidden"} cursor-pointer block lg:hidden`} onClick={closeNav} />
          <div className={`nav-item-container ${isOpen ? "max-h-screen" : "max-h-0 py-0"}`}>
            <NavbarLI to="/" primary={text.home[prefLang]} />
            <NavbarLI to="/aboutus" primary={text.aboutUs[prefLang]} />
            <NavbarLI to={user?.acc_type === "employer" ? "/createjob" : "/jobs"} primary={text.jobs[prefLang]} />
            <NavbarLI to="/contact" primary={text.contact[prefLang]} />
            <LanguageComponent />
            <Button onClick={() => history.push("/login")} className="bg-red-500 hover:scale-110 font-semibold px-2 py-[2px]">
              {text.login[prefLang]}
            </Button>
            <Button onClick={() => history.push("/register")} className="bg-indigo-500 hover:scale-110 font-semibold px-2 py-[2px]">
              {text.register[prefLang]}
            </Button>
          </div>
        </div>
      </div>

      {/* div to offset the fixed navbar */}
      <div className="h-[48px] md:h-[64px]"></div>
    </div>
  );
};

export default Navbar;
