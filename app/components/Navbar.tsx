"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Education", href: "#education" },
  { num: "03", label: "Experience", href: "#experience" },
  { num: "04", label: "Work", href: "#work" },
  { num: "06", label: "Contact", href: "#contact" },
];

const sectionIds = [
  "hero",
  "about",
  "education",
  "experience",
  "work",
  "recognition",
  "contact",
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("hero");
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY.current || y < 90);
      setScrolled(y > 24);
      lastY.current = y;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? y / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(id),
        { rootMargin: "-45% 0px -50% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        aria-hidden
        className="fixed left-0 top-0 z-[60] h-[2px] bg-terracotta"
        style={{ width: `${progress * 100}%`, transition: "width 0.12s linear" }}
      />

      <header
        style={{
          transform: visible ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
          height: "var(--nav-h)",
          background: scrolled ? "rgba(244,239,231,0.82)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--color-line)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <nav className="mx-auto flex h-full max-w-5xl items-center gap-3 px-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="group flex shrink-0 items-baseline gap-2"
          >
            <span className="font-display text-xl font-semibold text-ink">SR</span>
            <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink-faint sm:inline">
              — Portfolio
            </span>
          </button>

          <div className="no-scrollbar flex min-w-0 flex-1 items-center overflow-x-auto pr-6 sm:pr-0">
            <ul className="flex w-full items-center gap-0.5 sm:justify-end sm:gap-1 md:gap-2">
              {links.map(({ num, label, href }) => {
                const isActive = active === href.slice(1);
                return (
                  <li key={href} className="shrink-0">
                    <button
                      onClick={() => go(href)}
                      className="group flex items-baseline gap-1.5 whitespace-nowrap rounded-full px-2 py-1.5 text-[0.82rem] transition-colors sm:text-sm md:px-3"
                      style={{ color: isActive ? "var(--ink)" : "var(--color-ink-soft)" }}
                    >
                      <span
                        className="hidden font-mono text-[0.62rem] sm:inline"
                        style={{ color: isActive ? "var(--terracotta)" : "var(--color-ink-faint)" }}
                      >
                        {num}
                      </span>
                      <span>{label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
