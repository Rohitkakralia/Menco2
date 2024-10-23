import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mt-12 mx-4 md:mx-16">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
        About Us
      </h2>
      <p className="text-gray-700 text-lg mb-4">
        Welcome to our platform! We are dedicated to connecting aspiring
        individuals with experienced mentors who can guide them on their
        career journey. Our mission is to empower learners from all walks of
        life to unlock their potential and achieve their goals through
        personalized mentorship.
      </p>
      <p className="text-gray-700 text-lg mb-4">
        Our mentors come from diverse backgrounds and possess a wealth of
        knowledge in various fields, ensuring that you find the perfect
        match for your learning needs. Whether you're looking to enhance your
        skills, switch careers, or gain insights into a specific industry,
        we are here to help.
      </p>
      <p className="text-gray-700 text-lg mb-4">
        Join us on this exciting journey of growth and discovery! Let’s
        shape the future together.
      </p>
      <h3 className="text-2xl font-semibold text-purple-600 mt-6 mb-4">
        Our Vision
      </h3>
      <p className="text-gray-700 text-lg mb-4">
        We envision a world where everyone has access to mentorship and the
        tools needed to thrive in their careers.
      </p>
      <h3 className="text-2xl font-semibold text-purple-600 mt-6 mb-4">
        Our Values
      </h3>
      <ul className="list-disc pl-6 text-gray-700 text-lg mb-4">
        <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
        <li>Empowerment: We empower individuals to take charge of their career paths.</li>
        <li>Innovation: We embrace innovation and continuous improvement in our services.</li>
        <li>Diversity: We celebrate diversity and inclusivity in our mentorship programs.</li>
      </ul>
    </div>
  );
};

export default AboutUs;
