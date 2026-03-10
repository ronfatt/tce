import { Activity, Coins, Gift, WalletCards } from "lucide-react";

const actions = [
  { label: "查看收益", href: "/assets", icon: Coins },
  { label: "新矿机", href: "/assets", icon: WalletCards },
  { label: "健康方案", href: "/health", icon: Activity },
  { label: "分享见证", href: "/tasks", icon: Gift },
];

export function MobileQuickActions() {
  return (
    <section className="grid grid-cols-4 gap-3">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <a
            key={action.label}
            href={action.href}
            className="rounded-[24px] border border-slate-200/80 bg-white/92 px-3 py-4 text-center shadow-sm"
          >
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <Icon className="h-4 w-4" />
            </div>
            <p className="mt-3 text-[11px] font-medium leading-5 text-slate-700">
              {action.label}
            </p>
          </a>
        );
      })}
    </section>
  );
}
