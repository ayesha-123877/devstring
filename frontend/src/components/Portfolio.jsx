import { Briefcase, ShoppingCart, Stethoscope, BookOpen, Utensils, BarChart3, Plane } from "lucide-react";

function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "A scalable online shopping solution with secure payment integration.",
      icon: <ShoppingCart className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Healthcare App",
      desc: "A mobile app for patient management and appointment scheduling.",
      icon: <Stethoscope className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Education LMS",
      desc: "Learning management system with interactive courses and analytics.",
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Restaurant Website",
      desc: "An engaging website with online ordering and table reservations.",
      icon: <Utensils className="w-8 h-8 text-red-500" />,
    },
    {
      title: "Finance Dashboard",
      desc: "Data-driven analytics dashboard for real-time business insights.",
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Travel Booking System",
      desc: "Custom travel portal with booking, payment, and itinerary management.",
      icon: <Plane className="w-8 h-8 text-teal-500" />,
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Portfolio
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
