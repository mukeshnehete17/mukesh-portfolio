"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import dynamic from "next/dynamic";
import Magnetic from "@/components/Magnetic";

const AICoreOrb = dynamic(() => import("@/components/AICoreOrb"), { ssr: false });

const nameChars = "MUKESH NEHETE".split("");

const hudData = [
  { label: "PROJECTS", value: 3, suffix: "+" },
  { label: "TECHNOLOGIES", value: 15, suffix: "+" },
  { label: "HACKATHONS", value: 1, suffix: "+" },
];

function HUDCounter({ label, value, suffix, delay }: { label: string; value: number; suffix: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const display = useTransform(rounded, (v) => `${v}${suffix}`);

  useEffect(() => {
    const timeout = setTimeout(() => {
      animate(count, value, { duration: 2.5, delay: delay * 0.3, ease: [0.25, 0.46, 0.45, 0.94] });
    }, 1500 + delay * 200);
    return () => clearTimeout(timeout);
  }, [count, value, delay]);

  return (
    <div ref={ref} className="glass-panel rounded-xl px-5 py-3 text-center backdrop-blur-2xl">
      <motion.p
        className="text-2xl font-bold text-[#ff2b2b] md:text-3xl"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        <motion.span>{display}</motion.span>
      </motion.p>
      <p className="mt-0.5 text-[10px] font-medium tracking-[0.2em] text-zinc-500">{label}</p>
    </div>
  );
}

export default function HeroSection() {
  const [charRevealed, setCharRevealed] = useState<boolean[]>(nameChars.map(() => false));

  useEffect(() => {
    nameChars.forEach((_, i) => {
      setTimeout(() => {
        setCharRevealed((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 800 + i * 60);
    });
  }, []);

  const [taglineText, setTaglineText] = useState("");
  const tagline = "Building intelligent software, AI-powered systems, and scalable digital products.";

  useEffect(() => {
    if (charRevealed.every(Boolean)) {
      let i = 0;
      const interval = setInterval(() => {
        setTaglineText(tagline.slice(0, i + 1));
        i++;
        if (i >= tagline.length) clearInterval(interval);
      }, 25);
      return () => clearInterval(interval);
    }
  }, [charRevealed]);

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <AICoreOrb />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[rgba(5,5,5,0.3)] via-transparent to-[#050505]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block rounded-full border border-[rgba(255,43,43,0.15)] bg-[rgba(255,43,43,0.04)] px-4 py-1 text-[10px] font-medium tracking-[0.25em] text-[#ff2b2b] uppercase backdrop-blur-xl">
            System Active — Portfolio 2026
          </span>
        </motion.div>

        <h1
          className="mb-4 text-6xl font-bold leading-[1.02] tracking-tight md:text-8xl lg:text-9xl"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          {nameChars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              animate={
                charRevealed[i]
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 40, filter: "blur(12px)" }
              }
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={char === " " ? "" : char === "M" || char === "N" ? "text-[#ff2b2b]" : "text-white"}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mb-2 text-lg font-semibold tracking-wide md:text-xl"
        >
          <span className="text-gradient-accent">Full Stack + AI Software Developer</span>
        </motion.p>

        <motion.p className="mb-12 h-6 text-sm text-zinc-500 md:text-base">
          {taglineText}
          <span className="typing-cursor" />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          className="flex items-center justify-center gap-4"
        >
          <Magnetic strength={0.25}>
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#ff2b2b] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(255,43,43,0.6)]"
              data-cursor-hover
            >
              <span>Explore Projects</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </Magnetic>
          <Magnetic strength={0.25}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.04)] px-8 py-3.5 text-sm font-medium text-white backdrop-blur-xl transition-all hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.08)]"
              data-cursor-hover
            >
              Contact
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <div className="absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 gap-6">
        {hudData.map((item, i) => (
          <HUDCounter key={item.label} label={item.label} value={item.value} suffix={item.suffix} delay={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[9px] tracking-[0.25em] text-zinc-600 uppercase">Scroll</span>
          <svg className="h-3 w-3 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
