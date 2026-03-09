import { SectionShell } from "@/components/section-shell";
import { businessValues, demoFooterCopy } from "@/data/mock-data";

export function FooterNote() {
  return (
    <SectionShell className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white">
      <div className="max-w-4xl">
        <div className="pill border-white/10 bg-white/10 text-cyan-100">Demo 说明</div>
        <h2 className="mt-4 text-3xl font-semibold">Demo 说明</h2>
        <p className="mt-5 text-lg font-semibold leading-8 text-white">
          AI管家是平台的核心智能系统，通过数据分析与个性化建议，帮助用户管理收益、健康与消费。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          更大的概念是 AI Companion OS: 让 AI 统一管理财富、健康、娱乐与消费，成为平台的智能增长层。
        </p>
        <div className="mt-6">
          <p className="text-sm font-semibold text-cyan-200">AI 不是装饰，而是平台增长引擎</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {businessValues.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-5 text-base leading-8 text-slate-200">{demoFooterCopy}</p>
        <p className="mt-4 text-sm text-slate-400">
          当前页面所有数据均为演示用模拟数据，不代表真实收益或医疗建议。
        </p>
      </div>
    </SectionShell>
  );
}
