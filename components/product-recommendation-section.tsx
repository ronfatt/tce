"use client";

import { useState } from "react";
import { ArrowRight, Bot, Sparkles } from "lucide-react";
import { explainableRecommendation, productList, type Product } from "@/data/mock-data";
import { SectionShell } from "@/components/section-shell";

export function ProductRecommendationSection() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  return (
    <>
      <SectionShell id="health-products">
        <div>
          <div className="pill">健康方案</div>
          <h2 className="section-title mt-4">AI健康方案</h2>
          <p className="section-copy">
            Nova 会根据生活状态与健康关注点推荐更适合 40+ 用户的保养型方案，而不是只做泛化商品推荐。
          </p>
        </div>

        <div className="mt-6 rounded-[30px] border border-cyan-100 bg-cyan-50/70 p-6">
          <p className="text-sm font-semibold text-cyan-700">{explainableRecommendation.title}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {explainableRecommendation.reasons.map((reason) => (
              <span key={reason} className="rounded-full bg-white px-4 py-2 text-sm text-slate-700">
                {reason}
              </span>
            ))}
          </div>
          <p className="mt-4 text-base font-semibold text-slate-950">{explainableRecommendation.result}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{explainableRecommendation.note}</p>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {productList.map((product, index) => (
            <article key={product.id} className="group relative overflow-hidden rounded-[32px] border border-white/70 bg-white p-6 shadow-soft transition hover:-translate-y-1.5 hover:shadow-glow">
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white">
                    方案 {index + 1}
                  </span>
                  <span className="rounded-full bg-cyan-50 px-4 py-2 text-xs font-semibold text-cyan-700">
                    {product.rating}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-950">{product.name}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600"><span className="font-semibold text-slate-900">适合：</span>{product.fitFor}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600"><span className="font-semibold text-slate-900">包含：</span>{product.includes}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600"><span className="font-semibold text-slate-900">所需：</span>{product.tokenCost} Token</p>
                <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">{product.summary}</p>
                <div className="mt-6 flex gap-3">
                  <button type="button" onClick={() => setActiveProduct(product)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                    <Bot className="h-4 w-4" />
                    AI解读
                  </button>
                  <button type="button" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition group-hover:bg-cyan-700">
                    查看方案
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      {activeProduct ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/35 p-4 backdrop-blur-sm">
          <div className="panel w-full max-w-2xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="pill">
                  <Sparkles className="h-4 w-4" />
                  AI解读
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">{activeProduct.name}</h3>
              </div>
              <button type="button" onClick={() => setActiveProduct(null)} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-500">
                关闭
              </button>
            </div>
            <p className="mt-6 rounded-[28px] bg-gradient-to-br from-cyan-50 to-emerald-50 p-6 text-base leading-8 text-slate-700">
              {activeProduct.aiReason}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
