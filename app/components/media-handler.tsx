"use client";
import { useState } from "react";
import Image from "next/image";

interface MediaHandlerProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  // Add this to control how images sit in their boxes
  aspect?: "cover" | "contain"; 
}

export default function MediaHandler({ 
  src, 
  alt, 
  fill = true, 
  className, 
  priority = false,
  aspect = "cover" // Default to cover for your hero/thumbs
}: MediaHandlerProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-transparent">
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          // Combine your classes with the aspect logic
          className={`${className} ${aspect === "cover" ? "object-cover" : "object-contain"}`}
          priority={priority}
          onError={() => setHasError(true)}
        />
      ) : (
        /* THE DYNAMIC FALLBACK */
        <div className="flex flex-col items-center justify-center text-[var(--cream)] p-4 text-center">
          <div className="relative w-[120px] h-[120px] md:w-[200px] md:h-[200px]">
            <Image
              src="/placeholders/missing.svg"
              alt="Kirby ate the media"
              fill
              className="object-contain brightness-0 invert opacity-50" 
            />
          </div>
          <p className="mt-6 font-ibm text-[10px] uppercase tracking-[0.2em] text-[var(--cream)] opacity-50">
            Media Offline
          </p>
        </div>
      )}
    </div>
  );
}