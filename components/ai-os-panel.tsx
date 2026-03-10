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
  const radarPoints = lifeIndex
    .map((item, index) => {
      const angle = (-90 + index * 90) * (Math.PI / 180);
      const radius = (item.value / 100) * 74;
      const x = 90 + Math.cos(angle) * radius;
      const y = 90 + Math.sin(angle) * radius;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <SectionShell className="relative overflow-hidden border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-emerald-50/50 p-0">
      <div className="relative p-6 md:p-8">
        <div className="os-shell overflow-hidden border-slate-200/80">
          <div className="border-b border-slate-100 bg-white/80 px-5 py-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-teal-700">
                  AI Life Dashboard
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  AI Life Radar
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Nova 会把财富、健康、生活与活跃度整合成一张 AI Life Radar，让用户感受到这不只是数据，而是一个人生系统视图。
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
              <p className="text-sm text-slate-300">AI Life Radar</p>
              <div className="mt-5 flex flex-col items-center gap-6 lg:flex-row lg:items-start">
                <svg viewBox="0 0 180 180" className="h-52 w-52">
                  <circle cx="90" cy="90" r="74" fill="none" stroke="rgba(255,255,255,0.12)" />
                  <circle cx="90" cy="90" r="54" fill="none" stroke="rgba(255,255,255,0.10)" />
                  <circle cx="90" cy="90" r="34" fill="none" stroke="rgba(255,255,255,0.08)" />
                  <line x1="90" y1="16" x2="90" y2="164" stroke="rgba(255,255,255,0.12)" />
                  <line x1="16" y1="90" x2="164" y2="90" stroke="rgba(255,255,255,0.12)" />
                  <polygon points={radarPoints} fill="rgba(45, 212, 191, 0.28)" stroke="#5eead4" strokeWidth="3" />
                </svg>
                <div className="grid flex-1 gap-4">
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
