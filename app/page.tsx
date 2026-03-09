import { AIChatSection } from "@/components/ai-chat-section";
import { AIAssetRecommendationSection } from "@/components/ai-asset-recommendation-section";
import { AIHealthRiskSection } from "@/components/ai-health-risk-section";
import { AIHealthTrendSection } from "@/components/ai-health-trend-section";
import { AIOsPanel } from "@/components/ai-os-panel";
import { AIPredictionSection } from "@/components/ai-prediction-section";
import { AITaskSection } from "@/components/ai-task-section";
import { AISpendingFlowSection } from "@/components/ai-spending-flow-section";
import { ButlerCard } from "@/components/butler-card";
import { CoreStatement } from "@/components/core-statement";
import { FooterNote } from "@/components/footer-note";
import { HealthAdvisorCard } from "@/components/health-advisor-card";
import { HealthAssessmentSection } from "@/components/health-assessment-section";
import { HeroSection } from "@/components/hero-section";
import { ProductRecommendationSection } from "@/components/product-recommendation-section";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 px-4 py-4 md:gap-8 md:px-6 md:py-6 xl:px-8">
        <HeroSection />
        <AIOsPanel />
        <CoreStatement />
        <ButlerCard />
        <AIPredictionSection />
        <AIAssetRecommendationSection />
        <AISpendingFlowSection />
        <AIHealthRiskSection />
        <AIHealthTrendSection />
        <HealthAdvisorCard />
        <ProductRecommendationSection />
        <AITaskSection />
        <AIChatSection />
        <HealthAssessmentSection />
        <FooterNote />
      </div>
    </main>
  );
}
