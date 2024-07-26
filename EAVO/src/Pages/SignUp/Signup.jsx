import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleGsubmit = (e) => {
    e.preventDefault();
    window.location.href = "http://localhost:5000/login/federated/google";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/eavo/user/sign-up", {
        email,
        username,
        password,
      })
      .then((response) => {
        // handle success
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
        alert("Error sending OTP. Please check the console for details.");
      });
  };

  return (
    <div className="flex items-center justify-center pt-24 ml-64 min-h-screen bg-gray-100 font-sans ">
      <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-blue-950 mb-12 text-center">
          Sign up and join our Team
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <label htmlFor="username" className="absolute -top-6 left-4 text-blue-950 bg-white px-2 mb-8">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="email" className="absolute -top-6 left-4 text-blue-950 bg-white px-2 mb-8">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="absolute -top-6 left-4 text-blue-950 bg-white px-2 ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="special-offers"
              name="special-offers"
              className="mr-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950"
            />
            <label className="text-gray-700" htmlFor="special-offers">
              Send me special offers, personalized recommendations, and helpful tips
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 font-bold rounded hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <form action="" onSubmit={handleGsubmit} className="mt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 font-bold rounded hover:bg-blue-700 transition duration-300"
          >
            Continue With Google
          </button>
        </form>
        <div className="text-center mt-8 text-gray-600">
          <p>By signing up, you agree to our Terms of use and Privacy Policy.</p>
        </div>
        <hr className="my-8" />
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-950 font-bold underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
