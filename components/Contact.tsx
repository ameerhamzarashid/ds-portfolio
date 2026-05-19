import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-7xl px-5 py-24"
    >
      <div className="rounded-[2rem] border border-white/80 bg-white/75 p-7 shadow-2xl shadow-black/10 backdrop-blur-2xl md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">
          Contact
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-black md:text-6xl">
          Let’s build something useful with data.
        </h2>

        <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-black/70">
          I am open to data science, data analyst, AI engineer and research-led
          opportunities.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <a
            href="mailto:ameerhamzarashid.uk@gmail.com"
            className="flex items-center gap-4 rounded-3xl bg-orange-50 p-5 font-black text-black transition hover:bg-orange-600 hover:text-white"
          >
            <MdEmail className="text-2xl" />
            ameerhamzarashid.uk@gmail.com
          </a>

          <div className="flex items-center gap-4 rounded-3xl bg-orange-50 p-5 font-black text-black">
            <MdLocationOn className="text-2xl text-orange-600" />
            United Kingdom
          </div>

          <a
            href="https://www.linkedin.com/in/ameerhamza78644"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-3xl bg-orange-50 p-5 font-black text-black transition hover:bg-orange-600 hover:text-white"
          >
            <FaLinkedin className="text-2xl" />
            LinkedIn
          </a>

          <a
            href="https://github.com/ameerhamzarashid"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-3xl bg-orange-50 p-5 font-black text-black transition hover:bg-orange-600 hover:text-white"
          >
            <FaGithub className="text-2xl" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}