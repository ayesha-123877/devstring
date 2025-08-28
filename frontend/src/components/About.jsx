import aboutImage from "../assets/images/about.jpg";

function About() {
  const companyDetails = [
    { label: "Website", value: "https://devstrings.com" },
    { label: "Industry", value: "IT Services and IT Consulting" },
    { label: "Company Size", value: "11-50 employees" },
    { label: "Headquarters", value: "Faisalabad, Punjab" },
    { label: "Type", value: "Partnership" },
    { label: "Founded", value: "2020" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-6">
           DevStrings is a forward-thinking software company turning ideas
            into modern digital solutions. Our team of developers and designers
            focuses on creating scalable, user-friendly products that drive
            business growth while prioritizing innovation and long-term value.
          </p>

          {/* Company Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
  {companyDetails.map((item, index) => (
    <div key={index} className="flex gap-2">
      <span className="font-semibold text-gray-800">{item.label}:</span>
      {item.label === "Industry" ? (
        <span className="text-gray-600 break-words">
          IT Services and IT<br />Consulting
        </span>
      ) : (
        <span className="text-gray-600 break-words">{item.value}</span>
      )}
    </div>
  ))}
</div>

         
        </div>

        <div>
          <img
            src={aboutImage}
            alt="About"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
