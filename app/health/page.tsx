import { AIHealthRiskSection } from "@/components/ai-health-risk-section";
import { AIHealthTrendSection } from "@/components/ai-health-trend-section";
import { AIOsPanel } from "@/components/ai-os-panel";
import { HealthAdvisorCard } from "@/components/health-advisor-card";
import { HealthAssessmentSection } from "@/components/health-assessment-section";
import { MobileAppShell } from "@/components/mobile-app-shell";
import { ProductRecommendationSection } from "@/components/product-recommendation-section";

export default function HealthPage() {
  return (
    <MobileAppShell>
      <AIOsPanel />
      <AIHealthRiskSection />
      <AIHealthTrendSection />
      <HealthAdvisorCard />
      <ProductRecommendationSection />
      <HealthAssessmentSection />
    </MobileAppShell>
  );
}
