import React from "react";
import { Link } from "react-router-dom";

//components
import Logo from "../components/Logo";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";

//react icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const inputClass =
  "text-sm text-gray-700 bg-gray-100 box-border py-2 px-4 ring-1 ring-purple-200 rounded-sm focus:outline-none  focus:ring-2 focus:ring-purple-500";

const Login = () => {
  const [showPw, setShowPw] = React.useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const togglePasswordVisibility = () => setShowPw(!showPw);
  return (
    <>
      <div className="box fixed top-0 ">
        <Logo />
      </div>

      <div className="h-screen grid place-items-center box">
        <div className="flex flex-col">
          <h1 className="flex text-2xl md:text-3xl lg:text-4xl gap-2 justify-center">
            Login To {<Logo fontSize="text-2xl md:text-3xl lg:text-4xl" />}
          </h1>
          <h2 className="text-gray-400 text-center md:text-lg lg:text-xl mt-2 mb-1">Enter your details below</h2>
          <form>
            <div className="flex flex-col mt-4">
              <label htmlFor="username" className="mb-2 text-lg">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className={inputClass}
                placeholder="Enter your username"
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="Password" className="mb-2 text-lg">
                Password
              </label>
              <PasswordInput
                id="password"
                name="password"
                type={showPw ? "text" : "password"}
                className={inputClass}
                placeholder="Enter your password"
                icon={showPw ? AiOutlineEyeInvisible : AiOutlineEye}
                iconOnClick={togglePasswordVisibility}
              />
            </div>

            <div className="mb-4 mt-6 flex justify-center">
              <Button type="submit" onClick={handleLogin}>
                Log In
              </Button>
            </div>

            <div className="flex justify-center">
              <p className="text-gray-500">
                No account yet?{" "}
                <Link to="/register" className="text-purple-500 hover:text-purple-400 transition-all  underline">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
