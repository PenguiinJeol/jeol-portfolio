"use client";
import MediaHandler from "./media-handler";

interface WorkHeaderProps {
  title: string;
  category: string;
  role: string;
  year: string;
  summary: string;
  heroImage: string;
  sections: string[];
}

export default function WorkHeader({
  title,
  category,
  role,
  year,
  summary,
  heroImage,
  sections
}: WorkHeaderProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
      
      {/* LEFT COLUMN: TEXT & NAV */}
      <div className="flex flex-col">
        
        {/* THE BLUEPRINT TITLE BLOCK */}
        <div className="border-[3px] border-[var(--light-grid)] font-ibm">
          
          {/* Top Row: Title and Category side-by-side */}
          <div className="p-6 md:p-8 border-b-[1.5px] border-[var(--light-grid)] flex items-baseline gap-4">
            <h1 className="font-[family-name:var(--font-league-gothic)] text-5xl md:text-7xl text-[var(--cream)] leading-none">
              {title}
            </h1>
            {/* Category: Flushed left (following title), Cream color, with / prefix */}
            <span className="text-[var(--cream)] text-[10px] md:text-xs tracking-widest whitespace-nowrap">
              / {category}
            </span>
          </div>
          
          {/* Bottom Row: Role & Year */}
          <div className="flex text-[18px] font-normal leading-none">
            <div className="flex-grow p-5 text-[var(--cream)]">
               {role}
            </div>
            
            <div className="p-5 px-6 border-l-[1.5px] border-[var(--light-grid)] text-[var(--cream)] text-right min-w-fit">
               {year}
            </div>
          </div>
        </div>

        {/* INTRO SUMMARY */}
        <div className="mt-10 max-w-md">
          <p className="font-ibm text-sm md:text-base text-[var(--cream)] leading-relaxed">
            {summary}
          </p>
        </div>

        {/* IN-PAGE PAGINATION */}
        <nav className="mt-16 flex flex-col font-ibm">
          {sections.map((section, idx) => {
            const sectionId = section.toLowerCase().replace(/\s+/g, '-');
            return (
              <div key={section} className="flex flex-col group">
                <a href={`#${sectionId}`} className="flex items-center gap-4 py-3 cursor-pointer">
                  <span className="text-[var(--cream)] text-sm group-hover:text-[var(--highlighter-pink)] transition-colors duration-200">
                    {section}
                  </span>
                </a>
                {idx !== sections.length - 1 && (
                  <div className="ml-[3px] w-[1px] h-8 bg-[var(--grid-grey)] opacity-30" />
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* RIGHT COLUMN: PROJECT HERO THUMBNAIL */}
      <div className="relative w-full aspect-square border-[3px] border-[var(--light-grid)] overflow-hidden">
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