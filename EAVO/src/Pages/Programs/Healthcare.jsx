import React from "react";
import { Link } from "react-router-dom";
import { HealthAndSafety } from "@mui/icons-material";

const Healthcare = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-3">
      <div className="p-2 bg-white">
        <header className="text-center mb-4 flex">
          <HealthAndSafety
            fontSize="inherit"
            sx={{ fontSize: 100, color: "#4CAF50" }}
          />
          <h1 className="text-6xl font-bold text-blue-900 mb-4">
            Healthcare Intiatives
          </h1>
        </header>

        <section className="max-w-screen-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <h2 className="text-4xl font-bold text-gray-800 ml-12">
              About the Program
            </h2>
          </div>
          <div className="text-black mb-6 text-xxl "></div>
          <p className="text-black mb-6 text-xxl ">
            The East African Voices Organization (EAVO) is dedicated to
            improving health outcomes in underserved communities through our
            Healthcare Initiative Program. Recognizing that access to quality
            healthcare is a fundamental human right, our program focuses on
            providing essential medical services, health education, and
            preventive care to vulnerable populations. We partner with local
            clinics and healthcare providers to offer free or low-cost medical
            consultations, vaccinations, and treatments for common illnesses.
            Our mobile health clinics travel to remote areas, ensuring that even
            the most isolated communities receive the care they need.
          </p>
          <p className="text-black mb-6 text-xxl ">
            In addition to direct medical services, EAVO's Healthcare Initiative
            Program emphasizes the importance of health education and awareness.
            We conduct community workshops and seminars on various health
            topics, including nutrition, hygiene, maternal and child health, and
            disease prevention. By educating individuals and families about
            healthy practices and preventive measures, we aim to reduce the
            prevalence of preventable diseases and promote overall well-being.
            Our health education campaigns are tailored to address the specific
            needs and challenges of the communities we serve, empowering people
            with the knowledge to make informed health decisions.
          </p>
          <p className="text-black mb-6 text-xxl ">
            The impact of our Healthcare Initiative Program extends beyond
            immediate medical care. By improving health outcomes, we are
            enhancing the quality of life and economic stability of entire
            communities. Healthy individuals are more productive, better able to
            attend school, and more capable of contributing to their families
            and society. Through our efforts, we are fostering healthier, more
            resilient communities that can thrive and grow. EAVO is committed to
            expanding our healthcare services and reaching more people in need,
            and we invite you to support our mission by donating or volunteering
            with us. Together, we can make a profound difference in the health
            and well-being of countless individuals.
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
          <div className="text-4xl font-bold text-orange-500">
            Do you want to help others recover?
          </div>
          <div className="text-center">
            <Link
              to="/Donate"
              className="bg-orange-500 mt-12 text-white rounded-full py-4 px-2  text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 animate-bounce flex items-center justify-center "
            >
              <p className="text-3xl">Donate</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Healthcare;
