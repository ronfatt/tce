import { ArrowRightLeft, Banknote, Cpu } from "lucide-react";
import {
  assetRecommendations,
  assetRecommendationSummary,
} from "@/data/mock-data";
import { SectionShell } from "@/components/section-shell";

const icons = {
  miner: Cpu,
  wealth: Banknote,
  allocation: ArrowRightLeft,
};

export function AIAssetRecommendationSection() {
  return (
    <SectionShell id="asset-plan">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="pill">资产优先</div>
          <h2 className="section-title mt-4">AI资产配置建议</h2>
          <p className="section-copy">
            Nova 会先帮助会员理解矿机与理财如何产出 Token，再把 Token
            引导到健康、服务与娱乐消费场景。
          </p>
        </div>
      </div>

      <div className="mt-6 trust-note">{assetRecommendationSummary}</div>

      <div className="mt-8 grid gap-4 xl:grid-cols-3">
        {assetRecommendations.map((item) => {
          const Icon = icons[item.id as keyof typeof icons];

          return (
            <div
              key={item.id}
              className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-slate-900 p-3 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-teal-50 px-3 py-2 text-xs font-semibold text-teal-700">
                  AI推荐
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-lg font-medium text-slate-800">{item.rate}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
              <div className="mt-5 rounded-[24px] bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                {item.strategy}
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
