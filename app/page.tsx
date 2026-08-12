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
    description: "A self-built lab for developing practical experience with Linux, virtualization, containers, networking, and secure remote administration.",
    tech: ["Proxmox", "Ubuntu", "Docker", "Tailscale"],
    status: "Active",
    details: "Built from PC hardware and used as a hands-on environment for infrastructure and networking projects."
  },
  {
    title: "Network Security Roadmap",
    tag: "Networking",
    icon: ShieldCheck,
    description: "A planned network architecture centered around OPNsense, segmentation, firewalling, and secure remote access.",
    tech: ["OPNsense", "VLANs", "Firewall", "Tailscale"],
    status: "In progress",
    details: "The goal is to separate security controls from remote-access tooling while keeping the homelab maintainable."
  },
  {
    title: "Hotel Management Database",
    tag: "Database",
    icon: Database,
    description: "Oracle database project covering relational design, stored procedures, testing, and hotel reservation workflows.",
    tech: ["Oracle 11g", "PL/SQL", "SQL Developer"],
    status: "Completed",
    details: "Implemented and tested procedures for finding hotels, selling hotels, changing reservation dates, and reporting."
  }
];

const journey = [
  ["2024", "Information Systems", "Building a foundation in systems, business, programming, and networking."],
  ["2025", "Linux + SQL", "Developing practical experience with Linux administration and Oracle/PLSQL."],
  ["2026", "Home Lab", "Putting infrastructure concepts into practice with Proxmox, Ubuntu, Docker, and Tailscale."],
  ["Next", "Network Engineering", "Expanding into OPNsense, segmentation, routing, monitoring, and deeper network automation."]
];

