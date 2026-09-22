export const skills = [
  "Linux", "Networking", "Proxmox", "Docker", "Tailscale",
  "OPNsense", "Oracle SQL", "Git", "Virtualization", "Troubleshooting"
];

export const projects = [
  {
    title: "Home Lab Infrastructure",
    tag: "Infrastructure",
    description: "My main hands-on environment — a physical box running Proxmox, with an Ubuntu Server VM on top and Tailscale set up so I can reach it remotely without opening any ports to the internet.",
    tech: ["Proxmox", "Ubuntu", "Docker", "Tailscale"],
    status: "Active",
    details: "Started this because reading about virtualization and actually doing it turned out to be two very different things. Still growing it."
  },
  {
    title: "Network Security Roadmap",
    tag: "Networking",
    description: "Where I'm headed next: OPNsense as the firewall, VLANs to actually segment traffic, and keeping remote access on a separate track from the security controls.",
    tech: ["OPNsense", "VLANs", "Firewall", "Tailscale"],
    status: "In progress",
    details: "Mostly planning and reading docs right now. I'd rather get the design right on paper before I start tearing apart a network I actually use."
  },
  {
    title: "Hotel Management Database",
    tag: "Database",
    description: "A group project for my database systems class — a PL/SQL system loosely modeled on how a hotel chain might handle reservations.",
    tech: ["Oracle 11g", "PL/SQL", "SQL Developer"],
    status: "Completed",
    details: "Built and tested stored procedures for searching availability, booking a room, changing a reservation, and pulling basic reports."
  },
  {
    title: "GolfLab",
    tag: "Data / Homelab",
    description: "A personal golf performance tracking and analytics system, developed and hosted alongside my homelab. It's a practical excuse to combine database design, SQL, Linux, Docker, networking, and data visualization in one project — and to actually figure out what's costing me strokes instead of just tracking scores.",
    tech: ["SQL", "Docker", "Linux", "Data Viz"],
    status: "In progress",
    details: "Working on schema for rounds, courses, tees, and shot-level stats (putting, GIR, fairways, penalties), with dashboards for trend and weakness analysis as the end goal — all deployed on my homelab infrastructure."
  }
];

export const journey: [string, string, string][] = [
  ["2024", "Started the IS degree", "Business fundamentals, intro programming, intro networking — figuring out what I actually liked."],
  ["2025", "Linux + databases", "Spent a lot of time in the terminal and in Oracle SQL Developer for coursework."],
  ["2026", "Built the homelab", "Stopped reading about Proxmox and Docker and just set them up."],
  ["Next", "Going deeper on networking", "OPNsense, VLAN segmentation, and hopefully some real monitoring."]
];

export const certifications: [string, string, string][] = [
  ["CompTIA Security+", "In progress", "Targeting end of 2026"],
  ["CompTIA Network+", "In progress", "Targeting end of 2026"],
  ["Cisco CCNA", "Planned", "Expected 2027"]
];
