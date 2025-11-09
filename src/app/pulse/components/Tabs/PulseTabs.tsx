import TabButton from "./TabButton.tsx";

export default function PulseTabs({
  active,
  onChange,
  mobile = false,
}: {
  active: "new" | "final" | "migrated";
  onChange: (tab: "new" | "final" | "migrated") => void;
  mobile?: boolean;
}) {
  if (mobile) {
    return (
      <div className="grid grid-cols-3 px-4 py-2">
        <button
          onClick={() => onChange("new")}
          className={active === "new" ? "text-emerald-400" : "text-zinc-500"}
        >
          New
        </button>
        <button
          onClick={() => onChange("final")}
          className={active === "final" ? "text-emerald-400" : "text-zinc-500"}
        >
          Final
        </button>
        <button
          onClick={() => onChange("migrated")}
          className={active === "migrated" ? "text-emerald-400" : "text-zinc-500"}
        >
          Migrated
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 mb-3">
      <TabButton active={active === "new"} onClick={() => onChange("new")}>
        New Pairs
      </TabButton>
      <TabButton active={active === "final"} onClick={() => onChange("final")}>
        Final Stretch
      </TabButton>
      <TabButton active={active === "migrated"} onClick={() => onChange("migrated")}>
        Migrated
      </TabButton>
    </div>
  );
}
