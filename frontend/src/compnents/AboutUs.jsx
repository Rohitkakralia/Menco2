import React from "react";

const AboutUs = () => {
  const aboutItems = [
    {
      title: "Our Mission",
      description:
        "We aim to connect students with experienced mentors to guide them in their career paths, helping them achieve their goals and succeed in their professional journeys.",
      icon: "🎯", // Use any emoji or icon as a placeholder
    },
    {
      title: "What We Offer",
      description:
        "A diverse range of mentorship opportunities across various fields, tailored to meet the unique needs and aspirations of each student.",
      icon: "🌟",
    },
    {
      title: "Our Vision",
      description:
        "Empowering the next generation of professionals through mentorship, fostering a community of lifelong learners and industry leaders.",
      icon: "🚀",
    },
    {
      title: "Why Choose Us",
      description:
        "We provide personalized mentor matches, extensive resources, and a supportive environment to ensure our students thrive.",
      icon: "💡",
    },
  ];

  return (
    <div className="py-16 px-8">
      <h2 className="text-center text-[36px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)] mb-12">
        About Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {aboutItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-purple-100 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-6 flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="text-6xl mb-4">{item.icon}</div>
            {/* Title */}
            <h3 className="text-purple-700 text-[24px] font-semibold mb-2">
              {item.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-[16px]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
