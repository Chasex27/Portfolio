"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/homelab", "Homelab"],
  ["/resume", "Resume"]
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-[var(--accent)]">~/</span>chase
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
        <nav className={`${open ? "absolute left-0 right-0 top-full flex border-b border-[var(--border)] bg-[var(--bg)] p-5" : "hidden"} flex-col gap-5 md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0`}>
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="text-sm text-[var(--muted)] hover:text-[var(--ink)]">{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
