"use client";

import { useState } from "react";
import { Activity, Brain, Droplets, MoonStar, Sparkles } from "lucide-react";
import {
  type AssessmentAnswers,
  generateAssessmentResult,
} from "@/utils/health-assessment";
import { SectionShell } from "@/components/section-shell";

type QuestionOption = {
  value: AssessmentAnswers[keyof AssessmentAnswers];
  label: string;
};

type Question = {
  key: keyof AssessmentAnswers;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  options: QuestionOption[];
};

const questions: Question[] = [
  {
    key: "sleep",
    title: "1. 你最近睡眠如何？",
    icon: MoonStar,
    options: [
      { value: "很好", label: "很好" },
      { value: "一般", label: "一般" },
      { value: "不好", label: "不好" },
    ],
  },
  {
    key: "water",
    title: "2. 你每天饮水量如何？",
    icon: Droplets,
    options: [
      { value: "足够", label: "足够" },
      { value: "偏少", label: "偏少" },
      { value: "很少", label: "很少" },
    ],
  },
  {
    key: "stress",
    title: "3. 你最近压力状态如何？",
    icon: Brain,
    options: [
      { value: "低", label: "低" },
      { value: "中", label: "中" },
      { value: "高", label: "高" },
    ],
  },
  {
    key: "exercise",
    title: "4. 你每周运动几次？",
    icon: Activity,
    options: [
      { value: "0", label: "0" },
      { value: "1-2", label: "1-2" },
      { value: "3次以上", label: "3次以上" },
    ],
  },
  {
    key: "goal",
    title: "5. 你当前最想改善什么？",
    icon: Sparkles,
    options: [
      { value: "精力", label: "精力" },
      { value: "睡眠", label: "睡眠" },
      { value: "体重", label: "体重" },
      { value: "日常平衡", label: "日常平衡" },
    ],
  },
];

const defaultAnswers: AssessmentAnswers = {
  sleep: "一般",
  water: "偏少",
  stress: "中",
  exercise: "1-2",
  goal: "精力",
};

export function HealthAssessmentSection() {
  const [answers, setAnswers] = useState<AssessmentAnswers>(defaultAnswers);
  const [result, setResult] = useState(() => generateAssessmentResult(defaultAnswers));

  return (
    <SectionShell id="assessment">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="pill">加分模块</div>
          <h2 className="section-title mt-4">快速健康测评</h2>
          <p className="section-copy">
            用 5 题轻量表单快速生成 AI 健康建议，让客户看到平台不依赖真实数据库也能完成高感知度演示。
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.95fr]">
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            setResult(generateAssessmentResult(answers));
          }}
        >
          {questions.map((question) => {
            const Icon = question.icon;
            return (
              <div
                key={question.key}
                className="rounded-[28px] border border-slate-200 bg-slate-50/80 p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white p-3 shadow-sm">
                    <Icon className="h-5 w-5 text-cyan-700" />
                  </div>
                  <p className="text-base font-semibold text-slate-900">{question.title}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {question.options.map((option) => {
                    const checked = answers[question.key] === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setAnswers((current) => ({
                            ...current,
                            [question.key]:
                              option.value as AssessmentAnswers[typeof question.key],
                          }))
                        }
                        className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                          checked
                            ? "bg-slate-950 text-white"
                            : "bg-white text-slate-600 hover:border-cyan-300 hover:text-cyan-700"
                        } border border-slate-200`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-cyan-700"
          >
            生成我的 AI 健康建议
          </button>
        </form>

        <div className="panel-dark p-6 md:p-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs text-cyan-100">
            <Sparkles className="h-4 w-4" />
            测评结果
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-300">健康评分</p>
              <p className="mt-2 text-4xl font-semibold text-cyan-300">{result.score}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-300">推荐产品组合</p>
              <p className="mt-2 text-xl font-semibold text-fuchsia-300">
                {result.productName}
              </p>
            </div>
          </div>
          <div className="mt-5 rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-300">AI 建议</p>
            <p className="mt-3 text-base leading-8 text-slate-100">
              {result.recommendation}
            </p>
          </div>
          <p className="mt-5 text-xs leading-6 text-slate-400">
            说明：该结果由本地规则生成，仅用于 Demo 展示，不构成医疗建议。
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
