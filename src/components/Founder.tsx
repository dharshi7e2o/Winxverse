import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="w-full py-20 px-4 md:px-10 flex justify-center items-center">
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">

        {/* LEFT - OVAL IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-[50%] border border-white/10 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT - CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left md:pl-6"
        >
          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-blue-500">Founder</span>
          </h2>

          {/* PARAGRAPH */}
          <p className="text-gray-400 leading-relaxed mb-5 text-justify">
            KP Square Publication is a professionally managed document service
            center dedicated to offering modern, efficient, and high-quality
            document solutions. We combine advanced technology with expert
            service to ensure that every document looks its best – clean, clear,
            vibrant, and professionally finished.
            <br /><br />
            What started as a small printing center has grown into a trusted
            document partner for thousands of customers in and around Chennai,
            especially Anna Nagar, Thirumangalam, Kilpauk, Mogappair, and
            Aminjikarai.
          </p>

          {/* NAME */}
          <h3 className="text-xl font-semibold text-blue-400">
            SUBBURAM K
          </h3>

          {/* ROLE */}
          <p className="text-gray-400 mt-1">
            Founder
          </p>

          {/* COMPANY */}
          <p className="text-gray-500 text-sm mt-1">
            Winxverse Technologies
          </p>
        </motion.div>

      </div>
    </section>
  );
}