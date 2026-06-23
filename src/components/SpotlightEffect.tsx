"use client";

import { useEffect, useRef } from "react";

export default function SpotlightEffect() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.background = `radial-gradient(700px circle at ${e.clientX}px ${e.clientY}px, rgba(255,43,43,0.07), transparent 40%)`;
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-30"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
