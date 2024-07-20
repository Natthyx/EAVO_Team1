import React, { useState } from "react";
import { Phone, Email, LocationOn } from "@mui/icons-material";
const ContactUs = () => {
  const [phonePrefix, setPhonePrefix] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhonePrefixChange = (e) => {
    setPhonePrefix(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen shadow-lg p-10">
      <div className="w-full max-w-2xl p-10 bg-white rounded-lg shadow-2xl">
        <h1 className="text-4xl font-bold text-orange-500 mb-8">Contact Us</h1>
        <form action="#" method="POST">
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
              className="w-full px-4 py-3 border border-gray-300  bg-gray-100 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
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
              name="email"
              className="w-full px-4 py-3 border border-gray-300 bg-gray-100 rounded-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-xl font-bold mb-2"
            >
              Phone Number
            </label>
            <div className="flex items-center border border-gray-300 bg-gray-100 rounded-lg">
              <input
                type="text"
                id="phone-prefix"
                name="phone_prefix"
                value={phonePrefix}
                onChange={handlePhonePrefixChange}
                className="w-20 px-4 py-3 bg-gray-100 border-r border-gray-300 rounded-l-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="+1"
                required
              />
              <span className="px-2 text-gray-600">|</span>
              <input
                type="text"
                id="phone-number"
                name="phone_number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="flex-1 px-4 py-3 bg-gray-100 rounded-r-lg text-lg font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="1234567890"
                required
              />
            </div>
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
              name="postal_code"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg font-medium bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-3 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 text-xl"
            >
              Submit
            </button>
          </div>
        </form>
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
