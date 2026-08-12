import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chase Wagner | IT & Network Engineering",
  description: "Technical portfolio featuring networking, Linux, virtualization, homelab infrastructure, and software projects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ "--font-inter": "Inter", "--font-mono": "ui-monospace" } as React.CSSProperties}>
        {children}
      </body>
    </html>
  );
}