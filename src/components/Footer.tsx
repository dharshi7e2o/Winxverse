import { footerLinks } from '../assets/dummy-data';
import { motion } from 'framer-motion';

export default function Footer() {

    return (
        <motion.footer className="bg-white/6 border-t border-white/6 pt-10 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.5 }}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-white/10">
                    <div>
                        <img src='/images/logo_with_name.png' alt="logo" className="h-24" />
                        <p className="max-w-[410px] mt-6 text-sm leading-relaxed">
                            We are a digital agency focused on strategy, design and development—helping brands build meaningful digital experiences and grow sustainably.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                        {footerLinks.map((section, index) => (
                            <div key={index}>
                                <h3 className="font-semibold text-base text-white md:mb-5 mb-2">
                                    {section.title}
                                </h3>
                                <ul className="text-sm space-y-1">
                                    {section.links.map(
                                        (link: { name: string; url: string }, i) => (
                                            <li key={i}>
                                                <a
                                                    href={link.url}
                                                    className="hover:text-white transition"
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-2">

  {/* LEFT */}
  <p className="text-left">
    © {new Date().getFullYear()}{" "}
    {/* <a href="https://prebuiltui.com/tailwind-templates?ref=pixel-forge" target="_blank">
      PrebuiltUI
    </a>{" "} */}
    • Distributed by{" "}
    <a href="https://themewagon.com" target="_blank">
      Winxverse
    </a>
    . All rights reserved.
  </p>

  {/* RIGHT */}
  <p className="flex items-center gap-1">
    Made
    <span className="text-red-500 text-base">❤️</span>
    by <span className="font-semibold text-white">WXV</span>
  </p>

</div>
            </div>
        </motion.footer>
    );
};