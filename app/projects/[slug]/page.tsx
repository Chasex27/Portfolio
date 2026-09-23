import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "../../data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--ink)]">
        <ArrowLeft size={15}/> All projects
      </Link>

      <p className="eyebrow mt-8">{project.tag}</p>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <span className={`badge ${project.status === "In progress" || project.status === "Planned" ? "badge-warn" : "badge-ok"}`}>{project.status}</span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map(t => <span key={t} className="rounded bg-[var(--surface)] border border-[var(--border)] px-2.5 py-1 font-mono text-xs text-[var(--muted)]">{t}</span>)}
      </div>

      <div className="mt-8 space-y-4">
        {project.writeup.map((para, i) => (
          <p key={i} className="leading-7 text-[var(--muted)]">{para}</p>
        ))}
      </div>
    </main>
  );
}
