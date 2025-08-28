// src/components/Team.js
import { motion } from "framer-motion";
import founder1 from "../assets/images/founder1.jpeg";
import founder2 from "../assets/images/founder2.jpeg";

function Team() {
  const teamMembers = [
    {
      name: "Usman Hafeez",
      role: "Co-Founder",
      image: founder1,
      // linkedin: "https://www.linkedin.com/in/username",
    },
    {
      name: "Usman Sharif",
      role: "Co-Founder",
      image: founder2,
      // linkedin: "https://www.linkedin.com/in/username",
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
          Meet Our Founders
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Circle image with border glow */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-yellow-400 shadow-md group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-2xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm">{member.role}</p>

              {/* LinkedIn if exists */}
              {member.linkedin && (
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                  whileHover={{ scale: 1.1 }}
                >
                  LinkedIn →
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
