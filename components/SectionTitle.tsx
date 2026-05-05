type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}