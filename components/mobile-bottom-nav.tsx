 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Coins, HeartPulse, House, ListTodo, MessageCircleMore } from "lucide-react";

const items = [
  { href: "/", label: "首页", icon: House },
  { href: "/assets", label: "资产", icon: Coins },
  { href: "/health", label: "健康", icon: HeartPulse },
  { href: "/tasks", label: "任务", icon: ListTodo },
  { href: "/nova", label: "Nova", icon: MessageCircleMore },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-3 left-1/2 z-50 w-[calc(100%-24px)] max-w-[430px] -translate-x-1/2">
      <div className="grid grid-cols-5 gap-1 rounded-[28px] border border-slate-200/80 bg-white/95 p-2 shadow-soft backdrop-blur-xl">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 rounded-[20px] px-2 py-2 text-[11px] font-medium ${
                isActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
