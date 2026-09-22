import { Github, Linkedin, Download } from "lucide-react";

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

export default function Resume() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="eyebrow">~/resume</p>
      <h1 className="mt-3 text-3xl font-semibold">Want the résumé version?</h1>
      <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--muted)]">Grab the PDF, or find me on GitHub and LinkedIn.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/resume.pdf">Download PDF <Download size={16}/></Button>
        <Button href="https://github.com/" secondary><Github size={16}/> GitHub</Button>
        <Button href="https://www.linkedin.com/" secondary><Linkedin size={16}/> LinkedIn</Button>
      </div>
    </main>
  );
}
