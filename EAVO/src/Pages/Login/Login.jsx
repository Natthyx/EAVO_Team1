import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/eavo/user/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl">
        <h1 className="font-bold ml-4 mb-8 text-2xl text-blue-800">
          Log in to your EAVO account
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="w-full max-w-2xl">
            <div className="flex justify-center border border-black overflow-hidden transition-all duration-300"></div>
          </div>

          <div className="border px-4 border-black overflow-hidden">
            <label htmlFor="email" className="block mb-1 pt-8 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded px-3 focus:outline-none"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="border px-6 border-black overflow-hidden">
            <label htmlFor="password" className="block pt-8 mb-1 font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded px-3 focus:outline-none"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-5 font-bold rounded mb-12 hover:bg-orange-700"
          >
            Log in
          </button>
        </form>
        <div className="flex justify-center px-2 space-x-4 mb-4 mt-4">
          <div className="text-gray-800">or</div>
          <Link
            to="/forgotpassword"
            className="text-orange-400 font-bold underline hover:text-orange-400"
          >
            Forgot Password
          </Link>
        </div>
        <div>
          <hr />
        </div>
        <div className="text-center mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-orange-600 font-bold underline">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;






<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>