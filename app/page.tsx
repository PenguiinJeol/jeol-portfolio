"use client";
import React from "react";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import Navbar from "./components/navbar";
import Gallery from "./components/gallery";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--deep-black)] overflow-x-hidden">
      
      {/* 1. THE GRID FRAME & PATTERN */}
      <div className="absolute inset-4 md:inset-10 lg:inset-[100px] border border-[var(--grid-grey)] pointer-events-none -z-10 opacity-30 [container-type:size] overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
      </div>

      <Navbar />

      {/* 2. MAIN CONTENT AREA */}
      <div className="relative z-10 mx-6 md:mx-14 lg:mx-[100px] my-10 md:my-14 lg:my-[100px] h-auto lg:h-[calc(100vh-200px)] flex items-stretch">
        {/* CHANGED: gap-6 on mobile, gap-4 on desktop (lg) to pull the gallery closer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-6 lg:gap-4">
          
          {/* LEFT SIDE: BIO CONTENT */}
          <div className="relative flex flex-col justify-center order-1 pl-0 lg:pl-12 pt-[20gitvh] lg:pt-0 pb-4 lg:pb-[100px]">
            {/* CHANGED: pb-4 above (reduced from pb-12) to tighten the bottom of the bio */}
            <div className="z-20 text-center lg:text-left">
              <h1 className="font-[family-name:var(--font-league-gothic)] text-5xl lg:text-6xl font-bold tracking-[0.05em] text-[var(--cream)] flex items-baseline justify-center lg:justify-start">
                <span>This is J</span>
                <span className="text-[var(--cream)]">
                  <Typewriter
                    onInit={(typewriter: TypewriterClass) => {
                      typewriter
                        .typeString("oel.")
                        .pauseFor(1250).deleteAll(45)
                        .typeString("eol.")
                        .pauseFor(1250).deleteAll(45)
                        .start();
                    }}
                    options={{ autoStart: true, loop: true, cursor: "|", delay: 90 }}
                  />
                </span>
              </h1>
              <p className="font-[family-name:var(--font-league-gothic)] text-3xl lg:text-4xl uppercase tracking-[0.05em] text-[var(--cream)] opacity-80 mt-6 lg:mt-8">
                I design, gym, and game.
              </p>
            </div>

            {/* CENTERED GIF PLACEHOLDER */}
            <div className="mt-8 lg:mt-12 lg:absolute lg:bottom-12 lg:left-0 lg:right-0 flex justify-center pointer-events-none">
              {/* mt-8 reduced from mt-12 to lift the GIF closer to the text */}
              <div className="w-[120px] lg:w-[150px] aspect-square border border-dashed border-[var(--grid-grey)] flex items-center justify-center opacity-40">
                <span className="text-[10px] font-mono tracking-tighter text-[var(--cream)]">
                  GIF_ASSET_RESERVED
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: THE GALLERY */}
          <div className="w-full flex flex-col order-2 pr-0 lg:pr-[100px] pt-0 lg:pt-[100px] pb-6 lg:pb-[100px] h-[380px] lg:h-full overflow-hidden justify-start">
            {/* CHANGED: pt-0 on mobile (was pt-6) to remove extra space at the top of gallery container */}
            <Gallery />
          </div>

        </div>
      </div>
    </main>
  );
}