import { ArrowUpRight, Download } from "lucide-react";

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
    <main className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-5 py-24">
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
    </main>
  );
}
