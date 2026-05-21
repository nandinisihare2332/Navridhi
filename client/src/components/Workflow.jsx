import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Understand Business",
    desc: "Deep-dive into your model, market, and goals to define the right metrics.",
  },
  {
    n: "02",
    title: "Create Strategy",
    desc: "Build a tailored growth roadmap aligned to channels and customer journeys.",
  },
  {
    n: "03",
    title: "Build Digital Presence",
    desc: "Ship premium websites, content systems, and brand experiences.",
  },
  {
    n: "04",
    title: "Track Performance",
    desc: "Deploy live dashboards and analytics so insights stay continuous.",
  },
  {
    n: "05",
    title: "Scale Growth",
    desc: "Double-down on what works with experiments that compound results.",
  },
];

export function Workflow() {
  return (
    <section
      id="workflow"
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

            The Process

          </div>

          {/* TITLE */}
          <h2 className="mt-8 text-5xl md:text-6xl font-black leading-tight text-[#171717]">

            A clear path from

            <span className="block bg-gradient-to-r from-[#c89b3c] via-[#d4a017] to-[#f4cf6a] bg-clip-text text-transparent">

              idea to outcome.

            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-xl leading-relaxed text-[#5f5a4f] max-w-2xl">

            Transparent, milestone-based execution designed
            for measurable growth, scalability, and long-term success.

          </p>

        </motion.div>

        {/* TIMELINE */}
        <div className="relative mt-24">

          {/* DESKTOP LINE */}
          <div className="hidden lg:block absolute top-20 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-transparent via-[#d4a017] to-transparent"></div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

            {steps.map((s, i) => {
              const gradients = [
                "from-[#c89b3c] to-[#f4cf6a]",
                "from-[#d4a017] to-[#f6d365]",
                "from-[#b8860b] to-[#f4cf6a]",
                "from-[#e0b84f] to-[#f7d774]",
                "from-[#a66b00] to-[#f4cf6a]",
              ];

              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.12,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                  }}
                  className="group relative"
                >

                  {/* GLOW */}
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#f4cf6a]/10 to-[#ead7a4]/20 opacity-0 group-hover:opacity-100 blur-2xl transition duration-700"></div>

                  {/* CARD */}
                  <div className="relative overflow-hidden rounded-[2rem] border border-[#ead7a4] bg-[#fffdf8]/90 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(212,160,23,0.15)] transition-all duration-700 p-7 h-full">

                    {/* LIGHT */}
                    <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#f4cf6a]/10 blur-3xl group-hover:scale-150 transition duration-1000"></div>

                    {/* STEP NUMBER */}
                    <div
                      className={`relative w-16 h-16 rounded-3xl bg-gradient-to-r ${
                        gradients[i]
                      } flex items-center justify-center text-white text-2xl font-black shadow-[0_10px_30px_rgba(212,160,23,0.25)] group-hover:rotate-6 group-hover:scale-110 transition duration-500`}
                    >

                      {s.n}

                    </div>

                    {/* STEP CONTENT */}
                    <div className="mt-8">

                      <h3 className="text-2xl font-black text-[#171717] group-hover:text-[#a66b00] transition duration-300">

                        {s.title}

                      </h3>

                      <p className="mt-4 text-[#5f5a4f] leading-relaxed text-[15px]">

                        {s.desc}

                      </p>

                    </div>

                    {/* BOTTOM */}
                    <div className="mt-10 flex items-center justify-between">

                      <div className="flex items-center gap-2 text-[#a66b00] font-semibold text-sm">

                        <CheckCircle2 size={16} />

                        Completed Step

                      </div>

                      <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#c89b3c] to-[#f4cf6a] flex items-center justify-center text-white shadow-lg group-hover:translate-x-2 group-hover:-translate-y-1 transition duration-500">

                        <ArrowRight size={18} />

                      </div>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[2.5rem] bg-gradient-to-br from-[#171717] via-[#222222] to-[#111111] p-10 md:p-14 overflow-hidden relative shadow-[0_20px_80px_rgba(0,0,0,0.2)]"
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

                Let’s build your

                <span className="block bg-gradient-to-r from-[#f4cf6a] via-[#d4a017] to-[#fff1b3] bg-clip-text text-transparent">

                  growth roadmap.

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
              className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-[#c89b3c] to-[#f4cf6a] text-[#171717] font-black shadow-2xl hover:scale-105 transition duration-500"
            >

              Start Your Project

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