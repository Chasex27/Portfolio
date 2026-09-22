import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Chase Wagner | IT & Network Engineering",
  description: "Technical portfolio featuring networking, Linux, virtualization, homelab infrastructure, and software projects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gradient">
        <Nav />
        {children}
        <footer className="border-t border-[var(--border)]">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Chase Wagner</span>
            <a href="mailto:YOUR_EMAIL@example.com" className="flex items-center gap-2 hover:text-[var(--ink)]"><Mail size={15}/> Contact</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
