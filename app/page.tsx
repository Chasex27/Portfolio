"use client";

import { useState } from "react";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, Server,
  Network, ShieldCheck, Terminal, Database, Boxes, Menu, X,
  CheckCircle2, CircleDot
} from "lucide-react";

const skills = [
  "Linux", "Networking", "Proxmox", "Docker", "Tailscale",
  "OPNsense", "Oracle SQL", "Git", "Virtualization", "Troubleshooting"
];

const projects = [
  {
    title: "Home Lab Infrastructure",
    tag: "Infrastructure",
    icon: Server,
    description: "My main hands-on environment — a physical box running Proxmox, with an Ubuntu Server VM on top and Tailscale set up so I can reach it remotely without opening any ports to the internet.",
    tech: ["Proxmox", "Ubuntu", "Docker", "Tailscale"],
    status: "Active",
    details: "Started this because reading about virtualization and actually doing it turned out to be two very different things. Still growing it."
  },
  {
    title: "Network Security Roadmap",
    tag: "Networking",
    icon: ShieldCheck,
    description: "Where I'm headed next: OPNsense as the firewall, VLANs to actually segment traffic, and keeping remote access on a separate track from the security controls.",
    tech: ["OPNsense", "VLANs", "Firewall", "Tailscale"],
    status: "In progress",
    details: "Mostly planning and reading docs right now. I'd rather get the design right on paper before I start tearing apart a network I actually use."
  },
  {
    title: "Hotel Management Database",
    tag: "Database",
    icon: Database,
    description: "A group project for my database systems class — a PL/SQL system loosely modeled on how a hotel chain might handle reservations.",
    tech: ["Oracle 11g", "PL/SQL", "SQL Developer"],
    status: "Completed",
    details: "Built and tested stored procedures for searching availability, booking a room, changing a reservation, and pulling basic reports."
  }
];

const journey = [
  ["2024", "Started the IS degree", "Business fundamentals, intro programming, intro networking — figuring out what I actually liked."],
  ["2025", "Linux + databases", "Spent a lot of time in the terminal and in Oracle SQL Developer for coursework."],
  ["2026", "Built the homelab", "Stopped reading about Proxmox and Docker and just set them up."],
  ["Next", "Going deeper on networking", "OPNsense, VLAN segmentation, and hopefully some real monitoring."]
];

