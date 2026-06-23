"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import ScrollReveal from "./ScrollReveal";

function CountUp({
  end,
  suffix = "",
  label,
  delay = 0,
}: {
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const display = useTransform(rounded, (v) => `${v}${suffix}`);

  useEffect(() => {
    if (inView) {
      count.set(0);
      animate(count, end, {
        duration: 2,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      });
    }
  }, [inView, count, end, delay]);

  return (
    <div ref={ref} className="text-center">
      <motion.p
        className="text-5xl font-bold text-[#ff2b2b] md:text-6xl"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        <motion.span>{display}</motion.span>
      </motion.p>
      <p className="mt-2 text-sm font-medium text-zinc-400">{label}</p>
    </div>
  );
}

const counters = [
  { end: 3, suffix: "+", label: "Projects Built" },
  { end: 1, suffix: "+", label: "Hackathons" },
  { end: 15, suffix: "+", label: "Technologies Learned" },
  { end: 4, suffix: "+", label: "Certifications" },
];

const bullets = [
  "Built and deployed multiple web development and AI-based projects.",
  "Participated in hackathons and technical events to develop real-world problem-solving skills.",
  "Consistently practiced Data Structures & Algorithms using Java.",
  "Completed industry-relevant projects in Web Development and Artificial Intelligence.",
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative border-t border-[rgba(255,255,255,0.04)] py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <h2
            className="mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="text-[#ff2b2b]">Achievements</span>
          </h2>
        </ScrollReveal>

        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {counters.map((counter, idx) => (
            <ScrollReveal key={counter.label} delay={idx * 0.1}>
              <CountUp
                end={counter.end}
                suffix={counter.suffix}
                label={counter.label}
                delay={idx * 0.15}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mx-auto max-w-2xl rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-8 backdrop-blur-xl">
            <ul className="space-y-4">
              {bullets.map((bullet, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 text-sm text-zinc-400"
                >
                  <span className="mt-1.5 flex h-2 w-2 flex-shrink-0 rounded-full bg-[#ff2b2b]" />
                  {bullet}
                </motion.li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
