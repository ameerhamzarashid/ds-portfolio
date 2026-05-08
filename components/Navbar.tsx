"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Visuals", href: "#data-visuals" },
  { label: "World", href: "#data-world" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed left-0 top-0 z-[999] w-full border-b border-orange-100/10 bg-black/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="text-lg font-black tracking-wide text-orange-100">
          Ameer<span className="text-orange-400">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-stone-200 transition hover:text-orange-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="/Ameer-Hamza-CV.pdf"
          download
          className="rounded-full border border-orange-300/20 bg-orange-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-amber-500"
        >
          Download CV
        </a>
      </nav>
    </motion.header>
  );
}