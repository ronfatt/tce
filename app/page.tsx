import { AIPredictionSection } from "@/components/ai-prediction-section";
import { AITaskSection } from "@/components/ai-task-section";
import { AISpendingFlowSection } from "@/components/ai-spending-flow-section";
import { ButlerCard } from "@/components/butler-card";
import { HeroSection } from "@/components/hero-section";
import { MobileAppShell } from "@/components/mobile-app-shell";
import { MobileQuickActions } from "@/components/mobile-quick-actions";
import { AIAssetRecommendationSection } from "@/components/ai-asset-recommendation-section";

export default function HomePage() {
  return (
    <MobileAppShell>
        <HeroSection />
        <MobileQuickActions />
        <ButlerCard />
        <AIPredictionSection />
        <AIAssetRecommendationSection />
        <AISpendingFlowSection />
        <AITaskSection />
    </MobileAppShell>
  );
}
