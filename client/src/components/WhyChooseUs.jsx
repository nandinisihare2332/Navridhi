import {
  TrendingUp,
  GaugeCircle,
  UserSearch,
  Brain,
  Settings2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

const items = [
  {
    icon: TrendingUp,
    title: "Measurable Growth",
    desc: "Every initiative is tied to clear KPIs you can track in real time.",
  },
  {
    icon: GaugeCircle,
    title: "Performance Tracking",
    desc: "Live performance monitoring across acquisition, retention, and revenue.",
  },
  {
    icon: UserSearch,
    title: "Customer Insights",
    desc: "Understand who buys, why they buy, and how to compound their value.",
  },
  {
    icon: Brain,
    title: "Data-Driven Decisions",
    desc: "Replace guesswork with experiments, dashboards, and statistical clarity.",
  },
  {
    icon: Settings2,
    title: "Business Optimization",
    desc: "Continuously tune funnels, content, and channels for compounding returns.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative overflow-hidden py-36 bg-gradient-to-br from-[#f8f4ea] via-[#fffdf8] to-[#f3eadb]"
    >

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0">

        {/* GOLD GLOW */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#f4cf6a]/20 blur-[120px]"></div>

        {/* CREAM GLOW */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[#ead7a4]/30 blur-[120px]"></div>

        {/* GRID EFFECT */}
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

            Why Navridhi

          </div>

          {/* TITLE */}
          <h2 className="mt-8 text-5xl md:text-6xl font-black leading-tight text-[#171717]">

            Premium execution.

            <span className="block bg-gradient-to-r from-[#c89b3c] via-[#d4a017] to-[#f4cf6a] bg-clip-text text-transparent">

              Honest numbers.

            </span>

          </h2>

          {/* SUBTITLE */}
          <p className="mt-8 text-xl leading-relaxed text-[#5f5a4f] max-w-2xl">

            We work with ambitious founders who care about
            measurable growth, strategic execution, and scalable
            digital systems — not vanity metrics.

          </p>

        </motion.div>

        {/* GRID */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {items.map((it, i) => {
            const isFeature = i === 0;

            const gradients = [
              "from-[#c89b3c] to-[#f4cf6a]",
              "from-[#d4a017] to-[#f6d365]",
              "from-[#b8860b] to-[#f4cf6a]",
              "from-[#e0b84f] to-[#f7d774]",
              "from-[#a66b00] to-[#f4cf6a]",
            ];

            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className={`group relative overflow-hidden rounded-[2rem] border transition-all duration-700 ${
                  isFeature
                    ? "bg-gradient-to-br from-[#171717] via-[#2b2b2b] to-[#111111] text-white border-[#d4a017]/20 shadow-[0_20px_60px_rgba(212,160,23,0.20)]"
                    : "bg-[#fffdf8]/90 backdrop-blur-2xl border-[#ead7a4] shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(212,160,23,0.15)]"
                }`}
              >

                {/* HOVER EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#f4cf6a]/10 via-transparent to-[#ead7a4]/20"></div>

                {/* LIGHT */}
                <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-[#f4cf6a]/10 blur-3xl group-hover:scale-150 transition duration-1000"></div>

                {/* FEATURED BLOB */}
                {isFeature && (
                  <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[#f4cf6a]/20 blur-[100px] animate-pulse"></div>
                )}

                <div className="relative p-8">

                  {/* ICON */}
                  <div
                    className={`w-16 h-16 rounded-3xl flex items-center justify-center text-white shadow-2xl transition duration-500 group-hover:rotate-6 group-hover:scale-110 ${
                      isFeature
                        ? "bg-white/10 backdrop-blur-xl"
                        : `bg-gradient-to-r ${
                            gradients[i % gradients.length]
                          }`
                    }`}
                  >

                    <it.icon size={28} />

                  </div>

                  {/* TITLE */}
                  <h3
                    className={`mt-8 text-2xl font-black transition duration-300 ${
                      isFeature
                        ? "text-white"
                        : "text-[#171717] group-hover:text-[#a66b00]"
                    }`}
                  >

                    {it.title}

                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className={`mt-5 leading-relaxed text-[15px] ${
                      isFeature
                        ? "text-white/75"
                        : "text-[#5f5a4f]"
                    }`}
                  >

                    {it.desc}

                  </p>

                  {/* ACTION */}
                  <div className="mt-10 flex items-center justify-between">

                    <span
                      className={`text-sm font-semibold ${
                        isFeature
                          ? "text-[#f4cf6a]"
                          : "text-[#a66b00]"
                      }`}
                    >

                      Learn More

                    </span>

                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition duration-500 group-hover:translate-x-2 group-hover:-translate-y-1 ${
                        isFeature
                          ? "bg-white text-[#171717]"
                          : "bg-gradient-to-r from-[#c89b3c] to-[#f4cf6a] text-white"
                      }`}
                    >

                      <ArrowUpRight size={18} />

                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}

          {/* CTA CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              y: -10,
            }}
            className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#171717] via-[#222222] to-[#111111] p-8 text-white shadow-[0_20px_80px_rgba(0,0,0,0.25)]"
          >

            {/* BLOBS */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#f4cf6a]/10 blur-[100px] animate-pulse"></div>

            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#ead7a4]/10 blur-[100px] animate-pulse"></div>

            <div className="relative h-full flex flex-col justify-between">

              <div>

                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl text-sm font-semibold border border-white/10">

                  <Sparkles
                    size={14}
                    className="text-[#f4cf6a] animate-pulse"
                  />

                  Ready to scale?

                </div>

                <h3 className="mt-8 text-4xl font-black leading-tight">

                  Let’s build your growth engine.

                </h3>

                <p className="mt-6 text-white/70 leading-relaxed">

                  Strategy, execution, analytics, and premium digital
                  experiences — all under one roof.

                </p>

              </div>

              {/* BUTTON */}
              <a
                href="#contact"
                className="group mt-12 inline-flex items-center justify-between px-7 py-5 rounded-2xl bg-gradient-to-r from-[#c89b3c] to-[#f4cf6a] text-[#171717] font-black shadow-2xl hover:scale-105 transition duration-500"
              >

                Start a Project

                <ArrowUpRight
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"
                />

              </a>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}