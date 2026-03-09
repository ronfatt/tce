import { ArrowUpRight, BrainCircuit, HeartPulse, WalletCards } from "lucide-react";
import { butlerReminder } from "@/data/mock-data";
import { SectionShell } from "@/components/section-shell";

const stats = [
  { label: "今日矿机收益", value: butlerReminder.tokenGain, icon: ArrowUpRight },
  { label: "当前余额", value: butlerReminder.balance, icon: WalletCards },
  { label: "健康状态评分", value: butlerReminder.healthScore, icon: HeartPulse },
  { label: "AI分析", value: butlerReminder.action, icon: BrainCircuit },
];

export function ButlerCard() {
  return (
    <SectionShell className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <div className="pill">AI 每日概览</div>
        <h2 className="section-title mt-4">AI今日总结</h2>
        <p className="section-copy">
          AI管家为你整理了今日概览，把资产、健康与消费方向合并成一个更适合演示的智能总结卡。
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-200/80 bg-slate-50/90 p-5 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white p-3 shadow-sm">
                    <Icon className="h-5 w-5 text-cyan-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-6 text-white shadow-glow">
        <div className="absolute -right-8 top-6 h-28 w-28 rounded-full bg-fuchsia-400/20 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-cyan-300/20 blur-2xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-cyan-100">
            <BrainCircuit className="h-4 w-4" />
            AI分析
          </div>
          <p className="mt-5 text-lg leading-8 text-slate-100 md:text-xl">
            “{butlerReminder.quote}”
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              查看推荐
            </a>
            <a
              href="#ai-chat"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              打开 AI 顾问
            </a>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
