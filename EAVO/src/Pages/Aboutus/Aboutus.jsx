import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-5 px-5">
      <div className="w-full max-w-screen-3xl bg-white rounded-lg shadow-2xl p-10 font-sans">
        <header className="text-center mb-10">
          <div className="text-6xl font-bold text-blue-950 mb-2">
            East African Voices Organization
          </div>
          <p className="text-xl text-orange-600">
            Empowering communities through collaboration and innovation.
          </p>
        </header>

        <section className="mb-10">
          <div className="text-5xl font-bold text-blue-600 mb-6 ">
            Our Mission
          </div>
          <div className="text-xxl font-semibold text-gray-700 leading-relaxed">
            Our mission is to amplify the voices of underrepresented communities
            across East Africa. We are dedicated to fostering sustainable
            development by empowering local leaders and grassroots organizations
            with the resources, knowledge, and support they need to drive
            meaningful change. Our goal is to create a dynamic platform where
            innovative ideas and collaborative efforts can address critical
            regional challenges and enhance the quality of life for all members
            of these communities.
            <br />
            Through our advocacy for social justice, we work to ensure equitable
            access to education, healthcare, and economic opportunities. By
            tackling systemic barriers and promoting inclusive policies, we aim
            to build resilient and thriving communities. EAVO is committed to
            supporting initiatives that uplift voices, create opportunities, and
            drive impactful solutions that resonate throughout the region,
            paving the way for a more just and prosperous future.
          </div>
        </section>
        <section className="mb-10">
          <div className="text-5xl font-bold text-blue-600 mb-6 ">
            Our Objective
          </div>
          <div className="text-xxl font-semibold text-gray-700 leading-relaxed">
            The East African Voices Organization (EAVO) aims to amplify the
            voices of underrepresented communities by fostering sustainable
            development and empowering local leaders. We strive to address
            regional challenges through innovative solutions and advocate for
            social justice to ensure equitable opportunities for all. Our
            objective is to build strong partnerships and support initiatives
            that drive positive change. Through these efforts, we seek to
            improve the quality of life and create lasting impact in East
            Africa.
          </div>
        </section>
        <section className="mb-10 ">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Values</h2>
          <div className="flex flex-wrap gap-6">
            <div className="w-full sm:w-1/2 lg:w-1/4 bg-orange-300 p-6 rounded-lg shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Integrity
              </h3>
              <p className="text-xxl text-gray-600">
                We uphold the highest possible standards of honesty and transparency in
                <br />
                all our actions.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 bg-orange-300 p-6 rounded-lg shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Collaboration
              </h3>
              <p className="text-xxl text-gray-600">
                We believe in the power of working together to achieve shared
                goals and create lasting change.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 bg-orange-300 p-6 rounded-lg shadow-2xl">
              <h3 className="text-3xl font-semibold text-gray-800 mb-2">
                Innovation
              </h3>
              <p className="text-xxl text-gray-600">
                We embrace creativity and seek out new approaches to overcome
                challenges and drive progress.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 bg-orange-300 p-6 rounded-lg shadow-2xl">
              <h3 className="text-3xl font-semibold text-gray-800 mb-2">
                Respect
              </h3>
              <p className="text-xxl text-gray-600">
                We value every individual's voice and work with empathy and
                understanding towards all communities.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 bg-orange-300 p-6 rounded-lg shadow-2xl">
              <h3 className="text-3xl font-semibold text-gray-800 mb-2">
                Sustainability
              </h3>
              <p className="text-xxl text-gray-600">
                Committing to environmentally and socially responsible practices
                <br />
                for long-term impact.
                <br />
              </p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <div className="text-5xl font-bold text-blue-600 mb-6">Our Goals</div>
          <ul className="list-disc list-inside text-xxl text-gray-700">
            <li className="mb-6 font-semibold">
              <strong className="text-blue-600  font-bold">
                Empower Local Communities:
              </strong>{" "}
              We aim to provide essential resources, training, and support to
              grassroots organizations and community leaders, enabling them to
              drive impactful development and achieve self-sufficiency. By
              offering financial aid, material resources, and strategic
              mentorship, we help local entities overcome challenges and
              implement effective projects.
            </li>
            <li className="mb-6 font-semibold">
              <strong className="text-blue-600 font-bold">
                Promote Social Justice:
              </strong>{" "}
              We advocate for equitable access to education, healthcare, and
              economic opportunities, ensuring that all individuals have the
              chance to thrive regardless of their background. Our initiatives
              address systemic inequalities and work towards creating a more
              inclusive society where every voice is heard and valued. By
              raising awareness and fostering dialogue.
            </li>
            <li className="mb-6 font-semibold">
              <strong className="text-blue-600 font-bold">
                Foster Innovation:
              </strong>{" "}
              We support and incubate initiatives that leverage technology and
              creative problem-solving to address regional challenges and drive
              sustainable progress. By providing resources and platforms for
              innovative ideas, we empower local entrepreneurs and organizations
              to develop novel solutions that can transform communities.
            </li>
            <li className="mb-6 font-semibold">
              <strong className="text-blue-600 font-bold">
                Strengthen Partnerships:
              </strong>{" "}
              We actively collaborate with a diverse range of stakeholders,
              including local, national, and international organizations, to
              enhance our collective impact. By building and nurturing strategic
              alliances, we leverage combined resources, expertise, and networks
              to achieve shared goals and address complex challenges.
            </li>
            <li className="mb-6 font-semibold">
              <strong className="text-blue-600 font-bold">
                Advance Research and Knowledge:
              </strong>{" "}
              We are committed to conducting and supporting research that
              informs policy and practice, addressing key issues facing the
              region. By generating valuable insights and data, we contribute to
              the body of knowledge on regional development and help guide
              effective strategies. Our research initiatives aim to uncover
              evidence-based solutions that can drive progress and innovation.
            </li>
          </ul>
        </section>
        <section className="mb-10 text-center">
          <h2 className="text-5xl font-bold text-blue-600 mb-6">
            Get Involved
          </h2>
          <div className="text-xxl text-gray-700 mb-6 font-semibold">
           Join
            us in our mission to make a profound difference in the world. At
            East African Voices Organization (EAVO), we believe that every
            action, no matter how small, has the power to spark transformative
            change. Whether you choose to volunteer your time, collaborate with
            us on innovative projects, or support our initiatives financially,
            your involvement is crucial. Together, we can amplify the voices of
            those who need it most and champion the cause of social justice,
            sustainable development, and empowerment. Your contribution helps us
            overcome challenges and build a brighter, more equitable future for
            East Africa. Imagine the impact we can create when passionate
            individuals and dedicated organizations unite with a common purpose.
            By joining our efforts, you become part of a movement that is
            driving positive change and improving the quality of life for
            countless communities. Let's work together to turn vision into
            reality and make a lasting impact—because together, we can achieve
            extraordinary things.
          </div>
          <a
            href="/ContactUs"
            className="inline-block px-16 py-6 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
          >
            <div className="text-2xl">JOIN US</div>
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
