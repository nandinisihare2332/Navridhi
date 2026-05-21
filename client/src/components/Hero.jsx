import {
  ArrowRight,
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[#f8f5ef]">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-[#f4d06f]/20 blur-3xl animate-pulse"></div>

        <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#fff3cf]/40 blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-[#f8e7b5]/30 blur-3xl"></div>

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
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
          <p className="mt-8 text-xl leading-relaxed text-[#5f5a4f] max-w-2xl">

            We help ambitious brands scale smarter through analytics,
            premium websites, and strategic digital execution that
            delivers measurable business growth.

          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-5">

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
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg">

            {[
              { n: "240%", l: "Avg. Growth" },
              { n: "120+", l: "Brands Scaled" },
              { n: "5.0★", l: "Client Rating" },
            ].map((s) => (
              <div
                key={s.l}
                className="group cursor-pointer"
              >

                <div className="text-4xl font-black bg-gradient-to-r from-[#111111] to-[#d4a017] bg-clip-text text-transparent group-hover:scale-110 transition duration-300">

                  {s.n}

                </div>

                <div className="text-sm text-[#7b7465] mt-2">
                  {s.l}
                </div>

              </div>
            ))}

          </div>

        </motion.div>

        {/* RIGHT DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative animate-[float_6s_ease-in-out_infinite]"
        >

          {/* GLOW */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4d06f]/20 to-[#fff3cf]/30 blur-3xl rounded-full"></div>

          {/* DASHBOARD */}
          <div className="relative bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-[#ead7a4]/50 p-6 hover:scale-[1.02] transition-all duration-700">

            {/* TOP */}
            <div className="flex items-center justify-between mb-8">

              <div>
                <p className="text-sm text-[#8b7355]">
                  Performance Overview
                </p>

                <h2 className="text-3xl font-black text-[#111111]">
                  Growth Dashboard
                </h2>
              </div>

              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>

            </div>

            {/* KPI CARDS */}
            <div className="grid grid-cols-2 gap-5 mb-6">

              <KPI
                icon={<DollarSign size={18} />}
                label="Revenue"
                value="$84.2K"
                trend="+24%"
                tint="from-[#fff7e8] to-[#f4e7c5]"
              />

              <KPI
                icon={<Users size={18} />}
                label="Customers"
                value="12,480"
                trend="+18%"
                tint="from-[#fffaf2] to-[#f9edd2]"
              />

            </div>

            {/* CHART */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-[#f3e2b5]">

              <div className="flex items-center justify-between mb-8">

                <h3 className="text-2xl font-bold text-[#111111]">
                  Monthly Growth
                </h3>

                <span className="flex items-center gap-1 text-[#d4a017] font-bold text-xl">

                  <TrendingUp size={18} />

                  +32.4%

                </span>

              </div>

              <Chart />

            </div>

            {/* BOTTOM CARD */}
            <div className="mt-6 rounded-3xl bg-gradient-to-r from-[#fff7e8] to-[#f4e7c5] p-5 flex items-center justify-between shadow-lg hover:scale-[1.02] transition duration-500">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#111111] to-[#d4a017] flex items-center justify-center text-white shadow-xl animate-pulse">

                  <Activity size={18} />

                </div>

                <div>

                  <p className="text-sm text-[#6f6759]">
                    Conversion Rate
                  </p>

                  <p className="text-xs text-[#9d9484]">
                    Last 30 days
                  </p>

                </div>

              </div>

              <h2 className="text-3xl font-black text-[#111111]">
                8.92%
              </h2>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

/* KPI */
function KPI({ icon, label, value, trend, tint }) {
  return (
    <div
      className={`group rounded-3xl p-5 bg-gradient-to-br ${tint} border border-[#ead7a4] hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl transition-all duration-500 cursor-pointer`}
    >

      <div className="flex items-center gap-2 text-[#7c6f58] mb-3">

        {icon}

        <span className="text-xs uppercase tracking-wider">
          {label}
        </span>

      </div>

      <h2 className="text-4xl font-black text-[#111111]">
        {value}
      </h2>

      <span className="text-[#d4a017] font-bold text-lg">
        {trend}
      </span>

    </div>
  );
}

/* CHART */
function Chart() {
  const bars = [40, 65, 50, 82, 60, 95, 75, 110, 88, 120, 100, 115];

  return (
    <div className="flex items-end gap-3 h-64">

      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-3xl relative transition-all duration-500 hover:scale-110 shadow-xl"
          style={{
            height: `${h}px`,
            background:
              "linear-gradient(180deg, #f4d06f 0%, #d4a017 55%, #8c6a1d 100%)",
            animationDelay: `${i * 0.1}s`,
          }}
        >

          {i === bars.length - 1 && (
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white ring-4 ring-[#d4a017] animate-ping"></span>
          )}

        </div>
      ))}

    </div>
  );
}