"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { workData } from "../lib/work";
import WorkHero from "./work-content/media-handler";

const images = Object.entries(workData).map(([slug, data]) => ({
  slug,
  src: data.heroImage,
  title: data.title,
  desc: data.summary,
  id: slug,
  status: (data as any).status || "live",
}));

const infiniteItems = [images[images.length - 1], ...images, images[0]];

export default function Gallery() {
  const [activeDot, setActiveDot] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  const currentIndexRef = useRef(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastInteractionTime = useRef(Date.now());
  const THROTTLE_MS = 400;

  const activeItem = images[activeDot];
  const isComingSoon = activeItem.status === "coming-soon";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!hasMoved) setHasMoved(true);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hasMoved]);

  const moveToIndex = (index: number) => {
    if (!scrollRef.current) return;
    lastInteractionTime.current = Date.now();
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({ left: width * index, behavior: "smooth" });
    currentIndexRef.current = index;
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const width = el.offsetWidth;
    const scrollPos = el.scrollLeft;
    const rawIndex = Math.round(scrollPos / width);
    const dotIndex =
      (((rawIndex - 1) % images.length) + images.length) % images.length;
    setActiveDot(dotIndex);

    clearTimeout((window as any).scrollTimeout);
    (window as any).scrollTimeout = setTimeout(() => {
      if (rawIndex === 0) el.scrollLeft = width * images.length;
      else if (rawIndex === infiniteItems.length - 1) el.scrollLeft = width;
      currentIndexRef.current = Math.round(el.scrollLeft / width);
    }, 150);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = el.offsetWidth;
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 0) e.preventDefault();
      const now = Date.now();
      if (now - lastInteractionTime.current < THROTTLE_MS) return;
      if (e.deltaY > 0) moveToIndex(currentIndexRef.current + 1);
      else if (e.deltaY < 0) moveToIndex(currentIndexRef.current - 1);
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="w-full h-full flex flex-col font-ibm overflow-visible -mt-12 md:-mt-16">
      {/* CUSTOM CURSOR */}
      <div
        /* Updated duration from 200ms to 150ms for snappier feel */
        className="fixed top-0 left-0 w-10 h-10 border-[1.5px] border-[var(--cream)] rounded-full pointer-events-none z-[9999] flex items-center justify-center transition-[opacity,transform] duration-[150ms] ease-out overflow-hidden"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1 : 0})`,
          opacity: isHovering && hasMoved ? 1 : 0,
        }}
      >
        {isComingSoon && (
          <div className="relative w-full h-full">
            <span className="absolute top-1/2 left-1/2 w-full h-[1.5px] bg-[var(--cream)] -translate-x-1/2 -translate-y-1/2 rotate-45" />
            <span className="absolute top-1/2 left-1/2 w-full h-[1.5px] bg-[var(--cream)] -translate-x-1/2 -translate-y-1/2 -rotate-45" />
          </div>
        )}
      </div>

      {/* NAVIGATION CONTROLS */}
      <div className="w-full mb-4 flex items-center min-h-[40px] z-40">
        <div className="flex-1 flex justify-center">
          <button
            onClick={() => moveToIndex(currentIndexRef.current - 1)}
            className="text-[var(--cream)] text-2xl cursor-pointer"
          >
            ←
          </button>
        </div>
        <div className="flex-none flex gap-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => moveToIndex(i + 1)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeDot === i ? "bg-[var(--highlighter-pink)] scale-125" : "bg-[var(--grid-grey)]"}`}
            />
          ))}
        </div>
        <div className="flex-1 flex justify-center">
          <button
            onClick={() => moveToIndex(currentIndexRef.current + 1)}
            className="text-[var(--cream)] text-2xl cursor-pointer"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative flex-grow overflow-visible">
        <Link
          href={isComingSoon ? "#" : `/work/${activeItem.slug}`}
          onClick={(e) => isComingSoon && e.preventDefault()}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="contents cursor-none"
        >
          {/* MAIN IMAGE BOX */}
          <div
            className={`relative w-full h-full min-h-[350px] md:min-h-[400px] border-[1.5px] border-[var(--light-grid)] rounded-none overflow-hidden z-10 transition-all duration-500 ${isComingSoon ? "grayscale opacity-60" : "grayscale-0 opacity-100"}`}
          >
            {isComingSoon && (
              <div className="absolute inset-0 z-40 flex items-center justify-center bg-[var(--deep-black)]/20 backdrop-blur-[1px] pointer-events-none">
                <p className="bg-[var(--main-dark)] border border-[var(--grid-grey)] px-4 py-2 text-[var(--cream)] text-xs md:text-sm tracking-widest font-medium shadow-xl">
                  Coming soon, but ask me about it!
                </p>
              </div>
            )}

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="w-full h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar flex pointer-events-auto"
            >
              {infiniteItems.map((item: any, i: number) => (
                <div
                  key={`${item.id}-${i}`}
                  className="min-w-full h-full snap-center relative"
                >
                  <WorkHero
                    src={item.src}
                    alt={item.title}
                    className="object-cover w-full h-full"
                    priority={i === 1}
                  />
                </div>
              ))}
            </div>

            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, var(--main-dark) 85%)",
              }}
            />
          </div>

          {/* BLUEPRINT TITLE BLOCK */}
          <div className="absolute top-full -mt-10 -left-6 bg-[var(--main-dark)] border border-[var(--light-grid)] z-30 min-w-[300px] md:min-w-[380px] flex flex-col shadow-2xl pointer-events-auto">
            <div className="flex items-center gap-3 px-6 pt-4 pb-5">
              <h3 className="text-[20px] font-medium text-[var(--cream)] leading-none underline decoration-[1.5px] underline-offset-[4px] decoration-[var(--light-grid)]">
                {activeItem.title}
              </h3>
              <span className="text-[18px] font-medium text-[var(--cream)] transform translate-y-[1px]">
                ↘
              </span>
            </div>

            <div className="w-full border-b border-[var(--light-grid)]" />

            <div className="px-6 pt-5 pb-5">
              <p className="text-[18px] font-normal text-[var(--cream)] opacity-100 leading-snug">
                {activeItem.desc}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

// CAA 22APR26 / 1625H.
