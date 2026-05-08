"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed left-0 top-0 z-[999] w-full border-b border-orange-100/10 bg-black/75 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-lg font-black tracking-wide text-orange-100"
        >
          Ameer<span className="text-orange-400">.</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
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

        <div className="hidden lg:block">
          <a
            href="/Ameer-Hamza-CV.pdf"
            download
            className="rounded-full border border-orange-300/20 bg-orange-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-amber-500"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-orange-300/20 bg-black/40 text-orange-100 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <span className="text-xl font-black">{isOpen ? "×" : "☰"}</span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="border-t border-orange-100/10 bg-black/95 px-5 py-5 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl border border-orange-300/10 bg-white/5 px-4 py-3 text-sm font-bold text-stone-200 transition hover:bg-orange-500/15 hover:text-orange-200"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/Ameer-Hamza-CV.pdf"
                download
                onClick={closeMenu}
                className="mt-2 rounded-2xl bg-orange-500 px-4 py-3 text-center text-sm font-black text-white transition hover:bg-amber-500"
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