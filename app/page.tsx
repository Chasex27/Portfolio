import Link from "next/link";
import { ArrowUpRight, ArrowRight, Download } from "lucide-react";
import { projects } from "./data";

function Button({ href, children, secondary=false }: {href:string; children:React.ReactNode; secondary?:boolean}) {
  return (
    <a href={href} className={`inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition ${
      secondary ? "border border-[var(--border)] hover:border-[var(--accent)]" :
      "bg-[var(--accent)] text-[#171c22] hover:opacity-90"
    }`}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-5">
      <div className="flex min-h-[60vh] flex-col justify-center py-20">
        <p className="eyebrow mb-5">// currently: IS student, homelab tinkerer</p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          I like taking systems apart to see how they work.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)]">
          Information Systems student, mostly into networking and security. This site's a running
          log of what I've built — some finished, some still very much in progress.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/projects">See what I've built <ArrowUpRight size={16}/></Button>
          <Button href="/about" secondary>About me</Button>
          <Button href="/resume.pdf" secondary>Resume <Download size={16}/></Button>
        </div>
      </div>

      <div className="border-t border-[var(--border)] py-14">
        <p className="eyebrow">~/about</p>
        <h2 className="mt-3 text-xl font-semibold">A bit about me</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)]">
          IS student at UMBC leaning into networking and security, learning mostly by building
          things and then figuring out why they broke.
        </p>
        <Link href="/about" className="mt-4 inline-flex items-center gap-1 text-sm text-[var(--accent)] hover:underline">
          Learn more <ArrowRight size={14}/>
        </Link>
      </div>

      <div className="border-t border-[var(--border)] pb-20 pt-14">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold">Recent projects</h2>
          <Link href="/projects" className="flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--ink)]">
            All projects <ArrowRight size={14}/>
          </Link>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="card p-5">
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-[11px] text-[var(--muted)]">{p.tag}</span>
                <span className={`badge ${p.status === "In progress" || p.status === "Planned" ? "badge-warn" : "badge-ok"}`}>{p.status}</span>
              </div>
              <h3 className="mt-2 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)] line-clamp-2">{p.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-[var(--border)] py-16 text-center">
        <h2 className="text-xl font-semibold">Want to talk shop?</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[var(--muted)]">
          Homelab ideas, networking questions, or just want to connect — feel free to reach out.
        </p>
        <div className="mt-5 flex justify-center">
          <Button href="/resume">Get in touch</Button>
        </div>
      </div>
    </main>
  );
}
