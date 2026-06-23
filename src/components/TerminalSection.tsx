"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

interface Line {
  text: string;
  isCommand?: boolean;
  isOutput?: boolean;
  delay: number;
}

const lines: Line[] = [
  { text: "> whoami", isCommand: true, delay: 500 },
  { text: "Mukesh Nehete — Full Stack + AI Software Developer", isOutput: true, delay: 1200 },
  { text: "> skills", isCommand: true, delay: 1800 },
  { text: "React | Next.js | Node.js | Python | AI | MongoDB", isOutput: true, delay: 2400 },
  { text: "> current_focus", isCommand: true, delay: 3000 },
  { text: "Building Dora AI Assistant & Janhavi Commercial AI", isOutput: true, delay: 3600 },
  { text: "> goal", isCommand: true, delay: 4200 },
  { text: "Remote Software Engineering Career", isOutput: true, delay: 4800 },
  { text: "> system_status", isCommand: true, delay: 5400 },
  { text: "All systems operational. Ready for deployment.", isOutput: true, delay: 6000 },
];

export default function TerminalSection() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [typingText, setTypingText] = useState<Record<number, string>>({});

  useEffect(() => {
    lines.forEach((line, idx) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, idx]);
        if (line.isOutput || line.isCommand) {
          let charIdx = 0;
          const interval = setInterval(() => {
            setTypingText((prev) => ({
              ...prev,
              [idx]: line.text.slice(0, charIdx + 1),
            }));
            charIdx++;
            if (charIdx >= line.text.length) clearInterval(interval);
          }, 25);
        }
      }, line.delay);
    });
  }, []);

  return (
    <section id="terminal" className="relative border-t border-[rgba(255,255,255,0.04)] py-28">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <h2
            className="mb-16 text-center text-3xl font-bold tracking-tight md:text-4xl"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="text-[#ff2b2b]">&gt;</span> Developer{" "}
            <span className="text-[#ff2b2b]">Terminal</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass-panel-red relative overflow-hidden rounded-2xl shadow-[0_0_60px_rgba(255,43,43,0.06)] backdrop-blur-2xl">
            <div className="flex items-center gap-2 border-b border-[rgba(255,43,43,0.08)] px-6 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff2b2b] shadow-[0_0_8px_rgba(255,43,43,0.5)]" />
              <span className="h-3 w-3 rounded-full bg-zinc-600" />
              <span className="h-3 w-3 rounded-full bg-zinc-600" />
              <span className="ml-3 text-[10px] font-medium tracking-wider text-zinc-500">
                MUKESH_NEHETE@AI_OS:~$
              </span>
            </div>
            <div className="space-y-2 p-6 font-mono text-sm md:p-8">
              <div className="mb-4 flex items-center gap-2 text-xs text-zinc-600">
                <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-[#ff2b2b]" />
                SYSTEM ONLINE — v3.0.1
              </div>
              {lines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={visibleLines.includes(idx) ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-2"
                >
                  {visibleLines.includes(idx) && (
                    <>
                      {line.isCommand && (
                        <span className="flex-shrink-0 text-[#ff2b2b]">&gt;</span>
                      )}
                      <span
                        className={
                          line.isCommand
                            ? "text-[#ff2b2b]"
                            : line.isOutput
                              ? "text-zinc-300"
                              : "text-zinc-500"
                        }
                      >
                        {typingText[idx] || ""}
                        {visibleLines.includes(idx) &&
                          idx === visibleLines[visibleLines.length - 1] && (
                            <span className="ml-0.5 inline-block h-4 w-2 animate-typing-cursor bg-[#ff2b2b]" />
                          )}
                      </span>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="pointer-events-none absolute -inset-px rounded-2xl shadow-[inset_0_0_30px_rgba(255,43,43,0.05)]" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
