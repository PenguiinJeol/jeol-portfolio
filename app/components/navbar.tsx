"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navItems = ["HOME", "WORK", "ABOUT"];

  return (
    <>
      {/* 0. THE FADE GRADIENT (Matches Navbar Height) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full z-[80] pointer-events-none"
            style={{
              height: '10rem', // Matches the h-24 height of your navbar
              background: 'linear-gradient(to bottom, var(--main-dark) 0%, transparent 100%)'
            }}
          />
        )}
      </AnimatePresence>

      {/* 1. THE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-[100] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer transition-all duration-300
                   left-10 top-10 w-[40px] h-[40px] 
                   md:left-[100px] md:top-[50px] md:w-[60px] md:h-[60px]"
      >
        <svg width="100%" height="100%" viewBox="0 0 60 60">
          <motion.line
            stroke="var(--cream)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ x1: 14, x2: 46, y1: 20, y2: 20 }}
            animate={
              isOpen
                ? { x1: 15, x2: 45, y1: 15, y2: 45 }
                : { x1: 14, x2: 46, y1: 20, y2: 20 }
            }
          />
          <motion.line
            stroke="var(--cream)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ x1: 14, x2: 46, y1: 40, y2: 40 }}
            animate={
              isOpen
                ? { x1: 15, x2: 45, y1: 45, y2: 15 }
                : { x1: 14, x2: 46, y1: 40, y2: 40 }
            }
          />
        </svg>
      </button>

      {/* 2. THE OVERLAY (Existing code remains the same) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#0a0a0a]/80 backdrop-blur-[4px] flex flex-col justify-center items-start 
                       px-12 md:px-[140px]" 
          >
            <nav className="flex flex-col gap-6 md:gap-8">
              {navItems.map((item) => {
                const path = item === "HOME" ? "/" : `/${item.toLowerCase()}`;
                const isActive = pathname === path;
                return (
                  <div key={item} className="relative flex items-center group">
                    {isActive && (
                      <motion.div
                        layoutId="chevron"
                        className="mr-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <svg className="w-6 h-6 md:w-10 md:h-10" viewBox="0 0 40 40" fill="none">
                          <motion.path
                            d="M13.5 10.5 L25.2 18.8 Q26 20 25.2 21.2 L13.5 29.5 Q12.5 30 12.5 28.5 L12.5 11.5 Q12.5 10 13.5 10.5 Z"
                            stroke="var(--highlighter-pink)"
                            strokeWidth="2.5"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                          />
                        </svg>
                      </motion.div>
                    )}
                    <Link
                      href={path}
                      onClick={() => setIsOpen(false)}
                      className={`font-[family-name:var(--font-league-gothic)] text-4xl md:text-6xl font-bold tracking-[0.05em] transition-colors relative ${isActive ? "text-[var(--highlighter-pink)]" : "text-[var(--cream)]"}`}
                    >
                      {item}
                      <span className="absolute left-0 -bottom-2 w-0 h-[3px] bg-[var(--highlighter-pink)] transition-all duration-150 group-hover:w-full" />
                    </Link>
                  </div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}