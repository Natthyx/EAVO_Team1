import React from "react";
import { Link } from "react-router-dom";
import { Group } from "@mui/icons-material";

const CommunityLeadership= () => {
  return (
    <div className="bg-gray-100 min-h-screen p-3">
      <div className="p-2 bg-white">
        <header className="text-center mb-4 flex">
          <Group fontSize="inherit" sx={{ fontSize: 100, color: "#2196F3" }} />
          <h1 className="text-6xl font-bold text-blue-900 mb-4">
            Community Leadership Training
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
            The Community Leadership Training program at East African Voices
            Organization (EAVO) is designed to empower individuals with the
            skills and knowledge necessary to become effective leaders in their
            communities. Recognizing the pivotal role that strong, informed
            leadership plays in community development, this program focuses on
            nurturing potential leaders who can drive positive change. Through a
            combination of theoretical instruction and practical experience,
            participants are equipped to tackle local challenges, mobilize
            resources, and inspire collective action.
          </p>
          <p className="text-black mb-6 text-xxl font-semibold">
            At the heart of the Community Leadership Training program is a
            comprehensive curriculum that covers a wide range of topics.
            Participants learn about project management, conflict resolution,
            strategic planning, and community engagement. These skills are
            essential for leaders who need to navigate complex social dynamics
            and implement effective solutions to pressing issues. The training
            also emphasizes the importance of ethical leadership and
            accountability, ensuring that future leaders are guided by integrity
            and a commitment to serving their communities.
          </p>
          <p className="text-black mb-6 text-xxl font-semibold">
            One of the key strengths of the program is its hands-on approach to
            learning. Participants are encouraged to engage in real-world
            projects that address specific needs within their communities. This
            practical experience not only reinforces the theoretical knowledge
            gained during the training but also provides participants with
            tangible examples of how to apply their skills. By working on
            projects that have immediate and visible impacts, participants gain
            confidence in their abilities and see firsthand the difference that
            effective leadership can make.
          </p>
          <p className="text-black mb-6 text-xxl font-semibold">
            The Community Leadership Training program also fosters a network of
            support and collaboration among participants. By bringing together
            individuals from diverse backgrounds and experiences, the program
            creates a vibrant community of leaders who can share ideas,
            resources, and support. This network extends beyond the duration of
            the training, providing ongoing opportunities for collaboration and
            mentorship. Graduates of the program become part of a larger
            movement of empowered individuals who are committed to driving
            sustainable development and positive change in East Africa. Through
            this program, EAVO is cultivating a new generation of leaders who
            are equipped to build stronger, more resilient communities.
          </p>
          <div className="text-4xl font-bold text-orange-500">
            Do you want to help others recover?
          </div>
          <div className="text-center">
            <Link
              to="/Donate"
              className="bg-orange-500 mt-12 text-white rounded-full py-4 px-2 font-semibold text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 animate-bounce flex items-center justify-center "
            >
              <p className="text-3xl">Donate and let us organize</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunityLeadership;