function Button({ href, children, secondary=false }: {href:string; children:React.ReactNode; secondary?:boolean}) {
  return (
    <a href={href} className={`inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition ${
      secondary ? "border border-[var(--border)] hover:border-[var(--accent)]" :
      "bg-[var(--accent)] text-white hover:opacity-90"
    }`}>
      {children}
    </a>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <div className="fixed inset-0 -z-10 grid-bg" />
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a href="#" className="font-mono text-sm font-semibold tracking-tight">
            <span className="text-[var(--accent)]">~/</span>chase
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20}/> : <Menu size={20}/>}
          </button>
          <nav className={`${open ? "absolute left-0 right-0 top-full flex border-b border-[var(--border)] bg-[var(--bg)] p-5" : "hidden"} flex-col gap-5 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0`}>
            <a href="#about" className="text-sm text-[var(--muted)] hover:text-[var(--ink)]">About</a>
            <a href="#projects" className="text-sm text-[var(--muted)] hover:text-[var(--ink)]">Projects</a>
            <a href="#homelab" className="text-sm text-[var(--muted)] hover:text-[var(--ink)]">Homelab</a>
            <a href="#resume" className="text-sm text-[var(--muted)] hover:text-[var(--ink)]">Resume</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 pb-20 pt-20 md:pt-28">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">// currently: IS student, homelab tinkerer</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            I like taking systems apart to see how they work.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)]">
            I'm an Information Systems student who spends a lot of free time in a homelab, breaking my
            own network and then figuring out how to fix it. This site is mostly a running log of what
            I've built along the way — some of it finished, some of it very much still in progress.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">View projects <ArrowUpRight size={16}/></Button>
            <Button href="/resume.pdf" secondary>Resume <Download size={16}/></Button>
          </div>
          <p className="mt-10 font-mono text-xs text-[var(--muted)]">
            running: proxmox · ubuntu server · docker · tailscale
          </p>
        </div>
      </section>

      <section id="about" className="section border-y border-[var(--border)]">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="eyebrow">~/about</p>
            <h2 className="mt-3 text-2xl font-semibold">A bit about me</h2>
          </div>
          <div>
            <p className="text-base leading-7 text-[var(--muted)]">
              I'm working toward a B.S. in Information Systems at UMBC, and lately I've been leaning
              hard into networking and security — enough that it's looking like a career path rather
              than just a class requirement. I learn best by building something, breaking it, and then
              figuring out why it broke. Most of what's below came out of that loop.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map(skill => <span key={skill} className="rounded border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 font-mono text-xs text-[var(--ink)]">{skill}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section mx-auto max-w-5xl px-5 py-20">
        <p className="eyebrow">~/projects</p>
        <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-2xl font-semibold">A few things I've built</h2>
          <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">Not everything here is finished — I'd rather show real progress than pretend things are done.</p>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {projects.map((p) => {
            const Icon = p.icon;
            return <article key={p.title} className="card flex flex-col rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="rounded border border-[var(--border)] p-2"><Icon size={18} className="text-[var(--accent)]"/></div>
                <span className="font-mono text-[11px] text-[var(--muted)]">{p.tag}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{p.tech.map(t => <span key={t} className="rounded bg-[var(--bg)] px-2 py-1 font-mono text-[11px] text-[var(--muted)]">{t}</span>)}</div>
              <div className="mt-auto pt-6">
                <div className={`flex items-center gap-2 text-xs ${p.status === "In progress" ? "text-[var(--warn)]" : "text-[var(--ok)]"}`}><CheckCircle2 size={13}/>{p.status}</div>
                <p className="mt-2 text-xs leading-5 text-[var(--muted)]">{p.details}</p>
              </div>
            </article>
          })}
        </div>
      </section>

      <section id="homelab" className="section border-y border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <p className="eyebrow">~/homelab</p>
          <div className="mt-3 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold">Basically my lab notebook.</h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                Everything runs on a single Proxmox box right now — one physical machine hosting an
                Ubuntu Server VM, with Tailscale wired up so I'm not exposing anything directly to the
                internet. It's small, but it's real, and I'd rather grow it slowly and actually
                understand every piece than spin up something complicated I don't fully get.
              </p>
              <div className="mt-6 rounded-lg border border-[var(--border)] bg-[#12181f] p-5 font-mono text-xs leading-6 text-slate-300">
                <div className="mb-4 flex gap-2"><i className="terminal-dot bg-red-400"/><i className="terminal-dot bg-yellow-400"/><i className="terminal-dot bg-green-400"/></div>
                <div><span className="text-sky-300">chase@homelab</span>:~$ ip route</div>
                <div className="text-slate-400">default via gateway dev eno1</div>
                <div className="text-slate-400">vmbr0 → Proxmox bridge</div>
                <div className="text-slate-400">tailscale0 → secure remote access</div>
                <div className="mt-2"><span className="text-sky-300">chase@homelab</span>:~$ systemctl status docker</div>
                <div className="text-emerald-300">● active (running)</div>
              </div>
            </div>
            <div className="card rounded-lg p-6">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <div><p className="font-mono text-xs text-[var(--muted)]">STACK</p><h3 className="mt-1 font-semibold">What's actually running</h3></div>
                <Boxes size={19} className="text-[var(--accent)]"/>
              </div>
              <div className="space-y-2 pt-4">
                {[
                  ["Proxmox", "Hypervisor", "Active"],
                  ["Ubuntu Server", "Virtual machine", "Active"],
                  ["Docker", "Containers", "Active"],
                  ["Tailscale", "Secure remote access", "Active"],
                  ["OPNsense", "Firewall / routing", "Planned"]
                ].map(([a,b,c]) => <div key={a} className="flex items-center justify-between rounded-md bg-[var(--bg)] px-4 py-3">
                  <div><div className="text-sm font-medium">{a}</div><div className="text-xs text-[var(--muted)]">{b}</div></div>
                  <span className={`font-mono text-[10px] ${c === "Planned" ? "text-[var(--warn)]" : "text-[var(--ok)]"}`}>● {c}</span>
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20">
        <p className="eyebrow">~/timeline</p>
        <h2 className="mt-3 text-2xl font-semibold">How I got here</h2>
        <div className="mt-8 border-l border-[var(--border)] pl-6">
          {journey.map(([year,title,desc], i) => <div key={year} className="relative pb-8 last:pb-0">
            <div className="absolute -left-[27px] top-1 h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]"/>
            <div className="font-mono text-xs text-[var(--accent)]">{year}</div>
            <h3 className="mt-1 font-semibold">{title}</h3>
            <p className="mt-1 max-w-xl text-sm leading-6 text-[var(--muted)]">{desc}</p>
          </div>)}
        </div>
      </section>

      <section id="resume" className="section border-t border-[var(--border)]">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <div className="card flex flex-col items-start justify-between gap-6 rounded-lg p-7 md:flex-row md:items-center">
            <div>
              <p className="eyebrow">~/contact</p>
              <h2 className="mt-3 text-xl font-semibold">Want the résumé version?</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">Grab the PDF, or find me on GitHub and LinkedIn.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/resume.pdf">Download PDF <Download size={16}/></Button>
              <Button href="https://github.com/" secondary><Github size={16}/> GitHub</Button>
              <Button href="https://www.linkedin.com/" secondary><Linkedin size={16}/> LinkedIn</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border)]">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Chase Wagner</span>
          <a href="mailto:YOUR_EMAIL@example.com" className="flex items-center gap-2 hover:text-[var(--ink)]"><Mail size={15}/> Contact</a>
        </div>
      </footer>
    </main>
  );
}
