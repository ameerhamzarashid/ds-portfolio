"use client";

type JourneyStationProps = {
  number: string;
  name: string;
  label: string;
  title: string;
  description: string;
  sectionId: string;
  isActive: boolean;
};

export default function JourneyStation({
  number,
  name,
  label,
  title,
  description,
  sectionId,
  isActive,
}: JourneyStationProps) {
  return (
    <a
      href={sectionId}
      className={`block rounded-3xl border p-5 backdrop-blur-xl transition ${
        isActive
          ? "border-cyan-200/60 bg-white/15 shadow-2xl shadow-cyan-950/20"
          : "border-white/10 bg-blue-950/25 hover:border-cyan-200/35 hover:bg-white/10"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-black ${
            isActive
              ? "bg-cyan-200 text-blue-950"
              : "bg-white/10 text-cyan-100"
          }`}
        >
          {number}
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-100/80">
            {label}
          </p>

          <h3 className="mt-2 text-xl font-black text-white">{name}</h3>

          <p className="mt-2 text-sm font-semibold text-cyan-50">{title}</p>

          <p className="mt-2 text-sm leading-6 text-blue-50/75">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}