import React from "react";
import { Link } from "react-router-dom";
import { Info } from "@mui/icons-material";

const AdvocacyAwareness = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-3">
      <div className="p-2 bg-white">
        <header className="text-center mb-4 flex">
          <Info fontSize="inherit" sx={{ fontSize: 100, color: "#9C27B0" }} />
          <h1 className="text-6xl font-bold text-blue-900 mb-4">
            Advocacy and Awareness compaign
          </h1>
        </header>

        <section className="max-w-screen-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <h2 className="text-4xl font-bold text-gray-800 ml-12">
              About the Program
            </h2>
          </div>
          <div className="text-black mb-6 text-xxl font-semibold"></div>
          <p className="text-black mb-6 text-xxl font-semibold">
            The Advocacy and Awareness Campaign at East African Voices
            Organization (EAVO) is a vital initiative aimed at raising awareness
            about key social issues and advocating for positive change. This
            program focuses on educating the public, influencing policy, and
            mobilizing communities to address pressing challenges such as gender
            inequality, environmental sustainability, and human rights. Through
            strategic campaigns and grassroots efforts, EAVO seeks to amplify
            the voices of marginalized groups and drive meaningful social
            transformation.
          </p>
          <p className="text-black mb-6 text-xxl font-semibold">
            A central component of the Advocacy and Awareness Campaign is public
            education. EAVO organizes workshops, seminars, and community events
            to inform individuals about critical issues that impact their lives
            and communities. These educational initiatives are designed to
            foster a deeper understanding of the causes and consequences of
            social problems, empowering individuals with the knowledge they need
            to advocate for change. By raising awareness, EAVO aims to create an
            informed and engaged citizenry capable of contributing to societal
            progress.
          </p>
          <p className="text-black mb-6 text-xxl font-semibold">
            In addition to public education, the campaign places a strong
            emphasis on policy advocacy. EAVO works closely with policymakers,
            government officials, and other stakeholders to influence
            legislation and policies that promote social justice and equity.
            Through research, policy briefs, and direct engagement with
            decision-makers, EAVO advocates for systemic changes that address
            the root causes of social issues. This approach ensures that the
            voices of the communities they serve are heard at the highest levels
            of decision-making, leading to more inclusive and effective
            policies.
          </p>

          <div className="text-4xl font-bold text-orange-500">
            Do you want to help others recover?
          </div>
          <div className="text-center">
            <Link
              to="/payment"
              className="bg-orange-500 mt-12 text-white rounded-full py-4 px-2 font-semibold text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 animate-bounce flex items-center justify-center "
            >
              <p className="text-3xl">Let us create community awareness</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdvocacyAwareness;
