
export default function ServiceHeader() {
  return (
    <section
      className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bg1.jpg')", 
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Our <span className="text-blue-500">Services</span>
        </h1>

        <p className="mt-3 text-gray-300 text-sm">
          <span className="text-white">Home</span> / Our Services
        </p>
      </div>
    </section>
    
  );
}