"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen text-white bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="min-h-screen bg-black/60">

        {/* NAVBAR */}
        <nav className="flex items-center justify-between px-6 md:px-16 py-7 sticky top-0 z-50 backdrop-blur-md bg-black/40">
          <Link href="/" className="flex flex-col leading-none group">
            <span className="text-[26px] font-semibold tracking-wide hover:text-cyan-300 transition">
              FitZone
            </span>
            <span className="mt-1 h-[2px] w-full bg-cyan-400/80"></span>
          </Link>

          <ul className="hidden md:flex gap-16 text-[13px] uppercase tracking-[0.25em]">
            <Link href="/"><li>Home</li></Link>
            <Link href="/our-gyms"><li>Our Gyms</li></Link>
            <Link href="/programs"><li>Programs</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
          </ul>

          <button className="hidden md:block border border-white px-7 py-2 text-[12px] tracking-[0.3em]">
            JOIN NOW
          </button>

          <button className="md:hidden flex flex-col gap-[6px]" onClick={() => setOpen(true)}>
            <span className="w-7 h-[2px] bg-white"></span>
            <span className="w-7 h-[2px] bg-white"></span>
            <span className="w-7 h-[2px] bg-white"></span>
          </button>
        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center gap-12">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/our-gyms" onClick={() => setOpen(false)}>Our Gyms</Link>
            <Link href="/programs" onClick={() => setOpen(false)}>Programs</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        )}

        {/* HERO */}
        <section className="flex flex-col items-center text-center mt-[140px] md:mt-[180px] px-6">
          <h1 className="font-extrabold text-[48px] md:text-[88px]">
            BUILD YOUR
            <span className="block">STRONG BODY</span>
          </h1>
          <p className="mt-6 text-gray-300 max-w-xl text-sm">
            India’s premium fitness ecosystem for strength, endurance, and wellness.
          </p>

          <div className="mt-12 flex gap-6">
            <Link href="/programs">
              <button className="bg-white text-black px-8 py-3 text-xs tracking-widest">
                VIEW PROGRAMS
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-white px-8 py-3 text-xs tracking-widest">
                CONTACT US
              </button>
            </Link>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="mt-40 px-6 md:px-20">
          <h2 className="text-center text-3xl font-bold mb-16 tracking-widest">
            WHY FITZONE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
            {[
              "Certified Trainers",
              "Modern Equipment",
              "Flexible Programs",
              "Affordable Plans",
            ].map((item) => (
              <div key={item} className="border border-white/20 p-8 hover:border-cyan-400 transition">
                <h3 className="tracking-widest text-sm">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="mt-40 bg-black/50 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { num: "25+", label: "GYMS" },
              { num: "100+", label: "TRAINERS" },
              { num: "5K+", label: "MEMBERS" },
              { num: "10+", label: "CITIES" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold">{s.num}</p>
                <span className="text-xs tracking-widest text-gray-300">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mt-40 px-6 md:px-20">
          <h2 className="text-center text-3xl font-bold mb-16 tracking-widest">
            MEMBER STORIES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              "Best gym experience I ever had.",
              "Coaches are professional and supportive.",
              "Amazing transformation journey.",
            ].map((t, i) => (
              <div key={i} className="border border-white/20 p-8 text-sm text-gray-300">
                “{t}”
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-40 text-center py-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
          <h2 className="text-4xl font-extrabold mb-8">
            START YOUR FITNESS JOURNEY
          </h2>
          <Link href="/contact">
            <button className="bg-white text-black px-10 py-4 tracking-widest text-sm">
              JOIN FITZONE TODAY
            </button>
          </Link>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/20 py-10 text-center text-xs tracking-widest text-gray-400">
          © {new Date().getFullYear()} FITZONE. ALL RIGHTS RESERVED.
        </footer>

      </div>
    </main>
  );
}
