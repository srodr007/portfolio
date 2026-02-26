"use client";

import { motion } from "framer-motion";
import { fadeUpSlow, staggerSlow } from "./variants";

const experience = [
  {
    role: "AI Engineer",
    company: "Plexus Tech",
    period: "Sept 2025 – present",
    type: "Full-time · Remote",
    bullets: [
      "Multiprovider multimodal RAG pipelines.",
      "Anomaly detection and forecasting models using Conformal Prediction.",
      "Sklearn pipelines for production ML workflows.",
      "Research on ML/DL models for network intrusion detection (IDS).",
    ],
    skills: ["RAG", "LangChain", "Docker", "FastAPI", "MLflow", "Machine Learning", "MCP"],
  },
  {
    role: "AI Software Engineer",
    company: "Missio IA",
    period: "Oct 2024 – Jun 2025",
    type: "Part-time · Madrid",
    bullets: [
      "Designed and developed SaaS solutions powered by GenAI.",
      "Built full-stack web applications with FastAPI and React in serverless architectures (GCP).",
      "Integrated LLMs and created AI agents to automate workflows.",
    ],
    skills: ["RAG", "GCP", "FastAPI", "GenAI", "MCP", "Software Development"],
  },
  {
    role: "Data Analyst I",
    company: "PRGX Global Inc.",
    period: "Sept 2024 – Mar 2025",
    type: "Internship · Madrid",
    bullets: [
      "Automated ETL tasks with Python and DBT.",
      "Performed data analysis with SQL and Microsoft SQL Server.",
    ],
    skills: ["Python", "SQL", "DBT", "ETL", "Microsoft SQL Server"],
  },
];

function SkillBadge({ label }: { label: string }) {
  return (
    <span
      style={{
        background: "rgba(100,116,139,0.08)",
        border: "1px solid rgba(100,116,139,0.22)",
        color: "#64748B",
      }}
      className="rounded-full px-2.5 py-0.5 text-xs font-medium"
    >
      {label}
    </span>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
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
          Experience
        </motion.h2>

        <div className="relative flex flex-col gap-0 pl-6">
          <div
            aria-hidden
            style={{ borderColor: "rgba(100,116,139,0.3)" }}
            className="absolute left-0 top-2 bottom-2 border-l"
          />

          {experience.map((item, i) => (
            <motion.div key={i} variants={fadeUpSlow} className="relative pb-12 last:pb-0">
              <div
                aria-hidden
                className="absolute -left-[22px] top-1.5 h-3 w-3 rounded-full"
                style={{ background: "#64748B", border: "2px solid #F8FAFC" }}
              />

              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-base font-semibold" style={{ color: "#0F172A" }}>
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: "#64748B" }}>{item.company}</p>
                  <p className="text-xs" style={{ color: "#64748B" }}>
                    {item.period} · {item.type}
                  </p>
                </div>

                <ul className="flex flex-col gap-1">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm" style={{ color: "#64748B" }}>
                      <span
                        className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: "rgba(100,116,139,0.5)" }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
