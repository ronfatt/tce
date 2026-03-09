import { SectionShell } from "@/components/section-shell";
import { businessValues, demoFooterCopy } from "@/data/mock-data";

export function FooterNote() {
  return (
    <SectionShell className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
      <div className="max-w-4xl">
        <div className="pill border-white/10 bg-white/10 text-teal-100">Demo 说明</div>
        <h2 className="mt-4 text-3xl font-semibold">Demo 说明</h2>
        <p className="mt-5 text-lg font-semibold leading-8 text-white">
          AI Life OS 是一个智能生活操作系统，通过分析用户的情绪状态、健康变化与消费行为，帮助用户做出更好的生活与消费决策。
        </p>
        <div className="mt-6">
          <p className="text-sm font-semibold text-teal-200">这套系统更适合 40+ 用户，因为它强调健康、稳定与生活管理</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {businessValues.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                {item}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-5 text-base leading-8 text-slate-200">{demoFooterCopy}</p>
        <div className="mt-4 trust-note border-amber-200/40 bg-amber-50/10 text-amber-100">
          当前页面所有数据均为演示用模拟数据，健康提醒仅用于日常管理参考，不构成医疗诊断。
        </div>
      </div>
    </SectionShell>
  );
}
