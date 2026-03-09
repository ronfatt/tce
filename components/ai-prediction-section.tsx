import { LineChart } from "lucide-react";
import { predictiveInsights } from "@/data/mock-data";
import { SectionShell } from "@/components/section-shell";

export function AIPredictionSection() {
  return (
    <SectionShell>
      <div>
        <div className="pill">收益说明</div>
        <h2 className="section-title mt-4">AI收益预测</h2>
        <p className="section-copy">
          对于已有 Token 或积分体系的平台，Nova 可以把收益数据解释成更稳妥、更易理解的长期节奏。
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {predictiveInsights.map((insight) => (
          <div key={`${insight.title}-${insight.highlight}`} className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-cyan-50 px-3 py-2 text-xs font-semibold text-cyan-700">
                {insight.label}
              </span>
              <LineChart className="h-5 w-5 text-cyan-700" />
            </div>
            <p className="mt-5 text-sm text-slate-500">{insight.title}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-950">{insight.highlight}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{insight.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
