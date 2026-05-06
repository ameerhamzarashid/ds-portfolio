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
    <div className="section-title-panel mb-10">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-black text-white md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-blue-50/85">
          {description}
        </p>
      ) : null}
    </div>
  );
}