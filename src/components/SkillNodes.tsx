"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "M",
    skills: ["React.js", "Next.js", "HTML5/CSS3", "Tailwind CSS", "JavaScript", "TypeScript"],
    color: "#ff2b2b",
  },
  {
    category: "Backend",
    icon: "B",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "WebSockets"],
    color: "#ff4b4b",
  },
  {
    category: "AI & ML",
    icon: "AI",
    skills: ["AI Integration", "NLP", "Automation", "Python", "LLMs"],
    color: "#ff6b6b",
  },
  {
    category: "Database",
    icon: "D",
    skills: ["MongoDB", "MySQL", "SQL", "Firebase", "Redis"],
    color: "#ff3b3b",
  },
  {
    category: "Languages",
    icon: "C",
    skills: ["C/C++", "Java", "Python", "JavaScript", "TypeScript"],
    color: "#ff5b5b",
  },
  {
    category: "Tools",
    icon: "T",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Postman", "Docker"],
    color: "#ff2b2b",
  },
];

export default function SkillNodes() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="relative border-t border-[rgba(255,255,255,0.04)] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-[10px] font-medium tracking-[0.25em] text-[#ff2b2b] uppercase">
              — Neural Network —
            </span>
            <h2
              className="text-3xl font-bold tracking-tight md:text-5xl"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Skill{" "}
              <span className="text-[#ff2b2b]">Architecture</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, idx) => (
            <ScrollReveal key={cat.category} delay={idx * 0.08}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative cursor-pointer"
                data-cursor-hover
              >
                <motion.div
                  animate={{
                    scale: hoveredIndex === idx ? 1.02 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="glass-panel relative overflow-hidden rounded-2xl p-6 backdrop-blur-2xl transition-all duration-500 hover:border-[rgba(255,43,43,0.15)] hover:shadow-[0_0_50px_rgba(255,43,43,0.04)]"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-[0.03] transition-all duration-700 group-hover:opacity-[0.08] group-hover:scale-150"
                    style={{ background: `radial-gradient(circle, ${cat.color}, transparent)` }}
                  />

                  <div className="relative z-10 mb-4 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl border text-xs font-bold backdrop-blur-xl transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                      style={{
                        borderColor: `${cat.color}30`,
                        backgroundColor: `${cat.color}08`,
                        color: cat.color,
                      }}
                    >
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{cat.category}</h3>
                      <p className="text-[10px] text-zinc-600">{cat.skills.length} technologies</p>
                    </div>
                  </div>

                  <motion.div
                    className="relative z-10 flex flex-wrap gap-2"
                    animate={{ height: hoveredIndex === idx ? "auto" : "auto" }}
                  >
                    {cat.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0.6, scale: 1 }}
                        whileHover={{ scale: 1.05, opacity: 1 }}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 text-xs font-medium text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(255,43,43,0.2)] hover:text-[#ff2b2b] hover:bg-[rgba(255,43,43,0.06)]"
                        style={{
                          borderColor:
                            hoveredIndex === idx ? `${cat.color}20` : "rgba(255,255,255,0.06)",
                        }}
                      >
                        <span
                          className="h-1 w-1 rounded-full"
                          style={{ backgroundColor: cat.color }}
                        />
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(600px circle at 50% 50%, ${cat.color}04, transparent)`,
                    }}
                  />
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
