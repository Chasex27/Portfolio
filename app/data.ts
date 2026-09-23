export const skills = [
  "Linux", "Networking", "Proxmox", "Docker", "Tailscale",
  "OPNsense", "Oracle SQL", "Git", "Virtualization", "Troubleshooting"
];

export const projects = [
  {
    slug: "home-lab-infrastructure",
    title: "Home Lab Infrastructure",
    tag: "Infrastructure",
    description: "My main hands-on environment — a physical box running Proxmox, with an Ubuntu Server VM on top and Tailscale set up so I can reach it remotely without opening any ports to the internet.",
    tech: ["Proxmox", "Ubuntu", "Docker", "Tailscale"],
    status: "Active",
    details: "Started this because reading about virtualization and actually doing it turned out to be two very different things. Still growing it.",
    writeup: [
      "This is the physical machine everything else on this site runs on top of. One box, running Proxmox as the hypervisor, with an Ubuntu Server VM handling most of the day-to-day workloads.",
      "Tailscale sits on top of that for remote access, so I can reach the box from anywhere without opening any ports on my home network. That was a deliberate call — I'd rather keep the attack surface small while I'm still learning than expose something I don't fully understand yet.",
      "It's intentionally simple right now. I'd rather fully understand one VM and one hypervisor than half-understand a sprawling cluster."
    ]
  },
  {
    slug: "network-security-roadmap",
    title: "Network Security Roadmap",
    tag: "Networking",
    description: "Where I'm headed next: OPNsense as the firewall, VLANs to actually segment traffic, and keeping remote access on a separate track from the security controls.",
    tech: ["OPNsense", "VLANs", "Firewall", "Tailscale"],
    status: "In progress",
    details: "Mostly planning and reading docs right now. I'd rather get the design right on paper before I start tearing apart a network I actually use.",
    writeup: [
      "The plan for the next phase of the homelab: replace basic routing with OPNsense as a proper firewall, then use VLANs to actually segment traffic instead of everything sitting flat on one network.",
      "Remote access (Tailscale) is staying on its own track, separate from the perimeter security controls — I don't want my one remote-access tool to also be a single point of failure for the firewall.",
      "Right now this is mostly reading documentation and sketching the network diagram. I'd rather get the design right on paper before I start reconfiguring a network I actually rely on day to day."
    ]
  },
  {
    slug: "hotel-management-database",
    title: "Hotel Management Database",
    tag: "Database",
    description: "A group project for my database systems class — a PL/SQL system loosely modeled on how a hotel chain might handle reservations.",
    tech: ["Oracle 11g", "PL/SQL", "SQL Developer"],
    status: "Completed",
    details: "Built and tested stored procedures for searching availability, booking a room, changing a reservation, and pulling basic reports.",
    writeup: [
      "A group project for my database systems class, modeled loosely on how a hotel chain might manage reservations — guests, rooms, rates, and bookings.",
      "I worked on the PL/SQL side: stored procedures for searching room availability, booking a room, modifying an existing reservation, and pulling basic occupancy and revenue reports.",
      "It was my first real exposure to writing and testing procedural SQL against a schema built by a team rather than just myself, which came with its own lessons about naming conventions and not stepping on each other's tables."
    ]
  },
  {
    slug: "golflab",
    title: "GolfLab",
    tag: "Data / Homelab",
    description: "A personal golf performance tracking and analytics system, developed and hosted alongside my homelab. It's a practical excuse to combine database design, SQL, Linux, Docker, networking, and data visualization in one project — and to actually figure out what's costing me strokes instead of just tracking scores.",
    tech: ["SQL", "Docker", "Linux", "Data Viz"],
    status: "In progress",
    details: "Working on schema for rounds, courses, tees, and shot-level stats (putting, GIR, fairways, penalties), with dashboards for trend and weakness analysis as the end goal — all deployed on my homelab infrastructure.",
    writeup: [
      "GolfLab combines two things I'm genuinely into — golf and information systems. Rather than just tracking scores, I want to use my own performance data to actually identify trends and figure out what's costing me strokes.",
      "It's also a practical homelab project in its own right: relational database design, SQL, Linux administration, containerization with Docker, networking, and data visualization, all in service of something I'll actually use.",
      "Goals for the project: track rounds and hole-by-hole performance, putting, fairways hit, greens in regulation, and penalties; store courses, tees, ratings, and slope; calculate performance trends over time; break down which parts of my game contribute most to scoring; track club and shot performance; and eventually build dashboards for all of it — deployed on my homelab infrastructure alongside everything else here."
    ]
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
