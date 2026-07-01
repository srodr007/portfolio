"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { profile } from "../content";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
const nameLines = ["Sergio", "Rodríguez", "Valbuena"];

function MastheadItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-ink-faint">
      {children}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative z-[2] mx-auto flex min-h-dvh max-w-5xl flex-col justify-between px-6 pb-14 pt-[calc(var(--nav-h)+3rem)]"
    >
      {/* Cover */}
      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: fade }}
        className="grid flex-1 grid-cols-1 items-center gap-10 py-12 md:grid-cols-12"
      >
        <div className="md:col-span-8">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="eyebrow mb-6"
          >
            {profile.role} · Data Science & Engineering
          </motion.p>

          <h1 className="font-display text-[clamp(3.25rem,12vw,8.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-ink">
            {nameLines.map((word, i) => (
              <span key={word} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.35 + i * 0.11 }}
                >
                  {i === 2 ? (
                    <span className="italic text-terracotta">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-display mt-8 max-w-xl text-xl italic leading-relaxed text-ink-soft md:text-2xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <button
              onClick={() =>
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform duration-300 hover:-translate-y-0.5"
            >
              Know Me
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </button>
            <a href="#contact" className="ink-link text-sm font-medium text-ink">
              Get in touch
            </a>
            <span className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta" />
              </span>
              {profile.now}
            </span>
          </motion.div>
        </div>

        {/* Byline portrait */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: EASE }}
          className="hidden md:col-span-4 md:block"
        >
          <motion.figure
            style={reduce ? undefined : { y: portraitY }}
            whileHover={reduce ? undefined : { scale: 1.06 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="relative mx-auto w-full max-w-[280px] cursor-pointer md:mx-0 md:ml-auto"
          >
            <div className="relative aspect-square overflow-hidden rounded-full border border-line bg-card p-1.5 shadow-[0_18px_50px_-24px_rgba(26,23,20,0.5)]">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src={profile.portrait}
                  alt={`${profile.name} ${profile.lastName}`}
                  fill
                  priority
                  sizes="280px"
                  className="object-cover object-[center_22%]"
                  style={{ filter: "grayscale(0.15) contrast(1.02)" }}
                />
              </div>
            </div>
          </motion.figure>
        </motion.div>
      </motion.div>

      {/* Footer strip */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="flex items-center justify-between border-t border-line pt-4"
      >
        <MastheadItem>Scroll to read</MastheadItem>
        <motion.span
          aria-hidden
          animate={reduce ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="font-mono text-xs text-ink-soft"
        >
          ↓
        </motion.span>
        <MastheadItem>01 / 06</MastheadItem>
      </motion.div>
    </section>
  );
}
