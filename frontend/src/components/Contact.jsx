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
    <section className="bg-gray-50 py-12 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-10 text-[#2d4775]">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4 h-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            <button
              type="submit"
              className="bg-yellow-400 text-[#2d4775] py-3 rounded font-semibold hover:bg-yellow-300 transition-colors"
            >
              Send Message
            </button>
          </form>

          {/* Right Column: Contact Info + Map */}
          <div className="flex flex-col gap-6 h-full">
            {/* Contact Info Card */}
            <div className="bg-white p-6 rounded-xl shadow-md space-y-2">
              <h3 className="text-xl font-semibold text-[#2d4775] mb-2">
                Get in Touch
              </h3>
              <p className="text-gray-700 text-sm">Email: info@devstrings.com</p>
              <p className="text-gray-700 text-sm">Phone: +92 300 1234567</p>
              <p className="text-gray-700 text-sm">Faisalabad, Pakistan</p>
            </div>

            {/* Google Map */}
            {/* Google Map */}
<div className="rounded-xl overflow-hidden shadow-md h-48 md:h-64">
  <iframe
    title="DevStrings Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.0113083828956!2d73.1170340754019!3d31.43122137426006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226918bbe53fa1%3A0x3664a52bce5edadb!2sDevStrings!5e0!3m2!1sen!2s!4v1693149540321!5m2!1sen!2s"
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
