import { BrainCircuit } from "lucide-react";
import { SectionShell } from "@/components/section-shell";
import { coreStatement, upgradedStatement } from "@/data/mock-data";

export function CoreStatement() {
  return (
    <SectionShell className="border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-emerald-50">
      <div className="flex items-start gap-4">
        <div className="rounded-3xl bg-slate-950 p-4 text-white shadow-glow">
          <BrainCircuit className="h-6 w-6" />
        </div>
        <div>
          <div className="pill">核心定位</div>
          <p className="mt-4 max-w-4xl text-lg font-semibold leading-8 text-slate-950 md:text-2xl">
            {coreStatement}
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
            {upgradedStatement}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
