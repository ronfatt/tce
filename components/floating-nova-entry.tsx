import { Bot } from "lucide-react";

export function FloatingNovaEntry() {
  return (
    <a
      href="/nova"
      className="fixed bottom-24 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F6E6A8] px-4 py-3 text-sm font-semibold text-slate-950 shadow-soft md:right-[max(24px,calc(50%-215px))]"
    >
      <Bot className="h-4 w-4" />
      唤起 Nova
    </a>
  );
}
