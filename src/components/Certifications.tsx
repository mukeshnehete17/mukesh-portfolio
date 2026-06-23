"use client";

import ScrollReveal from "./ScrollReveal";

const certifications = [
  {
    title:
      "Generative AI Foundations Certificate Program",
    issuer: "UpGrad & Microsoft",
  },
  {
    title:
      "Complete Web Development Course (MERN Stack)",
    issuer: "Udemy",
  },
  {
    title:
      "Android App Development for Beginners",
    issuer: "Simplilearn SkillUp",
    year: "2025",
  },
  {
    title:
      "Pep Supply Chain Stars Awareness Workshop",
    issuer: "PepsiCo",
    year: "2026",
  },
  {
    title:
      "KBT AVINYATHON 2026 - State Level Hackathon",
    issuer: "Participation",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative border-t border-[rgba(255,255,255,0.04)] py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <h2
            className="mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="text-[#ff2b2b]">Certifications</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div
                className="group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl transition-all duration-500 hover:border-[rgba(255,43,43,0.2)] hover:shadow-[0_0_40px_rgba(255,43,43,0.06)]"
                data-cursor-hover
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,43,43,0.03)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(255,43,43,0.15)] bg-[rgba(255,43,43,0.05)]">
                    <svg className="h-5 w-5 text-[#ff2b2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-sm font-semibold leading-snug text-white">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-zinc-500">
                    {cert.issuer}
                    {cert.year && (
                      <span className="ml-2 text-[10px] text-zinc-600">
                        &middot; {cert.year}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
