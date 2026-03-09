import { HeartPulse, MoonStar, ShieldAlert, Waves } from "lucide-react";
import { lifeIndex, osModules, osStatus, osTabs } from "@/data/mock-data";
import { SectionShell } from "@/components/section-shell";

const icons = {
  sleep: MoonStar,
  stress: Waves,
  glucose: ShieldAlert,
  cardio: HeartPulse,
};

export function AIOsPanel() {
  return (
    <SectionShell className="relative overflow-hidden border-slate-200/80 bg-gradient-to-br from-white via-cyan-50/40 to-emerald-50/50 p-0">
      <div className="relative p-6 md:p-8">
        <div className="os-shell overflow-hidden border-slate-200/80">
          <div className="border-b border-slate-100 bg-white/80 px-5 py-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-700">
                  AI Life Dashboard
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  AI健康生活仪表盘
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  AI管家综合你的收益、生活习惯与健康状态，为你生成今日生活指数。
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {osStatus.map((item) => (
                  <span
                    key={item.label}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600"
                  >
                    {item.label}：{item.value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-b border-slate-100 px-5 py-4">
            <div className="flex flex-wrap gap-2">
              {osTabs.map((tab, index) => (
                <div
                  key={tab}
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    index === 0 ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 p-5 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="os-dark-card p-5">
              <p className="text-sm text-slate-300">AI健康指数</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {lifeIndex.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">{item.label}</span>
                      <span className="font-semibold text-white">{item.value}</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${item.accent}`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {osModules.map((module) => {
                const Icon = icons[module.id as keyof typeof icons];

                return (
                  <div key={module.id} className="os-card p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-slate-950 p-3 text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">{module.title}</p>
                          <p className="mt-1 text-2xl font-semibold text-slate-950">
                            {module.metric}
                          </p>
                        </div>
                      </div>
                      <div className={`h-3 w-3 rounded-full ${module.accent}`} />
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-600">{module.summary}</p>
                    <div className="mt-5 rounded-[1.4rem] bg-slate-50 p-4 text-sm font-medium text-slate-800">
                      {module.action}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
