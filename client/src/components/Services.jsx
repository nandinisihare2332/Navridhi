import {
  Share2,
  Code2,
  BarChart3,
  LineChart,
  Target,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Strategic content, community growth, and campaigns that build authority and conversion.",
  },
  {
    icon: Code2,
    title: "Website Development",
    desc: "High-performance, conversion-optimized websites engineered for premium brands.",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    desc: "Turn raw data into clarity with deep analytics tailored to your business goals.",
  },
  {
    icon: LineChart,
    title: "Dashboard & Reporting",
    desc: "Live dashboards and crisp reports so you always know what's moving the needle.",
  },
  {
    icon: Target,
    title: "Growth Strategy",
    desc: "A data-led roadmap with channels, experiments, and KPIs that compound results.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative py-32 overflow-hidden bg-gradient-to-br from-[#f7f2e9] via-[#fffdf8] to-[#f3eadb]"
    >
      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#e7d3a7]/30 rounded-full blur-[120px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#f1c75b]/20 rounded-full blur-[120px] animate-pulse"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,160,23,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,160,23,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            eyebrow="What we do"
            title="Services built for measurable scale"
            subtitle="Every engagement is engineered around growth metrics, not vanity."
          />
        </motion.div>

        {/* SERVICES GRID */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => {
            const gradients = [
              "from-[#c89b3c] to-[#f4cf6a]",
              "from-[#111111] to-[#3a3a3a]",
              "from-[#d4a017] to-[#f7d774]",
              "from-[#2f2f2f] to-[#111111]",
              "from-[#b88a2a] to-[#f4cf6a]",
            ];

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -14,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-[2.2rem] bg-[#fffdf8]/80 backdrop-blur-3xl border border-[#e6d8b5] shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(212,160,23,0.18)] transition-all duration-700"
              >
                {/* HOVER LIGHT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#f7e7bb]/20 via-transparent to-[#f1c75b]/10"></div>

                {/* FLOATING LIGHT */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/40 blur-3xl group-hover:scale-150 transition duration-1000"></div>

                {/* CARD CONTENT */}
                <div className="relative p-8">
                  {/* ICON */}
                  <div
                    className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-r ${gradients[i % gradients.length]} flex items-center justify-center text-white shadow-2xl group-hover:rotate-6 group-hover:scale-110 transition duration-500`}
                  >
                    <s.icon size={28} />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-7 text-2xl font-black text-[#171717] group-hover:text-[#c89b3c] transition duration-300">
                    {s.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-[#5f5a4f] leading-relaxed text-[15px]">
                    {s.desc}
                  </p>

                  {/* BUTTON */}
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#c89b3c] tracking-wide">
                      Learn More
                    </span>

                    <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#c89b3c] to-[#f4cf6a] flex items-center justify-center text-white shadow-lg group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:rotate-12 transition duration-500">
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
            className="relative overflow-hidden rounded-[2.2rem] bg-gradient-to-br from-[#111111] via-[#1b1b1b] to-[#2f2f2f] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#f4cf6a]/10 rounded-full blur-3xl animate-pulse"></div>

            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#f4cf6a]/10 rounded-full blur-3xl animate-pulse"></div>

            <div className="relative h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl text-sm font-semibold border border-white/10">
                  <Sparkles
                    size={16}
                    className="text-[#d4a017] animate-pulse"
                  />

                  Ready to grow?
                </div>

                <h3 className="mt-6 text-3xl font-black leading-tight">
                  Let’s build your custom growth engine.
                </h3>

                <p className="mt-4 text-white/70 leading-relaxed">
                  Strategy, execution, analytics, and premium digital
                  experiences — all under one roof.
                </p>
              </div>

              <a
                href="#contact"
                className="group mt-10 inline-flex items-center justify-between px-6 py-4 rounded-2xl bg-[#f4cf6a] text-[#111111] font-bold shadow-[0_15px_40px_rgba(212,160,23,0.35)] hover:scale-105 transition duration-500"
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

/* SECTION HEADER */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f7e7bb] text-[#8b6914] text-sm font-semibold shadow-md border border-[#ead7a4]">
        <Sparkles
          size={14}
          className="text-[#d4a017] animate-pulse"
        />

        {eyebrow}
      </div>

      <h2 className="mt-8 text-5xl md:text-6xl font-black leading-tight text-[#171717]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-xl text-[#5f5a4f] leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}