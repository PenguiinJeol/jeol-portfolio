import { workData } from "../../lib/work"; // Ensure this is .tsx now
import { notFound } from "next/navigation";
import Navbar from "../../components/navbar";
import WorkHeader from "../../components/work-header";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const item = workData[slug as keyof typeof workData];

  if (!item) notFound();

  const sections = item.sections || ["Overview", "Process", "Final"];

  return (
    <main className="relative min-h-screen bg-[var(--deep-black)] overflow-x-hidden">
      
      {/* GLOBAL GRID FRAME & PATTERN */}
      <div className="absolute inset-4 md:inset-10 lg:inset-[100px] border border-[var(--grid-grey)] pointer-events-none -z-10 opacity-30 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
      </div>

      <Navbar />

      <div className="relative z-10 mx-6 md:mx-14 lg:mx-[100px] pt-32 lg:pt-40 pb-20">
        
        {/* CALL THE HEADER TEMPLATE */}
        <WorkHeader 
          title={item.title}
          category={item.category}
          role={item.role}
          year={item.year}
          summary={item.summary}
          heroImage={item.heroImage}
          sections={sections}
        />

        {/* PROJECT CONTENT SLOT */}
        <div className="mt-40">
           {item.content ? (
             item.content
           ) : (
             <div className="h-[40vh] border-t border-dashed border-[var(--grid-grey)] flex items-center justify-center opacity-20">
               <p className="font-ibm uppercase tracking-widest text-xs text-[var(--cream)]">
                 Content Block Not Initialized
               </p>
             </div>
           )}
        </div>

      </div>
    </main>
  );
}