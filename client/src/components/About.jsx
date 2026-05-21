import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Globe,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-36 bg-gradient-to-br from-[#f8f4ea] via-[#fffdf8] to-[#f3eadb]"
    >
      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0">
        {/* GOLD GLOW */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#f4cf6a]/20 blur-[120px]"></div>

        {/* CREAM GLOW */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#ead7a4]/30 blur-[120px]"></div>

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,160,23,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,160,23,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f7e7bb] border border-[#ead7a4] text-[#8b6914] text-sm font-semibold shadow-md">
            <Sparkles
              size={14}
              className="text-[#d4a017] animate-pulse"
            />

            About Navridhi
          </div>

          {/* HEADING */}
          <h2 className="mt-8 text-5xl md:text-6xl font-black leading-tight text-[#171717]">
            Your data-driven

            <span className="block bg-gradient-to-r from-[#c89b3c] via-[#d4a017] to-[#f4cf6a] bg-clip-text text-transparent">
              growth partner.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-xl leading-relaxed text-[#5f5a4f]">
            Navridhi is a premium digital growth agency helping ambitious
            brands scale smarter with analytics-led strategy,
            high-performance digital experiences, and disciplined execution.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-[#8b7355]">
            We combine modern design with real business intelligence —
            ensuring every decision is backed by data, every initiative is
            measurable, and every growth strategy delivers measurable impact.
          </p>

          {/* FEATURE LIST */}
          <div className="mt-10 space-y-5">
            {[
              {
                icon: TrendingUp,
                text: "Performance-focused digital growth strategies",
              },
              {
                icon: Globe,
                text: "Premium web experiences with measurable outcomes",
              },
              {
                icon: ShieldCheck,
                text: "Transparent reporting and long-term scalability",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  x: 6,
                }}
                className="group flex items-center gap-4 rounded-[1.8rem] bg-[#fffdf8]/90 backdrop-blur-2xl border border-[#ead7a4] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(212,160,23,0.15)] transition-all duration-700"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#c89b3c] to-[#f4cf6a] flex items-center justify-center text-white shadow-lg group-hover:rotate-6 group-hover:scale-110 transition duration-500">
                  <item.icon size={20} />
                </div>

                <p className="font-semibold text-[#171717]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-3 gap-6">
            {[
              { n: "5+ Yrs", l: "In market" },
              { n: "120+", l: "Brands grown" },
              { n: "18", l: "Industries" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-[#ead7a4] bg-[#fffdf8]/90 backdrop-blur-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(212,160,23,0.15)] transition-all duration-700"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#f4cf6a]/10 via-transparent to-[#ead7a4]/20"></div>

                <div className="relative">
                  <div className="text-4xl font-black bg-gradient-to-r from-[#c89b3c] to-[#f4cf6a] bg-clip-text text-transparent">
                    {s.n}
                  </div>

                  <div className="mt-2 text-sm text-[#8b7355]">
                    {s.l}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-gradient-to-r from-[#f4cf6a]/20 to-[#ead7a4]/20 blur-3xl rounded-[3rem] animate-pulse"></div>

          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#171717] via-[#222222] to-[#111111] p-10 md:p-14 shadow-[0_30px_100px_rgba(0,0,0,0.35)] border border-white/10">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#f4cf6a]/10 blur-[120px] animate-pulse"></div>

            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#ead7a4]/10 blur-[120px] animate-pulse"></div>

            <div className="relative h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl text-sm font-semibold text-white border border-white/10">
                  <Sparkles
                    size={14}
                    className="text-[#f4cf6a] animate-pulse"
                  />

                  Our Promise
                </div>

                <h3 className="mt-10 text-5xl font-black leading-tight text-white">
                  “Growth that shows

                  <span className="block bg-gradient-to-r from-[#f4cf6a] via-[#d4a017] to-[#fff1b3] bg-clip-text text-transparent">
                    in numbers.
                  </span>

                  Not noise.”
                </h3>
              </div>

              <div className="mt-16">
                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"></div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-lg">
                      The Navridhi Team
                    </p>

                    <p className="text-white/60 text-sm mt-1">
                      Growth • Strategy • Analytics
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#c89b3c] to-[#f4cf6a] text-[#171717] font-black shadow-[0_20px_50px_rgba(212,160,23,0.35)] hover:scale-105 transition duration-500"
                  >
                    Work With Us

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition duration-300"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}