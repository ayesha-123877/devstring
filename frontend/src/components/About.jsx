import React from "react";
import { motion } from "framer-motion";
import illustration from "../assets/images/about.jpg"; // 👈 apna sahi path

function About() {
  return (
    <section id="about" className="py-20 bg-white text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
           <p className="text-lg text-gray-700 leading-relaxed">
  At <span className="font-semibold">webster.tech</span>, our mission is to deliver 
  technology that creates real impact. With a vision to empower businesses 
  through innovation, we transform ideas into scalable digital solutions 
  that drive growth. Guided by creativity and technical excellence, our 
  approach blends strategy, design, and development to craft experiences 
  that are user-focused. We take pride in building long-term partnerships, 
  providing value-driven solutions, and helping our clients stay ahead in 
  an ever-evolving digital landscape.
</p>

          </motion.div>

          {/* Right Side - Illustration with Floating Animation */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={illustration}
              alt="About Illustration"
              className="w-full max-w-md md:max-w-lg object-contain rounded-xl shadow-lg"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
