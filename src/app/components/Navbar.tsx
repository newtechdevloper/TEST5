"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-7 sticky top-0 z-50 backdrop-blur-md bg-black/40 text-white">
      <Link href="/" className="flex flex-col leading-none">
        <span className="text-[26px] font-semibold">FitZone</span>
        <span className="mt-1 h-[2px] w-full bg-cyan-400/80"></span>
      </Link>

      <ul className="hidden md:flex gap-16 text-[13px] uppercase tracking-[0.25em]">
        <Link href="/">Home</Link>
        <Link href="/gyms">Our Gyms</Link>
        <Link href="/programs">Programs</Link>
        <Link href="/contact">Contact</Link>
      </ul>

      <button className="hidden md:block border border-white px-7 py-2 text-[12px]">
        JOIN NOW
      </button>

      <button className="md:hidden flex flex-col gap-[6px]" onClick={() => setOpen(true)}>
        <span className="w-7 h-[2px] bg-white"></span>
        <span className="w-7 h-[2px] bg-white"></span>
        <span className="w-7 h-[2px] bg-white"></span>
      </button>

      {open && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-12 text-xl">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/gyms" onClick={() => setOpen(false)}>Our Gyms</Link>
          <Link href="/programs" onClick={() => setOpen(false)}>Programs</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <button onClick={() => setOpen(false)} className="absolute top-8 right-8 text-3xl">×</button>
        </div>
      )}
    </nav>
  );
}
