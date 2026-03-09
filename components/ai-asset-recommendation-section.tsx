import { ArrowRightLeft, Banknote, Cpu, Sparkles } from "lucide-react";
import {
  assetRecommendations,
  assetRecommendationSummary,
  featuredLaunch,
  featuredWealthProduct,
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

      <div className="mt-6 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[30px] bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-6 text-white shadow-soft">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-teal-100">
            <Sparkles className="h-4 w-4" />
            {featuredLaunch.badge}
          </div>
          <h3 className="mt-5 text-3xl font-semibold">{featuredLaunch.title}</h3>
          <p className="mt-3 text-lg font-medium text-teal-200">{featuredLaunch.subtitle}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200">
            {featuredLaunch.description}
          </p>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-xs font-semibold text-teal-700">
            {featuredWealthProduct.badge}
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-slate-950">
            {featuredWealthProduct.title}
          </h3>
          <p className="mt-3 text-lg font-medium text-slate-800">
            {featuredWealthProduct.subtitle}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            {featuredWealthProduct.description}
          </p>
        </div>
      </div>

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
