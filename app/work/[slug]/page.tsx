import { workData } from "../../lib/work";
import { notFound } from "next/navigation";
import React, { cloneElement, isValidElement } from "react";
import Navbar from "../../components/navbar";
import WorkHeader from "../../components/work-header";
import OtherProjects from "../../components/work-content/other-projects";
import Footer from "../../components/footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const item = workData[slug as keyof typeof workData];

  if (!item) notFound();

  return (
    <main className="min-h-screen bg-[var(--deep-black)]">
      
      {/* 1. BLUEPRINT SECTION: The grid and frame live only in this scope */}
      <div className="relative overflow-x-hidden">
        
        {/* GLOBAL GRID FRAME & PATTERN */}
        <div className="absolute inset-4 md:inset-10 lg:inset-[100px] border border-[var(--grid-grey)] pointer-events-none -z-10 opacity-30">
          <div className="absolute inset-0 grid-pattern" />
        </div>

        <Navbar />

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 mx-6 md:mx-14 lg:mx-[100px] pt-32 lg:pt-40 pb-32 lg:pb-40">
          
          {/* WORK HEADER */}
          <WorkHeader 
            title={item.title}
            category={""} 
            role={item.role}
            year={item.year}
            summary={item.summary}
            heroImage={item.heroImage}
            sections={[]} 
            contextChunks={item.contextChunks || []}
          />

          {/* PROJECT CONTENT SLOT */}
          <div className="mt-40">
             {item.content ? (
               isValidElement(item.content) ? (
                 cloneElement(item.content as React.ReactElement<any>, { 
                   heroImage: item.heroImage, 
                   title: item.title 
                 })
               ) : (
                 item.content
               )
             ) : null} 
          </div>

          {/* VIEW OTHER PROJECTS SECTION - DISABLED FOR NOW. WILL BE BACK IN THE FUTURE. */}
          {/* <OtherProjects currentSlug={slug} /> */}

        </div>
      </div>

      {/* 2. FOOTER SECTION: Outside the relative wrapper so it has no grid background */}
      <Footer />

    </main>
  );
}

// CAA 12APR26 / 1402H.