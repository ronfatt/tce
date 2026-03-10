import { AlertTriangle, ArrowRight, Brain, Droplets } from "lucide-react";
import {
  emotionInsight,
  healthRiskItems,
  healthRiskSummary,
  riskExplanation,
} from "@/data/mock-data";
import { SectionShell } from "@/components/section-shell";

export function AIHealthRiskSection() {
  return (
    <SectionShell className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[30px] bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-6 text-white shadow-soft">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-teal-100">
          <Brain className="h-4 w-4" />
          AI情绪分析
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-300">当前情绪指数</p>
            <p className="mt-2 text-4xl font-semibold text-teal-200">{emotionInsight.score}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-300">状态</p>
            <p className="mt-2 text-2xl font-semibold text-amber-300">{emotionInsight.status}</p>
          </div>
        </div>
        <p className="mt-5 text-base leading-8 text-slate-100">{emotionInsight.explanation}</p>
        <div className="mt-5 space-y-3">
          {emotionInsight.suggestions.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 text-sm text-slate-100">
              <Droplets className="h-4 w-4 text-teal-200" />
              {item}
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-[28px] border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-300">推荐方案</p>
          <p className="mt-2 text-xl font-semibold text-white">{emotionInsight.product}</p>
        </div>
      </div>

      <div className="panel border-cyan-100 bg-white/90 p-6">
        <div className="pill">健康风险观察</div>
        <h2 className="section-title mt-4">AI健康风险监测</h2>
        <p className="section-copy">
          Nova 会根据饮食、睡眠和日常状态做出轻量健康观察，帮助用户更早理解风险变化，但不会替代医生判断。
        </p>
        <div className="mt-6 space-y-4">
          {healthRiskItems.map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white p-3 shadow-sm">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                </div>
                <p className="text-base font-semibold text-slate-900">{item.label}</p>
              </div>
              <p className={`text-sm font-semibold ${item.tone}`}>{item.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[28px] border border-amber-100 bg-amber-50/70 p-5">
          <p className="text-sm text-slate-700">{healthRiskSummary}</p>
          <p className="mt-3 text-xs leading-6 text-slate-500">
            注意：此为健康提醒，不构成医疗诊断。
          </p>
        </div>
        <div className="mt-4 rounded-[28px] border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-semibold text-slate-900">AI风险说明</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">{riskExplanation}</p>
        </div>
        <a href="#health-products" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
          查看恢复方案
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </SectionShell>
  );
}
