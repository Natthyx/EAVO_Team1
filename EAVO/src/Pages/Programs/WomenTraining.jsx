import React from "react";
import { Button } from "@mui/material";

import women1 from "../../assets/Images/women1.jpg";
import women2 from "../../assets/Images/women2.jpg";
import women3 from "../../assets/Images/women3.jpg";
import women4 from "../../assets/Images/women4.jpg";

const WomenTraining = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-3 w-[90%] mx-auto">
      <div className="p-2 bg-white">
        {/* Header */}
        <header className="text-center mb-4">
          <h1 className="text-6xl font-bold text-blue-900 mb-4">
            Women's Vocational Training
          </h1>
          <p className="text-lg text-orange-600">
            Empowering women through vocational skills and training to build a
            better future.
          </p>
        </header>

        {/* Main Content */}
        <section className="max-w-screen-4xl mx-auto bg-white p-8 rounded-lg">
          <div className="flex items-center mb-4">
            <h2 className="text-4xl font-bold text-gray-800 ml-12">
              About the Program
            </h2>
          </div>
          <div className="text-black mb-6 text-xxl "></div>
          <p className="text-black mb-6 text-xxl ">
            The Women's Vocational Training program is a transformative
            initiative aimed at empowering women by equipping them with
            essential skills and knowledge to succeed in various trades and
            professions. This program offers comprehensive training in areas
            such as tailoring, culinary arts, computer skills, and more,
            providing participants with the tools they need to achieve financial
            independence and contribute positively to their communities. By
            focusing on practical, hands-on training, we ensure that women can
            immediately apply their newfound skills in real-world settings,
            paving the way for personal and professional growth.
          </p>
          <p className="text-black mb-6 text-xxl ">
            At the heart of our program is the belief that every woman deserves
            the opportunity to reach her full potential. We strive to create an
            inclusive and supportive learning environment where women from all
            backgrounds can thrive. Our training sessions are designed to be
            flexible and accommodating, allowing participants to balance their
            personal and professional responsibilities while pursuing their
            education. By offering a diverse range of courses, we cater to the
            unique interests and aspirations of each participant, ensuring a
            tailored and enriching learning experience.
          </p>
          <p className="text-black mb-6 text-xxl ">
            One of the key features of our program is the access to professional
            mentors and resources. Our mentors are industry experts who provide
            invaluable guidance, support, and encouragement to our participants.
            They help women navigate the challenges of their chosen fields,
            offering insights and advice based on their own experiences. This
            mentorship not only enhances the learning process but also helps to
            build a strong network of professional connections that can open
            doors to new opportunities.
          </p>
          <p className="text-black mb-6 text-xxl ">
            Our program is committed to addressing the specific needs and
            challenges faced by women in the workforce. We recognize that many
            women face barriers to employment, such as limited access to
            education, financial constraints, and societal expectations. By
            providing targeted training and support, we aim to break down these
            barriers and create pathways to meaningful employment. Our courses
            are designed to be affordable and accessible, ensuring that all
            women have the opportunity to participate, regardless of their
            financial situation.
          </p>
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 mb-8 p-4">
            <div className="bg-gray-200 rounded-lg shadow-md">
              <img
                src={women1}
                alt="Woman 1"
                className="w-full h-72 object-cover rounded-t-lg"
              />
            </div>
            <div className="bg-gray-200 rounded-lg shadow-md">
              <img
                src={women2}
                alt="Woman 2"
                className="w-full h-72 object-cover rounded-t-lg"
              />
            </div>
            <div className="bg-gray-200 rounded-lg shadow-md">
              <img
                src={women3}
                alt="Woman 3"
                className="w-full h-72 object-cover rounded-t-lg"
              />
            </div>
            <div className="bg-gray-200 rounded-lg shadow-md">
              <img
                src={women4}
                alt="Woman 4"
                className="w-full h-72 object-cover rounded-t-lg"
              />
            </div>
          </div>

          <div className="text-center">
            <Button
              variant="contained"
              color="warning"
              size="large"
              className="text-white bg-orange-500 hover:bg-orange-600"
              onClick={() => (window.location.href = "/Donate")}
            >
              Donate Now
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WomenTraining;
