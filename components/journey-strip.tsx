import { Coins, HeartPulse, ShieldCheck, Waypoints } from "lucide-react";

const steps = [
  {
    title: "资产积累",
    copy: "会员先通过矿机与理财累积 Token。",
    icon: Coins,
  },
  {
    title: "消费分配",
    copy: "AI 帮助分配到健康、服务与娱乐场景。",
    icon: Waypoints,
  },
  {
    title: "长期陪伴",
    copy: "Nova 持续跟踪生活状态与健康提醒。",
    icon: HeartPulse,
  },
  {
    title: "服务闭环",
    copy: "让平台从产币走到服务体验与复购。",
    icon: ShieldCheck,
  },
];

export function JourneyStrip() {
  return (
    <section className="grid gap-4 lg:grid-cols-4">
      {steps.map((step) => {
        const Icon = step.icon;
        return (
          <div
            key={step.title}
            className="rounded-[28px] border border-slate-200/80 bg-white/85 px-5 py-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-slate-900 p-3 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-base font-semibold text-slate-950">{step.title}</p>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">{step.copy}</p>
          </div>
        );
      })}
    </section>
  );
}
