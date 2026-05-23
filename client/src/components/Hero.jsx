import {
  ArrowRight,
  Calendar,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-32 pb-12 overflow-hidden bg-[#f8f5ef]">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-[#f4d06f]/20 blur-3xl animate-pulse"></div>

        <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#fff3cf]/40 blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-[#f8e7b5]/30 blur-3xl"></div>

      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f4e7c5] border border-[#ead7a4] text-[#111111] text-sm font-semibold shadow-lg hover:scale-105 transition duration-500 mb-8">

            <Sparkles
              size={14}
              className="text-[#d4a017] animate-pulse"
            />

            Data-Driven Digital Growth Agency

          </div>

          {/* HEADING */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-tight text-[#111111]">

            Data-Driven{" "}

            <span className="bg-gradient-to-r from-[#d4a017] via-[#f0c75e] to-[#b8860b] bg-clip-text text-transparent animate-pulse">

              Growth

            </span>{" "}

            for Modern Businesses

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-xl leading-relaxed text-[#5f5a4f] max-w-3xl mx-auto">

            We help ambitious brands scale smarter through analytics,
            premium websites, and strategic digital execution that
            delivers measurable business growth.

          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">

            {/* PRIMARY BUTTON */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#111111] via-[#2b2b2b] to-[#d4a017] text-white font-semibold shadow-2xl hover:scale-105 hover:shadow-yellow-300/30 transition-all duration-500 overflow-hidden"
            >

              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>

              <span className="relative flex items-center gap-2">

                Get Started

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />

              </span>

            </a>

            {/* SECONDARY BUTTON */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#e7d8b4] bg-white/70 backdrop-blur-xl text-[#111111] font-semibold shadow-lg hover:scale-105 hover:border-[#d4a017] transition-all duration-500"
            >

              <Calendar size={18} />

              Book Consultation

            </a>

          </div>

          {/* STATS */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">

            {[
              //{ n: "240%", l: "Avg. Growth" },
              //{ n: "120+", l: "Brands Scaled" },
              //{ n: "5.0★", l: "Client Rating" },
            ].map((s) => (
              <div
                key={s.l}
                className="group cursor-pointer"
              >

                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#111111] to-[#d4a017] bg-clip-text text-transparent group-hover:scale-110 transition duration-300">

                  {s.n}

                </div>

                <div className="text-sm text-[#7b7465] mt-2">
                  {s.l}
                </div>

              </div>
            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}