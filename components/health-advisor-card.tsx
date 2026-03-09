import { Activity, GlassWater, MoonStar, Sparkles, Waves } from "lucide-react";
import { healthAdvice, healthSnapshot } from "@/data/mock-data";
import { SectionShell } from "@/components/section-shell";

const icons = [MoonStar, GlassWater, Waves, Activity];

export function HealthAdvisorCard() {
  return (
    <SectionShell className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[30px] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-fuchsia-50 p-6">
        <div className="pill">健康互动层</div>
        <h2 className="section-title mt-4">AI健康顾问</h2>
        <p className="section-copy">
          AI管家会持续观察用户近期的生活状态，并给出简洁、可解释、可转化为产品建议的健康提醒。
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {healthSnapshot.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={item.label}
                className="rounded-3xl border border-white/80 bg-white/90 p-5 shadow-sm"
              >
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
            <p className="text-sm text-slate-500">AI建议文案</p>
            <p className="text-lg font-semibold text-slate-950">近期状态解读</p>
          </div>
        </div>

        <p className="mt-6 rounded-[28px] border border-fuchsia-100 bg-fuchsia-50/70 p-6 text-base leading-8 text-slate-700">
          “{healthAdvice}”
        </p>
        <div className="mt-5 rounded-[28px] border border-cyan-100 bg-cyan-50/70 p-5">
          <p className="text-sm text-slate-500">推荐产品</p>
          <p className="mt-2 text-lg font-semibold text-slate-950">能量恢复组合</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#assessment"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            生成健康建议
          </a>
          <a
            href="#products"
            className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700"
          >
            查看组合
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
