import { SectionShell } from "@/components/section-shell";
import { demoFooterCopy } from "@/data/mock-data";

export function FooterNote() {
  return (
    <SectionShell className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white">
      <div className="max-w-4xl">
        <div className="pill border-white/10 bg-white/10 text-cyan-100">Demo 说明</div>
        <h2 className="mt-4 text-3xl font-semibold">Demo 说明</h2>
        <p className="mt-5 text-lg font-semibold leading-8 text-white">
          AI管家是平台的核心智能系统，通过数据分析与个性化建议，帮助用户管理收益、健康与消费。
        </p>
        <p className="mt-5 text-base leading-8 text-slate-200">{demoFooterCopy}</p>
        <p className="mt-4 text-sm text-slate-400">
          当前页面所有数据均为演示用模拟数据，不代表真实收益或医疗建议。
        </p>
      </div>
    </SectionShell>
  );
}
