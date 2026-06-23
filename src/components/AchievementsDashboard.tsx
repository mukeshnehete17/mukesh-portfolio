"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

function CountUp({ end, suffix, label, delay = 0, color = "#ff2b2b" }: {
  end: number; suffix?: string; label: string; delay?: number; color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const display = useTransform(rounded, (v) => `${v}${suffix || ""}`);

  useEffect(() => {
    if (inView) {
      count.set(0);
      animate(count, end, { duration: 2.5, delay, ease: [0.25, 0.46, 0.45, 0.94] });
    }
  }, [inView, count, end, delay]);

  return (
    <div ref={ref}>
      <motion.p
        className="text-4xl font-bold md:text-5xl"
        style={{ fontFamily: "Space Grotesk, sans-serif", color }}
      >
        <motion.span>{display}</motion.span>
      </motion.p>
      <p className="mt-1 text-xs font-medium text-zinc-500">{label}</p>
    </div>
  );
}

function BarChart({ data }: { data: { label: string; value: number; color: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const maxValue = Math.max(...data.map((d) => d.value));
  const [animatedValues, setAnimatedValues] = useState<number[]>(data.map(() => 0));

  useEffect(() => {
    if (inView) {
      data.forEach((d, i) => {
        setTimeout(() => {
          setAnimatedValues((prev) => {
            const next = [...prev];
            next[i] = d.value;
            return next;
          });
        }, 300 + i * 150);
      });
    }
  }, [inView, data]);

  return (
    <div ref={ref} className="flex items-end justify-center gap-3 pt-4">
      {data.map((item, i) => (
        <div key={item.label} className="flex flex-col items-center gap-2">
          <motion.div
            className="w-12 rounded-t-lg md:w-14"
            style={{
              backgroundColor: item.color,
              height: inView ? `${(animatedValues[i] / maxValue) * 120}px` : "0px",
              opacity: 0.6,
            }}
            animate={{ height: inView ? `${(animatedValues[i] / maxValue) * 120}px` : "0px" }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          <span className="text-[9px] font-medium text-zinc-600">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

const counters = [
  { end: 3, suffix: "+", label: "Projects Built", color: "#ff2b2b" },
  { end: 1, suffix: "+", label: "Hackathons", color: "#ff4b4b" },
  { end: 15, suffix: "+", label: "Technologies", color: "#ff6b6b" },
  { end: 4, suffix: "+", label: "Certifications", color: "#ff3b3b" },
];

const chartData = [
  { label: "JS/TS", value: 90, color: "#ff2b2b" },
  { label: "Python", value: 85, color: "#ff4b4b" },
  { label: "React", value: 88, color: "#ff6b6b" },
  { label: "Node.js", value: 80, color: "#ff3b3b" },
  { label: "MongoDB", value: 75, color: "#ff5b5b" },
  { label: "AI/ML", value: 70, color: "#ff7b7b" },
];

const achievements = [
  "Built and deployed multiple web development and AI-based projects.",
  "Participated in hackathons and technical events for real-world problem solving.",
  "Consistently practiced Data Structures & Algorithms using Java.",
  "Completed industry-relevant projects in Web Development and Artificial Intelligence.",
];

export default function AchievementsDashboard() {
  return (
    <section id="achievements" className="relative border-t border-[rgba(255,255,255,0.04)] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-[10px] font-medium tracking-[0.25em] text-[#ff2b2b] uppercase">
              — Command Center —
            </span>
            <h2
              className="text-3xl font-bold tracking-tight md:text-5xl"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Performance{" "}
              <span className="text-[#ff2b2b]">Dashboard</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-5">
          <ScrollReveal className="md:col-span-3">
            <div className="glass-panel h-full rounded-2xl p-8 backdrop-blur-2xl">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
                  Metrics Overview
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-emerald-400/80">
                  <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-emerald-500" />
                  Live
                </span>
              </div>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {counters.map((counter, idx) => (
                  <CountUp key={counter.label} {...counter} delay={idx * 0.15} />
                ))}
              </div>
              <div className="mt-8 border-t border-[rgba(255,255,255,0.06)] pt-8">
                <span className="mb-4 block text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
                  Competency Radar
                </span>
                <BarChart data={chartData} />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-2">
            <div className="glass-panel-red h-full rounded-2xl p-8 backdrop-blur-2xl">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
                  Achievements Log
                </span>
                <span className="text-[10px] text-zinc-600">4 entries</span>
              </div>
              <div className="space-y-5">
                {achievements.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[rgba(255,43,43,0.15)] bg-[rgba(255,43,43,0.05)] text-[9px] font-bold text-[#ff2b2b]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-xs leading-relaxed text-zinc-400">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
