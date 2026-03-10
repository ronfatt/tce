import { AIGrowthSection } from "@/components/ai-growth-section";
import { AITaskSection } from "@/components/ai-task-section";
import { FooterNote } from "@/components/footer-note";
import { MobileAppShell } from "@/components/mobile-app-shell";

export default function TasksPage() {
  return (
    <MobileAppShell>
      <AIGrowthSection />
      <AITaskSection />
      <FooterNote />
    </MobileAppShell>
  );
}
