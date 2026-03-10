import { ArrowUpCircle, Trophy } from "lucide-react";
import { growthSystem, memberTiers } from "@/data/mock-data";
import { SectionShell } from "@/components/section-shell";

export function AIGrowthSection() {
  return (
    <SectionShell className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="rounded-[30px] bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-6 text-white shadow-soft">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-teal-100">
          <Trophy className="h-4 w-4" />
          尊龙汇会员体系
        </div>
        <p className="mt-6 text-sm text-slate-300">Nova Member Level</p>
        <p className="mt-2 text-5xl font-semibold text-[#D4AF37]">{growthSystem.level}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {memberTiers.map((tier) => (
            <span
              key={tier}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200"
            >
              {tier}
            </span>
          ))}
        </div>
      </div>

      <div className="panel border-teal-100 bg-white/90 p-6">
        <p className="text-sm text-slate-500">成长条件</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {growthSystem.requirements.map((item) => (
            <div key={item} className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
              <ArrowUpCircle className="h-5 w-5 text-teal-700" />
              <p className="mt-3 text-sm font-medium leading-6 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[28px] border border-teal-100 bg-teal-50/70 p-5">
          <p className="text-sm font-semibold text-teal-700">Nova 建议</p>
          <p className="mt-2 text-base font-semibold leading-8 text-slate-900">
            {growthSystem.suggestion}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
