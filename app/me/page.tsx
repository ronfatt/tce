import { ChevronRight, Crown, History, Settings, Share2, UserCircle2 } from "lucide-react";
import {
  profileShortcuts,
  profileStats,
  profileSummary,
  recentActivities,
} from "@/data/mock-data";
import { MobileAppShell } from "@/components/mobile-app-shell";

const shortcutIcons = [Crown, Share2, History, Settings];

export default function MePage() {
  return (
    <MobileAppShell>
      <section className="rounded-[32px] bg-gradient-to-br from-slate-900 via-[#1B2436] to-slate-900 p-6 text-white shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-[24px] bg-white/10 p-3">
              <UserCircle2 className="h-10 w-10 text-[#F6E6A8]" />
            </div>
            <div>
              <p className="text-lg font-semibold">{profileSummary.name}</p>
              <p className="mt-1 text-sm text-slate-300">{profileSummary.memberId}</p>
            </div>
          </div>
          <div className="rounded-full bg-[#F6E6A8]/20 px-3 py-1.5 text-xs font-semibold text-[#F6E6A8]">
            {profileSummary.tier}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-[24px] bg-white/5 p-4">
            <p className="text-xs text-slate-400">会员等级</p>
            <p className="mt-2 text-2xl font-semibold text-[#D4AF37]">{profileSummary.level}</p>
          </div>
          <div className="rounded-[24px] bg-white/5 p-4">
            <p className="text-xs text-slate-400">当前资产</p>
            <p className="mt-2 text-2xl font-semibold text-[#F6E6A8]">{profileSummary.tokens}</p>
          </div>
        </div>

        <div className="mt-4 rounded-[24px] bg-white/5 p-4 text-sm text-slate-200">
          {profileSummary.streak}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        {profileStats.map((item) => (
          <div
            key={item.label}
            className="rounded-[28px] border border-slate-200/80 bg-white/92 p-5 shadow-sm"
          >
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-950">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[32px] border border-slate-200/80 bg-white/92 p-6 shadow-soft">
        <p className="text-sm font-semibold text-slate-900">快捷入口</p>
        <div className="mt-5 grid gap-3">
          {profileShortcuts.map((item, index) => {
            const Icon = shortcutIcons[index];

            return (
              <button
                key={item}
                type="button"
                className="flex items-center justify-between rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-slate-900 p-3 text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">{item}</span>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </button>
            );
          })}
        </div>
      </section>

      <section className="rounded-[32px] border border-slate-200/80 bg-white/92 p-6 shadow-soft">
        <p className="text-sm font-semibold text-slate-900">最近活动</p>
        <div className="mt-5 space-y-3">
          {recentActivities.map((item) => (
            <div
              key={item}
              className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </MobileAppShell>
  );
}
