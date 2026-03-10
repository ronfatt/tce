import { FloatingNovaEntry } from "@/components/floating-nova-entry";
import { MobileAppHeader } from "@/components/mobile-app-header";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";

type MobileAppShellProps = {
  children: React.ReactNode;
};

export function MobileAppShell({ children }: MobileAppShellProps) {
  return (
    <main id="top" className="relative overflow-hidden">
      <MobileAppHeader />
      <FloatingNovaEntry />
      <MobileBottomNav />
      <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col gap-5 px-4 pb-32 pt-4 md:max-w-[430px] md:gap-7 md:px-6 xl:max-w-[430px] xl:px-6">
        {children}
      </div>
    </main>
  );
}
