"use client";

import { motion } from "framer-motion";
import { fadeUpSlow, staggerSlow } from "./variants";

const awards = [
  {
    title: "Excellence Scholarship",
    issuer: "Community of Madrid",
    year: "2025",
    icon: "★",
  },
  {
    title: "C1 Advanced Certificate",
    issuer: "Cambridge Assessment English",
    year: "C1",
    icon: "◈",
  },
];

export default function Awards() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <motion.div
        variants={staggerSlow}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h2
          variants={fadeUpSlow}
          className="mb-12 text-2xl font-bold"
          style={{ color: "#0F172A" }}
        >
          Awards & Certifications
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {awards.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUpSlow}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
              className="flex items-center gap-4 rounded-xl p-5"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg"
                style={{ background: "rgba(77,124,95,0.1)", color: "#4D7C5F" }}
              >
                {item.icon}
              </span>
              <div>
                <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>{item.title}</p>
                <p className="text-xs" style={{ color: "#64748B" }}>
                  {item.issuer} · {item.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
