import { motion } from "framer-motion";
import webDevImg from "../assets/images/web-dev.jpg";
import mobileAppImg from "../assets/images/mobile-app.jpg";
import uiuxImg from "../assets/images/uiux.jpg";
import cloudImg from "../assets/images/cloud.jpg";
import aiImg from "../assets/images/ai.jpg";
import gamingImg from "../assets/images/game.jpg";

function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Build responsive, high-performance websites with modern technologies.",
      img: webDevImg,
    },
    {
      title: "Mobile Apps",
      desc: "Design and develop seamless mobile applications for Android and iOS.",
      img: mobileAppImg,
    },
    {
      title: "UI/UX Design",
      desc: "Create beautiful, user-friendly designs that enhance user experience.",
      img: uiuxImg,
    },
    {
      title: "Cloud Solutions",
      desc: "Secure, scalable cloud services to power your business.",
      img: cloudImg,
    },
    {
      title: "Artificial Intelligence",
      desc: "AI-driven applications, chatbots, and predictive analytics to boost business innovation.",
      img: aiImg,
    },
    {
      title: "Gaming Development",
      desc: "Interactive and immersive gaming solutions for web, mobile, and console platforms.",
      img: gamingImg,
    },
  ];

  return (
    <section id="services" className="py-16 bg-[#E5EAF5]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-[#0F172A] mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 text-center w-full max-w-xs transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-32 mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                <motion.img
                  src={service.img}
                  alt={service.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-2 hover:text-yellow-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
