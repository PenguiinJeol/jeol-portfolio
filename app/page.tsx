"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Navbar from "./components/navbar";
import Gallery from "./components/gallery";
import Footer from "./components/footer"; // Using your component
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative bg-[var(--deep-black)] overflow-x-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen w-full flex flex-col">
        <div className="absolute inset-4 md:inset-10 lg:inset-[100px] border border-[var(--grid-grey)] pointer-events-none z-0 opacity-30 overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
        </div>
        <Navbar />
        <div className="relative z-10 mx-6 md:mx-14 lg:mx-[100px] my-10 md:my-14 lg:my-[100px] h-auto lg:h-[calc(100vh-200px)] flex items-stretch">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-6 lg:gap-4">
            <div className="relative flex flex-col justify-center order-1 pl-0 lg:pl-12 pt-[20vh] lg:pt-0 pb-4 lg:pb-[100px]">
              <div className="z-20 text-center lg:text-left">
                <h1 className="font-[family-name:var(--font-league-gothic)] text-5xl lg:text-6xl font-bold tracking-[0.05em] text-[var(--cream)] flex items-baseline justify-center lg:justify-start">
                  <span>This is J</span>
                  <span className="text-[var(--cream)]">
                    <Typewriter
                      onInit={(typewriter: any) => {
                        typewriter.typeString("oel.").pauseFor(1250).deleteAll(45).typeString("eol.").pauseFor(1250).deleteAll(45).start();
                      }}
                      options={{ autoStart: true, loop: true, cursor: "|", delay: 90 }}
                    />
                  </span>
                </h1>
                <p className="font-[family-name:var(--font-league-gothic)] text-3xl lg:text-4xl uppercase tracking-[0.05em] text-[var(--cream)] opacity-80 mt-6 lg:mt-8">
                  I design, gym, and game.
                </p>
              </div>
              <div className="mt-8 lg:mt-12 lg:absolute lg:bottom-12 lg:left-0 lg:right-0 flex justify-center pointer-events-none">
                <div className="w-[120px] lg:w-[150px] aspect-square border border-dashed border-[var(--grid-grey)] flex items-center justify-center opacity-40">
                  <span className="text-[10px] font-mono tracking-tighter text-[var(--cream)]">GIF_ASSET_RESERVED</span>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col order-2 pr-0 lg:pr-[100px] pt-0 lg:pt-[100px] pb-6 lg:pb-20 h-[380px] lg:h-full overflow-visible justify-between">
              <Gallery />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE CALLING CARD */}
      {/* For no peeking out, set it to "mt-[-60px] md:mt-[-80px] lg:mt-[-100px]". */}
      <section className="relative w-full min-h-[600px] pb-20 mt-[-60px] md:mt-[-90px] lg:mt-[-120px] z-20">
        <div className="absolute inset-4 md:inset-10 lg:inset-[100px] border border-[var(--grid-grey)] pointer-events-none z-0 opacity-30 overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
        </div>
        
        <div className="relative z-10 mx-6 md:mx-14 lg:mx-[100px] pt-48 md:pt-56 lg:pt-64">
          <div className="max-w-4xl font-ibm">
            <span className="text-[var(--highlighter-pink)] text-xs font-mono mb-6 block uppercase tracking-[0.3em]">
              // System.Context
            </span>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-5xl text-[var(--cream)] font-medium leading-tight mb-8">
                  Crafting digital <br />
                  <span className="opacity-40 italic">utility through logic.</span>
                </h2>
                <Link href="/contact" className="group inline-flex items-center gap-4 text-[var(--cream)] hover:text-[var(--highlighter-pink)] transition-colors">
                  <span className="text-sm uppercase tracking-widest border-b border-[var(--cream)] group-hover:border-[var(--highlighter-pink)] pb-1 transition-all">Send Transmission</span>
                  <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>

              <div className="flex flex-col gap-8 border-l border-[var(--grid-grey)] pl-8">
                <p className="text-[var(--cream)] text-lg opacity-70 leading-relaxed">
                  Designer & Developer based in the Netherlands. I specialize in building interfaces that prioritize minimalist architecture and analog feel.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-[var(--cream)] text-[10px] uppercase tracking-widest opacity-40 mb-2">Capabilities</h4>
                    <ul className="text-xs space-y-1 opacity-60">
                      <li>UI Architecture</li>
                      <li>Frontend Logic</li>
                      <li>Visual Systems</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[var(--cream)] text-[10px] uppercase tracking-widest opacity-40 mb-2">Availability</h4>
                    <p className="text-xs opacity-60">Q2 2026<br />Remote / NL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}

// CAA 20APR26 / 2332H.