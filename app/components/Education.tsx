"use client";

import { education } from "../content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="relative z-[2] mx-auto max-w-5xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading index="02" title="Education" kicker="Foundations" />

      <div className="border-b border-line">
        {education.map((item, i) => (
          <Reveal key={item.institution} delay={i * 0.05} as="article">
            <div className="grid grid-cols-1 gap-y-3 border-t border-line py-8 md:grid-cols-12 md:gap-x-10 md:py-10">
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-terracotta-deep md:col-span-3">
                {item.period}
              </span>
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl font-medium leading-tight text-ink">
                  {item.degree}
                </h3>
                <p className="mt-1 text-[1rem] text-ink-soft">{item.institution}</p>
                <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-faint">
                  {item.detail}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
