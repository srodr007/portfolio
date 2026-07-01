"use client";

import { useState } from "react";
import { profile } from "../content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

function CopyIcon({ copied }: { copied: boolean }) {
  return copied ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="14" height="14" x="8" y="8" rx="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };

  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative z-[2] scroll-mt-24 px-6 pt-24 md:pt-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="06" title="Let's talk" kicker="Contact" />

        <Reveal>
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
            Open to new opportunities and collaborations in AI and machine learning.
            The fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-10">
          <a
            href={`mailto:${profile.email}`}
            className="ink-link font-display text-[clamp(1.8rem,6vw,3.75rem)] font-medium leading-none tracking-tight text-ink"
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            <CopyIcon copied={copied} />
            {copied ? "Copied to clipboard" : "Copy email"}
          </button>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            LinkedIn ↗
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="ink-link text-sm text-ink-soft"
          >
            {profile.phone}
          </a>
          <a
            href={profile.cvUrl}
            download
            className="ink-link text-sm font-medium text-ink"
          >
            Download CV ↓
          </a>
        </Reveal>

        {/* Colophon */}
        <div className="mt-24 flex flex-col items-start gap-4 border-t border-line py-8 sm:flex-row sm:items-baseline sm:justify-between">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-lg font-semibold text-ink">SR</span>
            <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-ink-faint">
              © {year} — {profile.name} {profile.lastName}
            </span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="ink-link font-mono text-[0.66rem] uppercase tracking-[0.16em] text-ink-soft"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
