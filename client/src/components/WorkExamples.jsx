import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { assets } from "../assets/assets";

import { motion } from "framer-motion";

/* IMPORT IMAGES */
import dashboard1 from "../assets/dashboard1.jpeg";
import dashboard2 from "../assets/dashboard2.jpeg";
import websiteImg from "../assets/Website.jpg";

const projects = [
  {
    title: "Ecommerce Sales Dashboard",
    category: "Power BI Analytics",
    image: dashboard1,
    desc: "Interactive ecommerce dashboard with sales, profit, customer analytics, and smart business reporting systems.",
  },

  {
    title: "Retail Performance Analysis",
    category: "Business Intelligence",
    image: dashboard2,
    desc: "Advanced retail analytics dashboard with profit tracking, sales insights, customer segmentation, and reporting.",
  },

  {
    title: "Luxury Travel Website",
    category: "Premium Web Design",
    image: websiteImg,
    desc: "Modern travel booking website with immersive visuals, smooth interactions, luxury UI, and premium experience.",
  },
];

export default function AnalyticsDashboard() {
  return (
    <section
      id="dashboard"
      className="relative py-32 overflow-hidden bg-gradient-to-br from-[#f7f2e9] via-[#fffdf8] to-[#f3eadb]"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* GOLD GLOW */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#f4cf6a]/20 rounded-full blur-[120px]"></div>

        {/* CREAM GLOW */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#ead7a4]/20 rounded-full blur-[120px]"></div>

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,160,23,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,160,23,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f7e7bb] border border-[#ead7a4] text-[#8b6914] text-sm font-semibold shadow-md">

            <Sparkles
              size={15}
              className="text-[#d4a017] animate-pulse"
            />

            Featured Work

          </div>

          {/* TITLE */}
          <h2 className="mt-6 text-5xl md:text-6xl font-black leading-tight text-[#171717]">

            Here are some examples

            <span className="bg-gradient-to-r from-[#c89b3c] via-[#d4a017] to-[#f4cf6a] bg-clip-text text-transparent">
              {" "}
              of our work.
            </span>

          </h2>

          {/* TEXT */}
          <p className="mt-6 text-lg text-[#5f5a4f] leading-relaxed">
            Real dashboards and premium websites crafted for ambitious
            brands focused on measurable business growth.
          </p>

        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-[#ead7a4] bg-[#fffdf8]/90 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_100px_rgba(212,160,23,0.18)] transition-all duration-700"
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#f4cf6a]/10 via-transparent to-[#ead7a4]/20"></div>

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-t-[2.5rem] bg-[#f5efe2]">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[240px] object-cover object-top group-hover:scale-110 transition duration-700 ease-out"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* CATEGORY */}
                <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl text-[#8b6914] text-xs font-bold uppercase tracking-[0.15em] shadow-lg">

                  {project.category}

                </div>

                {/* ICON BUTTON */}
                <div className="absolute bottom-5 right-5 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-xl flex items-center justify-center text-[#c89b3c] shadow-xl group-hover:bg-[#c89b3c] group-hover:text-white transition duration-500">

                  <ArrowUpRight
                    size={22}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"
                  />

                </div>

              </div>

              {/* CONTENT */}
              <div className="relative p-8">

                {/* TITLE */}
                <h3 className="text-2xl font-black text-[#171717] leading-tight min-h-[80px]">

                  {project.title}

                </h3>

                {/* DESCRIPTION */}
                <p className="mt-5 text-[#5f5a4f] leading-relaxed text-[15px] min-h-[120px]">

                  {project.desc}

                </p>

                {/* BUTTON */}
                <button className="mt-6 group/btn inline-flex items-center gap-3 font-bold text-[#171717]">

                  View Project

                  <ArrowUpRight
                    size={18}
                    className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition duration-300"
                  />

                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}