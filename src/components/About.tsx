"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-[rgba(255,255,255,0.04)] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-[10px] font-medium tracking-[0.25em] text-[#ff2b2b] uppercase">
              — System Profile —
            </span>
            <h2
              className="text-3xl font-bold tracking-tight md:text-5xl"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              About <span className="text-[#ff2b2b]">Me</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="glass-panel h-full rounded-2xl p-8 backdrop-blur-2xl">
              <h3 className="mb-4 text-sm font-semibold text-white">Bio</h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Passionate about building scalable applications and AI-powered
                solutions to solve real-world problems. B.Tech IT student and
                aspiring Fullstack + AI Software Developer with a strong
                foundation in MERN Stack, Python and AI Integration and software
                engineering.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="glass-panel h-full rounded-2xl p-8 backdrop-blur-2xl">
              <h3 className="mb-4 text-sm font-semibold text-white">
                Education
              </h3>
              <div className="mb-4">
                <p className="text-sm font-medium text-white">
                  B.Tech Information Technology
                </p>
                <p className="text-xs text-zinc-500">
                  R. C. Patel Institute of Technology, Shirpur
                </p>
              </div>
              <h3 className="mb-3 text-sm font-semibold text-white">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["ENGLISH", "HINDI", "GERMAN (BEGINNER)"].map((lang) => (
                  <span
                    key={lang}
                    className="rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-2.5 py-1 text-[10px] font-medium text-zinc-400 backdrop-blur-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="md:col-span-2">
            <div className="glass-panel rounded-2xl p-6 backdrop-blur-2xl">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  { label: "Email", value: "mukeshnehete41@gmail.com" },
                  { label: "Phone", value: "+91 84212 74251" },
                  { label: "Location", value: "Shirpur, Maharashtra" },
                  { label: "GitHub", value: "github.com/mukeshnehete17" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="text-center"
                  >
                    <p className="mb-1 text-[9px] font-bold tracking-[0.2em] text-zinc-600 uppercase">
                      {item.label}
                    </p>
                    <p className="text-xs font-medium text-zinc-400">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
