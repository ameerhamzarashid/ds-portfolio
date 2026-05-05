import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About"
          title="A data professional focused on practical AI and analytics"
          description="I combine data analytics, machine learning, business intelligence and applied AI to build solutions that are clear, useful and grounded in real problems."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass-card rounded-3xl p-6">
            <h3 className="mb-3 text-xl font-bold text-white">
              Data Analytics
            </h3>
            <p className="leading-7 text-slate-300">
              I work with SQL, Python, Power BI, Tableau and Excel to clean,
              analyse and communicate data through dashboards and reports.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="mb-3 text-xl font-bold text-white">
              Machine Learning
            </h3>
            <p className="leading-7 text-slate-300">
              I build predictive models, deep learning systems and computer
              vision applications using scikit-learn, TensorFlow and PyTorch.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="mb-3 text-xl font-bold text-white">Applied AI</h3>
            <p className="leading-7 text-slate-300">
              I explore generative AI, RAG, embeddings and LLM-based workflows
              to create useful tools for real-world decision support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}