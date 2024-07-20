import React from "react";
import { Link } from "react-router-dom";
import { School } from "@mui/icons-material";
const EducationIntiative = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-3">
      <div className="p-2 bg-white">
        <header className="text-center mb-4  mr-6 flex">
          <School fontSize="inherit" sx={{ fontSize: 100, color: "#3F51B5" }} />
          <h1 className="text-6xl font-bold text-blue-900 mb-4">
            Education Intiatives
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
            The East African Voices Organization (EAVO) is passionately
            committed to transforming lives through our Education Initiative
            Program. We believe that education is the cornerstone of personal
            and community development, and our program aims to provide children
            and young adults with access to quality education and lifelong
            learning opportunities. Our efforts are focused on reducing barriers
            to education, such as poverty, gender inequality, and lack of
            resources, to ensure that every child has the chance to reach their
            full potential.
          </p>
          <p className="text-black mb-6 text-xxl font-semibold">
            One of the key components of our Education Initiative is the
            provision of scholarships and financial aid to students from
            low-income families. By alleviating the financial burden, we enable
            these students to attend school regularly and focus on their
            studies. Additionally, we supply essential school materials such as
            textbooks, uniforms, and stationery, creating an environment
            conducive to learning. Our program also emphasizes the importance of
            early childhood education, providing support to preschools and
            kindergartens to lay a strong educational foundation for young
            learners.
          </p>
          <p className="text-black mb-6 text-xxl font-semibold">
            To enhance the quality of education, EAVO invests in teacher
            training and professional development. We organize workshops and
            training sessions for educators, equipping them with modern teaching
            methodologies and tools to engage students effectively. By
            empowering teachers, we ensure that students receive a high standard
            of education that promotes critical thinking, creativity, and
            problem-solving skills. Our program also encourages the integration
            of technology in the classroom, providing schools with computers and
            internet access to facilitate digital literacy.
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
            EAVO's Education Initiative goes beyond the classroom by promoting
            community involvement and parental engagement. We believe that a
            supportive home environment is crucial for a child's academic
            success. Our program includes workshops for parents on topics such
            as the importance of education, child development, and effective
            parenting practices. By fostering a collaborative relationship
            between schools and families, we create a holistic support system
            that nurtures the educational growth of children.
          </p>
          <p className="text-black mb-6 text-xxl font-semibold">
            The impact of our Education Initiative is profound and far-reaching.
            By providing access to quality education, we are breaking the cycle
            of poverty and empowering the next generation with the skills and
            knowledge needed to build a better future. Educated individuals are
            more likely to secure stable employment, contribute positively to
            their communities, and lead healthier lives. Through our efforts,
            EAVO is not only changing individual lives but also fostering
            sustainable development in the regions we serve. We invite you to
            join us in our mission to make education accessible to all by
            supporting our programs through donations or volunteer efforts.
            Together, we can create a brighter, more equitable future for
            countless children and communities.
          </p>
          <div className="text-4xl font-bold text-orange-500">
            Do you want to help others recover?
          </div>
          <div className="text-center">
            <Link
              to="/payment"
              className="bg-orange-500 mt-12 text-white rounded-full py-4 px-2 font-semibold text-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 animate-bounce flex items-center justify-center "
            >
              <p className="text-3xl">Donate and help children to learn</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EducationIntiative;
