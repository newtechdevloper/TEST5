"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Our Gyms", href: "/our-gyms" },
    { name: "Programs", href: "/programs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-md px-6 md:px-16 py-6 flex items-center justify-between text-white">
      <Link href="/" className="text-2xl font-semibold">FitZone</Link>

      <ul className="hidden md:flex gap-12 text-sm uppercase tracking-widest">
        {links.map((l) => (
          <li key={l.name}>
            <Link href={l.href} className="hover:text-cyan-400 transition">
              {l.name}
            </Link>
          </li>
        ))}
      </ul>

      <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>☰</button>

      {open && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-10 text-xl">
          {links.map((l) => (
            <Link key={l.name} href={l.href} onClick={() => setOpen(false)}>
              {l.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
