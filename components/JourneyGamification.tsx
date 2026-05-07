"use client";

import { useEffect, useRef, useState } from "react";
import { journeyAchievements } from "@/data/journeyAchievements";

type Achievement = (typeof journeyAchievements)[number];

export default function JourneyGamification() {
  const [activeAchievement, setActiveAchievement] =
    useState<Achievement | null>(null);
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const playUnlockTone = () => {
    if (!soundEnabled) return;
    if (typeof window === "undefined") return;

    const AudioContextClass =
      window.AudioContext ||
      (
        window as typeof window & {
          webkitAudioContext?: typeof AudioContext;
        }
      ).webkitAudioContext;

    if (!AudioContextClass) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContextClass();
    }

    const ctx = audioContextRef.current;

    if (ctx.state === "suspended") {
      void ctx.resume();
    }

    const now = ctx.currentTime;

    const notes = [392, 523.25, 659.25];

    notes.forEach((frequency, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(frequency, now + index * 0.08);

      gain.gain.setValueAtTime(0.0001, now + index * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.055, now + index * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.08 + 0.34);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + index * 0.08);
      osc.stop(now + index * 0.08 + 0.36);
    });
  };

  useEffect(() => {
    const saved = window.localStorage.getItem("journey-unlocked");

    if (saved) {
      try {
        const parsed = JSON.parse(saved) as string[];
        setUnlockedIds(parsed);
      } catch {
        setUnlockedIds([]);
      }
    }
  }, []);

  useEffect(() => {
    let timeoutId: number | null = null;

    const handleScroll = () => {
      const distances = journeyAchievements.map((achievement) => {
        const element = document.getElementById(achievement.id);

        if (!element) return Number.POSITIVE_INFINITY;

        return Math.abs(element.getBoundingClientRect().top - 180);
      });

      const nearestIndex = distances.indexOf(Math.min(...distances));

      if (nearestIndex < 0) return;

      const achievement = journeyAchievements[nearestIndex];

      setUnlockedIds((previous) => {
        if (previous.includes(achievement.id)) return previous;

        const next = [...previous, achievement.id];

        window.localStorage.setItem("journey-unlocked", JSON.stringify(next));

        setActiveAchievement(achievement);
        playUnlockTone();

        if (timeoutId) window.clearTimeout(timeoutId);

        timeoutId = window.setTimeout(() => {
          setActiveAchievement(null);
        }, 3200);

        return next;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [soundEnabled]);

  const unlockedCount = unlockedIds.length;
  const totalCount = journeyAchievements.length;
  const progress = Math.round((unlockedCount / totalCount) * 100);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 hidden w-[360px] xl:block">
        <div className="deep-glass rounded-[2rem] p-4">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-100">
                Journey Passport
              </p>
              <h3 className="mt-1 text-xl font-black text-white">
                {unlockedCount}/{totalCount} Badges
              </h3>
            </div>

            <button
              onClick={() => setSoundEnabled((current) => !current)}
              className={`rounded-full px-3 py-2 text-xs font-bold transition ${
                soundEnabled
                  ? "bg-cyan-200 text-blue-950"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {soundEnabled ? "Sound On" : "Sound Off"}
            </button>
          </div>

          <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-white via-cyan-200 to-teal-300 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {journeyAchievements.map((achievement) => {
              const unlocked = unlockedIds.includes(achievement.id);

              return (
                <div
                  key={achievement.id}
                  className={`rounded-2xl border p-3 transition ${
                    unlocked
                      ? "border-cyan-200/50 bg-white/15"
                      : "border-white/10 bg-blue-950/20 opacity-55"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-xl text-sm font-black ${
                        unlocked
                          ? "bg-cyan-200 text-blue-950"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      {achievement.icon}
                    </span>

                    <div>
                      <p className="text-xs font-black text-white">
                        {achievement.badge}
                      </p>
                      <p className="text-[10px] text-blue-50/60">
                        {achievement.station}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-4 text-xs leading-5 text-blue-50/70">
            Scroll through the train route to unlock portfolio stations.
          </p>
        </div>
      </div>

      {activeAchievement ? (
        <div className="fixed left-1/2 top-24 z-[60] w-[92%] max-w-md -translate-x-1/2">
          <div className="deep-glass animate-achievement rounded-[2rem] p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-200 text-2xl font-black text-blue-950">
                {activeAchievement.icon}
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-100">
                  Station Unlocked
                </p>

                <h3 className="mt-1 text-2xl font-black text-white">
                  {activeAchievement.badge}
                </h3>

                <p className="mt-2 text-sm font-semibold text-cyan-50">
                  {activeAchievement.station}
                </p>

                <p className="mt-2 text-sm leading-6 text-blue-50/75">
                  {activeAchievement.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}