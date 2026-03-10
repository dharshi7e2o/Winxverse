import { Settings, BarChart3, Users, Headphones, Lock } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-transparent-50 py-20 px-6 md:px-16">
      
      {/* Top Heading */}
      <div className="text-center mb-16">
        <p className="text-sm text-blue-600 font-medium flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
          Why Choose Us
        </p>

        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white-900 leading-snug">
          Where Experience Meets <br /> Compassion
        </h2>
      </div>

      {/* Layout */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div className="space-y-12">

          {/* Card 1 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
              <BarChart3 className="text-blue-600 w-6 h-6" />
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 w-full">
              <h3 className="font-semibold text-lg text-gray-900">
                Proven Track Record
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                As a medical officer in a government medical
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
              <Headphones className="text-blue-600 w-6 h-6" />
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 w-full">
              <h3 className="font-semibold text-lg text-gray-900">
                24/7 Support
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Our dedicated support team is available 24/7 to address
              </p>
            </div>
          </div>

        </div>

        {/* CENTER CIRCLE */}
        <div className="relative flex items-center justify-center">
          <div className="hidden md:block absolute w-full h-full">
            <div className="absolute left-0 top-1/3 w-20 h-px bg-gray-300"></div>
            <div className="absolute left-0 bottom-1/3 w-20 h-px bg-gray-300"></div>
            <div className="absolute right-0 top-1/3 w-20 h-px bg-gray-300"></div>
            <div className="absolute right-0 bottom-1/3 w-20 h-px bg-gray-300"></div>
          </div>

          <div className="relative w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
            <Settings className="text-white w-10 h-10" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-12">

          {/* Card 3 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
              <Users className="text-blue-600 w-6 h-6" />
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 w-full">
              <h3 className="font-semibold text-lg text-gray-900">
                Expert Team
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Our team consists of highly skilled and experienced
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
              <Lock className="text-blue-600 w-6 h-6" />
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 w-full">
              <h3 className="font-semibold text-lg text-gray-900">
                Reliable & Secure
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Whether it's healthcare, technology, or daily life.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}