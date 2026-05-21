import {
  ArrowUpRight,
  Users,
  DollarSign,
  Globe,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

export default function AnalyticsDashboard() {
  return (
    <section
      id="dashboard"
      className="relative py-32 overflow-hidden bg-gradient-to-br from-[#f7f2e9] via-[#fffdf8] to-[#f3eadb]"
    >

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#f4cf6a]/20 rounded-full blur-[120px]"></div>

        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#e7d3a7]/30 rounded-full blur-[120px]"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,160,23,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,160,23,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f7e7bb] border border-[#ead7a4] text-[#8b6914] text-sm font-semibold shadow-md">

            <Sparkles
              size={15}
              className="text-[#d4a017] animate-pulse"
            />

            Analytics in action

          </div>

          <h2 className="mt-6 text-5xl md:text-6xl font-black leading-tight text-[#171717]">

            A live view of

            <span className="bg-gradient-to-r from-[#c89b3c] via-[#d4a017] to-[#f4cf6a] bg-clip-text text-transparent">
              {" "}
              what we move.
            </span>

          </h2>

          <p className="mt-6 text-lg text-[#5f5a4f] leading-relaxed">
            Sample of a premium growth dashboard we build and maintain
            for modern businesses.
          </p>

        </motion.div>

        {/* MAIN DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] border border-[#ead7a4] bg-[#fffdf8]/90 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden"
        >

          {/* LIGHT EFFECT */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,207,106,0.12),transparent_35%)]"></div>

          <div className="relative p-6 md:p-10">

            {/* TOP */}
            <div className="flex flex-wrap items-center justify-between gap-6 mb-10">

              <div>

                <p className="text-sm text-[#8b7355]">
                  Performance Overview
                </p>

                <h3 className="text-4xl font-black mt-2 text-[#171717]">
                  Growth Dashboard
                </h3>

              </div>

              {/* FILTER BUTTONS */}
              <div className="flex gap-3">

                {["7D", "30D", "90D", "1Y"].map((t, i) => (
                  <button
                    key={t}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                      i === 1
                        ? "bg-gradient-to-r from-[#c89b3c] to-[#f4cf6a] text-[#111111] shadow-lg scale-105"
                        : "bg-[#fff8ea] border border-[#ead7a4] text-[#8b7355] hover:bg-[#f7e7bb]"
                    }`}
                  >
                    {t}
                  </button>
                ))}

              </div>

            </div>

            {/* KPI CARDS */}
            <div className="grid md:grid-cols-4 gap-5 mb-10">

              {[
                {
                  icon: DollarSign,
                  label: "Total Revenue",
                  value: "$248,560",
                  trend: "+32.4%",
                },
                {
                  icon: Users,
                  label: "New Customers",
                  value: "4,892",
                  trend: "+18.2%",
                },
                {
                  icon: Globe,
                  label: "Site Visits",
                  value: "94.2K",
                  trend: "+24.8%",
                },
                {
                  icon: ShoppingBag,
                  label: "Conversion",
                  value: "8.92%",
                  trend: "+5.6%",
                },
              ].map((k, i) => (
                <motion.div
                  key={k.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="group relative overflow-hidden rounded-[2rem] border border-[#ead7a4] bg-[#fff8ea] p-6 shadow-lg hover:shadow-[0_15px_40px_rgba(212,160,23,0.18)] transition-all duration-500"
                >

                  {/* HOVER LIGHT */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#f4cf6a]/10 via-transparent to-[#f7e7bb]/20"></div>

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      {/* ICON */}
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#c89b3c] to-[#f4cf6a] flex items-center justify-center text-white shadow-lg group-hover:rotate-6 group-hover:scale-110 transition duration-500">

                        <k.icon size={20} />

                      </div>

                      {/* TREND */}
                      <span className="flex items-center gap-1 text-sm font-black text-[#c89b3c]">

                        <ArrowUpRight size={14} />

                        {k.trend}

                      </span>

                    </div>

                    {/* VALUE */}
                    <h3 className="mt-6 text-3xl font-black text-[#171717]">

                      {k.value}

                    </h3>

                    {/* LABEL */}
                    <p className="mt-2 text-sm text-[#8b7355]">

                      {k.label}

                    </p>

                  </div>

                </motion.div>
              ))}

            </div>

            {/* GRAPH + INSIGHTS */}
            <div className="grid lg:grid-cols-3 gap-6">

              {/* GRAPH */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-2 rounded-[2rem] border border-[#ead7a4] bg-[#fffdf8] p-7 shadow-lg"
              >

                <div className="flex items-center justify-between mb-8">

                  <div>

                    <p className="text-3xl font-black text-[#171717]">
                      Revenue Analytics
                    </p>

                    <p className="text-[#8b7355] text-sm mt-1">
                      Monthly performance overview
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-[#c89b3c] font-black text-2xl">
                      +42%
                    </p>

                    <p className="text-[#8b7355] text-sm">
                      Growth Rate
                    </p>

                  </div>

                </div>

                <AnimatedGraph />

              </motion.div>

              {/* INSIGHTS */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-[#ead7a4] bg-[#fff8ea] p-7 shadow-lg"
              >

                <p className="text-3xl font-black text-[#171717] mb-8">
                  Customer Insights
                </p>

                <div className="space-y-7">

                  {[
                    { label: "Returning", val: 68 },
                    { label: "New Visitors", val: 42 },
                    { label: "Organic", val: 84 },
                    { label: "Referrals", val: 36 },
                  ].map((r, i) => (
                    <motion.div
                      key={r.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.1,
                      }}
                    >

                      <div className="flex justify-between mb-3">

                        <span className="text-sm text-[#5f5a4f] font-medium">
                          {r.label}
                        </span>

                        <span className="font-black text-[#c89b3c]">
                          {r.val}%
                        </span>

                      </div>

                      <div className="h-3 rounded-full bg-[#f3eadb] overflow-hidden">

                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${r.val}%` }}
                          transition={{
                            duration: 1,
                            delay: i * 0.15,
                          }}
                          viewport={{ once: true }}
                          className="h-full rounded-full bg-gradient-to-r from-[#c89b3c] via-[#d4a017] to-[#f4cf6a]"
                        />

                      </div>

                    </motion.div>
                  ))}

                </div>

              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

function AnimatedGraph() {
  return (
    <div className="h-72 flex items-end gap-4">

      {[35, 52, 44, 65, 58, 82, 74, 92].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          transition={{
            duration: 0.8,
            delay: i * 0.1,
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.08,
          }}
          className="relative flex-1 rounded-t-3xl bg-gradient-to-t from-[#a66b00] via-[#d4a017] to-[#f6d365] shadow-[0_10px_30px_rgba(212,160,23,0.35)]"
        >

          <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition duration-300"></div>

        </motion.div>
      ))}

    </div>
  );
}