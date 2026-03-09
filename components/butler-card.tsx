import { ArrowUpRight, BrainCircuit, HeartPulse, WalletCards } from "lucide-react";
import { butlerReminder } from "@/data/mock-data";
import { SectionShell } from "@/components/section-shell";

const stats = [
  { label: "今日收益", value: butlerReminder.tokenGain, icon: ArrowUpRight },
  { label: "当前余额", value: butlerReminder.balance, icon: WalletCards },
  { label: "健康评分", value: butlerReminder.healthScore, icon: HeartPulse },
  { label: "Nova 判断", value: butlerReminder.action, icon: BrainCircuit },
];

export function ButlerCard() {
  return (
    <SectionShell className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <div className="pill">AI 每日概览</div>
        <h2 className="section-title mt-4">AI今日总结</h2>
        <p className="section-copy">
          Nova 会把收益、健康状态与今日重点动作整理成一个清晰摘要，让用户感到 AI 是在为自己服务。
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-3xl border border-slate-200/80 bg-slate-50/90 p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white p-3 shadow-sm">
                    <Icon className="h-5 w-5 text-cyan-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">{item.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-6 text-white shadow-glow">
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-cyan-100">
            <BrainCircuit className="h-4 w-4" />
            Nova 解读
          </div>
          <p className="mt-5 text-lg leading-8 text-slate-100 md:text-xl">“{butlerReminder.quote}”</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#health-products" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">
              查看健康方案
            </a>
            <a href="#ai-chat" className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white">
              打开健康助手
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
