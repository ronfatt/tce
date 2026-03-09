import { Activity, GlassWater, MoonStar, Sparkles, Waves } from "lucide-react";
import { healthAdvice, healthFocusOptions, healthManagementCopy, healthSnapshot } from "@/data/mock-data";
import { SectionShell } from "@/components/section-shell";

const icons = [MoonStar, GlassWater, Waves, Activity];

export function HealthAdvisorCard() {
  return (
    <SectionShell className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[30px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-emerald-50 p-6">
        <div className="pill">健康顾问</div>
        <h2 className="section-title mt-4">AI健康顾问</h2>
        <p className="section-copy">{healthManagementCopy}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {healthSnapshot.map((item, index) => {
            const Icon = icons[index];
            return (
              <div key={item.label} className="rounded-3xl border border-white/80 bg-white/90 p-5 shadow-sm">
                <Icon className="h-5 w-5 text-cyan-700" />
                <p className="mt-3 text-sm text-slate-500">{item.label}</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="panel border-cyan-100 bg-white/90 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-slate-950 p-3 text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-slate-500">健康关注</p>
            <p className="text-lg font-semibold text-slate-950">慢性管理与日常保养</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {healthFocusOptions.map((item) => (
            <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
              {item}
            </span>
          ))}
        </div>

        <p className="mt-6 rounded-[28px] border border-fuchsia-100 bg-fuchsia-50/70 p-6 text-base leading-8 text-slate-700">
          “{healthAdvice}”
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#health-products" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
            查看健康方案
          </a>
          <a href="#assessment" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">
            生成健康建议
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
