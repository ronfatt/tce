import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Wallet,
  HeartPulse,
  Bot,
} from "lucide-react";
import {
  dashboardMetrics,
  heroHighlights,
  heroSuggestions,
  lifeIndex,
  novaGreeting,
  predictiveInsights,
} from "@/data/mock-data";
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
            AI Companion OS Demo
          </div>
          <div className="max-w-xl rounded-[28px] border border-cyan-100 bg-white/90 p-5 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-slate-950 p-3 text-white">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-950">{novaGreeting.title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {novaGreeting.description}
                </p>
                <p className="mt-3 text-sm font-medium text-cyan-700">
                  {novaGreeting.status}
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="max-w-3xl font-[var(--font-heading)] text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              AI Life OS 控制中心
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              AI管家 Nova 实时分析你的收益、健康、娱乐与消费习惯，为你提供每日最佳策略。
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#tasks"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              进入 AI管家模式
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
                <p className="text-sm text-slate-300">Life Dashboard</p>
                <h2 className="mt-1 text-2xl font-semibold">AI管家实时概览</h2>
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
                <p className="text-sm text-slate-300">AI今日建议</p>
                <TrendingUp className="h-5 w-5 text-cyan-300" />
              </div>
              <div className="mt-5 space-y-3">
                {heroSuggestions.map((item, index) => {
                  const icons = [Wallet, HeartPulse, Sparkles];
                  const Icon = icons[index];

                  return (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                    >
                      <div className="rounded-2xl bg-white/10 p-3">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>
                      <p className="text-sm font-medium text-slate-100">
                        {index + 1} {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {predictiveInsights.map((insight) => (
                <div
                  key={insight.highlight}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">
                    {insight.label}
                  </p>
                  <p className="mt-3 text-sm text-slate-300">{insight.title}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{insight.highlight}</p>
                  <p className="mt-2 text-sm text-slate-400">{insight.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-cyan-300/20 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-300">AI Life Index</p>
                <Sparkles className="h-5 w-5 text-fuchsia-300" />
              </div>
              <div className="mt-5 space-y-4">
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
        </div>
      </div>
    </SectionShell>
  );
}
