"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { quotes } from "../lib/quotes";

export default function Footer() {
  const [currentQuote, setCurrentQuote] = useState("");

  useEffect(() => {
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    };

    setCurrentQuote(getRandomQuote());

    const interval = setInterval(() => {
      setCurrentQuote(getRandomQuote());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[var(--deep-black)] border-t border-[var(--grid-grey)] pt-20 pb-20 font-ibm">
      {/* Changed to flex and items-stretch to force equal height across columns */}
      <div className="mx-6 md:mx-14 lg:mx-[100px] flex flex-col lg:flex-row gap-10 items-stretch">
        {/* LEFT COLUMN: BRANDING BLOCK */}
        <div className="lg:w-1/4 flex flex-col items-start h-auto">
          <div className="w-42 h-42 border border-[var(--grid-grey)] flex items-center justify-center bg-[var(--deep-black)] relative z-10">
            <Image
              src="/icons/jeol-logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="opacity-90 object-contain"
            />
          </div>

          <div className="w-full flex flex-col border border-[var(--grid-grey)] -mt-[1px] p-4 bg-[var(--deep-black)]">
            <div className="flex items-center gap-4 mt-2">
              <div className="text-base text-[var(--cream)] opacity-70 flex items-center gap-2">
                <span className="opacity-40 text-xs">↳</span> Contact
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/jeolxp/"
                  target="_blank"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src="/icons/instagram-icon.svg"
                    alt="Instagram"
                    width={16}
                    height={16}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/joeljeol/"
                  target="_blank"
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src="/icons/linkedin-icon.svg"
                    alt="LinkedIn"
                    width={16}
                    height={16}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN: DYNAMIC QUOTE CANVAS */}
        <div className="lg:w-1/2 flex items-stretch">
          {/* h-full and items-end ensures it stays tall but keeps text at bottom */}
          <div className="relative w-full h-full min-h-[120px] border border-[var(--grid-grey)]/40 overflow-hidden flex items-end justify-center px-4 pb-6">
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
            <p
              key={currentQuote}
              className="relative z-10 text-[var(--cream)] text-sm italic opacity-70 text-center max-w-full leading-relaxed animate-in fade-in duration-700"
            >
              "{currentQuote}"
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: DIRECTORY */}
        <div className="lg:w-1/4 flex flex-col lg:pl-10 h-auto">
          <div className="space-y-4">
            <h5 className="text-xs tracking-[0.2em] text-[var(--cream)] opacity-40 border-b border-[var(--grid-grey)] pb-2 w-full">
              Projects
            </h5>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/work/lijssie"
                  className="text-sm text-[var(--cream)] opacity-70 hover:opacity-100 hover:underline decoration-[var(--highlighter-pink)] decoration-[1px] underline-offset-4 transition-all duration-200"
                >
                  • Lijssie
                </Link>
              </li>

              <li className="text-sm text-[var(--cream)] opacity-40 flex items-center gap-1.5">
                <span>• </span>
                <span className="italic">Thinking Design</span>
                <span className="text-sm ml-1">— Coming Soon!</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

// CAA 22APR26 / 1550H.
