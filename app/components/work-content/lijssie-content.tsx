"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import MediaHandler from "../work-content/media-handler";

interface ProjectData {
  heroImage?: string;
  title?: string;
}

/* --- REUSABLE SLIDER COMPONENT --- */
function ImageCatalog({
  images,
  onExpand,
}: {
  images: string[];
  onExpand: (src: string) => void;
}) {
  const [index, setIndex] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[450px] group overflow-hidden bg-[var(--deep-black)]">
      {/* Top-aligned Pagination (Solid colors for visibility) */}
      <div className="absolute top-8 left-0 right-0 z-30 flex justify-center items-center gap-2 pointer-events-none">
        {images.map((_, i) => (
          <div
            key={i}
            className={`transition-all duration-200 rounded-full ${
              i === index ? "w-2 h-2 bg-[#ff7eb6]" : "w-1.5 h-1.5 bg-[#404040]"
            }`}
          />
        ))}
      </div>

      {/* Main Image View - Instant Switch */}
      <div
        className="absolute inset-0 cursor-zoom-in"
        onClick={() => onExpand(images[index])}
      >
        <div className="h-full w-full">
          <MediaHandler
            key={index}
            src={images[index]}
            alt="Catalog Slide"
            aspect="contain"
          />
        </div>
      </div>

      {/* Left Navigation Box (Restricted Click Area) */}
      <div className="absolute inset-y-0 left-6 z-20 flex items-center pointer-events-none">
        <button
          onClick={prevSlide}
          className="bg-[var(--main-dark)] p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-100 border border-[var(--grid-grey)] shadow-2xl pointer-events-auto hover:brightness-125 active:scale-95"
          aria-label="Previous slide"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--cream)"
            strokeWidth="2.5"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>

      {/* Right Navigation Box (Restricted Click Area) */}
      <div className="absolute inset-y-0 right-6 z-20 flex items-center pointer-events-none">
        <button
          onClick={nextSlide}
          className="bg-[var(--main-dark)] p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-100 border border-[var(--grid-grey)] shadow-2xl pointer-events-auto hover:brightness-125 active:scale-95"
          aria-label="Next slide"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--cream)"
            strokeWidth="2.5"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function LijssieContent({ heroImage, title }: ProjectData) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const images = {
    designSystem1: "/work/lijssie/lijssie-designsystem1.jpg",
    designSystem2: "/work/lijssie/lijssie-designsystem2.jpg",
    datasetPhysical: "/work/lijssie/lijssie-dataset-physical.jpg",
    datasetProcessed: "/work/lijssie/lijssie-dataset-processed.png",
    sitemapSlides: [
      "/work/lijssie/sitemap/lijssie-sitemap-full.png",
      "/work/lijssie/sitemap/lijssie-sitemap-1.jpg",
      "/work/lijssie/sitemap/lijssie-sitemap-2.jpg",
      "/work/lijssie/sitemap/lijssie-sitemap-3.jpg",
      "/work/lijssie/sitemap/lijssie-sitemap-4.jpg",
    ],
    auditSlides: [
      "/work/lijssie/audit/lijssie-qc-audit-1.jpg",
      "/work/lijssie/audit/lijssie-qc-audit-2.jpg",
      "/work/lijssie/audit/lijssie-qc-audit-3.jpg",
      "/work/lijssie/audit/lijssie-qc-audit-4.jpg",
    ],
  };

  const Lightbox = (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12 lg:p-20 bg-[#0a0a0a]/95 backdrop-blur-xl cursor-zoom-out"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 z-[10000] text-[var(--cream)] opacity-60 hover:opacity-100 transition-opacity p-2"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="8" y1="8" x2="24" y2="24" />
              <line x1="24" y1="8" x2="8" y2="24" />
            </svg>
          </button>

          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            className="relative flex items-center justify-center pointer-events-none"
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              onClick={(e) => e.stopPropagation()}
              className="max-w-[95vw] max-h-[90vh] object-contain border border-[var(--grid-grey)] shadow-2xl pointer-events-auto cursor-default bg-[var(--deep-black)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="space-y-40">
      {mounted && createPortal(Lightbox, document.body)}

      {/* SECTION 1: DESIGN SYSTEM */}
      <section id="cs-content-1" className="mt-20 scroll-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 font-ibm items-stretch">
          <div className="flex flex-col flex-grow z-10">
            <div className="pl-7 pt-8 pr-6 pb-5 border border-r-0 border-[var(--grid-grey)]">
              <h3 className="text-2xl text-[var(--cream)] font-medium leading-normal">
                Establishing design system, consistencies and standards
              </h3>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="px-7 py-6 border-x border-b border-r-0 border-[var(--grid-grey)]">
                <p className="text-[var(--cream)] text-base opacity-80 leading-relaxed max-w-prose">
                  With the transition to a native mobile app and rapid expansion
                  of features, it was important to create a design system that
                  could serve as the reference point for the project's visual
                  language.
                  <br />
                  <br />
                  The goal was to ensure new feature additions aligned with the
                  vision of emulating analog simplicity, adhered to the
                  minimalist aesthetic, and felt like a singular lightweight
                  product that was intuitive to pick up.
                </p>
              </div>
              <div className="flex-grow min-h-[80px]" />
              <div className="px-7 py-6 border border-r-0 border-[var(--grid-grey)]">
                <p className="text-[var(--cream)] text-sm md:text-base opacity-70 leading-relaxed max-w-prose">
                  Establishing the design system and standards early helped
                  avoid an unpolished look, allowing the product to scale
                  towards a multi-feature Beta without visual friction, ensuring
                  a consistent identity across every user touchpoint.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--deep-black)] flex flex-col divide-y divide-[var(--grid-grey)] border border-[var(--grid-grey)] -ml-[1px]">
            <div
              className="relative h-[450px] cursor-zoom-in group overflow-hidden"
              onClick={() => setSelectedImage(images.designSystem1)}
            >
              <MediaHandler
                src={images.designSystem1}
                alt="Design System 1"
                aspect="contain"
                priority
              />
              <div className="absolute inset-0 bg-[var(--cream)]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <div
              className="relative h-[450px] cursor-zoom-in group overflow-hidden"
              onClick={() => setSelectedImage(images.designSystem2)}
            >
              <MediaHandler
                src={images.designSystem2}
                alt="Design System 2"
                aspect="contain"
              />
              <div className="absolute inset-0 bg-[var(--cream)]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DATA SCOPE */}
      <section id="cs-content-2" className="scroll-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 font-ibm items-stretch">
          <div className="flex flex-col flex-grow z-10">
            <div className="border border-r-0 border-[var(--grid-grey)]">
              <div className="pl-7 pt-8 pr-6 pb-5 border-b border-[var(--grid-grey)]">
                <h3 className="text-2xl text-[var(--cream)] font-medium leading-normal">
                  Understanding the data scope and input logic.
                </h3>
              </div>
              <div className="px-7 py-6">
                <p className="text-[var(--cream)] text-base opacity-80 leading-relaxed max-w-prose">
                  An important aspect of the application that was vital for
                  instilling product confidence within users was the ability to
                  accommodate the diverse and often messy structure of
                  day-to-day grocery list building.
                </p>
              </div>
            </div>
            <div className="mt-20 border border-r-0 border-[var(--grid-grey)] divide-y divide-[var(--grid-grey)]">
              <div className="px-7 py-6">
                <p className="text-[var(--cream)] text-sm md:text-base opacity-70 leading-relaxed max-w-prose">
                  Speed ensured the interface remained responsive in the few
                  seconds a user has when typing an item on the go. Flexibility
                  ensured our system could accommodate a wide scope of
                  individual input styles and ensure every input was
                  successfully registered into their lists.
                </p>
              </div>
              <div className="px-7 py-6">
                <p className="text-[var(--cream)] text-sm md:text-base opacity-70 leading-relaxed max-w-prose">
                  To achieve this, I led the collection, analysis and
                  translation of input data from users to understand the broad
                  spectrum of possible list input variations.
                </p>
              </div>
            </div>
            <div className="flex-grow min-h-[80px]" />
            <div className="px-7 py-6 border border-r-0 border-[var(--grid-grey)]">
              <p className="text-[var(--cream)] text-sm md:text-base opacity-70 leading-relaxed max-w-prose">
                This data collection & research helped the team build a system
                that could accept natural user input styles, ensuring that user
                intent was accurately represented and registered without forcing
                them to change their grocery list-building habits.
              </p>
            </div>
          </div>

          <div className="bg-[var(--deep-black)] flex flex-col divide-y divide-[var(--grid-grey)] border border-[var(--grid-grey)] -ml-[1px]">
            <div
              className="relative h-[450px] cursor-zoom-in group overflow-hidden"
              onClick={() => setSelectedImage(images.datasetPhysical)}
            >
              <MediaHandler
                src={images.datasetPhysical}
                alt="Physical Data"
                aspect="cover"
              />
              <div className="absolute inset-0 bg-[var(--cream)]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <div
              className="relative h-[450px] cursor-zoom-in group overflow-hidden"
              onClick={() => setSelectedImage(images.datasetProcessed)}
            >
              <MediaHandler
                src={images.datasetProcessed}
                alt="Processed Data"
                aspect="contain"
              />
              <div className="absolute inset-0 bg-[var(--cream)]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DETAILS & LAST MILE */}
      <section id="cs-content-3" className="scroll-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 font-ibm items-stretch">
          <div className="flex flex-col flex-grow z-10">
            <div className="border border-r-0 border-[var(--grid-grey)]">
              <div className="pl-7 pt-8 pr-6 pb-5 border-b border-[var(--grid-grey)]">
                <h3 className="text-2xl text-[var(--cream)] font-medium leading-normal">
                  Details & Last-mile Checks
                </h3>
              </div>
              {/* Split Content Block 1 */}
              <div className="px-7 py-6 border-b border-[var(--grid-grey)]">
                <p className="text-[var(--cream)] text-base opacity-80 leading-relaxed max-w-prose">
                  I led the operational readiness of the product, conducting
                  end-to-end testing to identify gaps and details that required
                  patching before launch, ensuring the product was reliable and
                  primed for user volume.
                </p>
              </div>
              {/* Split Content Block 2 */}
              <div className="px-7 py-6">
                <p className="text-[var(--cream)] text-base opacity-80 leading-relaxed max-w-prose">
                  Testing protocols were established to provide a structured
                  means of data collection to aid in decision-making driven by
                  objective user feedback.
                  <br />
                  <br />
                  Sitemaps were planned out to ensure overall product structure
                  and all in-app connecting flows were accounted for.
                </p>
              </div>
            </div>
            <div className="flex-grow min-h-[120px]" />
            <div className="border border-r-0 border-[var(--grid-grey)] divide-y divide-[var(--grid-grey)]">
              <div className="px-7 py-6">
                <p className="text-[var(--cream)] text-sm md:text-base opacity-70 leading-relaxed max-w-prose">
                  We conducted aggressive and elaborate stress-testing on
                  high-traffic areas of the app, attempting to break the product
                  in order to uncover and patch critical edge cases before mass
                  user adoption took place.
                </p>
              </div>
              <div className="px-7 py-6">
                <p className="text-[var(--cream)] text-sm md:text-base opacity-70 leading-relaxed max-w-prose">
                  Rigorous auditing of the onboarding flows and interface
                  messaging was conducted to mitigate technical friction,
                  ensuring the product promoted user confidence in a new system.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--deep-black)] flex flex-col divide-y divide-[var(--grid-grey)] border border-[var(--grid-grey)] -ml-[1px]">
            <ImageCatalog
              images={images.sitemapSlides}
              onExpand={(src) => setSelectedImage(src)}
            />
            <ImageCatalog
              images={images.auditSlides}
              onExpand={(src) => setSelectedImage(src)}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// CAA 22APR26 / 2300H.
