"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Visuals", href: "#data-visuals" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-blue-950/45 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="text-lg font-black tracking-wide text-white">
          Ameer<span className="text-cyan-300">.</span>
        </a>

        <div className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-blue-50/80 transition hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="/Ameer-Hamza-CV.pdf"
          download
          className="rounded-full border border-cyan-200/30 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-cyan-200 hover:text-blue-950"
        >
          CV
        </a>
      </nav>
    </motion.header>
  );
}