"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "education", label: "EDUCATION" },
];

export default function Nav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:block">
      <ul className="mt-16 w-max flex flex-col gap-6">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="group flex items-center gap-4"
            >
              <span
                className={`h-px transition-all ${
                  active === id
                    ? "w-16 bg-neutral-100"
                    : "w-8 bg-neutral-600 group-hover:w-16 group-hover:bg-neutral-100"
                }`}
              />
              <span
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  active === id
                    ? "text-neutral-100"
                    : "text-neutral-500 group-hover:text-neutral-100"
                }`}
              >
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
