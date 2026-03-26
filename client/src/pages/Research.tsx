/*
 * PWRlab Research Page — Premium magazine style
 * Research direction cards with alternating section backgrounds
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { IMAGES } from "@/lib/data";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import WaveDivider from "@/components/WaveDivider";
import { Droplets, TreePine, Sprout, CloudSun, Brain } from "lucide-react";
import CollaborationMap from "@/components/CollaborationMap";

const researchAreas = [
  { key: "ecohydrology", icon: Droplets, image: IMAGES.ecohydrology },
  { key: "sapflow", icon: TreePine, image: IMAGES.ecohydrology },
  { key: "roots", icon: Sprout, image: IMAGES.roots },
  {
    key: "climate",
    icon: CloudSun,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/climate-research-RynYAcwfo7jN43kVpdMfVi.webp",
  },
  {
    key: "ai",
    icon: Brain,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663359140716/HKjtrcrKW7RvWqhovUWaqg/ai-forestry-PCEiXKuV4f5cMAjRapmXsQ.webp",
  },
];

export default function Research() {
  const { t } = useLanguage();

  return (
    <div>
      <PageHero
        image={IMAGES.heroResearch}
        title={t("research.title")}
        subtitle={t("research.subtitle")}
      />

      {/* Research Directions */}
      <ContentSection bg="white">
        <div className="space-y-8">
          {researchAreas.map((area, i) => (
            <ResearchCard key={area.key} area={area} index={i} />
          ))}
        </div>
      </ContentSection>

      <WaveDivider fill="#f9f7f4" />

      {/* Collaboration Map */}
      <ContentSection bg="warm">
        <CollaborationMap />
      </ContentSection>
    </div>
  );
}

function ResearchCard({ area, index }: { area: typeof researchAreas[0]; index: number }) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`fade-in-up ${isVisible ? "visible" : ""} mag-card bg-card border border-border`}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12`}>
        <div className={`lg:col-span-5 ${isReversed ? "lg:order-2" : ""}`}>
          <img
            src={area.image}
            alt={t(`research.${area.key}.title`)}
            className="w-full h-48 lg:h-full object-cover"
          />
        </div>
        <div className={`lg:col-span-7 p-6 lg:p-10 flex flex-col justify-center ${isReversed ? "lg:order-1" : ""}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-forest/10 dark:bg-forest-light/10 flex items-center justify-center">
              <area.icon className="w-5 h-5 text-forest dark:text-forest-light" />
            </div>
            <span className="font-mono text-xs text-muted-foreground tracking-wider">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="font-display text-xl lg:text-2xl font-medium text-foreground mb-3">
            {t(`research.${area.key}.title`)}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {t(`research.${area.key}.desc`)}
          </p>
        </div>
      </div>
    </div>
  );
}
