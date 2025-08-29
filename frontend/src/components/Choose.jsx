import React from "react";
import { FaBuilding, FaCogs, FaRegComments, FaClock, FaUserShield } from "react-icons/fa";

function Choose() {
  const features = [
    { icon: <FaBuilding size={40} />, title: "Industry expertise" },
    { icon: <FaCogs size={40} />, title: "Customized solutions" },
    { icon: <FaRegComments size={40} />, title: "Transparent communication" },
    { icon: <FaClock size={40} />, title: "Timely delivery" },
    { icon: <FaUserShield size={40} />, title: "Ongoing support" },
  ];

  return (
    <section className="py-20 bg-[#E5EAF5] text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose Us?</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4 text-[#FACC15]">{feature.icon}</div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Choose;

