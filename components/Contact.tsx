import SectionTitle from "./SectionTitle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s build something useful with data"
            description="I am open to Data Analyst, Data Scientist, Machine Learning Engineer and applied AI opportunities."
          />

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:ameerhamzarashid.uk@gmail.com"
              className="flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              <MdEmail /> Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/ameerhamza78644"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://github.com/ameerhamzarashid"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}