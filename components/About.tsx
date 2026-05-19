export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-7xl px-5 py-24"
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">
            About
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-black md:text-6xl">
            Practical data science, not just models.
          </h2>
        </div>

        <div className="rounded-[2rem] border border-white/80 bg-white/70 p-7 shadow-2xl shadow-black/10 backdrop-blur-2xl md:p-10">
          <p className="text-lg font-medium leading-8 text-black/70">
            I am a Data Scientist with an MSc in Data Science and experience in
            machine learning, analytics, MLOps and AI product development. My
            work focuses on building clear, usable systems from complex data,
            from dashboards and prediction models to applied AI platforms.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-orange-50 p-5">
              <p className="text-3xl font-black text-orange-600">MSc</p>
              <p className="mt-2 text-sm font-bold text-black/70">
                Data Science
              </p>
            </div>

            <div className="rounded-3xl bg-orange-50 p-5">
              <p className="text-3xl font-black text-orange-600">AI</p>
              <p className="mt-2 text-sm font-bold text-black/70">
                ML, DL, NLP, CV
              </p>
            </div>

            <div className="rounded-3xl bg-orange-50 p-5">
              <p className="text-3xl font-black text-orange-600">BI</p>
              <p className="mt-2 text-sm font-bold text-black/70">
                Dashboards & SQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}