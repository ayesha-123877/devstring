import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import heroImage from "../assets/images/image.png";

function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        {/* Floating animated heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          Welcome to Our Software Company
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          className="mt-6 text-xl md:text-2xl drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <ReactTyped
            strings={[
              "We build modern, innovative solutions.",
              "From startups to enterprises.",
              "Websites, Mobile Apps & AI Solutions.",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </motion.div>

      
      </div>
    </section>
  );
}

export default Hero;
