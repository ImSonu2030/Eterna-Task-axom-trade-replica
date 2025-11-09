import SectionSkeleton from "../Skeletons/SectionSkeleton";

export default function NewPairsSection() {
  return (
    <section className="rounded-xl border border-zinc-800/60 p-3 bg-zinc-950/40">
      <h2 className="text-sm font-semibold mb-3">New Pairs</h2>
      <SectionSkeleton />
    </section>
  );
}
