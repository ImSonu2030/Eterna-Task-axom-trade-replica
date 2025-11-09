import { cn } from "../../utils/classnames.tsx";

export default function TabButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1.5 rounded-md text-sm border",
        active
          ? "bg-zinc-800 text-zinc-100 border-zinc-600"
          : "bg-transparent text-zinc-400 hover:text-zinc-200 border-transparent"
      )}
    >
      {children}
    </button>
  );
}
