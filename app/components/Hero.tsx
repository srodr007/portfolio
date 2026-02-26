"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const easeOut = [0, 0, 0.2, 1] as [number, number, number, number];

function fadeIn(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: easeOut, delay },
  };
}

function useTyping(text: string, startDelay = 800, speed = 70) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;
    timeout = setTimeout(() => {
      let i = 0;
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, [text, startDelay, speed]);
  return displayed;
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Subtle parallax: image moves up slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const role = useTyping("AI Engineer", 800, 70);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ marginTop: "57px", minHeight: "calc(100vh - 57px)"}}
    >
      {/* Background image with parallax + rotation */}
      <motion.div
        style={{
          y: imageY,
          rotate: imageRotate,
          inset: "10%",
          position: "absolute",
          zIndex: 0,
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      >
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          style={{ objectFit: "contain", objectPosition: "center 50%" }}
        />
      </motion.div>

      {/* Dark overlay on top of image */}
      <div
        aria-hidden
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(5,8,10,0.55) 0%, rgba(5,8,10,0.4) 60%, rgba(5,8,10,0.15) 85%, #F8FAFC 100%)",
        }}
      />

      {/* Grain overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 11,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      />

      {/* Text content */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="relative z-20 flex flex-col items-center gap-6 px-6 text-center mt-28"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="h-5 text-sm font-medium tracking-[0.3em] uppercase"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          {role}
          <span
            aria-hidden
            style={{
              display: "inline-block",
              width: "2px",
              height: "0.85em",
              background: "#fff",
              marginLeft: "3px",
              verticalAlign: "middle",
              animation: "blink 1s step-end infinite",
              opacity: role.length < "AI Engineer".length ? 0.8 : 0,
            }}
          />
        </motion.p>

        <motion.h1
          {...fadeIn(0.15)}
          className="text-5xl font-bold tracking-tight text-white md:text-7xl"
          style={{ textShadow: "0 2px 40px rgba(0,0,0,0.4)" }}
        >
          Sergio Rodriguez
          <br />
          Valbuena
        </motion.h1>

        <motion.p
          {...fadeIn(0.3)}
          className="max-w-lg text-base leading-relaxed"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Building intelligent systems that turn complex data into decisions.
        </motion.p>

        <motion.div {...fadeIn(0.45)}>
          <button
            onClick={scrollToProjects}
            className="mt-2 rounded-full border px-8 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300"
            style={{
              borderColor: "rgba(255,255,255,0.35)",
              background: "rgba(255,255,255,0.08)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.18)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.6)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.35)";
            }}
          >
            View Projects ↓
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
      >
        <div
          className="flex h-9 w-5 items-start justify-center rounded-full border p-1"
          style={{ borderColor: "rgba(255,255,255,0.3)" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full"
            style={{ background: "rgba(255,255,255,0.6)" }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
