import React from "react";

import {
  Mail,
  MessageCircle,
  ArrowRight,
  Camera,
  Sparkles,
  PhoneCall,
} from "lucide-react";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section
      id="contact"
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
        {/* TOP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] border border-[#ead7a4] bg-[#fffdf8]/90 backdrop-blur-2xl p-10 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.08)]"
        >
          {/* GLOW */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#f4cf6a]/10 blur-[100px] animate-pulse"></div>

          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#ead7a4]/10 blur-[100px] animate-pulse"></div>

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div>
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f7e7bb] border border-[#ead7a4] text-[#8b6914] text-sm font-semibold shadow-md">
                <Sparkles
                  size={14}
                  className="text-[#d4a017] animate-pulse"
                />

                Let’s Talk Growth
              </div>

              {/* TITLE */}
              <h2 className="mt-8 text-5xl md:text-6xl font-black leading-tight text-[#171717]">
                Ready to make

                <span className="block bg-gradient-to-r from-[#c89b3c] via-[#d4a017] to-[#f4cf6a] bg-clip-text text-transparent">
                  your numbers move?
                </span>
              </h2>

              {/* TEXT */}
              <p className="mt-6 text-xl text-[#5f5a4f] leading-relaxed max-w-2xl">
                Let’s build scalable systems, premium experiences,
                and measurable digital growth for your business.
              </p>
            </div>

            {/* CTA BUTTON */}
            <a
              href="#contact-form"
              className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-[#c89b3c] to-[#f4cf6a] text-[#171717] font-black shadow-[0_20px_50px_rgba(212,160,23,0.35)] hover:scale-105 transition duration-500"
            >
              Book Consultation

              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition duration-300"
              />
            </a>
          </div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            {/* TAG */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f7e7bb] border border-[#ead7a4] text-[#8b6914] text-sm font-semibold shadow-md">
              <PhoneCall
                size={14}
                className="text-[#d4a017]"
              />

              Contact
            </div>

            {/* HEADING */}
            <h3 className="mt-8 text-5xl font-black leading-tight text-[#171717]">
              Tell us about

              <span className="block bg-gradient-to-r from-[#c89b3c] via-[#d4a017] to-[#f4cf6a] bg-clip-text text-transparent">
                your business.
              </span>
            </h3>

            {/* TEXT */}
            <p className="mt-6 text-lg leading-relaxed text-[#5f5a4f] max-w-xl">
              We respond within 24 hours with a custom growth
              strategy tailored to your goals.
            </p>

            {/* CONTACT ROWS */}
            <div className="mt-12 space-y-5">
              <ContactRow
                icon={<Mail size={20} />}
                label="Email"
                value="hello@navridhi.com"
                href="mailto:hello@navridhi.com"
              />

              <ContactRow
                icon={<Camera size={20} />}
                label="Instagram"
                value="@navridhi"
                href="https://instagram.com"
              />

              <ContactRow
                icon={<MessageCircle size={20} />}
                label="WhatsApp"
                value="+91 98765 43210"
                href="https://wa.me/919876543210"
              />
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            id="contact-form"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
            className="relative overflow-hidden rounded-[3rem] border border-[#ead7a4] bg-[#fffdf8]/90 backdrop-blur-2xl p-8 md:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.08)]"
          >
            {/* FORM GLOW */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#f4cf6a]/10 blur-[100px] animate-pulse"></div>

            <div className="relative">
              {/* FORM HEADER */}
              <div className="mb-10">
                <p className="text-[#c89b3c] text-sm font-semibold uppercase tracking-[0.2em]">
                  Start Your Project
                </p>

                <h3 className="mt-4 text-4xl font-black text-[#171717]">
                  Let’s build something exceptional.
                </h3>
              </div>

              {/* INPUTS */}
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Name"
                  placeholder="Jane Doe"
                />

                <Field
                  label="Email"
                  type="email"
                  placeholder="jane@company.com"
                />
              </div>

              <div className="mt-5">
                <Field
                  label="Company"
                  placeholder="Your business"
                />
              </div>

              {/* TEXTAREA */}
              <div className="mt-5">
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b6914]">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your goals..."
                  className="mt-3 w-full rounded-[1.5rem] border border-[#ead7a4] bg-[#fff8ea] px-5 py-4 text-[#171717] placeholder:text-[#8b7355] focus:outline-none focus:ring-2 focus:ring-[#d4a017]/30 transition-all"
                />
              </div>

              {/* BUTTON */}
              <button className="group mt-8 w-full h-14 rounded-2xl bg-gradient-to-r from-[#c89b3c] to-[#f4cf6a] text-[#171717] font-black shadow-[0_20px_50px_rgba(212,160,23,0.35)] hover:scale-[1.02] transition-all duration-500 flex items-center justify-center gap-3">
                Send Message

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition duration-300"
                />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* INPUT FIELD */
function Field({
  label,
  type = "text",
  placeholder,
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b6914]">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full h-14 rounded-2xl border border-[#ead7a4] bg-[#fff8ea] px-5 text-[#171717] placeholder:text-[#8b7355] focus:outline-none focus:ring-2 focus:ring-[#d4a017]/30 transition-all"
      />
    </div>
  );
}

/* CONTACT ROW */
function ContactRow({
  icon,
  label,
  value,
  href,
}) {
  return (
    <motion.a
      href={href}
      whileHover={{
        x: 8,
        scale: 1.02,
      }}
      className="group relative overflow-hidden flex items-center gap-5 rounded-[2rem] border border-[#ead7a4] bg-[#fffdf8]/90 backdrop-blur-2xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(212,160,23,0.15)]"
    >
      {/* GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-[#f4cf6a]/10 to-[#ead7a4]/20"></div>

      {/* ICON */}
      <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-r from-[#c89b3c] to-[#f4cf6a] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(212,160,23,0.25)] group-hover:rotate-6 group-hover:scale-110 transition duration-500">
        {icon}
      </div>

      {/* INFO */}
      <div className="relative">
        <p className="text-sm text-[#8b7355]">
          {label}
        </p>

        <p className="font-bold text-[#171717] text-lg">
          {value}
        </p>
      </div>
    </motion.a>
  );
}