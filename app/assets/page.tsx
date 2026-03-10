import { AIAssetRecommendationSection } from "@/components/ai-asset-recommendation-section";
import { AIPredictionSection } from "@/components/ai-prediction-section";
import { AIShareCenterSection } from "@/components/ai-share-center-section";
import { AISpendingFlowSection } from "@/components/ai-spending-flow-section";
import { CoreStatement } from "@/components/core-statement";
import { JourneyStrip } from "@/components/journey-strip";
import { MobileAppShell } from "@/components/mobile-app-shell";

export default function AssetsPage() {
  return (
    <MobileAppShell>
      <JourneyStrip />
      <CoreStatement />
      <AIPredictionSection />
      <AIAssetRecommendationSection />
      <AISpendingFlowSection />
      <AIShareCenterSection />
    </MobileAppShell>
  );
}
