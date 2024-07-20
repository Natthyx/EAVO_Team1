import React, { useState } from "react";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { Link } from "react-router-dom";
const GetInvolved = () => {
  const [phonePrefix, setPhonePrefix] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhonePrefixChange = (e) => {
    setPhonePrefix(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="bg-gray-100 max-w-screen-4xl min-h-screen flex flex-col items-center p-4">
      <div className="w-full   bg-white shadow-lg rounded-lg p-8 mb-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-6">Why Join Us?</h1>
        <p className="text-xxl font-semibold text-gray-700 mb-4">
          At East African Voices Organization (EAVO), we believe that your
          involvement can drive meaningful change. Joining us provides an
          opportunity to be part of impactful initiatives that empower local
          communities, promote social justice, and foster innovation. By getting
          involved, you contribute to projects that directly address critical
          issues such as women's vocational training, child education support,
          and healthcare initiatives.
        </p>
        <p className="text-xxl font-semibold text-gray-700 mb-4">
          Your support enables us to reach more people, deliver better services,
          and create sustainable solutions. Whether you volunteer your time,
          offer your skills, or support us financially, your contribution is
          invaluable. Together, we can make a lasting impact on the lives of
          those who need it most and help build a brighter future for East
          Africa.
        </p>
        <p className="text-xxl font-semibold text-gray-700 mb-4">
          Get involved today and become a catalyst for positive change. Your
          actions matter, and your involvement helps us amplify voices, drive
          social progress, and build stronger communities. Join us in making a
          difference and be a part of something greater.
        </p>
        <br />
        <p className="text-xxl font-semibold text-orange-500 mb-4">
          If you have a heart that is passionate about supporting positive
          change and a spirit willing to contribute to a greater cause, then you
          are exactly who we are looking for. Whether you bring specific skills
          or simply a readiness to learn and assist, your enthusiasm and
          commitment will be valued. This is a place for those who believe in
          the potential for good in every person and who want to be part of a
          movement dedicated to uplifting communities and fostering social
          justice. Your unique contributions, regardless of how small, can have
          a significant impact on our collective mission. So, if you are ready
          to be a part of something extraordinary, where your efforts help build
          a better, more equitable world, then this is the right place for you.
          Join us in our journey and make a difference!
        </p>

        <div className="text-5xl font-semibold text-orange-950 mb-6">
          so what are you waiting for?
        </div>
        <div className="px-2">
          <Link
            to="/ContactUs"
            className="bg-orange-500 mt-12 text-white rounded-full py-4 px-2 font-semibold text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 animate-bounce flex items-center justify-center "
          >
            <p className="text-3xl">Get involved</p>
          </Link>
        </div>
        <div className="mt-6 font-bold">
          <div className="flex items-center  text-gray-700 mb-4">
            <Phone className="text-orange-600 mr-2" />
            <span>(123) 456-7890</span>
          </div>
          <div className="flex items-center text-gray-700 mb-4">
            <Email className="text-orange-600 mr-2" />
            <span>info@eavo.org</span>
          </div>
          <div className="flex items-center text-gray-700">
            <LocationOn className="text-orange-600 mr-2" />
            <span>123 EAVO St, Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
