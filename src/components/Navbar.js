import React, { useEffect, useState } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";
import { toggleLang } from "../redux/slices/languageSlice";

//component
import { Link, useHistory } from "react-router-dom";
import Logo from "./Logo";
import NavbarLI from "./NavbarLI";

//icons component
import ReactCountryFlag from "react-country-flag";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { BiUserCircle, BiMessageAdd } from "react-icons/bi";
import { BsPerson, BsGear, BsBookmark, BsFileEarmarkPdf } from "react-icons/bs";
import { VscSignOut } from "react-icons/vsc";
import { clearUser } from "../redux/slices/userSlice";
import { showSnackbar } from "../redux/slices/snackbar";

//react router
// import { useHistory } from "react-router-dom";

const Navbar = () => {
  const prefLang = useSelector((state) => state.prefLang);
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const text = {
    home: { kh: "ទំព័រដើម", eng: "Home" },
    aboutUs: { kh: "អំពីយើង", eng: "About Us" },
    jobs: { kh: "ការងារ", eng: "Jobs" },
    contact: { kh: "ទាក់ទង", eng: "Contact" },
    login: { kh: "ចូលគណនី", eng: "Login" },
    register: { kh: "ចុះឈ្មោះ", eng: "Register" },
    toggleLangText: { kh: "ភាសាខ្មែរ", eng: "English" },
    myProfile: { kh: "គណនីខ្ញុំ", eng: "My Profile" },
    favJobs: { kh: "ការងារដែលបានរក្សាទុក", eng: "Favorite Jobs" },
    cv: {
      kh: (
        <span>
          <span lang="eng">CV</span>
          <span>របស់ខ្ញុំ</span>
        </span>
      ),
      eng: "My Cv",
    },
    postJob: { kh: "បង្កើតការងារ", eng: "Post A Job" },
    setting: { kh: "ការកំណត់", eng: "Setting" },
    signout: { kh: "ចាកចេញ", eng: "Sign Out" },
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

  const logout = () => {
    sessionStorage.clear();
    localStorage.clear();
    dispatch(clearUser());
    window.location.pathname === "/" ? window.location.reload(false) : history.push("/");
    dispatch(showSnackbar({ msg: "You have successfully signed out.", color: "blue" }));
  };

  const LanguageComponent = () => (
    <div className="flex justify-center group relative hover:scale-110">
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
        className="-bottom-6 px-1 py-[1px] bg-gray-500 text-white rounded-sm text-xs absolute scale-0 group-hover:scale-100 transition-all duration-75"
        lang={prefLang === "eng" ? "kh" : "eng"}>
        {text.toggleLangText[prefLang === "eng" ? "kh" : "eng"]}
      </p>
    </div>
  );

  return (
    <div lang={prefLang}>
      <div className="border-b bg-gray-50 border-gray-200 whitespace-nowrap fixed w-full top-0 z-50 shadow-md">
        <div className="box flex justify-between items-center">
          <div>
            <Logo />
          </div>
          <GiHamburgerMenu fontSize={24} className={`${isOpen ? "hidden" : "block"} cursor-pointer block lg:hidden `} onClick={openNav} />
          <ImCross fontSize={20} className={`${isOpen ? "block" : "hidden"} cursor-pointer block lg:hidden`} onClick={closeNav} />
          <div className={`nav-item-container ${isOpen ? "max-h-screen" : "max-h-0 py-0"}`}>
            <NavbarLI to="/" primary={text.home[prefLang]} />
            <NavbarLI to="/aboutus" primary={text.aboutUs[prefLang]} />
            <NavbarLI to="/jobs" primary={text.jobs[prefLang]} />
            <NavbarLI to="/contact" primary={text.contact[prefLang]} />
            <LanguageComponent />
            {user.name ? (
              <div className="text-gray-500 cursor-pointer relative flex justify-center lg:justify-end xl:justify-center items-end group">
                <BiUserCircle fontSize={28} className="transition-all text-purple-600 group-hover:scale-110 group-hover:mb-40 lg:group-hover:mb-0" />
                <div className="transition-all absolute max-h-0 group-hover:max-h-96 overflow-hidden top-8 lg:top-7">
                  <ul className="border border-gray-400 rounded-sm bg-white text-black">
                    <li>
                      <Link className="navbar-user-li" to="/myProfile">
                        <BsPerson /> {text.myProfile[prefLang]}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-user-li" to="/favJobs">
                        <BsBookmark /> {text.favJobs[prefLang]}
                      </Link>
                    </li>
                    {user.acc_type === "employee" ? (
                      <li>
                        <Link className="navbar-user-li" to="/cv">
                          <BsFileEarmarkPdf /> {text.cv[prefLang]}
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link className="navbar-user-li" to="/createjob/1">
                          <BiMessageAdd /> {text.postJob[prefLang]}
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link className="navbar-user-li" to="/setting">
                        <BsGear /> {text.setting[prefLang]}
                      </Link>
                    </li>
                    <li className="navbar-user-li" onClick={logout}>
                      <VscSignOut /> {text.signout[prefLang]}
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn bg-red-500 hover:scale-110 font-semibold px-2 py-[2px]">
                  {text.login[prefLang]}
                </Link>
                <Link to="/register" className="btn bg-indigo-500 hover:scale-110 font-semibold px-2 py-[2px]">
                  {text.register[prefLang]}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* div to offset the fixed navbar */}
      <div className="h-[48px] md:h-[64px]"></div>
    </div>
  );
};

export default Navbar;
