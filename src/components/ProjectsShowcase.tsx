"use client";

import Tilt from "react-parallax-tilt";
import ScrollReveal from "@/components/ScrollReveal";
import Magnetic from "@/components/Magnetic";

const projects = [
  {
    title: "Dora AI Assistant",
    subtitle: "AI-POWERED DESKTOP ASSISTANT",
    description:
      "A Python-based AI personal assistant featuring advanced voice integration, AI-powered conversations, automation capabilities, system controls, and human-like personality simulation. Designed as a next-generation desktop AI assistant focused on productivity, automation, and intelligent interaction.",
    tags: ["Python", "AI APIs", "Automation", "NLP", "Voice Integration"],
    specs: [
      { label: "Framework", value: "Python" },
      { label: "AI Engine", value: "NLP + Custom" },
      { label: "Status", value: "Active Dev" },
    ],
    github: "https://github.com/mukeshnehete17",
    demo: null,
    gradient: "from-[rgba(255,43,43,0.15)] to-[rgba(255,43,43,0.02)]",
  },
  {
    title: "Wolfixa E-Commerce",
    subtitle: "FULL-STACK E-COMMERCE PLATFORM",
    description:
      "Built a full-stack e-commerce platform with product management, authentication, and order tracking. Developed responsive user interfaces and secure backend APIs with MongoDB and Express.js.",
    tags: ["MERN", "React", "Node.js", "MongoDB", "Express"],
    specs: [
      { label: "Frontend", value: "React" },
      { label: "Backend", value: "Node + Express" },
      { label: "Database", value: "MongoDB" },
    ],
    github: "https://github.com/mukeshnehete17",
    demo: "#",
    gradient: "from-[rgba(255,43,43,0.1)] to-[rgba(0,0,0,0)]",
  },
  {
    title: "ReachIQ",
    subtitle: "SOCIAL MEDIA ANALYTICS PLATFORM",
    description:
      "Created a social media growth and analytics platform with performance tracking and insights. Developed interactive dashboards and data visualization features for comprehensive social media monitoring.",
    tags: ["React", "Node.js", "MongoDB", "D3.js"],
    specs: [
      { label: "Frontend", value: "React" },
      { label: "Backend", value: "Node.js" },
      { label: "Analytics", value: "Custom Engine" },
    ],
    github: "https://github.com/mukeshnehete17",
    demo: "#",
    gradient: "from-[rgba(255,43,43,0.1)] to-[rgba(0,0,0,0)]",
  },
];

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="relative border-t border-[rgba(255,255,255,0.04)] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <span className="mb-4 inline-block text-[10px] font-medium tracking-[0.25em] text-[#ff2b2b] uppercase">
              — Product Launch Pad —
            </span>
            <h2
              className="text-3xl font-bold tracking-tight md:text-5xl"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Featured{" "}
              <span className="text-[#ff2b2b]">Projects</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.title} delay={idx * 0.1}>
              <Tilt
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                perspective={1200}
                scale={1.01}
                transitionSpeed={3000}
                glareEnable
                glareMaxOpacity={0.06}
                glareColor="#ff2b2b"
                className="w-full"
              >
                <div
                  className={`group relative overflow-hidden rounded-3xl border border-[rgba(255,255,255,0.06)] bg-gradient-to-br ${project.gradient} p-1 backdrop-blur-xl transition-all duration-700 hover:border-[rgba(255,43,43,0.2)] hover:shadow-[0_0_80px_rgba(255,43,43,0.06)]`}
                  data-cursor-hover
                >
                  <div className="rounded-2xl bg-[rgba(5,5,5,0.6)] p-8 backdrop-blur-2xl md:p-12">
                    <div className="grid gap-8 md:grid-cols-5">
                      <div className="md:col-span-3">
                        <span className="mb-3 block text-[10px] font-bold tracking-[0.3em] text-[#ff2b2b]">
                          {project.subtitle}
                        </span>
                        <h3
                          className="mb-4 text-2xl font-bold text-white md:text-3xl"
                          style={{ fontFamily: "Space Grotesk, sans-serif" }}
                        >
                          {project.title}
                        </h3>
                        <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                          {project.description}
                        </p>
                        <div className="mb-6 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 text-[11px] font-medium text-zinc-400 backdrop-blur-sm transition-all hover:border-[#ff2b2b] hover:text-[#ff2b2b]"
                            >
                              <span className="h-1 w-1 rounded-full bg-current opacity-40" />
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-3">
                          <Magnetic strength={0.2}>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-5 py-2.5 text-xs font-medium text-zinc-300 backdrop-blur-xl transition-all hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.08)]"
                            >
                              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                              </svg>
                              View Repository
                            </a>
                          </Magnetic>
                          {project.demo && (
                            <Magnetic strength={0.2}>
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#ff2b2b] px-5 py-2.5 text-xs font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(255,43,43,0.5)]"
                              >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Live Demo
                              </a>
                            </Magnetic>
                          )}
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <div className="glass-panel-red h-full rounded-xl p-6 backdrop-blur-2xl">
                          <span className="mb-4 block text-[9px] font-bold tracking-[0.25em] text-zinc-500 uppercase">
                            Tech Specs
                          </span>
                          <div className="space-y-4">
                            {project.specs.map((spec) => (
                              <div key={spec.label}>
                                <p className="text-[10px] font-medium tracking-wider text-zinc-600 uppercase">
                                  {spec.label}
                                </p>
                                <p className="mt-0.5 text-sm font-semibold text-zinc-200">
                                  {spec.value}
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 flex items-center gap-2 border-t border-[rgba(255,255,255,0.06)] pt-4">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                            <span className="text-[10px] font-medium text-emerald-400/80">
                              Production Ready
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
