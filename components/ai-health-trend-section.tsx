import { healthTrend, healthTrendAdvice, healthTrendSummary } from "@/data/mock-data";
import { SectionShell } from "@/components/section-shell";

const days = ["D1", "D2", "D3", "D4", "D5", "D6", "D7"];

export function AIHealthTrendSection() {
  const points = healthTrend
    .map((value, index) => `${index * 52},${140 - (value - 60) * 6}`)
    .join(" ");

  return (
    <SectionShell>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="pill">长期跟踪</div>
          <h2 className="section-title mt-4">AI健康成长曲线</h2>
          <p className="section-copy">
            通过 7 天趋势图，向用户说明 Nova 不只是给一次性建议，而是在持续跟踪生活状态变化。
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[32px] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-6">
          <div className="rounded-[28px] bg-white p-5 shadow-sm">
            <svg viewBox="0 0 320 160" className="h-56 w-full">
              <defs>
                <linearGradient id="trendLine" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <polyline
                fill="none"
                stroke="url(#trendLine)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={points}
              />
              {healthTrend.map((value, index) => (
                <circle
                  key={`${value}-${index}`}
                  cx={index * 52}
                  cy={140 - (value - 60) * 6}
                  r="5"
                  fill="#22c55e"
                />
              ))}
            </svg>
            <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs text-slate-500">
              {days.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="panel border-emerald-100 bg-white/90 p-6">
          <p className="text-sm text-slate-500">AI总结</p>
          <p className="mt-3 text-lg font-semibold leading-8 text-slate-950">{healthTrendSummary}</p>
          <div className="mt-6 rounded-[28px] border border-emerald-100 bg-emerald-50/70 p-5">
            <p className="text-sm font-semibold text-emerald-700">继续保持</p>
            <div className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
              {healthTrendAdvice.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
