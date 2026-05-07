"use client";

import { useEffect, useState } from "react";
import { collectibles } from "@/data/collectibles";
import { motion } from "framer-motion";

type CollectedTicket = (typeof collectibles)[number];

const ticketPositions = [
  { left: "7%", top: "28%" },
  { left: "86%", top: "22%" },
  { left: "12%", top: "66%" },
  { left: "78%", top: "72%" },
  { left: "48%", top: "18%" },
  { left: "58%", top: "82%" },
];

export default function FloatingDataTickets() {
  const [collectedIds, setCollectedIds] = useState<string[]>([]);
  const [recentTicket, setRecentTicket] = useState<CollectedTicket | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("collected-data-tickets");

    if (saved) {
      try {
        setCollectedIds(JSON.parse(saved) as string[]);
      } catch {
        setCollectedIds([]);
      }
    }
  }, []);

  const collectTicket = (ticket: CollectedTicket) => {
    setCollectedIds((previous) => {
      if (previous.includes(ticket.id)) {
        setRecentTicket(ticket);

        window.setTimeout(() => {
          setRecentTicket(null);
        }, 1800);

        return previous;
      }

      const next = [...previous, ticket.id];
      window.localStorage.setItem("collected-data-tickets", JSON.stringify(next));

      setRecentTicket(ticket);

      window.setTimeout(() => {
        setRecentTicket(null);
      }, 2200);

      return next;
    });
  };

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-30 hidden overflow-hidden xl:block">
        {collectibles.map((ticket, index) => {
          const collected = collectedIds.includes(ticket.id);
          const position = ticketPositions[index];

          return (
            <motion.button
              key={ticket.id}
              type="button"
              onClick={() => collectTicket(ticket)}
              className={`pointer-events-auto absolute rounded-2xl border px-4 py-3 text-left backdrop-blur-xl transition ${
                collected
                  ? "border-cyan-200/20 bg-blue-950/20 opacity-35"
                  : "border-cyan-200/45 bg-blue-950/55 shadow-xl shadow-blue-950/20 hover:bg-cyan-300/20"
              }`}
              style={{
                left: position.left,
                top: position.top,
              }}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{
                opacity: collected ? 0.35 : 1,
                y: [0, -8, 0],
                scale: 1,
              }}
              transition={{
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                y: {
                  duration: 5 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: collected ? 1 : 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-200 text-xs font-black text-blue-950">
                  {ticket.icon}
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
                    {ticket.type}
                  </p>
                  <p className="text-sm font-black text-white">{ticket.title}</p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {recentTicket ? (
        <div className="fixed left-1/2 top-28 z-[70] w-[92%] max-w-sm -translate-x-1/2">
          <div className="deep-glass rounded-[2rem] p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-200 text-sm font-black text-blue-950">
                {recentTicket.icon}
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-100">
                  Ticket Collected
                </p>
                <h3 className="mt-1 text-xl font-black text-white">
                  {recentTicket.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-blue-50/75">
                  {recentTicket.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}