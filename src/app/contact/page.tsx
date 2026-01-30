"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main
      className="min-h-screen text-white bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="min-h-screen bg-black/60">

        {/* NAVBAR */}
        <nav className="flex items-center justify-between px-6 md:px-16 py-7 sticky top-0 z-50 backdrop-blur-md bg-black/40">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
            FitZone
          </Link>

          <ul className="hidden md:flex gap-12 text-sm tracking-widest uppercase">
            <Link href="/">Home</Link>
            <Link href="/our-gyms">Our Gyms</Link>
            <Link href="/programs">Programs</Link>
            <Link href="/contact" className="border px-4 py-1 rounded">
              Contact
            </Link>
          </ul>
        </nav>

        {/* HEADER */}
        <section className="text-center mt-28 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-sm">
            Get in touch with us
          </p>
        </section>

        {/* CONTENT */}
        <section className="mt-20 px-6 md:px-20 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* LEFT INFO */}
            <div className="border border-white/20 backdrop-blur-md p-10 rounded-lg">
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">📍 Address</h3>
                <p className="text-gray-300 text-sm">
                  129 FitZone Avenue, Patna, India
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">✉ Email</h3>
                <p className="text-gray-300 text-sm">
                  info@fitzone.com
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">📞 Phone</h3>
                <p className="text-gray-300 text-sm">
                  +91 987654210
                </p>
              </div>

              <div className="flex gap-4 text-xl">
                <span className="cursor-pointer">🌐</span>
                <span className="cursor-pointer">🐦</span>
                <span className="cursor-pointer">💼</span>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="border border-white/20 backdrop-blur-md p-10 rounded-lg">
              <h3 className="text-lg font-semibold mb-6">
                Send Us a Message
              </h3>

              <form className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border border-white/30 px-4 py-3 text-sm outline-none focus:border-cyan-400"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border border-white/30 px-4 py-3 text-sm outline-none focus:border-cyan-400"
                />

                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-transparent border border-white/30 px-4 py-3 text-sm outline-none focus:border-cyan-400"
                />

                <button
                  type="submit"
                  className="border border-white px-6 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/20 py-8 text-center text-xs tracking-widest text-gray-400">
          © {new Date().getFullYear()} FitZone Gym. All rights reserved.
        </footer>

      </div>
    </main>
  );
}
