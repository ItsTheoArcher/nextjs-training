"use client";

import { useEffect, useState } from "react";

export default function CursorGradient() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 hidden lg:block"
      aria-hidden="true"
      style={{
        background: `radial-gradient(1200px circle at ${position.x}px ${position.y}px, rgba(16,185,129,0.04), transparent 60%)`,
      }}
    />
  );
}
