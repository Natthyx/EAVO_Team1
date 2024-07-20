import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Forgotpassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/forgotpassword",
        { email }
      );

      if (response.data.message === "User exists") {
        try {
          const otpResponse = await axios.post(
            "http://localhost:3000/auth/emailVerfy",
            { email }
          );

          if (otpResponse.data.status) {
            navigate("/ForgotOtp", { state: { email } });
          } else {
            console.error("Error sending OTP:", otpResponse.data.message);
            alert("Failed to send OTP. Please try again.");
          }
        } catch (otpError) {
          console.error("Error sending OTP:", otpError);
          alert("Error sending OTP. Please check the console for details.");
        }
      } else {
        console.error("Error:", response.data.message);
        alert("User not found. Please check the email address.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please check the console for details.");
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
            className="w-full bg-orange-500 text-white py-3 font-bold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Send Reset Code
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forgotpassword;
