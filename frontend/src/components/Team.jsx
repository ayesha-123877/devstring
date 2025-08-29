// src/components/Team.js
import { motion } from "framer-motion";
import founder1 from "../assets/images/founder1.jpg";
import founder2 from "../assets/images/founder2.jpeg";
import founder3 from "../assets/images/founder3.jpg";

function Team() {
  const teamMembers = [
    {
      name: "Usman Hafeez",
      role: "Co-Founder",
      image: founder1,
    },
    {
      name: "Usman Sharif",
      role: "Co-Founder",
      image: founder2,
    },
    {
      name: "Abdullah",
      role: "Senior Developer",
      image: founder3,
    },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title with animation */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team
        </motion.h2>

        {/* Grid layout */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition relative overflow-hidden group flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Circle image with border glow */}
          <div className="relative w-36 h-36 mb-6 mx-auto overflow-hidden rounded-full border-4 border-yellow-400 shadow-md">
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
  />
</div>


              {/* Name & Role */}
              <h3 className="text-2xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
