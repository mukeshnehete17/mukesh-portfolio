"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovering, setHovering] = useState(false);

  const springX = useSpring(cursorX, { stiffness: 300, damping: 25 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 25 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    window.addEventListener("mousemove", move);
    const hoverTargets = document.querySelectorAll(
      "a, button, [data-magnetic], [data-cursor-hover], input, textarea"
    );
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999]"
      style={{
        left: springX,
        top: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        className="rounded-full"
        animate={{
          width: hovering ? 44 : 8,
          height: hovering ? 44 : 8,
          backgroundColor: hovering ? "transparent" : "#ff2b2b",
          border: hovering
            ? "1px solid rgba(255, 43, 43, 0.5)"
            : "1px solid rgba(255, 43, 43, 0)",
          boxShadow: hovering
            ? "0 0 30px rgba(255, 43, 43, 0.15)"
            : "0 0 12px rgba(255, 43, 43, 0.8)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
      />
    </motion.div>
  );
}
