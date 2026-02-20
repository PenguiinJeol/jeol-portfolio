"use client";
import Navbar from "../components/navbar";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* THE 100PX MARGIN BORDER */}
      <div className="fixed inset-[100px] border-[3px] border-[var(--grid-grey)] pointer-events-none z-50" />

      {/* THE GRID BACKGROUND */}
      <div className="fixed inset-[100px] grid-pattern -z-10 opacity-20" />

      <div className="relative z-10 pt-[160px] px-[160px]">
        <h1 className="text-6xl font-bold tracking-tighter text-[var(--cream)] uppercase mb-12">
          Contact
        </h1>

        {/* BENTO GRID CONTAINER */}
        <div className="grid grid-cols-4 gap-4 max-w-5xl">
          
          {/* Tile 1: Main Email (Large) */}
          <div className="col-span-2 row-span-2 p-8 border-[3px] border-[var(--grid-grey)] bg-[var(--main-dark)]/40 hover:border-[var(--highlighter-pink)] transition-colors group">
            <p className="text-sm font-mono text-[var(--grid-grey)] mb-4 uppercase">Direct Line</p>
            <h2 className="text-3xl font-bold text-[var(--cream)]">hello@jeol.com</h2>
            <div className="mt-8 w-10 h-[2px] bg-[var(--highlighter-pink)] group-hover:w-full transition-all duration-300" />
          </div>

          {/* Tile 2: Location/Time */}
          <div className="col-span-2 p-8 border-[3px] border-[var(--grid-grey)] flex justify-between items-end">
            <div>
              <p className="text-sm font-mono text-[var(--grid-grey)] uppercase">Location</p>
              <h2 className="text-2xl font-bold text-[var(--cream)]">London, UK</h2>
            </div>
            <p className="text-[var(--highlighter-pink)] font-bold italic">14:00 GMT</p>
          </div>

          {/* Tile 3: Social 1 */}
          <div className="col-span-1 p-8 border-[3px] border-[var(--grid-grey)] hover:bg-[var(--highlighter-pink)] hover:text-[var(--main-dark)] transition-all cursor-pointer group">
            <p className="font-bold text-xl group-hover:text-[var(--main-dark)]">LI</p>
          </div>

          {/* Tile 4: Social 2 */}
          <div className="col-span-1 p-8 border-[3px] border-[var(--grid-grey)] hover:bg-[var(--highlighter-pink)] hover:text-[var(--main-dark)] transition-all cursor-pointer group">
            <p className="font-bold text-xl group-hover:text-[var(--main-dark)]">GH</p>
          </div>

          {/* Tile 5: Availability Status (Long) */}
          <div className="col-span-4 p-6 border-[3px] border-[var(--grid-grey)] bg-[var(--grid-grey)]/10 flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <p className="font-mono text-sm uppercase tracking-widest text-[var(--cream)]">
              Available for new projects — March 2026
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}