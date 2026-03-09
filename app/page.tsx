import { AIChatSection } from "@/components/ai-chat-section";
import { ButlerCard } from "@/components/butler-card";
import { FooterNote } from "@/components/footer-note";
import { HealthAdvisorCard } from "@/components/health-advisor-card";
import { HealthAssessmentSection } from "@/components/health-assessment-section";
import { HeroSection } from "@/components/hero-section";
import { ProductRecommendationSection } from "@/components/product-recommendation-section";
import { SpendingAdviceCard } from "@/components/spending-advice-card";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-6 px-4 py-4 md:gap-8 md:px-6 md:py-6 xl:px-8">
        <HeroSection />
        <ButlerCard />
        <HealthAdvisorCard />
        <SpendingAdviceCard />
        <ProductRecommendationSection />
        <AIChatSection />
        <HealthAssessmentSection />
        <FooterNote />
      </div>
    </main>
  );
}
