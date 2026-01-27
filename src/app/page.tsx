"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main
      className="min-h-screen text-white bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="min-h-screen bg-black/60">

        {/* NAVBAR */}
        <nav className="flex items-center justify-between px-6 md:px-16 py-7 sticky top-0 z-50 backdrop-blur-md bg-black/40">
          <Link href="/" className="flex flex-col leading-none group">
            <span className="text-[26px] font-semibold tracking-wide transition group-hover:text-cyan-300">
              FitZone
            </span>
            <span className="mt-1 h-[2px] w-full bg-cyan-400/80"></span>
          </Link>

          <ul className="hidden md:flex gap-16 text-[13px] uppercase tracking-[0.25em]">
            {["Home", "Our Gyms", "Programs", "Contact"].map((item) => (
              <li key={item} className="cursor-pointer hover:text-cyan-300 transition">
                {item}
              </li>
            ))}
          </ul>

          <button className="hidden md:block border border-white px-7 py-2 text-[12px] tracking-[0.3em]">
            JOIN NOW
          </button>

          <button
            className="md:hidden flex flex-col gap-[6px]"
            onClick={() => setOpen(true)}
          >
            <span className="w-7 h-[2px] bg-white"></span>
            <span className="w-7 h-[2px] bg-white"></span>
            <span className="w-7 h-[2px] bg-white"></span>
          </button>
        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center gap-12">
            {["Home", "Our Gyms", "Programs", "Contact"].map((item) => (
              <span key={item} onClick={() => setOpen(false)}>
                {item}
              </span>
            ))}
          </div>
        )}

        {/* HERO */}
        <section className="flex flex-col items-center text-center mt-[140px] md:mt-[180px] px-6">
          <h1 className="font-extrabold text-[48px] md:text-[88px]">
            BUILD YOUR
            <span className="block">STRONG BODY</span>
          </h1>
        </section>

        {/* PROGRAMS */}
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
            ].map((p) => (
              <div
                key={p.title}
                className="border border-white/20 backdrop-blur-sm p-6 md:p-8 hover:border-cyan-400 transition"
              >
                {/* MOBILE: image left + text right */}
                {/* DESKTOP: image center + text below */}
                <div className="flex md:flex-col items-center md:text-center gap-6">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-[150px] md:h-[300px] object-contain flex-shrink-0"
                  />

                  <div className="text-left md:text-center">
                    <h3 className="text-[16px] md:text-[18px] tracking-[0.3em] mb-3">
                      {p.title}
                    </h3>
                    <p className="text-[13px] text-gray-300">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
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
              <div key={plan.name} className="border border-white/20 p-10 text-center">
                <h3 className="mb-4">{plan.name}</h3>
                <p className="text-[42px] font-bold">{plan.price}</p>
              </div>
            ))}
          </div>
        </section>

         {/* FOOTER */}
        <footer className="mt-32 md:mt-40 border-t border-white/20 bg-gradient-to-r from-blue-900/60 via-blue-800/60 to-blue-900/60 backdrop-blur-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 px-6 md:px-20 py-16 md:py-20 text-[13px]">

            <div>
              <h3 className="text-[22px] font-semibold mb-6">FitZone</h3>
              <p className="text-gray-300 leading-relaxed">
                Your trusted fitness partner for modern strength training.
              </p>
            </div>

            <div>
              <h4 className="text-[15px] tracking-widest mb-6">ABOUT</h4>
              <p className="text-gray-300 leading-relaxed">
                Premium gyms, smart programs, and expert coaches.
              </p>
            </div>

            <div>
              <h4 className="text-[15px] tracking-widest mb-6">LINKS</h4>
              <ul className="space-y-4 text-gray-300">
                {["Home", "Our Gyms", "Programs", "Contact"].map((l) => (
                  <li key={l} className="hover:text-cyan-300 transition cursor-pointer">
                    › {l}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[15px] tracking-widest mb-6">CONNECT</h4>
              <p className="text-gray-300 mb-3">ansha74791@gmail.com</p>
              <p className="text-gray-300">+919798681537</p>
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
