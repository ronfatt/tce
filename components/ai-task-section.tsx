"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { dailyTasks } from "@/data/mock-data";
import { SectionShell } from "@/components/section-shell";

export function AITaskSection() {
  const [isButlerMode, setIsButlerMode] = useState(false);

  return (
    <SectionShell id="tasks" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <div className="pill">互动感强化</div>
        <h2 className="section-title mt-4">AI今日任务</h2>
        <p className="section-copy">
          这个模块会明显提升“被 AI 引导”的体验感。相比普通展示页，它更像一个能驱动用户行动的智能管家中心。
        </p>

        <div className="mt-6 space-y-4">
          {dailyTasks.map((task, index) => (
            <div
              key={task}
              className="flex items-center gap-4 rounded-[28px] border border-slate-200 bg-slate-50/80 p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                {index + 1}
              </div>
              <div>
                <p className="text-base font-semibold text-slate-950">{task}</p>
                <p className="text-sm text-slate-500">由 AI 管家自动生成的今日建议动作</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setIsButlerMode(true)}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700"
          >
            进入 AI管家模式
            <ArrowRight className="h-4 w-4" />
          </button>
          <a
            href="#ai-chat"
            className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700"
          >
            开始任务
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-6 text-white shadow-glow">
        <div className="absolute -right-8 top-6 h-28 w-28 rounded-full bg-fuchsia-400/20 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-cyan-300/20 blur-2xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-cyan-100">
            <Sparkles className="h-4 w-4" />
            AI管家模式
          </div>
          {isButlerMode ? (
            <div className="mt-5">
              <p className="text-2xl font-semibold">今天我建议你完成三件事情：</p>
              <div className="mt-6 space-y-4">
                {dailyTasks.map((task) => (
                  <div
                    key={task}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                    <p className="text-sm leading-7 text-slate-100">{task}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-5 space-y-4">
              <p className="text-lg leading-8 text-slate-100 md:text-xl">
                点击进入后，AI管家会把今天最值得完成的动作整理成一组可执行任务，强化平台的陪伴感与行动引导。
              </p>
              <p className="text-sm leading-7 text-slate-300">
                这类交互很适合客户 Demo，因为它直接展示了 AI 如何把收益、健康和消费串成一个使用流程。
              </p>
            </div>
          )}
        </div>
      </div>
    </SectionShell>
  );
}
