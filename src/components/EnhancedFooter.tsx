"use client";

import Magnetic from "@/components/Magnetic";
import ScrollReveal from "@/components/ScrollReveal";

export default function EnhancedFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative border-t border-[rgba(255,255,255,0.04)] py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <div className="glass-panel relative mx-auto mb-12 inline-block overflow-hidden rounded-2xl px-6 py-3 backdrop-blur-2xl">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 animate-glow-pulse rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
              <span className="text-xs font-medium tracking-wider text-emerald-400/80">
                SYSTEM ONLINE
              </span>
              <span className="h-3 w-px bg-zinc-700" />
              <span className="text-[10px] text-zinc-600">v3.0.1</span>
              <span className="h-3 w-px bg-zinc-700" />
              <span className="text-[10px] text-zinc-600">Uptime: {365 * 24}h</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight md:text-5xl"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Initialize{" "}
            <span className="text-[#ff2b2b]">Connection</span>
          </h2>
          <p className="mb-10 text-sm text-zinc-500">
            Ready to build the future together? Deploy a message to my terminal.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12 flex items-center justify-center gap-5">
            <Magnetic strength={0.3}>
              <a
                href="mailto:mukeshnehete41@gmail.com"
                className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] text-zinc-400 backdrop-blur-2xl transition-all duration-500 hover:border-[#ff2b2b] hover:text-[#ff2b2b] hover:shadow-[0_0_40px_rgba(255,43,43,0.15)]"
                data-cursor-hover
                aria-label="Email"
              >
                <svg className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href="https://github.com/mukeshnehete17"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] text-zinc-400 backdrop-blur-2xl transition-all duration-500 hover:border-[#ff2b2b] hover:text-[#ff2b2b] hover:shadow-[0_0_40px_rgba(255,43,43,0.15)]"
                data-cursor-hover
                aria-label="GitHub"
              >
                <svg className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href="https://linkedin.com/in/mukeshnehete"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] text-zinc-400 backdrop-blur-2xl transition-all duration-500 hover:border-[#ff2b2b] hover:text-[#ff2b2b] hover:shadow-[0_0_40px_rgba(255,43,43,0.15)]"
                data-cursor-hover
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href="tel:+918421274251"
                className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] text-zinc-400 backdrop-blur-2xl transition-all duration-500 hover:border-[#ff2b2b] hover:text-[#ff2b2b] hover:shadow-[0_0_40px_rgba(255,43,43,0.15)]"
                data-cursor-hover
                aria-label="Phone"
              >
                <svg className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </Magnetic>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border-t border-[rgba(255,255,255,0.04)] pt-8">
            <p className="text-[11px] font-medium text-zinc-600">
              Engineered by{" "}
              <span className="text-zinc-400">Mukesh Nehete</span>
            </p>
            <p className="mt-2 text-[10px] text-zinc-700">
              &copy; {year} — All Systems Operational
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
