/*
 * PWRlab Research Page — Botanical Modernism
 * Research direction cards with images and descriptions
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";
import { IMAGES } from "@/lib/data";
import { Droplets, TreePine, Sprout, CloudSun, Brain } from "lucide-react";
import CollaborationMap from "@/components/CollaborationMap";

const researchAreas = [
  {
    key: "ecohydrology",
    icon: Droplets,
    image: IMAGES.ecohydrology,
  },
  {
    key: "sapflow",
    icon: TreePine,
    image: IMAGES.ecohydrology,
  },
  {
    key: "roots",
    icon: Sprout,
    image: IMAGES.roots,
  },
  {
    key: "climate",
    icon: CloudSun,
    image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&h=400&fit=crop",
  },
  {
    key: "ai",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
  },
];

export default function Research() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20">
      <div className="container">
        <SectionHeader
          number="01"
          title={t("research.title")}
          subtitle={t("research.subtitle")}
        />

        <div className="space-y-8 mb-16">
          {researchAreas.map((area, i) => (
            <ResearchCard key={area.key} area={area} index={i} />
          ))}
        </div>

        {/* Global Collaboration Network Map */}
        <CollaborationMap />
      </div>
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
      className={`fade-in-up ${isVisible ? "visible" : ""} bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300`}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 ${isReversed ? "" : ""}`}>
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
          <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
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
