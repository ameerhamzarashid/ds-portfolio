"use client";

import { useEffect, useState } from "react";
import { journeyStations } from "@/data/journeyStations";
import JourneyStation from "./JourneyStation";

export default function JourneyOverlay() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setScrollProgress(progress);

      const sectionPositions = journeyStations.map((station) => {
        const element = document.getElementById(station.id);

        if (!element) return Number.POSITIVE_INFINITY;

        return Math.abs(element.getBoundingClientRect().top - 180);
      });

      const nearestIndex = sectionPositions.indexOf(Math.min(...sectionPositions));
      setActiveIndex(nearestIndex === -1 ? 0 : nearestIndex);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeStation = journeyStations[activeIndex];

  return (
    <>
      <div className="pointer-events-none fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
        <div className="h-[420px] w-1 overflow-hidden rounded-full bg-white/15">
          <div
            className="w-full rounded-full bg-gradient-to-b from-white via-cyan-200 to-teal-300 transition-all duration-300"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>

      <div className="fixed bottom-5 left-5 z-40 hidden w-[390px] xl:block">
        <div className="deep-glass rounded-[2rem] p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-100">
                Current Station
              </p>
              <h2 className="mt-1 text-2xl font-black text-white">
                {activeStation.name}
              </h2>
            </div>

            <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-100">
              {activeStation.number}/07
            </div>
          </div>

          <p className="text-sm leading-6 text-blue-50/80">
            {activeStation.description}
          </p>
        </div>
      </div>

      <div className="fixed right-5 top-24 z-40 hidden w-[360px] 2xl:block">
        <div className="space-y-3">
          {journeyStations.map((station, index) => (
            <JourneyStation
              key={station.id}
              {...station}
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </>
  );
}