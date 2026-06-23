"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

function VoiceWave({ active }: { active: boolean }) {
  const [barData] = useState(() => {
    const bars = 48;
    const center = bars / 2;
    return Array.from({ length: bars }).map((_, i) => {
      const dist = Math.abs(i - center) / center;
      return {
        baseHeight: 4 + Math.random() * 8,
        activeHeights: [
          20 + Math.random() * 60 * (1 - dist * 0.5),
          10 + Math.random() * 80 * (1 - dist * 0.5),
          20 + Math.random() * 60 * (1 - dist * 0.5),
        ],
        duration: 0.4 + Math.random() * 0.3,
        delay: Math.random() * 0.2,
      };
    });
  });

  return (
    <div className="flex h-24 items-center justify-center gap-[2px]">
      {barData.map((bar, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-[#ff2b2b] to-[rgba(255,43,43,0.3)]"
          animate={
            active
              ? {
                  height: bar.activeHeights,
                  opacity: [0.6, 1, 0.6],
                }
              : { height: bar.baseHeight, opacity: [0.2, 0.4, 0.2] }
          }
          transition={{
            duration: bar.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bar.delay,
          }}
        />
      ))}
    </div>
  );
}

const responses = [
  { user: "Hey Dora...", ai: "Hello Mukesh. Ready to build something amazing today?", delay: 1000 },
  { user: "What's on my schedule?", ai: "You have a system optimization task at 2 PM. Your AI training pipeline is running at 87% efficiency. Shall I run diagnostics?", delay: 3000 },
  { user: "Run diagnostics.", ai: "Scanning... CPU: 23% | Memory: 45% | Neural Core: Optimal. All systems nominal. Security protocols active. No anomalies detected.", delay: 5000 },
];

export default function AIAssistantDemo() {
  const [activeStep, setActiveStep] = useState(-1);
  const [isListening, setIsListening] = useState(false);
  const [currentAiText, setCurrentAiText] = useState("");
  const [showAiResponse, setShowAiResponse] = useState(false);

  useEffect(() => {
    const runDemo = async () => {
      await new Promise((r) => setTimeout(r, 1500));
      for (let step = 0; step < responses.length; step++) {
        setActiveStep(step);
        setIsListening(true);
        await new Promise((r) => setTimeout(r, 1500));
        setIsListening(false);
        setShowAiResponse(true);
        const text = responses[step].ai;
        for (let i = 0; i <= text.length; i++) {
          setCurrentAiText(text.slice(0, i));
          await new Promise((r) => setTimeout(r, 20));
        }
        if (step < responses.length - 1) {
          await new Promise((r) => setTimeout(r, 2000));
          setShowAiResponse(false);
          setCurrentAiText("");
        }
      }
    };
    runDemo();
  }, []);

  return (
    <section id="dora" className="relative border-t border-[rgba(255,255,255,0.04)] py-28">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-[10px] font-medium tracking-[0.25em] text-[#ff2b2b] uppercase">
              — Flagship Product —
            </span>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight md:text-5xl"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Dora AI{" "}
              <span className="text-[#ff2b2b]">Assistant</span>
            </h2>
            <p className="mx-auto max-w-xl text-sm text-zinc-500">
              Enterprise-grade AI system with advanced voice integration, behavioral simulation, and autonomous task execution.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="glass-panel-red relative overflow-hidden rounded-3xl backdrop-blur-2xl shadow-[0_0_80px_rgba(255,43,43,0.04)]">
            <div className="flex items-center justify-between border-b border-[rgba(255,43,43,0.06)] px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgba(255,43,43,0.15)] bg-[rgba(255,43,43,0.08)]">
                  <svg className="h-4 w-4 text-[#ff2b2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Dora AI</p>
                  <p className="text-[10px] text-zinc-500">v3.0 — Neural Core Active</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-glow-pulse rounded-full bg-emerald-500" />
                <span className="text-[10px] font-medium text-emerald-400/80">Online</span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="glass-panel mb-8 rounded-2xl p-6 backdrop-blur-2xl">
                <div className="mb-4 flex items-center gap-2 text-xs text-zinc-500">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4" />
                  </svg>
                  Voice Input
                </div>
                <VoiceWave active={isListening} />
                <div className="mt-2 text-center">
                  {isListening && (
                    <span className="text-xs font-medium text-[#ff2b2b]">Listening...</span>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                {responses.map((response, idx) => (
                  <div key={idx}>
                    {activeStep >= idx && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-3 flex items-start gap-3"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)]">
                          <svg className="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-zinc-400">{response.user}</p>
                        </div>
                      </motion.div>
                    )}
                    {activeStep >= idx && showAiResponse && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex items-start gap-3"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[rgba(255,43,43,0.2)] bg-[rgba(255,43,43,0.08)]">
                          <svg className="h-4 w-4 text-[#ff2b2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="max-w-2xl">
                          <p className="text-sm leading-relaxed text-zinc-300">
                            {currentAiText}
                            {(activeStep === idx && currentAiText.length < response.ai.length) && (
                              <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-typing-cursor bg-[#ff2b2b]" />
                            )}
                          </p>
                          <div className="mt-2 flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-emerald-500" />
                            <span className="text-[10px] text-zinc-600">Confidence: 98.7%</span>
                            <span className="text-zinc-700">|</span>
                            <span className="text-[10px] text-zinc-600">Latency: 42ms</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
