import { Boxes } from "lucide-react";

const stack: [string,string,string][] = [
  ["Proxmox", "Hypervisor", "Active"],
  ["Ubuntu Server", "Virtual machine", "Active"],
  ["Docker", "Containers", "Active"],
  ["Tailscale", "Secure remote access", "Active"],
  ["OPNsense", "Firewall / routing", "Planned"]
];

export default function Homelab() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <p className="eyebrow">~/homelab</p>
      <h1 className="mt-3 text-3xl font-semibold">Basically my lab notebook.</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="leading-7 text-[var(--muted)]">
            Everything runs on a single Proxmox box right now — one physical machine hosting an
            Ubuntu Server VM, with Tailscale wired up so I'm not exposing anything directly to the
            internet. It's small, but it's real, and I'd rather grow it slowly and actually
            understand every piece than spin up something complicated I don't fully get.
          </p>
          <p className="mt-4 leading-7 text-[var(--muted)]">
            It's also where I'm building and hosting <a href="/projects" className="text-[var(--accent)] hover:underline">GolfLab</a>,
            a golf performance tracking project — more on that on the Projects page.
          </p>
          <div className="mt-6 rounded-md border border-[var(--border)] bg-[var(--surface-alt)] p-5 font-mono text-xs leading-6 text-slate-300">
            <div className="mb-4 flex gap-2"><i className="terminal-dot bg-red-400"/><i className="terminal-dot bg-yellow-400"/><i className="terminal-dot bg-green-400"/></div>
            <div><span className="text-sky-300">chase@homelab</span>:~$ ip route</div>
            <div className="text-slate-400">default via gateway dev eno1</div>
            <div className="text-slate-400">vmbr0 → Proxmox bridge</div>
            <div className="text-slate-400">tailscale0 → secure remote access</div>
            <div className="mt-2"><span className="text-sky-300">chase@homelab</span>:~$ systemctl status docker</div>
            <div className="text-emerald-300">● active (running)</div>
          </div>
        </div>
        <div className="card p-6">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
            <div><p className="font-mono text-xs text-[var(--muted)]">STACK</p><h2 className="mt-1 font-semibold">What's actually running</h2></div>
            <Boxes size={19} className="text-[var(--accent)]"/>
          </div>
          <div className="space-y-2 pt-4">
            {stack.map(([a,b,c]) => (
              <div key={a} className="flex items-center justify-between rounded-md bg-[var(--bg)] px-4 py-3">
                <div><div className="text-sm font-medium">{a}</div><div className="text-xs text-[var(--muted)]">{b}</div></div>
                <span className={`font-mono text-[10px] ${c === "Planned" ? "text-[var(--warn)]" : "text-[var(--ok)]"}`}>● {c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
