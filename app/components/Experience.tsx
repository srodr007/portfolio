"use client";

import { experience } from "../content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-[2] scroll-mt-24 bg-paper-2/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="03" title="Experience" kicker="Track record" />

        <div className="relative">
          {/* Timeline spine */}
          <div
            aria-hidden
            className="absolute left-0 top-3 bottom-3 hidden w-px bg-line md:block md:left-[calc(25%-0.5px)]"
          />

          {experience.map((item, i) => (
            <Reveal key={`${item.company}-${i}`} delay={i * 0.04} as="article">
              <div className="grid grid-cols-1 gap-y-4 border-t border-line py-10 md:grid-cols-4 md:gap-x-10">
                {/* Meta rail */}
                <div className="relative md:pr-10 md:text-right">
                  <span
                    aria-hidden
                    className="absolute hidden h-2.5 w-2.5 rounded-full md:block md:right-[-6px] md:top-1.5"
                    style={{
                      background: item.current ? "var(--terracotta)" : "var(--color-line)",
                      boxShadow: item.current ? "0 0 0 4px rgba(180,83,31,0.14)" : "none",
                    }}
                  />
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink">
                    {item.period}
                  </p>
                  <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-ink-faint">
                    {item.location} · {item.type}
                  </p>
                </div>

                {/* Content */}
                <div className="md:col-span-3">
                  <h3 className="font-display text-2xl font-medium leading-tight text-ink">
                    {item.role}
                    <span className="text-ink-faint"> · </span>
                    <span className="text-terracotta">{item.company}</span>
                  </h3>
                  <p className="mt-2 text-[0.95rem] italic text-ink-soft">{item.summary}</p>

                  <ul className="mt-5 space-y-2.5">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-soft">
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-terracotta" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line bg-card px-2.5 py-1 font-mono text-[0.66rem] text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
