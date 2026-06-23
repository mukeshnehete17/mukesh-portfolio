"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(5,5,5,0.8)] backdrop-blur-2xl border-b border-[rgba(255,255,255,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollTo("#hero")}
          className="text-lg font-semibold tracking-tight text-white"
          data-cursor-hover
        >
          <span className="text-[#ff2b2b]">M</span>N
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="relative text-sm font-medium tracking-wide text-zinc-400 transition-colors hover:text-white"
              data-cursor-hover
            >
              <Magnetic strength={0.15}>
                <span>{link.label}</span>
              </Magnetic>
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("#contact")}
          className="rounded-full border border-[rgba(255,43,43,0.3)] bg-[rgba(255,43,43,0.1)] px-5 py-2 text-sm font-medium text-[#ff2b2b] transition-all hover:bg-[rgba(255,43,43,0.2)] hover:shadow-[0_0_25px_rgba(255,43,43,0.3)]"
          data-cursor-hover
        >
          <Magnetic strength={0.2}>Let&apos;s Talk</Magnetic>
        </button>
      </div>
    </motion.nav>
  );
}
