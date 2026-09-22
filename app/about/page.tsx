import { skills, journey, certifications } from "../data";

export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="eyebrow">~/about</p>
      <h1 className="mt-3 text-3xl font-semibold">A bit about me</h1>
      <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]">
        I'm working toward a B.S. in Information Systems at UMBC, and lately I've been leaning
        hard into networking and security — enough that it's looking like a career path rather
        than just a class requirement. I learn best by building something, breaking it, and then
        figuring out why it broke. Most of what I put on this site came out of that loop, not out
        of a syllabus.
      </p>
      <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
        Outside of class, most of my time goes into a homelab I run at home — it's where I
        actually test the stuff I read about instead of just taking it on faith. I'm also working
        through a few certifications right now, listed below.
      </p>

      <h2 className="mt-14 text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Tools I've actually used</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map(skill => <span key={skill} className="rounded border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 font-mono text-xs text-[var(--ink)]">{skill}</span>)}
      </div>

      <h2 className="mt-14 text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Certifications</h2>
      <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--muted)]">Studying for these alongside coursework — not done yet, but here's where things stand.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {certifications.map(([name, status, target]) => <div key={name} className="card p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">{name}</h3>
            <span className={`font-mono text-[10px] ${status === "Planned" ? "text-[var(--warn)]" : "text-[var(--ok)]"}`}>● {status}</span>
          </div>
          <p className="mt-2 text-xs text-[var(--muted)]">{target}</p>
        </div>)}
      </div>

      <h2 className="mt-14 text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">How I got here</h2>
      <div className="mt-6 border-l border-[var(--border)] pl-6">
        {journey.map(([year, title, desc]) => <div key={year} className="relative pb-8 last:pb-0">
          <div className="absolute -left-[27px] top-1 h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]"/>
          <div className="font-mono text-xs text-[var(--accent)]">{year}</div>
          <h3 className="mt-1 font-semibold">{title}</h3>
          <p className="mt-1 max-w-xl text-sm leading-6 text-[var(--muted)]">{desc}</p>
        </div>)}
      </div>
    </main>
  );
}
