import {
  Star,
  Quote,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Abhay Mangal",
    role: "Founder, Techmo",
    quote:
      "Navridhi helped us modernize our digital presence and reporting systems. Their analytics insights and execution brought much better clarity to our manufacturing operations.",
  },

  {
    name: "Rahul Sharma",
    role: "Founder, Delhi Ecom Store",
    quote:
      "Their dashboards and growth insights helped us improve ecommerce performance and make faster business decisions with confidence.",
  },

  {
    name: "Priya Verma",
    role: "Owner, Jaipur Fashion Hub",
    quote:
      "The website and analytics system they built completely changed how we track customer engagement and business growth. Professional and reliable team.",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f7e7bb] border border-[#ead7a4] text-[#8b6914] text-sm font-semibold shadow-md">

            <Sparkles
              size={14}
              className="text-[#d4a017] animate-pulse"
            />

            Client Stories

          </div>

          {/* TITLE */}
          <h2 className="mt-8 text-5xl md:text-6xl font-black leading-tight text-[#171717]">

            Trusted by founders

            <span className="block bg-gradient-to-r from-[#c89b3c] via-[#d4a017] to-[#f4cf6a] bg-clip-text text-transparent">

              who care about outcomes.

            </span>

          </h2>

          {/* SUBTITLE */}
          <p className="mt-8 text-xl leading-relaxed text-[#5f5a4f] max-w-2xl">

            We partner with ambitious brands that value measurable
            growth, strategic execution, and premium digital experiences.

          </p>

        </motion.div>

        {/* TESTIMONIAL GRID */}
        <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {reviews.map((r, i) => {
            const gradients = [
              "from-[#c89b3c] to-[#f4cf6a]",
              "from-[#d4a017] to-[#f6d365]",
              "from-[#b8860b] to-[#f4cf6a]",
            ];

            return (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-[#ead7a4] bg-[#fffdf8]/90 backdrop-blur-2xl p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-700 hover:shadow-[0_20px_60px_rgba(212,160,23,0.15)]"
              >

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#f4cf6a]/10 via-transparent to-[#ead7a4]/20"></div>

                {/* LIGHT */}
                <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-[#f4cf6a]/10 blur-3xl group-hover:scale-150 transition duration-1000"></div>

                <div className="relative">

                  {/* TOP */}
                  <div className="flex items-center justify-between mb-8">

                    {/* QUOTE ICON */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${
                        gradients[i]
                      } flex items-center justify-center text-white shadow-[0_10px_30px_rgba(212,160,23,0.25)] group-hover:rotate-6 group-hover:scale-110 transition duration-500`}
                    >

                      <Quote size={22} />

                    </div>

                    {/* STARS */}
                    <div className="flex gap-1 text-[#d4a017]">

                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          size={16}
                          fill="currentColor"
                          stroke="none"
                          className="animate-pulse"
                          style={{
                            animationDelay: `${j * 0.1}s`,
                          }}
                        />
                      ))}

                    </div>

                  </div>

                  {/* REVIEW */}
                  <p className="text-[#5f5a4f] leading-relaxed text-[16px]">

                    "{r.quote}"

                  </p>

                  {/* USER */}
                  <div className="mt-10 pt-6 border-t border-[#ead7a4] flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      {/* AVATAR */}
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-r ${
                          gradients[i]
                        } flex items-center justify-center text-white text-lg font-black shadow-[0_10px_30px_rgba(212,160,23,0.25)] group-hover:scale-110 transition duration-500`}
                      >

                        {r.name.charAt(0)}

                      </div>

                      {/* INFO */}
                      <div>

                        <h4 className="font-black text-[#171717] text-lg">
                          {r.name}
                        </h4>

                        <p className="text-sm text-[#8b7355]">
                          {r.role}
                        </p>

                      </div>

                    </div>

                    {/* ARROW */}
                    <div className="w-11 h-11 rounded-full bg-[#fff8ea] border border-[#ead7a4] flex items-center justify-center text-[#c89b3c] group-hover:bg-gradient-to-r group-hover:from-[#c89b3c] group-hover:to-[#f4cf6a] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">

                      <ArrowRight size={18} />

                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#171717] via-[#222222] to-[#111111] p-10 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.2)]"
        >

          {/* BLOBS */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#f4cf6a]/10 blur-[100px] animate-pulse"></div>

          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#ead7a4]/10 blur-[100px] animate-pulse"></div>

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

            <div>

              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-sm font-semibold text-white">

                <Sparkles
                  size={14}
                  className="text-[#f4cf6a] animate-pulse"
                />

                Ready to scale?

              </div>

              {/* TITLE */}
              <h3 className="mt-6 text-4xl md:text-5xl font-black text-white leading-tight">

                Let’s create your

                <span className="block bg-gradient-to-r from-[#f4cf6a] via-[#d4a017] to-[#fff1b3] bg-clip-text text-transparent">

                  next success story.

                </span>

              </h3>

              {/* TEXT */}
              <p className="mt-6 max-w-2xl text-white/70 text-lg leading-relaxed">

                Strategy, execution, analytics, and premium
                digital experiences — all crafted to drive
                measurable business growth.

              </p>

            </div>

            {/* BUTTON */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-[#c89b3c] to-[#f4cf6a] text-[#171717] font-black shadow-[0_20px_50px_rgba(212,160,23,0.35)] hover:scale-105 transition duration-500"
            >

              Work With Us

              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition duration-300"
              />

            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}