import { AIChatSection } from "@/components/ai-chat-section";
import { AIAssetRecommendationSection } from "@/components/ai-asset-recommendation-section";
import { AIShareCenterSection } from "@/components/ai-share-center-section";
import { AIGrowthSection } from "@/components/ai-growth-section";
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
import { JourneyStrip } from "@/components/journey-strip";
import { ProductRecommendationSection } from "@/components/product-recommendation-section";
import { StageIntro } from "@/components/stage-intro";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-5 px-4 py-4 md:gap-7 md:px-6 md:py-6 xl:px-8">
        <HeroSection />
        <JourneyStrip />
        <CoreStatement />
        <StageIntro
          eyebrow="Stage 01"
          title="先让会员理解资产如何累积，再让 Token 变得可用"
          copy="这一段先讲清楚矿机、理财、收益预测和资产配置建议，让客户知道平台的入口不是健康产品，而是稳定产出。"
        />
        <ButlerCard />
        <AIPredictionSection />
        <AIAssetRecommendationSection />
        <AISpendingFlowSection />
        <AIShareCenterSection />
        <StageIntro
          eyebrow="Stage 02"
          title="把 Token 使用自然延伸到健康、服务与高信任场景"
          copy="当资产逻辑成立后，再展示 Nova 如何把 Token 引导到健康方案、风险提醒、趋势跟踪和生活管理。"
        />
        <AIOsPanel />
        <AIHealthRiskSection />
        <AIHealthTrendSection />
        <HealthAdvisorCard />
        <ProductRecommendationSection />
        <AIGrowthSection />
        <AITaskSection />
        <StageIntro
          eyebrow="Stage 03"
          title="最后用 AI 对话和测评，让客户看到陪伴感与互动感"
          copy="这一段负责收口，让用户感受到 Nova 不只是推荐系统，而是可以持续交流、提醒和引导的 AI 管家。"
        />
        <AIChatSection />
        <HealthAssessmentSection />
        <FooterNote />
      </div>
    </main>
  );
}
