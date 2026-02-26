"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./variants";

const projects = [
  {
    title: "AI System for Automated Project Development",
    label: "TFG · 9.2/10 · Missio IA",
    context: "Final degree project developed in collaboration with Missio IA startup. Currently active and in production.",
    problem: "Manual SaaS development phases are slow and error-prone.",
    decision: "Multi-agent architecture with specialized AI agents per phase.",
    result: "Fully automated planning, coding, testing, and documentation generation.",
    stack: ["OpenAI", "Anthropic", "GCP", "MCP", "Reasoning Models"],
    isPrivate: true,
  },
  {
    title: "Samplex – AI-Powered Exam Preparation",
    label: "Android · Kotlin · Group project",
    context: "Android app developed in Kotlin as a group project. Not hosted in personal GitHub.",
    problem: "Students waste time creating study materials from lecture PDFs.",
    decision: "Upload-to-plan pipeline with LLM-generated quizzes and summaries.",
    result: "App that significantly reduces exam preparation time through AI-generated study plans and quizzes.",
    stack: ["OpenAI", "Firebase", "Cloud Functions", "Android", "Kotlin"],
    isPrivate: true,
  },
  {
    title: "Mobility Analysis for Mental Health Assessment",
    label: "BSc project · eB2 collaboration",
    context: "Developed as part of the BSc in Data Science & Engineering at UC3M, in collaboration with eB2. Not publicly available.",
    problem: "Clinical profiling is manual, slow, and lacks objective behavioral data.",
    decision: "DBSCAN clustering on geolocation traces to extract mobility patterns.",
    result: "ML model predicting clinical profiles from mobility data.",
    stack: ["Python", "DBSCAN", "Streamlit", "Machine Learning"],
    isPrivate: true,
  },
  {
    title: "Deep Learning Model for Recycling",
    label: "UC collaboration · 90.3% accuracy",
    context: "Developed in collaboration with the University of California. Not hosted in personal GitHub.",
    problem: "Incorrect waste sorting remains widespread.",
    decision: "Fine-tuned EfficientNetB0 on a custom waste dataset.",
    result: "CNN waste classifier achieving 90.3% accuracy.",
    stack: ["Python", "TensorFlow", "EfficientNetB0", "Computer Vision"],
    isPrivate: true,
  },
];

function Badge({ label }: { label: string }) {
  return (
    <span
      style={{
        background: "#F1F5F9",
        border: "1px solid #E2E8F0",
        color: "#475569",
      }}
      className="rounded-full px-2.5 py-1 text-xs"
    >
      {label}
    </span>
  );
}

function LockIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.article
      variants={fadeUp}
      style={{
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
      whileHover={{
        y: -4,
        borderColor: "rgba(100,116,139,0.4)",
        boxShadow: "0 8px 24px rgba(100,116,139,0.12)",
      }}
      transition={{ duration: 0.2 }}
      className="flex flex-col gap-4 rounded-xl p-6"
    >
      <div className="flex flex-col gap-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-snug" style={{ color: "#0F172A" }}>
            {project.title}
          </h3>
          {project.isPrivate && (
            <span
              className="mt-0.5 flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-xs"
              style={{ background: "#F1F5F9", color: "#94A3B8", border: "1px solid #E2E8F0" }}
            >
              <LockIcon /> Private
            </span>
          )}
        </div>
        <p className="text-xs font-medium" style={{ color: "#64748B" }}>{project.label}</p>
        <p className="text-xs leading-relaxed" style={{ color: "#94A3B8" }}>{project.context}</p>
      </div>

      <dl className="flex flex-col gap-1.5 text-sm" style={{ color: "#64748B" }}>
        <div>
          <dt className="inline font-medium" style={{ color: "#334155" }}>Problem: </dt>
          <dd className="inline">{project.problem}</dd>
        </div>
        <div>
          <dt className="inline font-medium" style={{ color: "#334155" }}>Decision: </dt>
          <dd className="inline">{project.decision}</dd>
        </div>
        <div>
          <dt className="inline font-medium" style={{ color: "#334155" }}>Result: </dt>
          <dd className="inline">{project.result}</dd>
        </div>
      </dl>

      <div className="flex flex-wrap gap-2 pt-1">
        {project.stack.map((tech) => (
          <Badge key={tech} label={tech} />
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          className="mb-12 text-2xl font-bold"
          style={{ color: "#0F172A" }}
        >
          Projects
        </motion.h2>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
