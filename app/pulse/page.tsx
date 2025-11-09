import { TokenColumn } from "@/components/pulse/TokenColumn";
import { Token } from "@/lib/types";
import { MOCK_NEW_PAIRS } from "@/lib/dummyData";

const newPairs: Token[] = MOCK_NEW_PAIRS; //
const finalStretch: Token[] = [];
const migrated: Token[] = [];

export default function PulsePage() {
  return (
    <main className="min-h-screen bg-black text-white p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Pulse</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <TokenColumn title="New Pairs" tokens={newPairs} />
        <TokenColumn title="Final Stretch" tokens={finalStretch} />
        <TokenColumn title="Migrated" tokens={migrated} />
      </div>
    </main>
  );
}