"use client";
import MediaHandler from "../work-content/media-handler";

interface ProjectData {
  heroImage?: string;
  title?: string;
}

export default function LijssieContent({ heroImage, title }: ProjectData) {
  return (
    <div className="space-y-40">
      {/* SECTION: CS-CONTENT-1 */}
      <section id="cs-content-1" className="mt-20 scroll-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 font-ibm items-stretch">
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="flex flex-col flex-grow z-10">
            {/* Header Block: border-r-0 to prevent doubling with the right column */}
            <div className="pl-7 pt-8 pr-6 pb-5 border border-r-0 border-[var(--grid-grey)]">
              <h3 className="text-2xl text-[var(--cream)] font-medium leading-normal">
                Establishing design system, consistencies and standards
              </h3>
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-grow">
              {/* TOP CHUNK: border-r-0 to maintain 1px spine */}
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

              {/* THE VOID: No borders here */}
              <div className="flex-grow min-h-[80px]" />

              {/* FINAL CHUNK: border-r-0 to maintain 1px spine */}
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

          {/* RIGHT COLUMN: MEDIA */}
          {/* -ml-[1px] snaps this column's border perfectly onto the left side's edge */}
          <div className="bg-[var(--deep-black)] flex flex-col divide-y divide-[var(--grid-grey)] border border-[var(--grid-grey)] -ml-[1px]">
            <div className="relative h-[450px]">
              <MediaHandler
                src={"/work/lijssie/lijssie-designsystem1.jpg"}
                alt={`Design System Visual 01`}
                aspect="contain" // cover does cropping. contain doesn't.
                priority
              />
            </div>
            <div className="relative h-[450px]">
              <MediaHandler
                src={"/work/lijssie/lijssie-designsystem2.jpg"}
                alt={`Design System Visual 02`}
                aspect="contain" // cover does cropping. contain doesn't.
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CS-CONTENT-2 */}
      <section id="cs-content-2" className="scroll-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 font-ibm items-stretch">
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="flex flex-col flex-grow z-10">
            {/* GROUP 1: Header + First Chunk */}
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

            {/* GROUP 2: Spaced Middle Chunks (Grouped together) */}
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

            {/* DYNAMIC SPACER */}
            <div className="flex-grow min-h-[80px]" />

            {/* GROUP 3: Final Anchored Chunk */}
            <div className="px-7 py-6 border border-r-0 border-[var(--grid-grey)]">
              <p className="text-[var(--cream)] text-sm md:text-base opacity-70 leading-relaxed max-w-prose">
                This data collection & research helped the team build a system
                that could accept natural user input styles, ensuring that user
                intent was accurately represented and registered without forcing
                them to change their grocery list-building habits.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: MEDIA */}
          <div className="bg-[var(--deep-black)] flex flex-col divide-y divide-[var(--grid-grey)] border border-[var(--grid-grey)] -ml-[1px]">
            <div className="relative h-[450px]">
              <MediaHandler
                src={"/work/lijssie/lijssie-dataset-physical.jpg"}
                alt="Data Input Logic Visual 01"
                aspect="cover" // cover does cropping. contain doesn't.
              />
            </div>
            <div className="relative h-[450px]">
              <MediaHandler
                src={heroImage || ""}
                alt="Data Input Logic Visual 02"
                aspect="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CS-CONTENT-3 */}
      <section id="cs-content-3" className="scroll-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 font-ibm items-stretch">
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="flex flex-col flex-grow z-10">
            {/* GROUP 1: Header + First Chunk */}
            <div className="border border-r-0 border-[var(--grid-grey)]">
              <div className="pl-7 pt-8 pr-6 pb-5 border-b border-[var(--grid-grey)]">
                <h3 className="text-2xl text-[var(--cream)] font-medium leading-normal">
                  Details & Last-mile Checks
                </h3>
              </div>
              <div className="px-7 py-6">
                <p className="text-[var(--cream)] text-base opacity-80 leading-relaxed max-w-prose">
                  I led the operational readiness of the product, conducting
                  end-to-end testing to identify gaps and details that required
                  patching before launch, ensuring the product was reliable and
                  primed for user volume.
                  <br />
                  <br />
                  Testing protocols were established to provide a structured
                  means of data collection to aid in decision-making driven by
                  objective user feedback.
                </p>
              </div>
            </div>

            {/* THE VOID */}
            <div className="flex-grow min-h-[120px]" />

            {/* GROUP 2: Bottom Cluster (Middle + Final Chunks) */}
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

          {/* RIGHT COLUMN: MEDIA */}
          <div className="bg-[var(--deep-black)] flex flex-col divide-y divide-[var(--grid-grey)] border border-[var(--grid-grey)] -ml-[1px]">
            <div className="relative h-[450px]">
              <MediaHandler
                src={heroImage || ""}
                alt="Quality Assurance Visual 01"
                aspect="cover"
              />
            </div>
            <div className="relative h-[450px]">
              <MediaHandler
                src={heroImage || ""}
                alt="Quality Assurance Visual 02"
                aspect="cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// CAA 12APR26 / 1122H.
