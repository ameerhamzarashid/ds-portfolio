"use client";

import { useEffect, useState } from "react";
import { journeyStations } from "@/data/journeyStations";

export default function RouteMiniMap() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const distances = journeyStations.map((station) => {
        const element = document.getElementById(station.id);

        if (!element) return Number.POSITIVE_INFINITY;

        return Math.abs(element.getBoundingClientRect().top - 180);
      });

      const nearestIndex = distances.indexOf(Math.min(...distances));

      setActiveIndex(nearestIndex < 0 ? 0 : nearestIndex);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-1/2 top-20 z-40 hidden -translate-x-1/2 xl:block">
      <div className="deep-glass rounded-full px-5 py-3">
        <div className="flex items-center gap-2">
          {journeyStations.map((station, index) => (
            <a
              key={station.id}
              href={station.sectionId}
              title={station.name}
              className="flex items-center gap-2"
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black transition ${
                  index <= activeIndex
                    ? "bg-cyan-200 text-blue-950"
                    : "bg-white/10 text-white/60"
                }`}
              >
                {index + 1}
              </span>

              {index !== journeyStations.length - 1 ? (
                <span
                  className={`h-px w-8 transition ${
                    index < activeIndex ? "bg-cyan-200" : "bg-white/15"
                  }`}
                />
              ) : null}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}