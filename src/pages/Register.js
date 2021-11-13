import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

//components
import Logo from "../components/Logo";
import Button from "../components/Button";
import Input from "../components/Input";
import Radio from "../components/Radio";

//redux
import { useDispatch, useSelector } from "react-redux";
import { signup, clearAllError, clearError, setError, selectUser } from "../redux/slices/userSlice";

//react icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const inputClass =
  "text-sm text-gray-700 bg-gray-100 box-border p-2 ring-1 ring-purple-200 rounded-sm focus:outline-none  focus:ring-2 focus:ring-purple-500";

const Register = () => {
  const [showPw, setShowPw] = React.useState(false);
  const [radio, setRadio] = React.useState("");
  const [input, setInput] = React.useState({ name: "", password: "" });
  const dispatch = useDispatch();
  const { error, loading } = useSelector(selectUser);
  const history = useHistory();

  useEffect(() => {
    dispatch(clearAllError());
  }, [dispatch]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    dispatch(clearError(e.target.name));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!input.name) return dispatch(setError({ errorType: "name", data: "Please fill in your name." }));
    if (!input.password) return dispatch(setError({ errorType: "password", data: "Please fill in your password." }));
    if (!radio) setRadio("employee");

    dispatch(signup({ userInfo: { name: input.name, password: input.password, accType: radio } }));
  };

  const togglePasswordVisibility = () => setShowPw(!showPw);
  return (
    <div className="animate-onLoadAnimation">
      <div className="box fixed top-0 ">
        <Logo />
      </div>

      <div className="h-screen grid place-items-center box">
        <div className="flex flex-col">
          <h1 className="flex text-2xl sm:text-3xl md:text-4xl gap-2 px-5 justify-center">Register an Account</h1>
          <h2 className="text-gray-400 text-center md:text-lg mt-2 mb-1">Enter your details below</h2>

          <form>
            <div className="flex flex-col mt-4">
              <label htmlFor="name" className="mb-2 text-lg">
                Name
              </label>
              <Input
                value={input.name}
                onChange={handleChange}
                id="name"
                name="name"
                type="text"
                className={inputClass}
                placeholder="Enter your name"
                error={error.name}
              />
            </div>

            <div className="flex flex-col mt-4">
              <label htmlFor="password" className="mb-2 text-lg">
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

            <div className="flex flex-col mt-4">
              <p className="mb-1 text-lg">I am looking to</p>
              <div className="flex gap-2 text-gray-500 items-center">
                <Radio
                  fontSize={18}
                  id="employer"
                  className="text-purple-500 cursor-pointer"
                  checked={radio === "employer"}
                  onClick={() => setRadio("employer")}
                />
                <label onClick={() => setRadio("employer")}>Hire employees</label>
              </div>

              <div className="flex gap-2 text-gray-500 items-center mt-1">
                <Radio
                  fontSize={18}
                  id="employee"
                  className="text-purple-500 cursor-pointer"
                  checked={radio === "employee"}
                  onClick={() => setRadio("employee")}
                />
                <label onClick={() => setRadio("employee")}>Get hired</label>
              </div>
            </div>

            <div className="my-4 flex justify-center">
              <Button type="submit" onClick={handleRegister} loading={loading} className="bg-purple-500">
                Register
              </Button>
            </div>

            <div className="flex justify-center">
              <p className="text-gray-500">
                Already a user?{" "}
                <Link to="/login" className="text-purple-500 hover:text-purple-600 transition-all  underline">
                  Log In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
