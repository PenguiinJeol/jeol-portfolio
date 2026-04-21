"use client";
import Link from "next/link";
import MediaHandler from "./media-handler";
import { workData } from "../../lib/work";

interface OtherProjectsProps {
  currentSlug: string;
}

export default function OtherProjects({ currentSlug }: OtherProjectsProps) {
  const projectEntries = Object.entries(workData)
    .filter(([slug]) => slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="mt-40 font-ibm"> 
      
      <div className="py-4 border-t border-[var(--grid-grey)] flex justify-end">
        <span className="tracking-widest text-[14px] text-[var(--cream)] opacity-40">
          View More
        </span>
      </div>

      {/* Reduced gaps: gap-4 for mobile, gap-8 for tablet/desktop (was 14/100px) */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-10">
        {projectEntries.map(([slug, project]) => (
          <Link 
            key={slug} 
            href={`/work/${slug}`}
            className="group flex flex-col hover:bg-[var(--cream)]/5 transition-colors duration-300 border border-[var(--grid-grey)]"
          >
            {/* aspect-video provides exactly the 16:9 (1920x1080) frame scale */}
            <div className="aspect-video overflow-hidden border-b border-[var(--grid-grey)] bg-[var(--deep-black)] flex items-center justify-center">
               <MediaHandler 
                  src={project.heroImage} 
                  alt={project.title}
                  aspect="contain" 
               />
            </div>
            
            <div className="p-6 flex flex-col gap-2">
              <h4 className="text-[var(--cream)] font-medium text-lg leading-tight tracking-tight">
                {project.title}
              </h4>
              <p className="text-[var(--cream)] text-xs opacity-60 leading-relaxed line-clamp-2">
                {project.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// CAA 12APR26 / 1825H.