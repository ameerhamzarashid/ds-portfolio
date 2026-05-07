"use client";

export default function ThemeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-30 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 noise-layer opacity-10" />

      <div className="absolute left-[-140px] top-[-80px] h-[480px] w-[480px] rounded-full bg-white/16 blur-3xl" />

      <div className="absolute right-[-160px] top-20 h-[500px] w-[500px] rounded-full bg-cyan-300/14 blur-3xl" />

      <div className="absolute bottom-[-180px] left-1/3 h-[540px] w-[540px] rounded-full bg-blue-700/16 blur-3xl" />

      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white/18 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-blue-950/42 to-transparent" />
    </div>
  );
}