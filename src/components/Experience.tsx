"use client";

import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "Full Stack + AI Software Developer",
    org: "Personal Projects",
    period: "2025 - Present",
    points: [
      "Built and deployed full-stack applications using MERN Stack and Python.",
      "Developed AI-powered solutions by integrating modern AI APIs and automation tools.",
      "Designed scalable web applications with secure authentication and database management.",
      "Collaborated on hackathon projects and real-world software development initiatives.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-[rgba(255,255,255,0.04)] py-28"
    >
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <h2
            className="mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="text-[#ff2b2b]">Experience</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-[#ff2b2b] via-[rgba(255,43,43,0.2)] to-transparent" />

          {experiences.map((exp, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15}>
              <div className="group relative mb-12 pl-14 last:mb-0">
                <div className="absolute left-2.5 top-1.5 h-6 w-6 rounded-full border-2 border-[#ff2b2b] bg-[#050505] shadow-[0_0_15px_rgba(255,43,43,0.2)] transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(255,43,43,0.4)]" />
                <div className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-[rgba(255,43,43,0.2)] group-hover:shadow-[0_0_40px_rgba(255,43,43,0.05)]">
                  <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-medium tracking-wide text-[#ff2b2b]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mb-4 text-sm font-medium text-zinc-400">
                    {exp.org}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#ff2b2b]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
