import { useState } from "react";
import webDevImg from "../assets/images/web-dev.jpg";
import mobileAppImg from "../assets/images/mobile-app.jpg";
import uiuxImg from "../assets/images/uiux.jpg";
import cloudImg from "../assets/images/cloud.jpg";
import aiImg from "../assets/images/ai.jpg";
import gamingImg from "../assets/images/game.jpg";

function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "Web Development",
      desc: "Build responsive, high-performance websites with modern technologies.",
      img: webDevImg,
    },
    {
  title: "Cloud Solutions",
      desc: "Secure, scalable cloud services to power your business.",
      img: cloudImg,
    },
    {
      
       title: "Game Development",
      desc: "Interactive and immersive gaming solutions for web, mobile, and console platforms.",
      img: gamingImg,
    },
    {
      
      
       title: "UI/UX Design",
      desc: "Create beautiful, user-friendly designs that enhance user experience.",
      img: uiuxImg,
    },
    {
      title: "Artificial Intelligence",
      desc: "AI-driven applications, chatbots, and predictive analytics to boost business innovation.",
      img: aiImg,
    },
    {
     title: "Mobile Apps",
      desc: "Design and develop seamless mobile applications for Android and iOS.",
      img: mobileAppImg,
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const closePopup = () => {
    setActiveIndex(null);
  };

  return (
    <section id="services" className="py-16 bg-[#E5EAF5]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0F172A] mb-12">
          Our Services
        </h2>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 text-center w-full max-w-xs border-2 border-transparent"
            >
              <div
                onClick={() => handleClick(index)}
                className="w-full h-40 mb-4 flex items-center justify-center overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-40 object-cover transform hover:scale-110 duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Popup Modal */}
        {activeIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative">
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg font-bold"
              >
                ✕
              </button>

              {/* Image */}
              <div className="w-full h-48 mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={services[activeIndex].img}
                  alt={services[activeIndex].title}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0F172A] mb-2">
                {services[activeIndex].title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {services[activeIndex].desc}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;
