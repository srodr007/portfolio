"use client";

import { motion } from "framer-motion";
import { fadeUpSlow, staggerSlow } from "./variants";

const education = [
  {
    degree: "BSc Data Science & Engineering",
    institution: "Universidad Carlos III de Madrid (UC3M)",
    period: "2021 – 2025",
    details: "GPA 8/10 · TFG 9.2/10",
  },
  {
    degree: "BSc Computer Science (Exchange)",
    institution: "University of California",
    period: "2023 – 2024",
    details: "GPA 3.5/4.0",
  },
];

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
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
          Education
        </motion.h2>

        <div className="flex flex-col gap-4">
          {education.map((item) => (
            <motion.div
              key={item.institution}
              variants={fadeUpSlow}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
              className="rounded-xl p-6"
            >
              <h3 className="text-base font-semibold" style={{ color: "#0F172A" }}>
                {item.degree}
              </h3>
              <p className="mt-0.5 text-sm font-medium" style={{ color: "#64748B" }}>
                {item.institution}
              </p>
              <p className="mt-1 text-xs" style={{ color: "#64748B" }}>
                {item.period} · {item.details}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
