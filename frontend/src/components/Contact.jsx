import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
className="bg-gray-50 py-20 px-4 scroll-mt-32"    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-[#2d4775]">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Left Column: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-4 rounded-2xl shadow-md flex flex-col gap-3 h-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-3 text-sm rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 text-sm rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-300 p-3 text-sm rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 p-3 text-sm rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            <button
              type="submit"
              className="bg-yellow-400 text-[#2d4775] py-3 text-sm rounded font-semibold hover:bg-yellow-300 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Right Column: Contact Info + Map */}
          <div className="flex flex-col gap-3 h-full">
            {/* Contact Info Card */}
            <div className="bg-white p-4 rounded-2xl shadow-md space-y-2">
              <h3 className="text-lg font-semibold text-[#2d4775] mb-2">
                Get in Touch
              </h3>
              <p className="text-gray-700 text-sm">
                Email: contact@websters.tech
              </p>
              <p className="text-gray-700 text-sm">Phone: 03431854867</p>
              <p className="text-gray-700 text-sm">Faisalabad, Pakistan</p>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-md h-40 md:h-52">
              <iframe
                title="My Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3403.9!2d73.1227479!3d31.4352985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1693149540321!5m2!1sen!2s"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
