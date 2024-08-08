import React, { useState, useEffect } from "react";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import event1 from "../../assets/Images/event1.jpg";
import event2 from "../../assets/Images/event2.jpg";
import image1 from "../../assets/Images/volunteer1.jpg";
import image2 from "../../assets/Images/volunteer2.jpg";
import image3 from "../../assets/Images/volunteer3.jpg";
const GetInvolved = () => {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(changeImage, 5000);
    return () => clearInterval(intervalId);
  }, []);
  const [phonePrefix, setPhonePrefix] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhonePrefixChange = (e) => {
    setPhonePrefix(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="bg-gray-100 max-w-screen-4xl min-h-screen flex flex-col font-sans items-center p-4 w-[90%] mx-auto">
      <div className="w-full   bg-white shadow-lg rounded-lg p-8 mb-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-6">Why Join Us?</h1>
        <p className="text-xxl  text-gray-700 mb-4">
          At East African Voices Organization (EAVO), we believe that your
          involvement can drive meaningful change. Joining us provides an
          opportunity to be part of impactful initiatives that empower local
          communities, promote social justice, and foster innovation. By getting
          involved, you contribute to projects that directly address critical
          issues such as women's vocational training, child education support,
          and healthcare initiatives.
        </p>
        <p className="text-xxl  text-gray-700 mb-4">
          Your support enables us to reach more people, deliver better services,
          and create sustainable solutions. Whether you volunteer your time,
          offer your skills, or support us financially, your contribution is
          invaluable. Together, we can make a lasting impact on the lives of
          those who need it most and help build a brighter future for East
          Africa.
        </p>
        <p className="text-xxl  text-gray-700 mb-4">
          Get involved today and become a catalyst for positive change. Your
          actions matter, and your involvement helps us amplify voices, drive
          social progress, and build stronger communities. Join us in making a
          difference and be a part of something greater.
        </p>
        <br />
        <p className="text-xxl  text-blue-800 mb-4">
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

        <div className="text-5xl  text-orange-950 mb-6">
          so what are you waiting for?
        </div>
        <div className="px-2">
        <Link
  to="/ContactUs"
  className="bg-blue-500 mt-12 text-white rounded-full py-4 px-2 text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500  flex items-center justify-center w-1/3 ml-48"
>
  <p className="text-2xl">Get Involved</p>
</Link>

        </div>
        <div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6 mt-8">
            How to volunteer?
          </h1>
          <p className="text-xxl  text-gray-700 mb-4">
            Volunteering with East African Voices Organization (EAVO) is a
            rewarding way to make a meaningful impact in the lives of
            individuals and communities across East Africa. To get started,
            visit our website and explore the various volunteer opportunities
            available. Whether you are interested in teaching, community
            development, healthcare, or administrative support, EAVO offers a
            wide range of roles that cater to diverse skills and interests. By
            filling out the volunteer application form and indicating your area
            of interest, you can join our dedicated team of volunteers who are
            passionate about creating positive change.
          </p>
          <p className="text-xxl  text-gray-700 mb-4">
            In addition to hands-on volunteering, you can also support EAVO by
            making a donation. The "Donate" button on our website provides a
            convenient way to contribute financially to our programs and
            initiatives. Your donations help us provide essential resources,
            training, and support to those in need. Every contribution, no
            matter the size, makes a difference and helps us continue our
            mission of empowering communities and fostering sustainable
            development. Join us today and be a part of a transformative journey
            towards a brighter future for East Africa.
          </p>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6 mt-8">
            Donation Information
          </h1>
          <p className="text-xxl  text-gray-700 mb-4">
            Donating to the East African Voices Organization (EAVO) is a
            straightforward and impactful way to support our mission of
            empowering communities and fostering sustainable development across
            East Africa. To make a donation, simply visit our website and click
            on the "Donate" button. This will direct you to a secure donation
            portal where you can choose to make a one-time donation or set up
            recurring contributions. Our donation process is designed to be
            user-friendly, ensuring that your generous contributions can be made
            quickly and easily. Your financial support is crucial in helping us
            expand our programs and reach more individuals in need.
          </p>
          <p className="text-xxl  text-gray-700 mb-4">
            The funds donated to EAVO are allocated with careful consideration
            to ensure maximum impact. A significant portion of the donations
            goes directly to our various programs, such as women's vocational
            training, child education support, healthcare initiatives, safe
            shelter programs, community leadership training, advocacy, and
            awareness campaigns. Additionally, donations help us cover essential
            operational costs, enabling us to maintain a strong and effective
            organization. Every dollar contributed helps us provide vital
            resources, training, and support to vulnerable communities,
            ultimately contributing to the overall development and well-being of
            East Africa. Your generosity empowers us to continue making a
            difference and changing lives.
          </p>
        </div>
        <div className="bg-gray-100 min-h-screen p-5">
          <div className="flex flex-col items-center justify-center space-y-12">
            <div className="flex flex-col items-center text-center mb-5 space-y-6 w-full">
              <div className="flex flex-col md:flex-row items-center bg-blue-100 w-full md:space-x-8 mt-0 p-4">
                <div className="flex-1 md:w-1/2 px-4">
                  <h1 className="text-6xl  mb-8">
                    Volunteer Opportunities
                  </h1>
                  <h3 className="text-3xl mt-4 mb-4">
                    Join us in making a difference! We offer various volunteer
                    opportunities.
                  </h3>
                  <div className="space-y-6 mt-6">
                    <h3 className="text-2xl pt-2 ml-4">
                      <span className="font-bold text-4xl pt-2">
                        Program Support:
                      </span>{" "}
                      Assist in our vocational training, education support,
                      healthcare, and shelter programs.
                    </h3>
                    <h3 className="text-2xl pt-2 ml-4">
                      <span className="font-bold text-4xl pt-2">Advocacy:</span>{" "}
                      Help with campaigns to raise awareness and influence
                      policy changes.
                    </h3>
                    <h3 className="text-2xl pt-2 ml-4">
                      <span className="font-bold text-4xl pt-2">
                        Community Outreach:
                      </span>{" "}
                      Participate in local initiatives and support community
                      events.
                    </h3>
                    <h3 className="text-2xl pt-2 ml-4">
                      <span className="font-bold text-4xl pt-2">
                        Administrative Support:
                      </span>{" "}
                      Provide assistance with office tasks and event planning.
                    </h3>
                  </div>
                  <Link
                    to="/GetInvolved"
                    className="bg-blue-700 mt-12 text-white rounded-3xl py-3 px-12  text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 animate-bounce flex items-center justify-center "
                  >
                    <p className="text-3xl">Apply</p>
                  </Link>
                </div>
                <div className="flex-1 md:w-1/2 mt-8 md:mt-0 relative rounded-lg overflow-hidden">
                  <img
                    src={images[currentImageIndex]}
                    alt="Get Involved"
                    className="w-full h-auto object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg bg-blue-100 md:flex-row rounded-13xl items-center justify-center mt-12 space-x-8">
            <div className="flex-1 md:w-1/2 h-100 rounded-lg overflow-hidden">
              <img
                src={image1}
                alt="Donation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 md:w-1/2  p-16 rounded-lg bg-blue-100 shadow-md flex flex-col justify-between">
              <div className="flex flex-col items-start text-left space-y-6">
                <h1 className="text-5xl font-bold">Donation Information</h1>
                <div>
                  <h3 className="text-3xl">
                    Your donations help us empower African Women and children.
                  </h3>
                </div>
                <div>
                  <h2 className="text-4xl font-semibold">
                    <span>Where the funds go:</span>
                  </h2>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl">
                    <span className="font-bold">Education:</span> Scholarships,
                    school supplies, and tutoring.
                  </h3>
                  <h3 className="text-2xl">
                    <span className="font-bold">Healthcare:</span> Medical care,
                    health education, and clinics.
                  </h3>
                  <h3 className="text-2xl">
                    <span className="font-bold">Shelter:</span> Safe havens,
                    counseling, and support services.
                  </h3>
                  <h3 className="text-2xl">
                    <span className="font-bold">Training Program:</span>{" "}
                    Vocational training and community leadership development.
                  </h3>
                </div>
                <Link
                  to="/Donate"
                  className="bg-green-700 mt-12 text-white rounded-3xl py-3 px-12  text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 animate-bounce flex items-center justify-center "
                >
                  <p className="text-3xl">Donate</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className="bg-gray-100 py-8">
          <div className="max-w-screen-xl   mx-auto px-6 xl:px-8">
            <h2 className="text-5xl font-bold text-gray-800 text-center mb-12">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 flex">
              {/* Let's Feed Children Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={event1}
                  alt="Let's Feed Children"
                  className="w-full h-82 w-100 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Let's Feed Children
                  </h3>
                  <p className="text-gray-700">
                    Your support can provide nutritious meals to children in
                    need, helping to combat hunger and promote healthy growth
                    and development.
                  </p>
                  <div className="px-2">
                    <Link
                      to="/Donate"
                      className="bg-orange-500 mt-12 text-white rounded-full py-4 px-2  text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 animate-bounce flex items-center justify-center "
                    >
                      <p className="text-3xl">Donate</p>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Donate What You Have Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={event2}
                  alt="Donate What You Have"
                  className="w-full h-82 w-100 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Donate What You Have
                  </h3>
                  <p className="text-gray-700">
                    Every contribution, no matter how small, can make a
                    significant impact. Donate items, funds, or your time to
                    help those in need.
                  </p>
                  <div className="px-2">
                    <Link
                      to="/Donate"
                      className="bg-orange-500 mt-12 text-white rounded-full py-4 px-2  text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 animate-bounce flex items-center justify-center "
                    >
                      <p className="text-3xl">Donate</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
