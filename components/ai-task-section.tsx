"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { butlerModeTasks, dailyTasks, healthTasks } from "@/data/mock-data";
import { SectionShell } from "@/components/section-shell";

export function AITaskSection() {
  const [isButlerMode, setIsButlerMode] = useState(false);

  return (
    <SectionShell id="health-tasks" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <div className="pill">健康提醒</div>
        <h2 className="section-title mt-4">AI今日健康任务</h2>
        <p className="section-copy">
          对 40+ 用户来说，最真实的 AI 体验不是复杂分析，而是每天都能执行的生活提醒与健康任务。
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {healthTasks.map((task, index) => (
            <div key={task} className="rounded-[28px] border border-slate-200 bg-slate-50/80 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-base font-semibold text-slate-950">{task}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[28px] border border-cyan-100 bg-cyan-50/70 p-5">
          <p className="text-sm text-slate-500">AI今日健康提醒</p>
          <div className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            {dailyTasks.map((task) => (
              <p key={task}>{task}</p>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={() => setIsButlerMode(true)} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white">
            进入 Nova 模式
            <ArrowRight className="h-4 w-4" />
          </button>
          <a href="#ai-chat" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700">
            打开健康助手
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-6 text-white shadow-glow">
        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-cyan-100">
            <Sparkles className="h-4 w-4" />
            Nova 今日安排
          </div>
          {isButlerMode ? (
            <div className="mt-5">
              <p className="text-2xl font-semibold">Nova 今天建议你完成三件事情：</p>
              <div className="mt-6 space-y-4">
                {butlerModeTasks.map((task) => (
                  <div key={task} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                    <p className="text-sm leading-7 text-slate-100">{task}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-5 space-y-4">
              <p className="text-lg leading-8 text-slate-100 md:text-xl">
                点击进入后，Nova 会把今天最值得完成的健康动作整理成一组简单任务，提升陪伴感与执行感。
              </p>
            </div>
          )}
        </div>
      </div>
    </SectionShell>
  );
}
