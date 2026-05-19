"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed left-0 top-0 z-[999] w-full border-b border-black/10 bg-white/70 shadow-sm backdrop-blur-2xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-xl font-black tracking-tight text-black"
        >
          Ameer<span className="text-orange-600">.</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-black/70 transition hover:text-orange-600"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="/Ameer-Hamza-CV.pdf"
          download
          className="hidden rounded-full bg-orange-600 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-orange-600/20 transition hover:bg-black lg:block"
        >
          Download CV
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-xl font-black text-black lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-black/10 bg-white/95 px-5 py-5 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-black text-black transition hover:border-orange-500 hover:text-orange-600"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/Ameer-Hamza-CV.pdf"
                download
                onClick={closeMenu}
                className="rounded-2xl bg-orange-600 px-4 py-3 text-center text-sm font-black text-white transition hover:bg-black"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}