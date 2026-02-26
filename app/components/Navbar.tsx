"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["hero", "projects", "experience", "education", "contact"];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastY.current || currentY < 80);
      lastY.current = currentY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? currentY / total : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY + 20;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          width: `${progress * 100}%`,
          background: "linear-gradient(to right, #64748B, #475569)",
          transition: "width 0.1s linear",
          zIndex: 60,
        }}
      />

      <header
        style={{
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease",
          background: "rgba(248,250,252,0.92)",
          borderBottom: "1px solid #E2E8F0",
        }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm font-semibold tracking-widest transition-colors"
            style={{ color: "#64748B" }}
            aria-label="Back to top"
          >
            S·R
          </button>
          <ul className="flex items-center gap-8">
            {links.map(({ label, href }) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={href}>
                  <button
                    onClick={() => handleNav(href)}
                    className="relative text-sm transition-colors duration-200"
                    style={{ color: isActive ? "#0F172A" : "#64748B" }}
                  >
                    {label}
                    {isActive && (
                      <span
                        aria-hidden
                        style={{
                          position: "absolute",
                          bottom: -4,
                          left: 0,
                          right: 0,
                          height: "1px",
                          background: "#64748B",
                          borderRadius: "1px",
                        }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}
