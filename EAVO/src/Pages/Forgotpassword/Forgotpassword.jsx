import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Forgotpassword() {
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/eavo/user/forgot-password",
        { email }
      );

      if (response.status === 404) {
        console.error("Error:", response.data.message);
        setResponseMessage(response.data.message);
      }

      if (response.status === 200) {
        console.log(response.data.message);
        setResponseMessage(response.data.message);
      }
      
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("User not found");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 font-sans">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl p-6">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
          Forgot Password?
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="border border-blue-500 rounded-lg p-4">
          
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 font-bold rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Send Reset Code
          </button>
        </form>
        {responseMessage && (
            <div className="mt-4 text-orange">
              {responseMessage}
            </div>
          )}
      </div>
    </div>
  );
}

export default Forgotpassword;
