import React from "react";
import { Link } from "react-router-dom";
import { Home } from "@mui/icons-material";

const SafeShelter = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-3">
      <div className="p-2 bg-white">
        <header className="text-center mb-4 flex">
          <Home fontSize="inherit" sx={{ fontSize: 100, color: "#FF5722" }} />
          <h1 className="text-7xl font-bold text-blue-900  ml-4  mt-3 mb-4">
            Safe Shelter Program
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
            The Safe Shelter Program at the East African Voices Organization
            (EAVO) is dedicated to providing secure and stable housing for
            vulnerable individuals and families in East Africa. Recognizing that
            a safe home is fundamental to overall well-being, our program
            focuses on offering shelter to those who are homeless, displaced, or
            living in unsafe conditions. We aim to create a supportive
            environment where individuals can rebuild their lives and gain
            independence.
          </p>
          <p className="text-black mb-6 text-xxl ">
            One of the core components of our Safe Shelter Program is the
            construction and renovation of housing units. We work with local
            communities to identify the most pressing needs and prioritize
            families and individuals who are in dire need of safe housing. By
            building new homes and refurbishing existing structures, we provide
            reliable and secure shelter that protects against the elements and
            offers a sense of stability. Each housing unit is designed to be
            functional, comfortable, and conducive to family life.
          </p>
          <p className="text-black mb-6 text-xxl ">
            Beyond providing physical shelter, EAVO’s program offers
            comprehensive support services to help residents achieve long-term
            stability. This includes access to healthcare, education, and
            employment opportunities. We collaborate with local service
            providers to ensure that residents receive the necessary medical
            care, counseling, and vocational training. Our goal is to equip
            individuals with the tools and resources they need to lead
            self-sufficient lives and integrate successfully into their
            communities.
          </p>

          <div className="text-4xl font-bold text-orange-500">
            Do you want to help others recover?
          </div>
          <div className="text-center">
            <Link
              to="/Donate"
              className="bg-orange-500 mt-12 text-white rounded-full py-4 px-2  text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 animate-bounce flex items-center justify-center "
            >
              <p className="text-3xl">Donate and help homeless people</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SafeShelter;
