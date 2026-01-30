"use client";

import Link from "next/link";

export default function ProgramsPage() {
  const programs = [
    {
      title: "STRENGTH",
      desc: "Build muscle and raw power with progressive strength training.",
      image: "/programs/strength.jpg",
    },
    {
      title: "CARDIO",
      desc: "Boost stamina, burn fat, and improve heart health.",
      image: "/programs/cardio.jpg",
    },
    {
      title: "CROSSFIT",
      desc: "High-intensity functional training for full-body conditioning.",
      image: "/programs/crossfit.jpg",
    },
    {
      title: "YOGA",
      desc: "Enhance flexibility, balance, and mental wellness.",
      image: "/programs/yoga.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <section className="text-center py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest">
          OUR PROGRAMS
        </h1>
        <p className="mt-6 text-gray-300 max-w-xl mx-auto text-sm">
          Designed to transform your body, improve performance, and elevate lifestyle.
        </p>
      </section>

      {/* PROGRAM LIST */}
      <section className="px-6 md:px-20 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {programs.map((program) => (
            <div
              key={program.title}
              className="border border-white/20 hover:border-cyan-400 transition p-6 md:p-10 flex flex-col md:flex-row gap-8"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full md:w-[250px] h-[200px] md:h-[250px] object-cover"
              />

              <div className="flex flex-col justify-center">
                <h3 className="text-xl tracking-[0.3em] mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {program.desc}
                </p>

                <button className="w-fit border px-6 py-2 text-xs tracking-widest hover:bg-white hover:text-black transition">
                  ENROLL NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BACK */}
      <div className="text-center pb-20">
        <Link href="/" className="text-xs tracking-widest underline hover:text-cyan-300">
          ← BACK TO HOME
        </Link>
      </div>

    </main>
  );
}
