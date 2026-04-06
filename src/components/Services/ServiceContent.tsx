export default function ServiceContent() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      desc: "We build modern, scalable, and high-performance websites for startups and enterprises.",
      points: [
        "Custom business websites",
        "E-commerce platforms",
        "Responsive UI/UX design",
        "SEO optimized architecture"
      ],
      img: "/serviceimage/web.jpg"
    },
    {
      id: 2,
      title: "Mobile App Development",
      desc: "Create powerful Android and iOS mobile applications with seamless performance.",
      points: [
        "Android & iOS apps",
        "Cross-platform solutions",
        "UI/UX focused apps",
        "API integrations"
      ],
      img: "/serviceimage/app.avif"
    },
    {
      id: 3,
      title: "Cloud Solutions",
      desc: "Secure and scalable cloud infrastructure for modern digital businesses.",
      points: [
        "AWS & Azure deployment",
        "Cloud migration",
        "Server management",
        "Scalable architecture"
      ],
      img: "/serviceimage/cloud.jpg"
    },
    {
      id: 4,
      title: "Digital Marketing",
      desc: "Grow your business online using powerful digital marketing strategies.",
      points: [
        "Search Engine Optimization",
        "Social Media Marketing",
        "Google Ads campaigns",
        "Brand growth strategies"
      ],
      img: "/serviceimage/digi.avif"
    },
    {
      id: 5,
      title: "AI & Automation Solutions",
      desc: "Improve business efficiency using AI-powered tools and automation workflows.",
      points: [
        "AI chatbots",
        "Process automation",
        "Data analytics",
        "Smart integrations"
      ],
      img: "/serviceimage/ai.jpg"
    }
  ];

  return (
    <section className="bg-transparent py-20 px-6 md:px-16">

  {/* Title */}
  <div className="text-center mb-14">
    <p className="text-sm text-blue-400 font-medium flex items-center justify-center gap-2">
      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
      Our Services
    </p>

    <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
      Professional Software Services
    </h2>

    <p className="text-gray-300 mt-2 text-sm">
      We deliver complete digital solutions for modern businesses
    </p>
  </div>

  {/* Service Grid */}
  <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">

    {services.slice(0,4).map((service) => (
      <div
        key={service.id}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
        shadow-[0_0_20px_rgba(255,255,255,0.08)] overflow-hidden 
        hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition"
      >
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-44 object-cover"
        />

        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            {service.id}. {service.title}
          </h3>

          <p className="text-sm text-gray-300 mb-4">
            {service.desc}
          </p>

          <ul className="text-sm text-gray-300 space-y-1">
            {service.points.map((point, i) => (
              <li key={i}>• {point}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}

  </div>

  {/* Last Full Width Card */}
  <div className="max-w-7xl mx-auto mt-10 bg-white/10 backdrop-blur-md 
  border border-white/20 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.08)] overflow-hidden">

    <img
      src={services[4].img}
      alt={services[4].title}
      className="w-full h-52 object-cover"
    />

    <div className="p-8">
      <h3 className="text-lg font-semibold text-white mb-3">
        5. {services[4].title}
      </h3>

      <p className="text-sm text-gray-300 mb-4">
        {services[4].desc}
      </p>

      <ul className="text-sm text-gray-300 space-y-1">
        {services[4].points.map((point, i) => (
          <li key={i}>• {point}</li>
        ))}
      </ul>
    </div>

  </div>

</section>
  );
}