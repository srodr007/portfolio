"use client";

import { certifications } from "../content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export default function Recognition() {
  return (
    <section
      id="recognition"
      className="relative z-[2] scroll-mt-24 bg-paper-2/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="05" title="Recognition" kicker="Awards & Certifications" />

        <ul className="border-b border-line">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05} as="li">
              <div className="group grid grid-cols-1 items-baseline gap-y-2 border-t border-line py-7 md:grid-cols-12 md:gap-x-8">
                <span className="font-mono text-sm text-terracotta-deep md:col-span-1">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl font-medium text-ink md:col-span-6 md:text-2xl">
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ink-link inline-flex items-baseline gap-2"
                    >
                      {c.title}
                      <span className="font-mono text-base text-terracotta">↗</span>
                    </a>
                  ) : (
                    c.title
                  )}
                </h3>
                <span className="text-[0.95rem] text-ink-soft md:col-span-3">{c.issuer}</span>
                <span className="whitespace-nowrap font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-faint md:col-span-2 md:text-right">
                  {c.date}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
