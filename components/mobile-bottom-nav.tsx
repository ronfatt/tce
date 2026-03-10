import { Coins, HeartPulse, House, ListTodo, MessageCircleMore } from "lucide-react";

const items = [
  { id: "top", label: "首页", icon: House },
  { id: "asset-plan", label: "资产", icon: Coins },
  { id: "health-products", label: "健康", icon: HeartPulse },
  { id: "health-tasks", label: "任务", icon: ListTodo },
  { id: "ai-chat", label: "Nova", icon: MessageCircleMore },
];

export function MobileBottomNav() {
  return (
    <nav className="fixed bottom-3 left-1/2 z-50 w-[calc(100%-24px)] max-w-[430px] -translate-x-1/2">
      <div className="grid grid-cols-5 gap-1 rounded-[28px] border border-slate-200/80 bg-white/95 p-2 shadow-soft backdrop-blur-xl">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isPrimary = index === 0;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex flex-col items-center gap-1 rounded-[20px] px-2 py-2 text-[11px] font-medium ${
                isPrimary
                  ? "bg-slate-900 text-white"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
