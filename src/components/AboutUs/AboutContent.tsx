
export default function AboutContent() {
  return (
    <section className="bg-transparent py-20 px-6 md:px-16">
      
      {/* Top Small Title */}
      <div className="text-center">
        <p className="text-sm text-blue-600 font-medium flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
          About Us
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white-900 leading-snug">
          Innovative Software Solutions <br /> for the Future
        </h2>
      </div>

      {/* Card Section */}
      <div className="max-w-6xl mx-auto bg-transparent rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-white-900 leading-snug">
            The Impact of Technology <br /> on Modern Society
          </h3>

          <p className="mt-6 text-white-600 text-sm leading-relaxed">
            Technology has revolutionized the way humans live, work, and
            interact. From communication to healthcare, transportation, and
            entertainment, technological advancements have significantly
            improved efficiency and convenience in the healthcare sector.
            Technology has played a crucial role in diagnostic, treatment,
            and patient care.
          </p>

          <p className="mt-4 text-white-600 text-sm leading-relaxed">
            Advanced imaging techniques, robotic surgeries, and telemedicine
            have improved medical outcomes accessibility.
          </p>

          <button className="mt-8 px-6 py-3 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
            Read More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/aboutus.png"   
            alt="Technology Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
