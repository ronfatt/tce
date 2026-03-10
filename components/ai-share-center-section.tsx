"use client";

import { useState } from "react";
import { Images, Send, Share2, Sparkles } from "lucide-react";
import { shareCards } from "@/data/mock-data";
import { BottomSheet } from "@/components/bottom-sheet";
import { SectionShell } from "@/components/section-shell";

export function AIShareCenterSection() {
  const [generatedId, setGeneratedId] = useState<string | null>(null);

  const activeCard = shareCards.find((card) => card.id === generatedId) ?? null;

  return (
    <SectionShell>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="pill">传播能力</div>
          <h2 className="section-title mt-4">AI分享中心</h2>
          <p className="section-copy">
            把收益进展、健康趋势和 Nova 推荐内容包装成可分享卡片，更适合做“分享好康”和“分享见证”传播。
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 xl:grid-cols-3">
        {shareCards.map((card) => {
          const isGenerated = generatedId === card.id;

          return (
            <article
              key={card.id}
              className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm"
            >
              <div className="absolute -right-8 top-4 h-20 w-20 rounded-full bg-teal-100/60 blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-teal-50 px-4 py-2 text-xs font-semibold text-teal-700">
                    {card.badge}
                  </span>
                  <Sparkles className="h-5 w-5 text-teal-600" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-3 text-lg font-medium leading-8 text-slate-900">
                  {card.headline}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>

                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setGeneratedId(card.id)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
                  >
                    <Images className="h-4 w-4" />
                    生成分享卡
                  </button>
                  <button
                    type="button"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
                  >
                    <Share2 className="h-4 w-4" />
                    分享到社交媒体
                  </button>
                </div>

                <div
                  className={`mt-5 rounded-[24px] border px-4 py-4 text-sm leading-6 ${
                    isGenerated
                      ? "border-teal-100 bg-teal-50 text-teal-800"
                      : "border-slate-200 bg-slate-50 text-slate-500"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    {isGenerated ? card.footer : "点击后可生成适合截图传播的分享卡片"}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <BottomSheet
        open={Boolean(activeCard)}
        onClose={() => setGeneratedId(null)}
        title={activeCard?.title}
        subtitle="Nova 分享卡预览"
      >
        {activeCard ? (
          <>
            <div className="rounded-[28px] bg-gradient-to-br from-slate-900 via-slate-800 to-[#1B2436] p-5 text-white shadow-soft">
              <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-[#F6E6A8]">
                {activeCard.badge}
              </div>
              <p className="mt-5 text-2xl font-semibold leading-9">{activeCard.headline}</p>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                {activeCard.description}
              </p>
              <div className="mt-5 rounded-[22px] bg-white/10 px-4 py-3 text-sm text-[#F6E6A8]">
                {activeCard.footer}
              </div>
            </div>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
              >
                <Images className="h-4 w-4" />
                保存图片
              </button>
              <button
                type="button"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
              >
                <Share2 className="h-4 w-4" />
                分享
              </button>
            </div>
          </>
        ) : null}
      </BottomSheet>
    </SectionShell>
  );
}
