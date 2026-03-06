import MediaHandler from "../media-handler";

export default function LijssieContent() {
  return (
    <div className="space-y-40">
      {/* Example Section 1 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-video border-[1.5px] border-[var(--light-grid)]">
          <MediaHandler src="/work/lijssie/process-1.jpg" alt="Process 01" />
        </div>
        <div className="flex flex-col justify-center font-ibm">
          <h3 className="text-[var(--grid-grey)] uppercase text-xs tracking-widest mb-4">01 // Discovery</h3>
          <p className="text-[var(--cream)] opacity-80 leading-relaxed">
            This is where you can start writing specific details about the Lijssie project 
            whenever you feel ready, without cluttering your main page logic.
          </p>
        </div>
      </section>
    </div>
  );
}