import { useState } from "react";
import {
  Briefcase,
  Smartphone,
  Cloud,
  Shield,
  Layers,
} from "lucide-react";

function Portfolio() {
  const projects = [
    {
      title: "Perfex (CRM)",
      desc: "CRM customization & custom plugins (CodeIgniter + PHP, Firebase, MySQL).",
      category: "Web Development",
      icon: <Briefcase className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Mobile Security System (MDM) – Lockmesh",
      desc: "Secure portal & mobile security system (MERN + Android Native).",
      category: "Mobile Development",
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Fleet Management System",
      desc: "Transport & booking system (Laravel, React, Python, React Native).",
      category: "Full-Stack",
      icon: <Layers className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Geniie (Universal Digital Service)",
      desc: "Microservices with API Gateway (MERN + AWS Lambda, SQS, EC2).",
      category: "Microservices",
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Open Keys Server",
      desc: "PGP key management with OpenLDAP & GnuPG.",
      category: "DevOps/Security",
      icon: <Shield className="w-8 h-8 text-red-500" />,
    },
    {
      title: "Signal Server & Client",
      desc: "Custom Signal setup for secure communication.",
      category: "DevOps/Security",
      icon: <Shield className="w-8 h-8 text-red-500" />,
    },
    {
      title: "D2D Communication Service",
      desc: "TURN/STUN based custom communication app.",
      category: "Networking",
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
    },
    {
      title: "Music Stream App – OohYeah",
      desc: "Streaming app (Laravel backend + Next.js frontend).",
      category: "Web Development",
      icon: <Briefcase className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Husqvarna Project Management",
      desc: "Frontend system (React.js).",
      category: "Web Development",
      icon: <Briefcase className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "CBA (Banking System)",
      desc: "User + Admin frontend portals (Angular 13).",
      category: "Web Development",
      icon: <Briefcase className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Fribe System",
      desc: "Microservices architecture (Next.js, Nest.js, ELK, TypeScript).",
      category: "Microservices",
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Dhillon Driver App",
      desc: "Driver mobile app (React Native + Laravel backend).",
      category: "Mobile Development",
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "Full-Stack",
    "Microservices",
    "DevOps/Security",
    "Networking",
  ];

  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          "Crafted with Code"
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === cat
                  ? "bg-yellow-400 text-[#2d4775]"
                  : "bg-gray-200 text-gray-700 hover:bg-yellow-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl p-6 border-l-4 border-yellow-400 hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4 flex items-center justify-center">
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {project.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
