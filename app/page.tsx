"use client";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Navbar from "./components/navbar";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import Link from "next/link";
import { hobbyPrompts } from "./lib/cta-hobby-prompts";

export default function Home() {
  // Illumination Logic
  const words = ["Design", "Gym", "Game"];
  const colors = ["var(--highlighter-pink)", "var(--highlighter-blue)"];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeColor, setActiveColor] = useState<string>("");
  const [randomHobby, setRandomHobby] = useState("");

  useEffect(() => {
    // Pick a random hobby on mount
    const randomIndex = Math.floor(Math.random() * hobbyPrompts.length);
    setRandomHobby(hobbyPrompts[randomIndex]);

    let lastIndex = -1;
    const cycle = () => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * words.length);
      } while (newIndex === lastIndex);

      const newColor = colors[Math.floor(Math.random() * colors.length)];

      setActiveIndex(newIndex);
      setActiveColor(newColor);
      lastIndex = newIndex;

      setTimeout(() => {
        setActiveIndex(null);
      }, 900);
    };

    const interval = setInterval(cycle, 1000);
    cycle();

    return () => clearInterval(interval);
  }, []);

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
                        typewriter
                          .typeString("oel.")
                          .pauseFor(1250)
                          .deleteAll(45)
                          .typeString("eol.")
                          .pauseFor(1250)
                          .deleteAll(45)
                          .start();
                      }}
                      options={{
                        autoStart: true,
                        loop: true,
                        cursor: "|",
                        delay: 90,
                      }}
                    />
                  </span>
                </h1>

                <p className="font-[family-name:var(--font-league-gothic)] text-3xl lg:text-4xl tracking-[0.05em] text-[var(--cream)] opacity-80 mt-6 lg:mt-8">
                  I{" "}
                  {words.map((word, i) => (
                    <span key={word}>
                      <span
                        className="transition-colors duration-[100ms] ease-in-out"
                        style={{
                          color: activeIndex === i ? activeColor : "inherit",
                        }}
                      >
                        {word}
                      </span>
                      {i === 0 ? ", " : i === 1 ? ", and " : "."}
                    </span>
                  ))}
                </p>
              </div>
              <div className="mt-8 lg:mt-12 lg:absolute lg:bottom-12 lg:left-0 lg:right-0 flex justify-center pointer-events-none">
                <div className="w-[120px] lg:w-[150px] aspect-square border border-dashed border-[var(--grid-grey)] flex items-center justify-center opacity-40">
                  <span className="text-[10px] font-mono tracking-tighter text-[var(--cream)]">
                    GIF_ASSET_RESERVED
                  </span>
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
      <section className="relative w-full h-auto mt-[-60px] md:mt-[-90px] lg:mt-[-120px] z-20">
        <div className="absolute inset-4 md:inset-10 lg:inset-[100px] border border-[var(--grid-grey)] pointer-events-none z-0 opacity-30 overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
        </div>

        <div className="relative z-10 mx-6 md:mx-14 lg:mx-[100px] pt-28 md:pt-33 lg:pt-38 pb-28 md:pb-33 lg:pb-38">
          <div className="w-full font-ibm">
            <div className="border border-[var(--grid-grey)] bg-[var(--main-dark)]/50 backdrop-blur-sm mb-8 w-full">
              <div className="p-4 md:py-6 lg:px-12 border-b border-[var(--grid-grey)]">
                <h2 className="text-2xl md:text-4xl text-[var(--cream)] font-medium leading-relaxed">
                  Hello there! I’m Joel, an Experience Designer with a
                  fascination for how people interact with digital products.
                </h2>
              </div>
              <div className="p-4 md:p-6 lg:px-12">
                <p className="text-[var(--cream)] text-md md:text-lg opacity-80 leading-relaxed">
                  I specialize in{" "}
                  <span className="font-medium italic underline decoration-[var(--highlighter-pink)] text-[var(--highlighter-pink)] underline-offset-4 opacity-100">
                    ideation
                  </span>
                  ,{" "}
                  <span className="font-medium italic underline decoration-[var(--highlighter-pink)] text-[var(--highlighter-pink)] underline-offset-4 opacity-100">
                    prototyping
                  </span>
                  , and{" "}
                  <span className="font-medium italic underline decoration-[var(--highlighter-pink)] text-[var(--highlighter-pink)] underline-offset-4 opacity-100">
                    testing
                  </span>
                  , acting as the catalyst that transforms interesting ideas
                  into refined solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-7 flex flex-col justify-between items-start px-4 md:px-6 lg:px-12 min-h-full">
                <div className="relative mb-8">
                  <p className="text-[var(--cream)] text-sm md:text-base leading-relaxed max-w-[650px]">
                    <span className="opacity-60">
                      Originally from Singapore, I'm now in The Hague learning
                      about the differences in design cultures between the
                      continents. I'm studying the unique perspectives that only
                      come from experiencing how different parts of the world
                      define and solve design problems.
                      <br className="hidden md:block" />
                      <br className="hidden md:block" />
                      Through my work, I hope to share that
                    </span>
                    <span className="opacity-100 font-medium text-[var(--cream)]">
                      {" "}
                      feeling of curiosity and fascination{" "}
                    </span>
                    <span className="opacity-60">
                      cultivated from my experiences through the products I
                      design for others.
                    </span>
                  </p>
                </div>

                <div className="relative">
                  <p className="text-[var(--cream)] text-sm md:text-base opacity-60 leading-relaxed max-w-[650px]">
                    Besides design, I enjoy going to the gym, playing darts and
                    cards, listening to electronic music, and nerding out
                    watching a mix of things from basketball, F1, to LoL LCK
                    matches.
                  </p>
                  <p className="text-[var(--cream)] text-sm md:text-base opacity-80 leading-relaxed max-w-[650px] mt-6 italic">
                    Feel free to get in contact with me if you wish to discuss
                    work, or{" "}
                    <span className="animate-in fade-in duration-1000">
                      {randomHobby}
                    </span>
                  </p>
                </div>
              </div>

              <div className="md:col-span-5 relative flex justify-center lg:justify-end items-start h-fit">
                <div className="relative w-full max-w-[320px] lg:max-w-[400px] aspect-square border border-[var(--grid-grey)] bg-[var(--main-dark)]/50 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                  <img
                    src="/about-photo.jpeg"
                    alt="Joel Portrait"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[var(--grid-grey)] opacity-30" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[var(--grid-grey)] opacity-30" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[var(--grid-grey)] opacity-30" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[var(--grid-grey)] opacity-30" />
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

// CAA 22APR26 / 1611H.
