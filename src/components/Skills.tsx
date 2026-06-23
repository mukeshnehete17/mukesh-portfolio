"use client";

import ScrollReveal from "./ScrollReveal";

const skillGroups = [
  {
    title: "Core",
    skills: ["C/C++", "JAVA", "PYTHON"],
  },
  {
    title: "Frontend",
    skills: ["HTML5/CSS3 / Tailwind CSS", "REACT.JS / NEXT.JS", "JAVASCRIPT"],
  },
  {
    title: "Backend & DB",
    skills: ["Node.js", "Express.js", "MongoDB", "MYSQL", "SQL"],
  },
  {
    title: "AI & Core CS",
    skills: ["AI & Automation", "DATA STRUCTURES ALGORITHM"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "LINUX", "POSTMAN"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-[rgba(255,255,255,0.04)] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2
            className="mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Skills & <span className="text-[#ff2b2b]">Technologies</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, idx) => (
            <ScrollReveal key={group.title} delay={idx * 0.1}>
              <div
                className="group h-full rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl transition-all duration-500 hover:border-[rgba(255,43,43,0.2)] hover:shadow-[0_0_40px_rgba(255,43,43,0.05)]"
                data-cursor-hover
              >
                <h3 className="mb-4 text-xs font-bold tracking-[0.15em] text-[#ff2b2b] uppercase">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3 py-1.5 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-[#ff2b2b] hover:bg-[rgba(255,43,43,0.1)] hover:text-[#ff2b2b]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
