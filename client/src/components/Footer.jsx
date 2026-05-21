import {
  Sparkles,
  ArrowUpRight,
  Globe,
  Send,
  MessageCircle,
  Mail,
} from "lucide-react";

import { motion } from "framer-motion";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#f8f4ea] via-[#fffdf8] to-[#f3eadb] pt-32 pb-10">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0">

        {/* GOLD GLOW */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#f4cf6a]/20 blur-[120px]"></div>

        {/* CREAM GLOW */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#ead7a4]/30 blur-[120px]"></div>

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,160,23,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,160,23,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] border border-[#ead7a4] bg-[#fffdf8]/90 backdrop-blur-2xl p-10 md:p-14 shadow-[0_30px_100px_rgba(0,0,0,0.08)]"
        >

          {/* GLOW EFFECTS */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#f4cf6a]/10 blur-[100px] animate-pulse"></div>

          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#ead7a4]/10 blur-[100px] animate-pulse"></div>

          <div className="relative grid lg:grid-cols-2 gap-16">

            {/* LEFT SECTION */}
            <div>

              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f7e7bb] border border-[#ead7a4] text-[#8b6914] text-sm font-semibold shadow-md">

                <Sparkles
                  size={14}
                  className="text-[#d4a017] animate-pulse"
                />

                Navridhi

              </div>

              {/* TITLE */}
              <h2 className="mt-8 text-5xl md:text-6xl font-black leading-tight text-[#171717]">

                Growth that

                <span className="block bg-gradient-to-r from-[#c89b3c] via-[#d4a017] to-[#f4cf6a] bg-clip-text text-transparent">

                  shows in numbers.

                </span>

              </h2>

              {/* DESCRIPTION */}
              <p className="mt-8 text-xl leading-relaxed text-[#5f5a4f] max-w-2xl">

                Premium digital growth systems for ambitious brands —
                powered by analytics, execution, and measurable strategy.

              </p>

              {/* SOCIAL ICONS */}
              <div className="mt-10 flex items-center gap-4">

                {[
                  {
                    icon: Globe,
                    href: "#",
                  },
                  {
                    icon: Send,
                    href: "#",
                  },
                  {
                    icon: MessageCircle,
                    href: "#",
                  },
                  {
                    icon: Mail,
                    href: "#",
                  },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    whileHover={{
                      y: -6,
                      scale: 1.08,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-14 h-14 rounded-2xl border border-[#ead7a4] bg-[#fff8ea] flex items-center justify-center text-[#c89b3c] hover:bg-gradient-to-r hover:from-[#c89b3c] hover:to-[#f4cf6a] hover:text-white transition-all duration-500 shadow-[0_10px_30px_rgba(212,160,23,0.15)]"
                  >

                    <s.icon
                      size={20}
                      className="group-hover:rotate-6 transition duration-300"
                    />

                  </motion.a>
                ))}

              </div>

            </div>

            {/* RIGHT SECTION */}
            <div className="grid sm:grid-cols-2 gap-10">

              {/* NAVIGATION */}
              <div>

                <h3 className="text-2xl font-black text-[#171717] mb-8">
                  Navigation
                </h3>

                <div className="space-y-5">

                  {[
                    "Services",
                    "Why Us",
                    "About",
                    "Workflow",
                    "Testimonials",
                    "Contact",
                  ].map((item, i) => (
                    <motion.a
                      key={i}
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      whileHover={{
                        x: 6,
                      }}
                      className="group flex items-center justify-between text-[#5f5a4f] hover:text-[#171717] transition-all duration-300"
                    >

                      <span className="text-lg font-medium">
                        {item}
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-[#c89b3c]"
                      />

                    </motion.a>
                  ))}

                </div>

              </div>

              {/* CONTACT */}
              <div>

                <h3 className="text-2xl font-black text-[#171717] mb-8">
                  Contact
                </h3>

                <div className="space-y-6">

                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-[#8b6914] mb-2">

                      Email

                    </p>

                    <p className="text-[#5f5a4f] text-lg">
                      navridhimn@gmail.com
                    </p>

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-[#8b6914] mb-2">

                      Location

                    </p>

                    <p className="text-[#5f5a4f] text-lg">
                      India
                    </p>

                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-[#8b6914] mb-2">

                      Response Time

                    </p>

                    <p className="text-[#5f5a4f] text-lg">
                      Within 24 Hours
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

        {/* BOTTOM SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-[#ead7a4] flex flex-col md:flex-row items-center justify-between gap-5"
        >

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <div className="relative">

              <div className="absolute inset-0 rounded-2xl bg-[#f4cf6a] blur-xl opacity-40"></div>

              <div className="relative">

  {/* Glow */}
  <div className="absolute inset-0 rounded-full bg-[#f4cf6a]/40 blur-xl opacity-70"></div>

  {/* Logo */}
  <div className="relative w-14 h-14 rounded-full border-4 border-white bg-white shadow-[0_10px_30px_rgba(212,160,23,0.25)] overflow-hidden">

    <img
      src={assets.logo}
      alt="Navridhi Logo"
      className="w-full h-full object-cover"
    />

  </div>

</div>

            </div>

            <div>

              <h3 className='text-2xl font-bold text-gray-900 tracking-wide'>
          Nav<span className='text-yellow-500'>ridhi</span>
        </h3>

              <p className="text-sm text-[#8b7355] mt-1">
                Crafted with precision for ambitious brands.
              </p>

            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="flex flex-col md:items-end">

            <p className="text-[#5f5a4f] text-sm">
              © {new Date().getFullYear()} Navridhi.
            </p>

            <p className="text-[#8b7355] text-sm mt-1">
              All rights reserved.
            </p>

          </div>

        </motion.div>

      </div>

    </footer>
  );
}