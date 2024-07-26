import React, { useState } from "react";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUs = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [message, setMessage] = useState("");


  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleFName = (e) => {
    setFullName(e.target.value);
  }

  const handlePostalCode = (e) => {
    setPostalCode(e.target.value);
  }

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/eavo/user/contact", {phoneNumber,
      fullName,
      email,
      postalCode
    })
    .then(async (response) => {
      if (response.status === 200) {
        setMessage("Contact added successfully!");
        setEmail("");
        setFullName("");
        setMessage("");
        setPostalCode("");
        setPhoneNumber("");
      }
    })
      .catch((err) => {
        setMessage("cant add ur contact");
        // console.log(err.toString());
      })

  }


  return (
    <div className="bg-gray-100 flex items-center justify-center font-sans min-h-screen shadow-lg p-10">
      <div className="w-full max-w-2xl p-10 bg-white rounded-lg shadow-2xl">
        <h1 className="text-4xl font-bold text-orange-500 mb-8">Contact Us</h1>
        <form action="#" method="POST" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-6">
            <label
              htmlFor="full-name"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full_name"
              value={fullName}
              onChange={handleFName}
              className="w-full px-4 py-3 border border-gray-300 bg-gray-100 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmail}
              name="email"
              className="w-full px-4 py-3 border border-gray-300 bg-gray-100 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-xl font-bold mb-2 "
            >
              Phone Number
            </label>
            <PhoneInput
              country={"et"}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              inputClass="w-full p-2 rounded border "
              containerClass="w-full  "
            />
          </div>

          {/* Country */}
          <div className="mb-6">
            <label
              htmlFor="country"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg font-medium bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Postal Code */}
          <div className="mb-6">
            <label
              htmlFor="postal-code"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Postal Code
            </label>
            <input
              type="text"
              id="postal-code"
              value={postalCode}
              onChange={handlePostalCode}
              name="postal_code"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg font-medium bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
            <div className="mt-4 text-orange">
              {message}
            </div>
        <div className="mt-6">
          <p className="flex items-center mb-2">
            <Phone className="mr-2" /> +251-912345678
          </p>
          <p className="flex items-center mb-2">
            <Email className="mr-2" /> info@eavo-ngo.org
          </p>
          <p className="flex items-center">
            <LocationOn className="mr-2" /> Addis Ababa, Ethiopia, 1000
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
