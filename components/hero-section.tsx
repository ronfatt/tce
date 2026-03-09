import { ArrowRight, Sparkles, TrendingUp, Wallet, HeartPulse } from "lucide-react";
import { dashboardMetrics, heroHighlights } from "@/data/mock-data";
import { SectionShell } from "@/components/section-shell";

export function HeroSection() {
  return (
    <SectionShell className="relative overflow-hidden px-6 py-8 md:px-10 md:py-10">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-hero-grid bg-[size:26px_26px] opacity-40 md:block" />
      <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="absolute right-10 top-16 h-32 w-32 rounded-full bg-fuchsia-200/50 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-6">
          <div className="pill">
            <Sparkles className="h-4 w-4" />
            中文 AI 体验层 Demo
          </div>
          <div className="space-y-4">
            <h1 className="max-w-3xl font-[var(--font-heading)] text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              AI 智能体验系统 Demo
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              为 Token 平台增加 AI 管家与 AI 健康顾问，提升用户体验、活跃度与复购率
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#ai-chat"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              立即体验
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700"
            >
              查看推荐
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/70 bg-white/80 p-4 text-sm leading-6 text-slate-600 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="panel-dark relative overflow-hidden p-5 md:p-7">
          <div className="absolute -top-8 right-8 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />
          <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-fuchsia-400/15 blur-2xl" />
          <div className="relative space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">智能仪表盘预览</p>
                <h2 className="mt-1 text-2xl font-semibold">AI 用户价值面板</h2>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-cyan-200 animate-glow">
                实时 Demo
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {dashboardMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <p className="text-sm text-slate-400">{metric.label}</p>
                  <p className={`mt-2 text-xl font-semibold ${metric.tone}`}>
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-cyan-300/20 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-300">价值转化趋势</p>
                <TrendingUp className="h-5 w-5 text-cyan-300" />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-4">
                  <Wallet className="h-5 w-5 text-cyan-300" />
                  <p className="mt-3 text-xs text-slate-400">收益理解</p>
                  <p className="mt-1 text-sm font-medium">让用户看懂 Token 去向</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <HeartPulse className="h-5 w-5 text-emerald-300" />
                  <p className="mt-3 text-xs text-slate-400">健康互动</p>
                  <p className="mt-1 text-sm font-medium">把健康建议嵌入日常使用</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <Sparkles className="h-5 w-5 text-fuchsia-300" />
                  <p className="mt-3 text-xs text-slate-400">AI 导购</p>
                  <p className="mt-1 text-sm font-medium">提升产品兑换与复购率</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
