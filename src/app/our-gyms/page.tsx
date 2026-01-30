"use client";

import Link from "next/link";

const gyms = [
  {
    name: "Patna",
    location: "Patna, Bihar",
    img: "/gyms/patna.jpg",
  },
  {
    name: "Pune Hadapsar",
    location: "Pune, Maharashtra",
    img: "/gyms/pune.jpg",
  },
  {
    name: "Mumbai Mulund",
    location: "Mumbai, Maharashtra",
    img: "/gyms/mumbai.jpg",
  },
  {
    name: "Chennai Mogappair",
    location: "Chennai, Tamil Nadu",
    img: "/gyms/chennai.jpg",
  },
];

export default function OurGymsPage() {
  return (
    <main
      className="min-h-screen text-white bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="min-h-screen bg-black/60">

        {/* NAVBAR */}
        <nav className="flex items-center justify-between px-6 md:px-16 py-7 sticky top-0 z-50 backdrop-blur-md bg-black/40">
          <Link href="/" className="text-xl font-semibold">
            FitZone
          </Link>

          <ul className="hidden md:flex gap-12 text-sm tracking-widest uppercase">
            <Link href="/">Home</Link>
            <Link href="/our-gyms" className="border px-4 py-1 rounded">
              Our Gyms
            </Link>
            <Link href="/programs">Programs</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </nav>

        {/* HEADER */}
        <section className="text-center mt-28 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Gyms India
          </h1>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Find a FitZone Gym near you from our extensive network across India.
          </p>
        </section>

        {/* GYMS LIST */}
        <section className="mt-20 px-6 md:px-20 pb-32 space-y-10">
          {gyms.map((gym) => (
            <div
              key={gym.name}
              className="flex flex-col md:flex-row gap-8 border border-white/20 backdrop-blur-md rounded-lg overflow-hidden p-6"
            >
              {/* IMAGE */}
              <div className="w-full md:w-[260px] h-[160px] bg-white/10 rounded-md flex items-center justify-center text-gray-400">
                Gym Image
              </div>

              {/* INFO */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {gym.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {gym.location}
                  </p>
                  <p className="text-xs text-gray-400">
                    State-of-the-art equipment, certified trainers, and modern facilities.
                  </p>
                </div>

                {/* ACTIONS */}
                <div className="mt-6 flex gap-4">
                  <button className="border border-white px-4 py-2 text-xs tracking-widest hover:bg-white hover:text-black transition">
                    DIRECTIONS
                  </button>
                  <button className="border border-white px-4 py-2 text-xs tracking-widest hover:bg-white hover:text-black transition">
                    CONTACT NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/20 py-8 text-center text-xs tracking-widest text-gray-400">
          © {new Date().getFullYear()} FitZone Gym. All rights reserved.
        </footer>

      </div>
    </main>
  );
}
