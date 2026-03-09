import { Gamepad2, ShieldCheck, ShoppingBag } from "lucide-react";
import { spendingChoices, spendingSummary } from "@/data/mock-data";
import { SectionShell } from "@/components/section-shell";

const icons = {
  redeem: ShoppingBag,
  game: Gamepad2,
};

export function SpendingAdviceCard() {
  return (
    <SectionShell>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="pill">AI 消费引导</div>
          <h2 className="section-title mt-4">AI消费建议</h2>
          <p className="section-copy">
            用一张简单但高完成度的卡片，把兑换产品与参与游戏的取舍逻辑直观展示出来。
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {spendingChoices.map((choice) => {
          const Icon = icons[choice.id as keyof typeof icons];
          return (
            <div
              key={choice.id}
              className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-slate-950 p-3 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-cyan-50 px-4 py-2 text-xs font-semibold text-cyan-700">
                  {choice.badge}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-slate-950">{choice.title}</h3>
              <p className="mt-3 text-lg font-medium text-slate-800">{choice.suggestion}</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">{choice.meta}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-[30px] border border-emerald-100 bg-emerald-50/70 p-6">
        <div className="flex items-center gap-3 text-emerald-700">
          <ShieldCheck className="h-5 w-5" />
          <p className="text-sm font-semibold">AI 说明</p>
        </div>
        <p className="mt-3 text-base leading-8 text-slate-700">{spendingSummary}</p>
      </div>
    </SectionShell>
  );
}
