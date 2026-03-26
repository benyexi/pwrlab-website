/*
 * PWRlab Facilities Page — Botanical Modernism
 * Equipment and field station showcase
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";
import { facilities, type Facility } from "@/lib/data";
import { CheckCircle } from "lucide-react";

export default function Facilities() {
  const { lang, t } = useLanguage();

  return (
    <div className="pt-24 pb-20">
      <div className="container">
        <SectionHeader
          number="05"
          title={t("facilities.title")}
          subtitle={t("facilities.subtitle")}
        />

        <div className="space-y-8">
          {facilities.map((facility, i) => (
            <FacilityCard key={facility.id} facility={facility} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FacilityCard({ facility, lang, index }: { facility: Facility; lang: "en" | "zh"; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`fade-in-up ${isVisible ? "visible" : ""} bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300`}
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
          <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
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
