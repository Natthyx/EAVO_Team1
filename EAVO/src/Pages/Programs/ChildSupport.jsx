import React from "react";
import { Button } from "@mui/material";
import { ChildCare } from "@mui/icons-material";

import women1 from "../../assets/Images/child1.jpg";
import women2 from "../../assets/Images/child2.jpg";
import women3 from "../../assets/Images/child3.jpg";
import women4 from "../../assets/Images/child4.jpg";

const ChildSupport = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-3">
      <div className="p-2 bg-white">
        {/* Header */}
        <header className="text-center mb-4 flex" >
          <ChildCare
            fontSize="inherit"
            sx={{ fontSize: 100, color: "#FFC107" }}
          />
          <h1 className="text-6xl font-bold text-blue-900 mb-4">
            Child Education Support
          </h1>
        
        </header>

        {/* Main Content */}
        <section className="max-w-screen-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <h2 className="text-4xl font-bold text-gray-800 ml-12">
              About the Program
            </h2>
          </div>
          <div className="text-black mb-6 text-xxl font-semibold"></div>
          <p className="text-black mb-6 text-xxl font-semibold">
            At East African Voices Organization (EAVO), our Child Educational
            Support Program is committed to fostering the educational
            development of children in underprivileged communities. We
            understand that education is the cornerstone of a brighter future,
            and we strive to remove the barriers that prevent children from
            accessing quality education. Our program provides essential
            educational materials, including books, uniforms, and supplies,
            ensuring that every child has the tools they need to succeed.
            Additionally, we offer scholarships to cover school fees for
            children from low-income families, making education accessible to
            all.
          </p>
          <p className="text-black mb-6 text-xxl font-semibold">
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
          <p className="text-black mb-6 text-xxl font-semibold">
            Beyond material support, EAVO's Child Educational Support Program
            focuses on creating a nurturing and supportive learning environment.
            We collaborate with local schools to provide tutoring and mentorship
            programs, helping students to improve their academic performance and
            develop a love for learning. Our dedicated volunteers and educators
            work closely with students, offering personalized attention and
            encouragement to help them reach their full potential. By fostering
            a positive and engaging educational experience, we aim to instill
            confidence and a lifelong passion for learning in every child we
            support.
          </p>
          <p className="text-black mb-6 text-xxl font-semibold">
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
          <p className="text-black mb-6 text-xxl font-semibold">
            The impact of our Child Educational Support Program extends beyond
            the classroom. By empowering children with education, we are helping
            to break the cycle of poverty and build stronger, more resilient
            communities. Educated children are more likely to become informed
            and engaged citizens who can contribute positively to society.
            Through our program, we not only support individual students but
            also invest in the future of entire communities. EAVO is dedicated
            to making a lasting difference in the lives of children, and we
            invite you to join us in this vital mission by donating or
            volunteering your time and expertise.
          </p>
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 mb-8 p-12">
            <div className="bg-gray-200 rounded-lg shadow-md">
              <img
                src={women1}
                alt="Woman 1"
                className="w-full h-64 w-82 object-cover rounded-t-lg"
              />
            </div>
            <div className="bg-gray-200 rounded-lg shadow-md">
              <img
                src={women2}
                alt="Woman 2"
                className="w-full h-64 w-100 object-cover rounded-t-lg"
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
              onClick={() => (window.location.href = "/payment")}
            >
              Donate Now
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChildSupport;
