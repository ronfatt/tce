import { Bell, Crown, ShieldCheck } from "lucide-react";

export function MobileAppHeader() {
  return (
    <header className="sticky top-0 z-40 -mx-4 border-b border-slate-200/80 bg-white/92 px-4 py-3 backdrop-blur-xl md:-mx-6 md:px-6 xl:-mx-6 xl:px-6">
      <div className="mx-auto flex w-full max-w-[430px] items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-slate-900 px-3 py-2 text-[11px] font-semibold tracking-[0.18em] text-[#F6E6A8]">
            尊龙汇
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">尊龙汇会员中心</p>
            <p className="text-xs text-slate-500">ZLH Nova 在线</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-[#F6E6A8]/60 px-3 py-1.5 text-[11px] font-semibold text-[#8E6B00]">
            Level 3
          </div>
          <button
            type="button"
            className="rounded-full border border-slate-200 bg-white p-2 text-slate-600"
          >
            <Bell className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mx-auto mt-3 flex w-full max-w-[430px] items-center gap-2 rounded-[22px] border border-[#D4AF37]/20 bg-[#F6E6A8]/20 px-3 py-2 text-xs text-slate-700">
        <Crown className="h-4 w-4 text-[#D4AF37]" />
        尊龙汇 AI Life OS 已同步今日资产、健康与任务建议
        <ShieldCheck className="ml-auto h-4 w-4 text-teal-700" />
      </div>
    </header>
  );
}
