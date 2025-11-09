import TokenItemSkeleton from "./TokenItemSkeleton";

export default function SectionSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <TokenItemSkeleton key={i} />
      ))}
    </div>
  );
}