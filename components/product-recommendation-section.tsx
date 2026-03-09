"use client";

import { useState } from "react";
import { ArrowRight, Bot, Sparkles } from "lucide-react";
import { productList, type Product } from "@/data/mock-data";
import { SectionShell } from "@/components/section-shell";

export function ProductRecommendationSection() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  return (
    <>
      <SectionShell id="products">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="pill">产品推荐层</div>
            <h2 className="section-title mt-4">AI 推荐产品组合</h2>
            <p className="section-copy">
              通过 AI 解读弹层，向客户展示推荐并非静态卡片，而是能解释“为什么推荐”的智能导购体验。
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-3">
          {productList.map((product, index) => (
            <article
              key={product.id}
              className="group relative overflow-hidden rounded-[32px] border border-white/70 bg-white p-6 shadow-soft transition hover:-translate-y-1.5 hover:shadow-glow"
            >
              <div className="absolute -right-10 top-6 h-24 w-24 rounded-full bg-cyan-100/70 blur-2xl" />
              <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-fuchsia-100/60 blur-2xl" />
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
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  <span className="font-semibold text-slate-900">适合：</span>
                  {product.fitFor}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  <span className="font-semibold text-slate-900">包含：</span>
                  {product.includes}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  <span className="font-semibold text-slate-900">所需：</span>
                  {product.tokenCost} Token
                </p>
                <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                  {product.summary}
                </p>
                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveProduct(product)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
                  >
                    <Bot className="h-4 w-4" />
                    AI解读
                  </button>
                  <button
                    type="button"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition group-hover:bg-cyan-700"
                  >
                    立即兑换
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
                <h3 className="mt-4 text-2xl font-semibold text-slate-950">
                  {activeProduct.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProduct(null)}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-500 transition hover:border-slate-300 hover:text-slate-800"
              >
                关闭
              </button>
            </div>
            <p className="mt-6 rounded-[28px] bg-gradient-to-br from-cyan-50 to-fuchsia-50 p-6 text-base leading-8 text-slate-700">
              {activeProduct.aiReason}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="rounded-full bg-slate-100 px-4 py-2">
                适合：{activeProduct.fitFor}
              </span>
              <span className="rounded-full bg-slate-100 px-4 py-2">
                所需：{activeProduct.tokenCost} Token
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
