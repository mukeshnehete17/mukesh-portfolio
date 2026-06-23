"use client";

import Tilt from "react-parallax-tilt";
import ScrollReveal from "./ScrollReveal";
import Magnetic from "./Magnetic";

const projects = [
  {
    title: "Dora AI Assistant",
    description:
      "A Python-based AI personal assistant featuring advanced voice integration, AI-powered conversations, automation capabilities, system controls, and human-like personality simulation. Designed as a next-generation desktop AI assistant focused on productivity, automation, and intelligent interaction.",
    tags: ["Python", "AI APIs", "Automation", "NLP", "Voice Integration"],
    status: "live" as const,
    github: "https://github.com/mukeshnehete17",
    demo: null,
  },
  {
    title: "Wolfixa E-Commerce",
    description:
      "Built a full-stack e-commerce platform with product management, authentication, and order tracking. Developed responsive user interfaces and secure backend APIs.",
    tags: ["MERN", "React", "Node.js", "MongoDB"],
    status: "live" as const,
    github: "https://github.com/mukeshnehete17",
    demo: "#",
  },
  {
    title: "ReachIQ",
    description:
      "Created a social media growth and analytics platform with performance tracking and insights. Developed interactive dashboards and data visualization features.",
    tags: ["React", "Node.js", "MongoDB"],
    status: "live" as const,
    github: "https://github.com/mukeshnehete17",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-[rgba(255,255,255,0.04)] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2
            className="mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Featured <span className="text-[#ff2b2b]">Projects</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.title} delay={idx * 0.1}>
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1000}
                scale={1.02}
                transitionSpeed={2000}
                glareEnable
                glareMaxOpacity={0.08}
                glareColor="#ff2b2b"
                className="h-full"
              >
                <div
                  className="group relative h-full overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-8 backdrop-blur-xl transition-all duration-500 hover:border-[rgba(255,43,43,0.3)] hover:shadow-[0_0_60px_rgba(255,43,43,0.08)]"
                  data-cursor-hover
                >

                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(255,43,43,0.15)] bg-[rgba(255,43,43,0.05)]">
                      <svg className="h-5 w-5 text-[#ff2b2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.04)] px-2 py-0.5 text-xs font-medium text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.github !== "#" && (
                      <Magnetic strength={0.2}>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-xs font-medium text-zinc-300 transition-all hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.08)]"
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                          GitHub
                        </a>
                      </Magnetic>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <Magnetic strength={0.2}>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-[#ff2b2b] px-4 py-2 text-xs font-medium text-white transition-all hover:shadow-[0_0_20px_rgba(255,43,43,0.4)]"
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
              </Tilt>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
