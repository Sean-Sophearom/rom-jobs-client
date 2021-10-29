import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//components
import Logo from "../components/Logo";
import Button from "../components/Button";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";

//react icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

//redux tk
import { login, selectUser, setError, clearError, clearAllError } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const inputClass =
  "text-sm text-gray-700 bg-gray-100 box-border p-2 ring-1 ring-purple-200 rounded-sm focus:outline-none  focus:ring-2 focus:ring-purple-500";

const Login = () => {
  const { loading, error } = useSelector(selectUser);
  const [showPw, setShowPw] = React.useState(false);
  const [rmbMe, setRmbMe] = React.useState(false);
  //open is for snackbar for when user fill in bad request
  const [input, setinput] = React.useState({ username: "", password: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearAllError());
  }, [dispatch]);

  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
    dispatch(clearError(e.target.name));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = input;
    if (!username) return dispatch(setError({ errorType: "username", data: "Please fill in your username." }));
    if (!password) return dispatch(setError({ errorType: "password", data: "Please fill in your password." }));

    dispatch(login({ userInfo: { username, password }, rmbMe }));
  };

  const togglePasswordVisibility = () => setShowPw(!showPw);
  const toggleRmbMe = () => setRmbMe(!rmbMe);

  return (
    <>
      <div className="box fixed top-0 ">
        <Logo />
      </div>

      <div className="h-screen grid place-items-center box">
        <div className="flex flex-col">
          <h1 className="flex text-2xl sm:text-3xl md:text-4xl gap-2 px-5 justify-center">
            Login To {<Logo fontSize="text-2xl sm:text-3xl md:text-4xl" />}
          </h1>
          <h2 className="text-gray-400 text-center md:text-lg mt-2 mb-1">Enter your details below</h2>
          <form>
            <div className="flex flex-col mt-4">
              <label htmlFor="username" className="mb-2 text-lg">
                Username
              </label>
              <Input
                value={input.username}
                onChange={handleChange}
                id="username"
                name="username"
                type="text"
                className={inputClass}
                placeholder="Enter your username"
                error={error.username}
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="Password" className="mb-2 text-lg">
                Password
              </label>
              <Input
                value={input.password}
                onChange={handleChange}
                id="password"
                name="password"
                type={showPw ? "text" : "password"}
                className={inputClass}
                placeholder="Enter your password"
                icon={showPw ? AiOutlineEyeInvisible : AiOutlineEye}
                iconOnClick={togglePasswordVisibility}
                error={error.password}
              />
            </div>

            <div className="flex items-center gap-2 mt-4">
              <Checkbox checked={rmbMe} onClick={toggleRmbMe} />
              <label onClick={toggleRmbMe}>Remember me</label>
            </div>

            <div className="mb-4 mt-6 flex justify-center">
              <Button type="submit" onClick={handleLogin} loading={loading}>
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
