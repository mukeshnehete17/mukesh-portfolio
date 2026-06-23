"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-[rgba(255,255,255,0.04)] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2
            className="mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            About <span className="text-[#ff2b2b]">Me</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-8 backdrop-blur-xl">
              <h3 className="mb-4 text-lg font-semibold text-white">Bio</h3>
              <p className="leading-relaxed text-zinc-400">
                Passionate about building scalable applications and AI-powered
                solutions to solve real-world problems. B.Tech IT student and
                aspiring Fullstack + AI Software Developer with a strong
                foundation in MERN Stack, Python and AI Integration and software
                engineering.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-8 backdrop-blur-xl">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Education
              </h3>
              <div className="mb-4">
                <p className="font-medium text-white">
                  B.Tech Information Technology
                </p>
                <p className="text-sm text-zinc-400">
                  R. C. Patel Institute of Technology, Shirpur
                </p>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["ENGLISH", "HINDI", "GERMAN (BEGINNER)"].map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-xs font-medium text-zinc-300"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { label: "Email", value: "mukeshnehete41@gmail.com" },
                { label: "Phone", value: "+91 84212 74251" },
                { label: "Location", value: "Shirpur, Maharashtra" },
                { label: "GitHub", value: "github.com/mukeshnehete17" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] p-4 text-center backdrop-blur-xl"
                >
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-zinc-300">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
