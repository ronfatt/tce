import { Gamepad2, HeartPulse, ShieldCheck } from "lucide-react";
import { spendingFlow, spendingFlowSummary } from "@/data/mock-data";
import { SectionShell } from "@/components/section-shell";

const icons = {
  health: HeartPulse,
  service: ShieldCheck,
  game: Gamepad2,
};

export function AISpendingFlowSection() {
  return (
    <SectionShell>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="pill">消费闭环</div>
          <h2 className="section-title mt-4">AI服务 / 游戏消费建议</h2>
          <p className="section-copy">
            当会员通过矿机和理财积累 Token 后，Nova 会继续引导后续消费路径，让平台从“产币”自然过渡到“使用”。
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 xl:grid-cols-3">
        {spendingFlow.map((item) => {
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
                  {item.allocation}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              <div className="mt-5 rounded-[24px] bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                {item.note}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-[30px] border border-teal-100 bg-teal-50/70 p-6">
        <p className="text-sm font-semibold text-teal-700">Nova 说明</p>
        <p className="mt-3 text-base leading-8 text-slate-700">{spendingFlowSummary}</p>
      </div>
    </SectionShell>
  );
}
