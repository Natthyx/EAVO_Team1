import React from "react";
import { Link } from "react-router-dom";
import { LocalHospital, School, Home, Favorite } from "@mui/icons-material";
const Charity = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-3">
      <div className="p-2 bg-white">
        <header className="text-center mb-4">
          <h1 className="text-6xl font-bold text-blue-900 mb-4">Charity</h1>
        </header>

        <section className="max-w-screen-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <h2 className="text-4xl font-bold text-gray-800 ml-12">
              About the Program
            </h2>
          </div>
          <div className="text-black mb-6 text-xxl font-semibold"></div>
          <p className="text-black mb-6 text-xxl font-semibold">
            The East African Voices Organization (EAVO) Charity Program is a
            multifaceted initiative aimed at addressing the diverse social and
            economic challenges faced by communities in East Africa. Central to
            its mission is the commitment to provide essential services and
            support to vulnerable populations, including children, women, and
            marginalized groups. By focusing on sustainable development, EAVO
            seeks to improve the quality of life for individuals and empower
            communities to achieve long-term self-sufficiency. Through a
            combination of educational, healthcare, and community-building
            initiatives, EAVO is dedicated to fostering a brighter future for
            East African communities.
          </p>
          <p className="text-black mb-6 text-xxl font-semibold">
            One of the cornerstone initiatives of EAVO's Charity Program is the
            Child Educational Support program. This initiative is designed to
            ensure that children in underserved communities have access to
            quality education. By providing scholarships, school supplies, and
            educational resources, EAVO helps remove barriers to education and
            creates opportunities for children to learn and succeed. The program
            not only supports academic growth but also instills a sense of hope
            and aspiration in young minds, encouraging them to strive for a
            better future.
          </p>
          <p className="text-black mb-6 text-xxl font-semibold">
            In addition to education, EAVO places a strong emphasis on
            healthcare through its Health Care Initiatives. These initiatives
            aim to improve health outcomes by providing essential medical
            services, health education, and access to necessary healthcare
            resources. EAVO organizes medical camps, distributes health
            supplies, and promotes preventive health measures to ensure that
            communities receive the care they need. By addressing both immediate
            and long-term health needs, EAVO contributes to the overall
            well-being of individuals and helps build healthier communities.
          </p>

          <div className="text-4xl font-bold text-orange-500">
            Do you want to help others recover?
          </div>
          <div className="text-center">
            <Link
              to="/payment"
              className="bg-orange-500 mt-12 text-white rounded-full py-4 px-2 font-semibold text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 animate-bounce flex items-center justify-center "
            >
              <p className="text-3xl">Get into action and donate</p>
            </Link>
          </div>
        </section>
        <section className="max-w-screen-2xl mx-auto  bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-center">
            <div className="bg-orange-100 p-4 rounded-lg shadow-md">
              <LocalHospital className="text-orange-500 text-6xl mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-800">
                Healthcare
              </h2>
              <p className="text-gray-600">
                Providing essential medical services and health education.
              </p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <School className="text-blue-500 text-6xl mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-800">Education</h2>
              <p className="text-gray-600">
                Ensuring access to quality education for all children.
              </p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg shadow-md">
              <Home className="text-green-500 text-6xl mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-800">
                Safe Shelter
              </h2>
              <p className="text-gray-600">
                Providing secure housing solutions for families in need.
              </p>
            </div>
            <div className="bg-pink-100 p-4 rounded-lg shadow-md">
              <Favorite className="text-pink-500 text-6xl mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-800">Support</h2>
              <p className="text-gray-600">
                Offering love and support to vulnerable communities.
              </p>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Charity;
