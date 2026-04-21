"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { quotes } from "../lib/quotes";

export default function Footer() {
  const [currentQuote, setCurrentQuote] = useState("");

  useEffect(() => {
    // 1. Set an initial quote immediately
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    };
    
    setCurrentQuote(getRandomQuote());

    // 2. Set up the 5-second rotation timer
    const interval = setInterval(() => {
      setCurrentQuote(getRandomQuote());
    }, 3000);

    // 3. Clean up the timer if the user leaves the page
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[var(--deep-black)] border-t border-[var(--grid-grey)] pt-20 pb-32 font-ibm">
      <div className="mx-6 md:mx-14 lg:mx-[100px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* LEFT COLUMN: BRANDING BLOCK */}
        <div className="lg:col-span-3 flex flex-col items-start">
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
            {/*<Link href="/about" className="text-base text-[var(--cream)] opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
              <span className="opacity-40 text-xs">↳</span> About
            </Link> DISABLED FOR NOW, WILL BE BACK IN THE FUTURE. */}
            
            <div className="flex items-center gap-4 mt-2">
              <div className="text-base text-[var(--cream)] opacity-70 flex items-center gap-2">
                <span className="opacity-40 text-xs">↳</span> Contact
              </div>
              <div className="flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/icons/instagram-icon.svg" alt="Instagram" width={16} height={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" className="opacity-60 hover:opacity-100 transition-opacity">
                  <Image src="/icons/linkedin-icon.svg" alt="LinkedIn" width={16} height={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN: QUOTE CANVAS */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <div className="relative w-full aspect-[21/9] border border-[var(--grid-grey)]/40 overflow-hidden flex items-end justify-center px-4 pb-6">
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
            
            {/* The Quote with a fade-in transition on change */}
            <p 
              key={currentQuote} 
              className="relative z-10 text-[var(--cream)] text-sm italic opacity-70 text-center max-w-full leading-relaxed animate-in fade-in duration-700"
            >
              "{currentQuote}"
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: DIRECTORY */}
        <div className="lg:col-span-3 flex flex-col gap-8 lg:pl-10">
          <div className="space-y-4">
             <h5 className="text-[10px] uppercase tracking-[0.3em] text-[var(--cream)] opacity-30 border-b border-[var(--grid-grey)] pb-2 w-full">Projects</h5>
             <ul className="space-y-3">
               <li><Link href="/work/lijssie" className="text-sm text-[var(--cream)] opacity-70 hover:opacity-100 transition-all">• Lijssie</Link></li>
             </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}

// CAA 12APR26 / 1815H.