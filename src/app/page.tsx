"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Our Gyms", href: "/gyms" },
  { name: "Programs", href: "/programs" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main
      className="min-h-screen text-white bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="min-h-screen bg-black/60">

        {/* ================= NAVBAR ================= */}
        <nav className="flex items-center justify-between px-6 md:px-16 py-7 sticky top-0 z-50 backdrop-blur-md bg-black/40">
          <Link href="/" className="flex flex-col leading-none group">
            <span className="text-[26px] font-semibold tracking-wide group-hover:text-cyan-300 transition">
              FitZone
            </span>
            <span className="mt-1 h-[2px] w-full bg-cyan-400/80"></span>
          </Link>

          <ul className="hidden md:flex gap-16 text-[13px] uppercase tracking-[0.25em]">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-cyan-300 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden md:block border border-white px-7 py-2 text-[12px] tracking-[0.3em]"
          >
            JOIN NOW
          </Link>

          <button
            className="md:hidden flex flex-col gap-[6px]"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-7 h-[2px] bg-white"></span>
            <span className="w-7 h-[2px] bg-white"></span>
            <span className="w-7 h-[2px] bg-white"></span>
          </button>
        </nav>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <div className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center gap-12 text-xl">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-cyan-300 transition"
              >
                {link.name}
              </Link>
            ))}

            <button
              className="absolute top-6 right-6 text-sm tracking-widest"
              onClick={() => setOpen(false)}
            >
              CLOSE
            </button>
          </div>
        )}

        {/* ================= HERO ================= */}
        <section className="flex flex-col items-center text-center mt-[140px] md:mt-[180px] px-6">
          <h1 className="font-extrabold text-[48px] md:text-[88px] leading-tight">
            BUILD YOUR
            <span className="block">STRONG BODY</span>
          </h1>
        </section>

        {/* ================= PROGRAMS ================= */}
        <section className="mt-32 md:mt-44 px-6 md:px-20">
          <h2 className="text-center text-[28px] md:text-[36px] font-bold mb-16">
            OUR PROGRAMS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { title: "STRENGTH", desc: "Build muscle and raw power.", img: "/strength.jpg" },
              { title: "CARDIO", desc: "Boost stamina and endurance.", img: "/cardio.jpg" },
              { title: "CROSSFIT", desc: "High intensity functional training.", img: "/crossfit.jpg" },
              { title: "YOGA", desc: "Flexibility, balance, recovery.", img: "/yoga.jpg" },
            ].map((program) => (
              <div
                key={program.title}
                className="border border-white/20 backdrop-blur-sm p-6 md:p-8 hover:border-cyan-400 transition"
              >
                <div className="flex md:flex-col items-center md:text-center gap-6">
                  <img
                    src={program.img}
                    alt={program.title}
                    className="h-[150px] md:h-[300px] object-contain flex-shrink-0"
                  />

                  <div>
                    <h3 className="text-[16px] md:text-[18px] tracking-[0.3em] mb-3">
                      {program.title}
                    </h3>
                    <p className="text-[13px] text-gray-300">
                      {program.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PRICING ================= */}
        <section className="mt-32 md:mt-44 px-6 md:px-20">
          <h2 className="text-center text-[28px] md:text-[36px] font-bold mb-16">
            MEMBERSHIP PLANS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "BASIC", price: "₹499" },
              { name: "PRO", price: "₹1499" },
              { name: "ELITE", price: "₹1999" },
            ].map((plan) => (
              <div
                key={plan.name}
                className="border border-white/20 p-10 text-center"
              >
                <h3 className="mb-4 tracking-widest">{plan.name}</h3>
                <p className="text-[42px] font-bold">{plan.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="mt-32 md:mt-40 border-t border-white/20 bg-black/60 backdrop-blur-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-20 py-16 text-[13px]">

            <div>
              <h3 className="text-[22px] font-semibold mb-6">FitZone</h3>
              <p className="text-gray-300">
                Your trusted fitness partner for modern strength training.
              </p>
            </div>

            <div>
              <h4 className="tracking-widest mb-6">ABOUT</h4>
              <p className="text-gray-300">
                Premium gyms, smart programs, and expert coaches.
              </p>
            </div>

            <div>
              <h4 className="tracking-widest mb-6">LINKS</h4>
              <ul className="space-y-4 text-gray-300">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-cyan-300">
                      › {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="tracking-widest mb-6">CONNECT</h4>
              <p className="text-gray-300 mb-3">ansha74791@gmail.com</p>
              <p className="text-gray-300">+91 97986 81537</p>
            </div>

          </div>

          <div className="border-t border-white/10 text-center py-6 text-[11px] tracking-widest text-gray-400">
            © {new Date().getFullYear()} FITZONE. ALL RIGHTS RESERVED.
          </div>
        </footer>

      </div>
    </main>
  );
}