function Button({ href, children, secondary=false }: {href:string; children:React.ReactNode; secondary?:boolean}) {
  return (
    <a href={href} className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
      secondary ? "border border-slate-700 bg-slate-900/40 hover:border-slate-500" :
      "bg-sky-400 text-slate-950 hover:bg-sky-300"
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
      <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-[#071018]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="font-mono text-sm font-bold tracking-tight">
            <span className="text-sky-400">~/</span>chase
          </a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={21}/> : <Menu size={21}/>}
          </button>
          <nav className={`${open ? "absolute left-0 right-0 top-full flex border-b border-slate-800 bg-[#071018] p-5" : "hidden"} flex-col gap-5 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0`}>
            <a href="#about" className="text-sm text-slate-300 hover:text-white">About</a>
            <a href="#projects" className="text-sm text-slate-300 hover:text-white">Projects</a>
            <a href="#homelab" className="text-sm text-slate-300 hover:text-white">Homelab</a>
            <a href="#resume" className="text-sm text-slate-300 hover:text-white">Resume</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-24 pt-24 md:pt-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-3 py-1.5 font-mono text-xs text-sky-300">
            <CircleDot size={12}/> IT • Networking • Infrastructure
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Building systems.<br/>
            <span className="text-sky-300">Learning how they work.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            I’m Chase Wagner, an Information Systems student focused on IT and network engineering.
            I build hands-on projects with Linux, virtualization, networking, databases, and homelab infrastructure.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">View projects <ArrowUpRight size={16}/></Button>
            <Button href="/resume.pdf" secondary>Resume <Download size={16}/></Button>
          </div>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [Server, "Infrastructure", "Linux • Proxmox • Docker"],
            [Network, "Networking", "Routing • VPN • Firewalls"],
            [ShieldCheck, "Security", "Segmentation • Access"],
            [Terminal, "Automation", "Scripting • Git • CLI"]
          ].map(([Icon, title, desc], i) => (
            <div key={i} className="card rounded-xl p-5">
              <Icon size={20} className="text-sky-300"/>
              <h3 className="mt-4 font-semibold">{title as string}</h3>
              <p className="mt-1 text-sm text-slate-500">{desc as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section border-y border-slate-800/70 bg-slate-950/20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.25em] text-sky-400">01 / About</p>
            <h2 className="mt-3 text-3xl font-bold">Technical curiosity with a hands-on approach.</h2>
          </div>
          <div>
            <p className="text-base leading-8 text-slate-400">
              I’m pursuing a Bachelor of Science in Information Systems at UMBC. My interests are moving toward
              network engineering, infrastructure, and security. I learn best by building: setting up servers,
              breaking things, troubleshooting them, documenting what happened, and improving the design.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {skills.map(skill => <span key={skill} className="rounded-md border border-slate-800 bg-slate-900/60 px-3 py-1.5 font-mono text-xs text-slate-300">{skill}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section mx-auto max-w-6xl px-5 py-24">
        <p className="font-mono text-xs uppercase tracking-[.25em] text-sky-400">02 / Projects</p>
        <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="text-3xl font-bold">Things I’ve built.</h2>
          <p className="max-w-xl text-sm leading-6 text-slate-500">Projects are documented as practical case studies rather than just technology lists.</p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((p) => {
            const Icon = p.icon;
            return <article key={p.title} className="card flex flex-col rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="rounded-lg border border-slate-700 bg-slate-900 p-2.5"><Icon size={19} className="text-sky-300"/></div>
                <span className="font-mono text-[11px] text-slate-500">{p.tag}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{p.tech.map(t => <span key={t} className="rounded bg-slate-900 px-2 py-1 font-mono text-[11px] text-slate-400">{t}</span>)}</div>
              <div className="mt-auto pt-7">
                <div className="flex items-center gap-2 text-xs text-emerald-300"><CheckCircle2 size={14}/>{p.status}</div>
                <p className="mt-3 text-xs leading-5 text-slate-500">{p.details}</p>
              </div>
            </article>
          })}
        </div>
      </section>

      <section id="homelab" className="section border-y border-slate-800/70 bg-slate-950/20">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="font-mono text-xs uppercase tracking-[.25em] text-sky-400">03 / Homelab</p>
          <div className="mt-3 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">My lab is my learning environment.</h2>
              <p className="mt-5 leading-7 text-slate-400">
                The homelab is built around a Proxmox host running Ubuntu Server. It gives me a place to experiment
                with virtualization, containers, networking, remote administration, and future security controls.
              </p>
              <div className="mt-7 rounded-xl border border-slate-800 bg-[#050b10] p-5 font-mono text-xs leading-7 text-slate-400">
                <div className="mb-4 flex gap-2"><i className="terminal-dot bg-red-400"/><i className="terminal-dot bg-yellow-400"/><i className="terminal-dot bg-green-400"/></div>
                <div><span className="text-sky-300">chase@homelab</span>:~$ ip route</div>
                <div className="text-slate-500">default via gateway dev eno1</div>
                <div className="text-slate-500">vmbr0 → Proxmox bridge</div>
                <div className="text-slate-500">tailscale0 → secure remote access</div>
                <div className="mt-2"><span className="text-sky-300">chase@homelab</span>:~$ systemctl status docker</div>
                <div className="text-emerald-300">● active (running)</div>
              </div>
            </div>
            <div className="card rounded-2xl p-7">
              <div className="flex items-center justify-between border-b border-slate-800 pb-5">
                <div><p className="font-mono text-xs text-slate-500">ARCHITECTURE</p><h3 className="mt-1 font-semibold">Current / planned stack</h3></div>
                <Boxes size={20} className="text-sky-300"/>
              </div>
              <div className="space-y-3 pt-5">
                {[
                  ["Proxmox", "Hypervisor", "Active"],
                  ["Ubuntu Server", "Virtual machine", "Active"],
                  ["Docker", "Containers", "Active"],
                  ["Tailscale", "Secure remote access", "Active"],
                  ["OPNsense", "Firewall / routing", "Planned"]
                ].map(([a,b,c]) => <div key={a} className="flex items-center justify-between rounded-lg bg-slate-900/60 px-4 py-3">
                  <div><div className="text-sm font-medium">{a}</div><div className="text-xs text-slate-500">{b}</div></div>
                  <span className={`font-mono text-[10px] ${c === "Planned" ? "text-amber-300" : "text-emerald-300"}`}>● {c}</span>
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <p className="font-mono text-xs uppercase tracking-[.25em] text-sky-400">04 / Journey</p>
        <h2 className="mt-3 text-3xl font-bold">Learning by building.</h2>
        <div className="mt-10 border-l border-slate-800 pl-6">
          {journey.map(([year,title,desc], i) => <div key={year} className="relative pb-10 last:pb-0">
            <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-sky-400 bg-[#071018]"/>
            <div className="font-mono text-xs text-sky-400">{year}</div>
            <h3 className="mt-2 font-semibold">{title}</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">{desc}</p>
          </div>)}
        </div>
      </section>

      <section id="resume" className="section border-t border-slate-800/70 bg-slate-950/20">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="card flex flex-col items-start justify-between gap-8 rounded-2xl p-8 md:flex-row md:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[.25em] text-sky-400">05 / Resume</p>
              <h2 className="mt-3 text-2xl font-bold">Want the one-page version?</h2>
              <p className="mt-2 text-sm text-slate-500">Download my current resume or connect with me online.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/resume.pdf">Download PDF <Download size={16}/></Button>
              <Button href="https://github.com/" secondary><Github size={16}/> GitHub</Button>
              <Button href="https://www.linkedin.com/" secondary><Linkedin size={16}/> LinkedIn</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Chase Wagner</span>
          <a href="mailto:YOUR_EMAIL@example.com" className="flex items-center gap-2 hover:text-slate-300"><Mail size={15}/> Contact</a>
        </div>
      </footer>
    </main>
  );
}
