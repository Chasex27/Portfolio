import { CheckCircle2 } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="eyebrow">~/projects</p>
      <h1 className="mt-3 text-3xl font-semibold">A few things I've built</h1>
      <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)]">Not everything here is finished — I'd rather show real progress than pretend things are done.</p>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="card flex flex-col p-6">
            <span className="font-mono text-[11px] text-[var(--muted)]">{p.tag}</span>
            <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">{p.tech.map(t => <span key={t} className="rounded bg-[var(--bg)] px-2 py-1 font-mono text-[11px] text-[var(--muted)]">{t}</span>)}</div>
            <div className="mt-auto pt-6">
              <div className={`flex items-center gap-2 text-xs ${p.status === "In progress" ? "text-[var(--warn)]" : "text-[var(--ok)]"}`}><CheckCircle2 size={13}/>{p.status}</div>
              <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{p.details}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
