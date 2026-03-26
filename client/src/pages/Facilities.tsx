/*
 * PWRlab Facilities Page — Premium magazine style
 * Self-developed instruments highlight + equipment showcase
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { facilities, selfDevelopedInstruments, IMAGES, type Facility } from "@/lib/data";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import WaveDivider from "@/components/WaveDivider";
import { CheckCircle, Award, Cpu, TrendingDown } from "lucide-react";

export default function Facilities() {
  const { lang, t } = useLanguage();

  return (
    <div>
      <PageHero
        image={IMAGES.heroFacilities}
        title={t("facilities.title")}
        subtitle={t("facilities.subtitle")}
      />

      {/* Self-developed Instruments Highlight */}
      <ContentSection bg="white">
        <div className="bg-gradient-to-br from-forest/5 to-forest/10 dark:from-forest/10 dark:to-forest/20 rounded-2xl border border-forest/20 p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-forest/20 dark:bg-forest-light/20 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-forest dark:text-forest-light" />
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-normal text-foreground">
              {lang === "en" ? "Self-developed Instruments" : "自主研发仪器"}
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl">
            {selfDevelopedInstruments.summary[lang]}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background/60 dark:bg-background/30 rounded-xl p-6 text-center border border-border/50">
              <Cpu className="w-8 h-8 text-forest dark:text-forest-light mx-auto mb-3" />
              <div className="font-display text-3xl font-bold text-forest dark:text-forest-light mb-1">
                {selfDevelopedInstruments.totalDeployed}
              </div>
              <div className="text-sm text-muted-foreground">
                {lang === "en" ? "Units Deployed Nationwide" : "全国部署套数"}
              </div>
            </div>
            <div className="bg-background/60 dark:bg-background/30 rounded-xl p-6 text-center border border-border/50">
              <TrendingDown className="w-8 h-8 text-forest dark:text-forest-light mx-auto mb-3" />
              <div className="font-display text-3xl font-bold text-forest dark:text-forest-light mb-1">
                {selfDevelopedInstruments.costReduction}
              </div>
              <div className="text-sm text-muted-foreground">
                {lang === "en" ? "Cost Reduction vs Imports" : "成本降低（对比进口）"}
              </div>
            </div>
            <div className="bg-background/60 dark:bg-background/30 rounded-xl p-6 text-center border border-border/50">
              <Award className="w-8 h-8 text-forest dark:text-forest-light mx-auto mb-3" />
              <div className="font-display text-lg font-bold text-forest dark:text-forest-light mb-1">
                {lang === "en" ? "Ministry of S&T" : "科技部认定"}
              </div>
              <div className="text-sm text-muted-foreground">
                {lang === "en" ? "Agricultural High-tech Innovation Achievement" : "农业高新技术创新成果"}
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <WaveDivider fill="#f9f7f4" />

      {/* Equipment List */}
      <ContentSection bg="warm">
        <div className="space-y-8">
          {facilities.map((facility, i) => (
            <FacilityCard key={facility.id} facility={facility} lang={lang} index={i} />
          ))}
        </div>
      </ContentSection>
    </div>
  );
}

function FacilityCard({ facility, lang, index }: { facility: Facility; lang: "en" | "zh"; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`fade-in-up ${isVisible ? "visible" : ""} mag-card bg-card border border-border`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className={`lg:col-span-5 ${isReversed ? "lg:order-2" : ""}`}>
          <img
            src={facility.image}
            alt={facility.name[lang]}
            className="w-full h-48 lg:h-full object-cover"
          />
        </div>
        <div className={`lg:col-span-7 p-6 lg:p-10 flex flex-col justify-center ${isReversed ? "lg:order-1" : ""}`}>
          <span className="font-mono text-xs text-muted-foreground tracking-wider mb-2">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-xl lg:text-2xl font-medium text-foreground mb-3">
            {facility.name[lang]}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {facility.description[lang]}
          </p>
          {facility.specs && facility.specs.length > 0 && (
            <ul className="space-y-2">
              {facility.specs.map((spec, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-forest dark:text-forest-light shrink-0" />
                  {spec[lang]}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
