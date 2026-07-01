"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { about, focusAreas, profile } from "../content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section id="about" className="relative z-[2] mx-auto max-w-5xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading index="01" title="About" kicker="Profile" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        {/* Portrait + facts */}
        <div ref={ref} className="relative md:col-span-5">
          <Reveal>
            <figure className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-line bg-card shadow-[0_28px_70px_-30px_rgba(26,23,20,0.55)]">
                <motion.div style={reduce ? undefined : { y: imgY }} className="absolute inset-[-8%]">
                  <Image
                    src={profile.portrait}
                    alt={`Portrait of ${profile.name} ${profile.lastName}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-[center_20%]"
                    style={{ filter: "grayscale(0.12) contrast(1.02)" }}
                  />
                </motion.div>
              </div>
              <figcaption className="mt-4 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-ink-faint">
                {profile.name} {profile.lastName}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 space-y-3 border-t border-line pt-6">
            {[
              ["Currently", "Plexus Tech"],
              ["Languages", "Spanish · English (C1)"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-ink-faint">
                  {k}
                </span>
                <span className="text-sm text-ink-soft">{v}</span>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Narrative */}
        <div className="md:col-span-7">
          <Reveal>
            <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
              <span className="text-terracotta">“</span>
              Proactive and passionate about creating innovative solutions that provide
              real value.
              <span className="text-terracotta">”</span>
            </p>
          </Reveal>

          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
            {about.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-12">
            <p className="eyebrow mb-5">Focus areas</p>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {focusAreas.map((area, i) => (
                <li
                  key={area}
                  className="flex items-baseline gap-3 border-b border-line pb-3 text-ink"
                >
                  <span className="font-mono text-xs text-terracotta-deep">
                    0{i + 1}
                  </span>
                  <span className="text-[0.95rem]">{area}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <span className="font-display text-4xl italic text-ink">Sergio</span>
            <span className="ml-4 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-ink-faint">
              — {profile.role}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
