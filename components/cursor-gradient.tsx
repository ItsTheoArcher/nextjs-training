"use client";

import { useEffect, useRef } from "react";

export default function CursorGradient() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = ref.current;
        if (el) {
          el.style.background = `radial-gradient(1200px circle at ${e.clientX}px ${e.clientY}px, rgba(16,185,129,0.04), transparent 60%)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 hidden lg:block"
      aria-hidden="true"
    />
  );
}
