import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Forgotpassword() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/forgotpassword", {
        email, 
      })
      .then((response) => {
        if (response.data.status) {
            alert("Please check your email")
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen font-sans">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold ml-4 mb-8">Forgot password</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="border px-6 border-black overflow-hidden">
            <label htmlFor="email" className="block mb-1 pt-8 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded px-3 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

        
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-5 font-bold rounded mb-8 hover:bg-purple-700"
          >
            Send reset code
          </button>
        </form>
     
      </div>
    </div>
  );
}

export default Forgotpassword;
