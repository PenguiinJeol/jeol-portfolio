"use client";
import { useState, useRef, useEffect } from "react";

const images = [
  { id: 1, color: "bg-[#00ffd5]" },
  { id: 2, color: "bg-[#f497ba]" },
  { id: 3, color: "bg-blue-600" },
];

const infiniteItems = [
  images[images.length - 1],
  ...images,
  images[0],
];

export default function Gallery() {
  const [activeDot, setActiveDot] = useState(0);
  const currentIndexRef = useRef(1);
  const [currentIndex, setCurrentIndex] = useState(1); 
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isHovered = useRef(false);
  const lastInteractionTime = useRef(Date.now());
  
  const THROTTLE_MS = 400;

  const updateIndex = (val: number) => {
    currentIndexRef.current = val;
    setCurrentIndex(val);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const now = Date.now();
      const timeSinceInteraction = now - lastInteractionTime.current;
      if (!isHovered.current && timeSinceInteraction >= 10000) {
        handleNext(true);
      }
    }, 10000);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = el.offsetWidth;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 0) e.preventDefault();
      const now = Date.now();
      if (now - lastInteractionTime.current < THROTTLE_MS) return;
      lastInteractionTime.current = now; 
      if (e.deltaY > 0) handleNext(false);
      else if (e.deltaY < 0) handlePrev();
    };

    const handleMouseEnter = () => { isHovered.current = true; };
    const handleMouseLeave = () => { 
      isHovered.current = false;
      lastInteractionTime.current = Date.now();
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
    resetTimer();

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const width = el.offsetWidth;
    const scrollPos = el.scrollLeft;
    
    const rawIndex = Math.round(scrollPos / width);
    const dotIndex = ((rawIndex - 1) % images.length + images.length) % images.length;
    setActiveDot(dotIndex);

    clearTimeout((window as any).scrollTimeout);
    (window as any).scrollTimeout = setTimeout(() => {
      if (rawIndex === 0) {
        el.scrollTo({ left: width * images.length });
        updateIndex(images.length);
      } else if (rawIndex === infiniteItems.length - 1) {
        el.scrollTo({ left: width });
        updateIndex(1);
      } else {
        updateIndex(rawIndex);
      }
    }, 150);
  };

  const moveToIndex = (index: number, isAuto = false) => {
    if (!scrollRef.current) return;
    if (!isAuto) lastInteractionTime.current = Date.now();

    const width = scrollRef.current.offsetWidth;
    updateIndex(index);
    scrollRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
  };

  const handleNext = (isAuto = true) => moveToIndex(currentIndexRef.current + 1, isAuto);
  const handlePrev = () => moveToIndex(currentIndexRef.current - 1, false);

  return (
    <div className="w-full h-full flex flex-col">
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-grow w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar flex bg-black/10 cursor-crosshair"
      >
        {infiniteItems.map((item, i) => (
          <div key={`${item.id}-${i}`} className="min-w-full h-full snap-center">
            <div className={`w-full h-full ${item.color}`} />
          </div>
        ))}
      </div>

      <div className="w-full mt-6 flex items-center min-h-[40px]">
        <div className="flex-1 flex justify-center">
          <button onClick={() => handlePrev()} className="text-[var(--cream)] text-2xl hover:text-[var(--highlighter-pink)] cursor-pointer">←</button>
        </div>

        <div className="flex-none flex gap-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => moveToIndex(i + 1, false)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                activeDot === i ? "bg-[var(--highlighter-pink)] scale-150" : "bg-[var(--grid-grey)] hover:bg-[var(--cream)]"
              }`}
            />
          ))}
        </div>

        <div className="flex-1 flex justify-center">
          <button onClick={() => handleNext(false)} className="text-[var(--cream)] text-2xl hover:text-[var(--highlighter-pink)] cursor-pointer">→</button>
        </div>
      </div>
    </div>
  );
}