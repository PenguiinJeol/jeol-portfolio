"use client";
import MediaHandler from "./work-content/media-handler";

interface WorkHeaderProps {
  title: string;
  category: string;
  role: string;
  year: string;
  summary: string;
  heroImage: string;
  sections: string[];
  contextChunks: string[]; 
}

export default function WorkHeader({
  title,
  category,
  role,
  year,
  summary,
  heroImage,
  sections,
  contextChunks
}: WorkHeaderProps) {
  return (
    // items-stretch ensures both columns take the same height
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
      
      {/* LEFT COLUMN: PROJECT IDENTITY & CONTEXT */}
      <div className="flex flex-col h-full">
        
        {/* GROUP 1: THE TITLE BLOCK */}
        <div className="border border-[var(--grid-grey)] font-ibm">
          <div className="p-6 border-b border-[var(--grid-grey)] flex flex-col gap-4">
            <h1 className="font-[family-name:var(--font-league-gothic)] text-6xl text-[var(--cream)] leading-none tracking-wide">
              {title}
            </h1>
            <p className="font-ibm text-base text-[var(--cream)] leading-relaxed max-w-md">
              {summary}
            </p>
          </div>
          
          <div className="flex text-base font-normal leading-none tracking-widest text-[var(--cream)]">
            <div className="flex-grow px-6 py-5 border-r border-[var(--grid-grey)]">
               {role}
            </div>
            <div className="px-6 py-5 min-w-[170px] text-left">
               {year}
            </div>
          </div>
        </div>

        {/* GROUP 2: THE CONTEXT BLOCK - Now using flex-grow to match height */}
        <div className="mt-12 border border-[var(--grid-grey)] font-ibm flex flex-col flex-grow">
          {/* Header Row */}
          <div className="px-6 py-5 border-b border-[var(--grid-grey)]">
            <span className="text-[var(--cream)] text-base underline underline-offset-8 decoration-1 tracking-widest">
              Context
            </span>
          </div>

          {/* Modular Body Rows */}
          <div className="flex flex-col divide-y divide-[var(--grid-grey)] flex-grow">
            {contextChunks.map((chunk, index) => (
              <div 
                key={index} 
                className={`px-6 py-5 ${index === contextChunks.length - 1 ? 'flex-grow' : ''}`}
              >
                <p className="font-ibm text-sm md:text-base text-[var(--cream)] leading-relaxed opacity-90">
                  {chunk}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>

      {/* RIGHT COLUMN: HERO THUMBNAIL - Height will now match Left Column */}
      <div className="relative w-full border border-[var(--grid-grey)] overflow-hidden bg-[var(--deep-black)]">
        <MediaHandler 
          src={heroImage} 
          alt={title} 
          priority 
          aspect="cover" 
        />
      </div>
      
    </div>
  );
}

// CAA 12APR26 / 0942H.