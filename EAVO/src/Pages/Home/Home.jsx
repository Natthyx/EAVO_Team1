import p from "../../assets/p.png";
import p1 from "../../assets/p1.png";
import p1copy from "../../assets/p1Copy.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4-removebg-preview.png";
import p5 from "../../assets/p5-removebg-preview.png";
import p6 from "../../assets/p6-removebg-preview.png";
import p7 from "../../assets/p7.png";
import p8 from "../../assets/p8.png";
import p9 from "../../assets/p9.png";
import p11 from "../../assets/p11.png";
import p12 from "../../assets/p12.png";
import p13 from "../../assets/p13.png";
import p14 from "../../assets/p14.png";
import p15 from "../../assets/p15.png";
import p16 from "../../assets/p16.png";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import React, { useState } from "react";
function Home() {
  const [images, setImages] = useState([
    { id: "image1", src: p1copy },
    { id: "image2", src: p2 },
    { id: "image3", src: p3 },
  ]);

  const [activeIndex, setActiveIndex] = useState(1);

  const swapLeft = () => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      const temp = newImages[0];
      newImages[0] = newImages[1];
      newImages[1] = newImages[2];
      newImages[2] = temp;
      return newImages;
    });
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const swapRight = () => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      const temp = newImages[2];
      newImages[2] = newImages[1];
      newImages[1] = newImages[0];
      newImages[0] = temp;
      return newImages;
    });
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);

    setImages((prevImages) => {
      const newImages = [...prevImages];
      const temp = newImages[index];
      newImages[index] = newImages[1];
      newImages[1] = temp;
      return newImages;
    });
  };

  return (
    <>
      {/* first section */}
      <div className="flex flex-col md:flex-row h-auto md:h-[500px] rounded-3xl overflow-hidden m-2 border border-gray-300 shadow-lg bg-gradient-to-r from-[#171742] to-[#cfcadf]">
        <div className="flex flex-col justify-center items-center p-2 md:p-2 text-white flex-1">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight text-center mb-6 md:mb-8 font-serif">
            Empowering African
            <br />
            Women and Children
            <br />
            for a Brighter Future.
          </h1>
          <div className="flex flex-row gap-4 md:gap-8 items-center">
            <Link
              to="/Donate"
              className="bg-orange-500 mt-12 text-white rounded-3xl py-3 px-12 font-semibold text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500  flex items-center justify-center "
            >
              <p className="text-3xl">Donate</p>
            </Link>
            <Link
              to="/GetInvolved"
              className="bg-orange-500 mt-12 text-white rounded-3xl py-3 px-12 font-semibold text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500  flex items-center justify-center "
            >
              <p className="text-3xl">Join Us</p>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center">
          <img
            className="rounded-3xl w-full h-full object-cover"
            src={p}
            alt="profile picture"
          />
        </div>
      </div>
      {/* second section */}
      <div className="flex flex-col md:flex-row h-auto md:h-[500px] rounded-3xl overflow-hidden m-2">
        <div className="flex-1 flex items-center justify-center p-4 md:p-1 md:pt-4">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={p1}
            alt="profile picture"
          />
        </div>

        <div className="flex-1 p-4 md:p-6 text-[#171742] flex flex-col justify-start space-y-6">
          <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-6 font-serif text-center">
            Welcome To EAVO
          </h1>
          <p className="font-semibold md:text-lg mb-4 text-xxl">
            The Empowering African Voices Organization (EAVO) is a collective of
            passionate African women and child rights activists,
            Pan-Africanists, and advocates. <br />
            Our mission is to support African women and children facing various
            challenges such as marginalization, discrimination, and violence.
          </p>
          <p className="text-base md:text-lg mb-4 font-semibold">
            We believe in the power of community and the strength that comes
            from uniting our voices to create positive change. Our vision is a
            world where African women and children are empowered, their rights
            are respected, and they can live free from violence and
            discrimination.
          </p>
          <div className="flex items-start">
            <Link
              to="/Aboutus"
              className="bg-orange-500 mt-12 text-white rounded-3xl py-2 px-12 font-semibold text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500  flex items-center justify-center "
            >
              <p className="text-2xl">More About us</p>
            </Link>
          </div>
        </div>
      </div>
      {/* third section */}
      <div className="team">
        <h1 className="text-6xl font-bold mb-4 text-center font-serif">Team</h1>
        <div className="relative flex justify-center items-center">
          <div
            className="absolute left-4 md:left-[250px]  cursor-pointer"
            onClick={swapLeft}
          >
            <i className="fas fa-chevron-left text-4xl text-black"></i>
          </div>
          {/* Single image for small screens */}
          <div
            className="relative w-full md:hidden flex items-center justify-center"
            style={{ height: "200px" }}
          >
            <img
              id="image1"
              className="w-3/4 h-full object-cover border-4 border-black rounded-lg"
              src={images[activeIndex].src}
              alt="profile picture"
            />
          </div>
          {/* large size */}
          <div className="absolute left-1/4 w-1/4 md:w-1/4 items-center hidden md:block justify-center h-[300]">
            <img
              id="image1"
              className="w-full h-full object-cover border-4 border-black rounded-lg"
              src={images[0].src}
              alt="profile picture"
            />
          </div>

          <div className="relative w-1/5 z-10 hidden md:block responsive-height">
            <img
              id="image2"
              className="w-full h-full object-cover border-4 border-black rounded-lg mt-24"
              src={images[1].src}
              alt="profile picture"
            />
          </div>

          <div className="absolute right-1/4 w-1/5 items-center justify-center hidden md:block responsive-height">
            <img
              id="image3"
              className="w-full h-full object-cover border-4 border-black rounded-lg"
              src={images[2].src}
              alt="profile picture"
            />
          </div>

          <div
            className="absolute right-4 md:right-[250px]  cursor-pointer "
            onClick={swapRight}
          >
            <i className="fas fa-chevron-right text-4xl text-black"></i>
          </div>
        </div>

        <div className="flex justify-center mt-36">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot rounded-full h-3 w-3 mx-1 ${
                activeIndex === index ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>

        <div className="team-p text-center mt-4 ">
          <p className="text-xl font-serif ">
            Profiles of key members and volunteers
          </p>
        </div>
      </div>
      {/* fourth section */}
      <h1 className="text-6xl font-bold m-12 text-center font-serif">Impact</h1>

      <div className="flex flex-wrap justify-center gap-16">
        <div className="flex flex-col items-center bg-gray-200 p-6 rounded-3xl text-center shadow-md border-2 border-gray-300 max-w-[260px] h-[250px]">
          <img
            src={p4}
            alt="supporting"
            className="w-[60px] h-[60px] pt-2 mb-4"
          />
          <p className="text-indigo-900 mb-4">supporting</p>
          <h2 className="text-4xl font-extrabold italic text-[#1b1b47]">
            +2000
          </h2>
          <h4 className="text-indigo-900">
            Supportive people All Over the World.
          </h4>
        </div>

        <div className="flex flex-col items-center bg-gray-200 p-6 rounded-3xl text-center shadow-md border-2 border-gray-300 max-w-[260px] h-[250px]">
          <img
            src={p5}
            alt="supporting"
            className="w-[60px] h-[60px] pt-2 mb-4"
          />
          <p className="text-indigo-900 mb-4">Over</p>
          <h2 className="text-4xl font-extrabold italic text-[#1b1b47]">
            +1100
          </h2>
          <h4 className="text-indigo-900">
            Individuals served through our health clinics.
          </h4>
        </div>

        <div className="flex flex-col items-center bg-gray-200 p-6 rounded-3xl text-center shadow-md border-2 border-gray-300 max-w-[260px] h-[250px]">
          <img
            src={p6}
            alt="supporting"
            className="w-[60px] h-[60px] pt-2 mb-4"
          />
          <p className="text-indigo-900 mb-4">Over</p>
          <h2 className="text-4xl font-extrabold italic text-[#1b1b47]">
            +2000
          </h2>
          <h4 className="text-indigo-900">Women trained and employed.</h4>
        </div>
      </div>
      {/* fifth section */}
      <div className="our mr-2">
        <h1 className="text-6xl font-bold m-10 text-center font-serif">
          Our Mission
        </h1>
        <div className="p-6">
        <p>
          The Empowering African Voices Organization (EAVO) is dedicated to
          supporting African women and children by advocating for their rights,
          providing essential support services, and empowering communities. Our
          goals include advocating for policy changes, offering educational and
          healthcare programs, and fostering economic empowerment and social
          cohesion.
        </p>
        <br />
        <p>
          At EAVO, we value empathy, integrity, equality, collaboration, and
          resilience, guiding our support for African women and children. We
          engage communities, build capacity, advocate for policy changes,
          provide essential services, innovate solutions, and continuously
          improve our impact.
        </p>
      </div>
      </div>
      {/* sixth section */}

      <h1 className="text-6xl  font-bold m-10 text-center font-serif">
        Our Programs
      </h1>

      <div className="flex justify-center max-w-screen-4xl flex-wrap gap-3 px-2 ">
        <div className="flex flex-col items-center w-full max-w-md border-2 border-gray-200 shadow-md rounded-3xl bg-gray-100 mt-6 ">
          <img
            src={p7}
            alt="supporting"
            className="h-72 rounded-3xl w-full object-cover"
          />
          <h2 className="mt-4 text-xl font-semibold text-center">
            Women's Vocational Training
          </h2>
          <p className="text-center mt-2 px-4">
            This program focuses on providing women with the skills they need to
            achieve financial independence. We offer training in various trades
            such as tailoring, baking, and computer skills.
          </p>
          <Link 
  to="/WomenTraining" 
  className="bg-[#171742] text-white mt-2 px-11 py-2 rounded-2xl mb-3 inline-block text-center"
>
  Learn More
</Link>
        </div>

        <div className="flex flex-col items-center w-full max-w-md border-2 border-gray-200 shadow-md rounded-3xl bg-gray-100 mt-6">
          <img
            src={p8}
            alt="supporting"
            className="h-72 rounded-3xl w-full object-cover"
          />
          <h2 className="mt-4 text-xl font-semibold text-center">
            Child Education Support
          </h2>
          <p className="text-center mt-2 px-4">
            Our education support program ensures that children from
            marginalized communities have access to quality education through
            scholarships, school supplies, and tutoring.
          </p>
          <Link 
  to="/ChildSupport"
  className="bg-[#171742] text-white mt-2 px-11 py-2 rounded-2xl mb-3 inline-block text-center"
>
  Learn More
</Link>
        </div>

        <div className="flex flex-col items-center w-full max-w-md border-2 border-gray-200 shadow-md rounded-3xl bg-gray-100 mt-6">
          <img
            src={p9}
            alt="supporting"
            className="h-72 rounded-3xl w-full object-cover"
          />
          <h2 className="mt-4 text-xl font-semibold text-center">
            Healthcare Initiatives
          </h2>
          <p className="text-center mt-2 px-4">
            We run health clinics and provide essential medical care and health
            education to underserved communities to improve overall health and
            well-being.
          </p>
          <Link 
  to="/HealthCare" 
  className="bg-[#171742] text-white mt-2 px-11 py-2 rounded-2xl mb-3 inline-block text-center"
>
  Learn More
</Link>
        </div>
      </div>
      {/* seventh section */}

      <h1 className="text-4xl font-bold m-10 text-center font-serif">
        Get Involved
      </h1>
      <div className="flex flex-col md:flex-row h-auto md:h-[500px] rounded-3xl overflow-hidden m-4 border border-gray-300 shadow-lg bg-gray-100 ">
        <div className="flex-1 p-10">
          <h2 className="text-3xl md:text-3xl font-bold leading-tight mb-4 font-serif text-center text-[#171742]">
            Volunteer Opportunities
          </h2>
          <p className="mb-2">
            Join us in making a difference! We offer various volunteer
            opportunities:
          </p>
          <p className="mb-2">
            <b>Program Support:</b> Assist in our vocational training, education
            support, healthcare, and shelter programs.
          </p>
          <p className="mb-2">
            <b>Advocacy:</b> Help with campaigns to raise awareness and
            influence policy changes.
          </p>
          <p className="mb-2">
            <b>Community Outreach:</b> Participate in local initiatives and
            support community events.
          </p>
          <p className="mb-4">
            <b>Administrative Support:</b> Provide assistance with office tasks
            and event planning.
          </p>
          <div className="flex justify-center pt-10">
          <Link
                to="/Donate"
                className="bg-orange-500 mt-12 text-white rounded-3xl py-3 px-12 font-semibold text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500  flex items-center justify-center "
              >
                <p className="text-3xl">Apply</p>
              </Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={p11}
            alt="Volunteer Opportunities"
          />
        </div>
      </div>

      {/* eighth section */}
      <div className="flex flex-col md:flex-row h-auto md:h-[500px] rounded-3xl overflow-hidden m-4 border border-gray-300 shadow-lg bg-gray-100 ">
        <div className="flex flex-1 items-center justify-center">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={p12}
            alt="profile picture"
          ></img>
        </div>

        <div className="flex flex-col md:flex-row h-auto md:h-[500px] rounded-3xl overflow-hidden m-4 ">
          <div className="flex-1 p-10">
            <h2 className="text-3xl md:text-3xl font-bold leading-tight mb-4 font-serif text-center text-[#171742]">
              Donation Information
            </h2>
            <p className="mb-2">
              {" "}
              Your donations help us empower African women and children.
            </p>

            <p className="mb-2">
              <b>Where the Funds Go:</b>{" "}
            </p>
            <p className="mb-2">
              <b>Education:</b>Scholarships, school supplies, and tutoring{" "}
            </p>
            <p className="mb-2">
              <b>Healthcare:</b>Medical care, health education, and clinics.{" "}
            </p>
            <p className="mb-2">
              <b>Shelter: </b>Safe havens, counseling, and support services.{" "}
            </p>
            <p className="mb-4">
              <b>Training Programs: </b> Vocational training and community
              leadership development.
            </p>

            <div className="flex justify-center pt-10">
              <Link
                to="/Donate"
                className="bg-orange-500 mt-12 text-white rounded-3xl py-3 px-12 font-semibold text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500  flex items-center justify-center "
              >
                <p className="text-3xl">Donate</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ninth section */}

      <div className="upcoming">
        <h1 className="text-4xl font-bold text-center font-serif pt-10">
          Upcoming Events
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold m-3 font-serif ml-5">
          What is happening?
        </h2>
        <p className="text-blue-900 font-semibold font-serif text-xl ml-5">
          Our Future Events
        </p>
        <div className="flex flex-col m-5  lg:grid lg:grid-cols-2 lg:gap-6">
          <div className="flex flex-col items-center border-2 border-gray-200 shadow-md rounded-3xl bg-gray-100 lg:col-span-1 mb-5 md:mb-0">
            <img
              src={p3}
              alt="supporting"
              className="w-full h-1/3 object-cover rounded-3xl"
            />
            <p className="text-gray-700 p-10">
              Today's event is all about empowerment, advocacy, and support for
              African women and children. The event will be held in Addis Ababa,
              Ethiopia, Adawa Museum main hall. Please contact us for more
              detailed information.
            </p>
            <div className="flex justify-between items-end w-full h-full p-4">
              <p className="text-blue-500">Today, 07 July 2024</p>
              <span className="text-white bg-blue-500 rounded-full p-2 pl-3 pr-3 flex items-center justify-center">
                <i class="fas fa-chevron-right text-white"></i>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:col-span-1">
            <div className="flex flex-col items-center border-2 border-gray-200 shadow-md rounded-3xl bg-gray-100 lg:col-span-1 ">
              <img
                src={p13}
                alt="supporting"
                className="w-full h-1/2 object-cover rounded-3xl"
              />
              <h2 className="text-xl font-bold p-3">Annual Fundraising</h2>
              <p className="text-gray-700 p-3">
                An evening of dining, entertainment, and fundraising for our
                programs
              </p>
              <div className="flex justify-between items-end w-full h-full p-4">
                <p className="text-blue-500">Today, 07 July 2024</p>
                <span className="text-white bg-blue-500 rounded-full p-2 pl-3 pr-3 flex items-center justify-center">
                  <i class="fas fa-chevron-right text-white"></i>
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center border-2 border-gray-200 shadow-md rounded-3xl bg-gray-100 lg:col-span-1">
              <img
                src={p16}
                alt="supporting"
                className="w-full h-1/2 object-cover rounded-3xl"
              />
              <h2 className="text-xl font-bold p-3">Community Health Fair</h2>
              <p className="text-gray-700 p-3">
                Free health screenings and education for local communities
              </p>
              <div className="flex justify-between items-end w-full h-full p-4">
                <p className="text-blue-500">Today, 07 July 2024</p>
                <span className="text-white bg-blue-500 rounded-full p-2 pl-3 pr-3 flex items-center justify-center">
                  <i class="fas fa-chevron-right text-white"></i>
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center border-2 border-gray-200 shadow-md rounded-3xl bg-gray-100 lg:col-span-1">
              <img
                src={p14}
                alt="supporting"
                className="w-full h-1/2 object-cover rounded-3xl"
              />
              <h2 className="text-xl font-bold p-3">Empowerment Workshops</h2>
              <p className="text-gray-700 p-3">
                Workshops focusing on skill development and leadership training
              </p>
              <div className="flex justify-between items-end w-full h-full p-4">
                <p className="text-blue-500">Today, 07 July 2024</p>
                <span className="text-white bg-blue-500 rounded-full p-2 pl-3 pr-3 flex items-center justify-center">
                  <i class="fas fa-chevron-right text-white"></i>
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center border-2 border-gray-200 shadow-md rounded-3xl bg-gray-100 lg:col-span-1">
              <img
                src={p15}
                alt="supporting"
                className="w-full h-1/2 object-cover rounded-3xl"
              />
              <h2 className="text-xl font-bold p-3">
                Youth Empowerment Summit
              </h2>
              <p className="text-gray-700 p-3">
                A summit for young leaders to discuss and address issues facing
                youth in Africa.
              </p>
              <div className="flex justify-between items-end w-full h-full p-4">
                <p className="text-blue-500">Today, 07 July 2024</p>
                <span className="text-white bg-blue-500 rounded-full p-2 pl-3 pr-3 flex items-center justify-center">
                  <i class="fas fa-chevron-right text-white"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tenth section */}

      <h1 className="text-4xl font-bold m-10 text-center font-serif">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row h-full rounded-3xl overflow-hidden m-5 border border-gray-300 shadow-lg bg-gray-100">
        <div className="flex items-center justify-center w-full md:w-1/2">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src={p15}
            alt="profile picture"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 p-5 md:p-10">
          <h2 className="text-3xl font-bold mb-5 text-center font-serif bg-gray-100 ">
            Contact Form
          </h2>
          <div className="bg-neutral-300 p-5 shadow-2xl rounded-3xl ">
            <form className="flex-grow space-y-4 space-x-2">
              <div>
                <label className="block mb-2">
                  <b>Full Name</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-2 rounded border"
                />
              </div>
              <div>
                <label className="block mb-2 ">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  required
                  className="w-full p-2 rounded border"
                />
              </div>
              <div>
                <label className="block mb-2">
                  <b>Phone Number</b>
                </label>
                <PhoneInput
                  country={"et"}
                  inputClass="w-full p-2 rounded border"
                  containerClass="w-full"
                />
              </div>
              <div>
                <label className="block mb-2">
                  <b>Country</b>
                </label>
                <input
                  type="text"
                  placeholder="Select country"
                  className="w-full p-2 rounded border"
                />
              </div>
              <div>
                <label className="block mb-2">
                  <b>Postal Code</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter postal code"
                  className="w-full p-2 rounded border"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-[#f44336] hover:bg-[#f36e6e] font-semibold text-white border border-[#f44336] hover:border-[#d32f2f] px-8 md:px-16 py-3 text-base md:text-lg rounded-full cursor-pointer">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
