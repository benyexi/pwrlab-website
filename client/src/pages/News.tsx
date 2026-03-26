/*
 * PWRlab News Page — Botanical Modernism
 * Blog-style news list with date tags
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";
import { newsItems } from "@/lib/data";
import { Calendar } from "lucide-react";

export default function News() {
  const { lang, t } = useLanguage();

  return (
    <div className="pt-24 pb-20">
      <div className="container">
        <SectionHeader
          number="06"
          title={t("news.title")}
          subtitle={t("news.subtitle")}
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {newsItems.map((item, i) => (
            <NewsItem key={item.id} item={item} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function NewsItem({ item, lang, index }: { item: typeof newsItems[0]; lang: "en" | "zh"; index: number }) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  const tagColors: Record<string, string> = {
    paper: "bg-forest/10 text-forest dark:bg-forest-light/10 dark:text-forest-light",
    conference: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    award: "bg-gold/10 text-gold dark:bg-gold-light/10 dark:text-gold-light",
    fieldwork: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    graduation: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    general: "bg-muted text-muted-foreground",
  };

  return (
    <div
      ref={ref}
      className={`fade-in-up ${isVisible ? "visible" : ""}`}
    >
      <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className={`${item.image ? "grid grid-cols-1 md:grid-cols-12" : ""}`}>
          {item.image && (
            <div className="md:col-span-4">
              <img
                src={item.image}
                alt={item.title[lang]}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
          )}
          <div className={`${item.image ? "md:col-span-8" : ""} p-6`}>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tagColors[item.tag] || tagColors.general}`}>
                {t(`news.tags.${item.tag}`)}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                {item.date}
              </div>
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              {item.title[lang]}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.summary[lang]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
