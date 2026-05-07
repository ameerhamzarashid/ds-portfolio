"use client";

import { useEffect, useState } from "react";
import { collectibles } from "@/data/collectibles";

export default function InventoryDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [collectedIds, setCollectedIds] = useState<string[]>([]);

  useEffect(() => {
    const loadTickets = () => {
      const saved = window.localStorage.getItem("collected-data-tickets");

      if (saved) {
        try {
          setCollectedIds(JSON.parse(saved) as string[]);
        } catch {
          setCollectedIds([]);
        }
      }
    };

    loadTickets();

    const interval = window.setInterval(loadTickets, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const collectedTickets = collectibles.filter((ticket) =>
    collectedIds.includes(ticket.id),
  );

  const progress = Math.round((collectedIds.length / collectibles.length) * 100);

  return (
    <>
      <button
        onClick={() => setIsOpen((current) => !current)}
        className="fixed bottom-5 left-1/2 z-50 hidden -translate-x-1/2 rounded-full border border-cyan-200/30 bg-blue-950/70 px-5 py-3 text-sm font-black text-white shadow-2xl shadow-blue-950/30 backdrop-blur-xl transition hover:bg-cyan-300 hover:text-blue-950 xl:block"
      >
        Inventory {collectedIds.length}/{collectibles.length}
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-[80] hidden bg-blue-950/40 backdrop-blur-sm xl:block">
          <div className="absolute bottom-8 left-1/2 w-[720px] -translate-x-1/2">
            <div className="deep-glass rounded-[2rem] p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-100">
                    Data Inventory
                  </p>
                  <h2 className="mt-1 text-3xl font-black text-white">
                    Collected Skill Tickets
                  </h2>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-blue-950"
                >
                  Close
                </button>
              </div>

              <div className="mb-6 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-white via-cyan-200 to-teal-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {collectedTickets.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {collectedTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="rounded-3xl border border-white/10 bg-white/10 p-4"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-200 text-sm font-black text-blue-950">
                          {ticket.icon}
                        </span>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-100">
                            {ticket.type}
                          </p>
                          <h3 className="mt-1 text-xl font-black text-white">
                            {ticket.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-blue-50/75">
                            {ticket.description}
                          </p>
                          <p className="mt-2 text-xs font-semibold text-cyan-100">
                            Station: {ticket.station}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center">
                  <p className="text-lg font-bold text-white">
                    No tickets collected yet.
                  </p>
                  <p className="mt-2 text-sm text-blue-50/70">
                    Click the floating tickets around the journey to collect
                    skills.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}