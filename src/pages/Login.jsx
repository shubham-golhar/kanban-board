import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { checkValidLoginData } from "../utils/validateLogin";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  // const confirmPassword = useRef();
  const [errorMessage, setErrorMessage] = useState();
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = checkValidLoginData(
      email.current.value,
      password.current.value
      // confirmPassword.current.value
    );

    setErrorMessage(message);
    if (message) return;

    if (!captchaValue) {
      setErrorMessage("Please complete the CAPTCHA.");
      return;
    }
    const data = [
      {
        email: email.current.value,
        password: password.current.value,
      },
    ];
    dispatch(addUser(data));
    navigate("/dashboard");
    localStorage.setItem("userData", JSON.stringify(data));
  };
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Kanban-Board
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    ref={email}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Email"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    ref={password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <div>
                  <label
                    htmlFor="captcha"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    CAPTCHA
                  </label>
                  <ReCAPTCHA
                    sitekey="6LeGrnAoAAAAAKe3nc2AWdsGEeva8eqYFZbsdoWy" // Replace with your actual site key
                    onChange={handleCaptchaChange} // Update the captchaValue state
                  />
                </div>

                <p className="text-red-600 mb-4 text-xs">{errorMessage}</p>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {/* {isLogin ? "Login" : "Create an account"} */}
                  Login
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  <a
                    href="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    // onClick={() => setIsLogin(!isLogin)}
                  >
                    Create an account ?
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
