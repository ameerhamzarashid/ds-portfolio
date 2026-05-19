import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8f5ef] px-5 py-10 text-black">
      <section className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black text-black transition hover:border-orange-600 hover:text-orange-600"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 shadow-2xl shadow-black/10 backdrop-blur-2xl">
          <div className="relative h-[320px] w-full bg-orange-50 md:h-[520px]">
            <Image
              src={study.image}
              alt={`${study.title} case study screenshot`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="p-6 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-600">
              Case Study
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] text-black md:text-6xl">
              {study.title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-black/70">
              {study.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {study.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-orange-50 px-4 py-2 text-xs font-black text-orange-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl bg-orange-50 p-6">
                <h2 className="text-xl font-black text-black">Problem</h2>
                <p className="mt-3 text-sm font-semibold leading-6 text-black/70">
                  {study.problem}
                </p>
              </div>

              <div className="rounded-3xl bg-orange-50 p-6">
                <h2 className="text-xl font-black text-black">Solution</h2>
                <p className="mt-3 text-sm font-semibold leading-6 text-black/70">
                  {study.solution}
                </p>
              </div>

              <div className="rounded-3xl bg-orange-50 p-6">
                <h2 className="text-xl font-black text-black">Outcome</h2>
                <p className="mt-3 text-sm font-semibold leading-6 text-black/70">
                  {study.outcome}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={study.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-black text-black transition hover:border-orange-600 hover:text-orange-600"
              >
                <FaGithub /> View Code
              </a>

              {study.demo !== "#" ? (
                <a
                  href={study.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-3 text-sm font-black text-white transition hover:bg-black"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}