"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Magnetic from "./Magnetic";

const NeuralBackground = dynamic(
  () => import("./NeuralBackground"),
  { ssr: false }
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <NeuralBackground />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block rounded-full border border-[rgba(255,43,43,0.2)] bg-[rgba(255,43,43,0.05)] px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-[#ff2b2b] uppercase">
            Portfolio 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(16px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          MUKESH{" "}
          <span className="text-[#ff2b2b]">NEHETE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400 md:text-xl"
        >
          FULLSTACK + AI SOFTWARE DEVELOPER
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mb-12 max-w-xl text-sm leading-relaxed text-zinc-500"
        >
          B.Tech IT student building scalable applications and AI-powered solutions to solve real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex items-center justify-center gap-4"
        >
          <Magnetic strength={0.25}>
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#ff2b2b] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(255,43,43,0.5)]"
              data-cursor-hover
            >
              <span>View Projects</span>
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
              Contact Me
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest text-zinc-600 uppercase">
              Scroll
            </span>
            <svg className="h-4 w-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
