export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto flex min-h-[70vh] w-full max-w-7xl items-center px-5 py-24"
    >
      <div className="grid w-full gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="section-title-panel">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-orange-300">
            About
          </p>
          <h2 className="text-4xl font-black text-orange-50 md:text-6xl">
            Data scientist focused on useful AI.
          </h2>
        </div>

        <div className="deep-glass rounded-[2rem] p-6 md:p-9">
          <p className="text-lg leading-8 text-stone-300">
            I am a Data Scientist with an MSc in Data Science and experience
            across machine learning, analytics, dashboards, and AI product
            development. My work focuses on turning messy data into practical
            systems that support decisions, automation, and real-world impact.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-3xl font-black text-orange-300">MSc</p>
              <p className="mt-2 text-sm text-stone-300">Data Science</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-3xl font-black text-orange-300">3+</p>
              <p className="mt-2 text-sm text-stone-300">Years Experience</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-3xl font-black text-orange-300">AI</p>
              <p className="mt-2 text-sm text-stone-300">ML, BI, MLOps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}