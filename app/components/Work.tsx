"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { projects, type Project } from "../content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

function LockIcon({ className }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <rect width="18" height="11" x="3" y="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);

  return (
    <Reveal delay={index * 0.04} as="article">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="group relative grid grid-cols-1 gap-x-8 gap-y-4 border-t border-line py-8 md:grid-cols-12 md:py-10"
      >
        {/* Warm hover wash */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-x-[-1.5rem] inset-y-0 -z-[1] rounded-[3px] bg-paper-2"
          initial={false}
          animate={{ opacity: hover && !reduce ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />

        {/* Index + year */}
        <div className="flex items-baseline justify-between md:col-span-3 md:flex-col md:justify-start md:gap-2">
          <span className="font-mono text-sm text-terracotta-deep">
            {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
          <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-ink-faint">
            {project.year}
          </span>
        </div>

        {/* Body */}
        <div className="md:col-span-6">
          <div className="flex items-center gap-3">
            <motion.h3
              className="font-display text-2xl font-medium leading-tight text-ink md:text-[1.7rem]"
              animate={{ x: hover && !reduce ? 6 : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {project.title}
            </motion.h3>
            {project.isPrivate && (
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-terracotta/35 bg-terracotta/[0.08] px-2.5 py-1 font-mono text-[0.6rem] font-medium uppercase tracking-[0.12em] text-terracotta-deep">
                <LockIcon /> Private
              </span>
            )}
          </div>
          <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-ink-faint">
            {project.kind}
          </p>
          <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-ink-soft">
            {project.blurb}
          </p>
          {project.highlight && (
            <p className="mt-3 flex items-start gap-2 text-sm text-ink">
              <span className="mt-[7px] h-1 w-4 shrink-0 bg-terracotta" />
              {project.highlight}
            </p>
          )}
          {project.isPrivate && project.privateReason && (
            <p className="mt-4 flex max-w-lg items-start gap-2 border-l-2 border-terracotta/40 py-0.5 pl-3 text-xs leading-relaxed text-ink-soft">
              <LockIcon className="mt-0.5 shrink-0 text-terracotta-deep" />
              <span>
                <span className="font-medium text-terracotta-deep">Private repository. </span>
                {project.privateReason}
              </span>
            </p>
          )}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap content-start gap-2 md:col-span-3 md:justify-end">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.66rem] text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative z-[2] mx-auto max-w-5xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading index="04" title="Selected Work" kicker="Projects" />
      <div className="border-b border-line">
        {projects.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
