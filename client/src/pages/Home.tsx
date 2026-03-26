/*
 * PWRlab Home Page — Botanical Modernism
 * Hero with full-bleed plantation image, mission statement,
 * about section, stats, and latest 3 news items
 */
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";
import { IMAGES, newsItems } from "@/lib/data";
import { ArrowRight, BookOpen, FlaskConical, Users, Globe } from "lucide-react";

export default function Home() {
  const { lang, t } = useLanguage();
  const latestNews = newsItems.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative container">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[oklch(0.65_0.12_75)]" />
              <span className="text-[oklch(0.82_0.08_85)] font-mono text-sm tracking-widest uppercase">
                Beijing Forestry University
              </span>
            </div>
            <h1 className="hero-title text-white mb-6">
              {t("home.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
              {t("home.hero.subtitle")}
            </p>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-6 py-3 bg-forest dark:bg-forest-light text-white dark:text-[oklch(0.16_0.015_260)] font-medium rounded-md hover:opacity-90 transition-opacity no-underline"
            >
              {t("home.hero.cta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* About Section */}
      <AboutSection />

      {/* Latest News */}
      <section className="py-20 lg:py-24 bg-muted/50">
        <div className="container">
          <SectionHeader
            number="03"
            title={t("home.news.title")}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {latestNews.map((item, i) => (
              <NewsCard key={item.id} item={item} lang={lang} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-forest dark:text-forest-light font-medium hover:underline"
            >
              {t("home.news.viewAll")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function StatsBar() {
  const { t } = useLanguage();
  const stats = [
    { icon: BookOpen, value: "129", label: t("home.stats.publications") },
    { icon: FlaskConical, value: "1,600+", label: t("home.stats.instruments") },
    { icon: Users, value: "21", label: t("home.stats.members") },
    { icon: Globe, value: "6+", label: t("home.stats.collaborators") },
  ];

  return (
    <section className="relative -mt-12 z-10">
      <div className="container">
        <div className="bg-card rounded-xl shadow-lg border border-border p-6 lg:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-5 h-5 text-forest dark:text-forest-light mx-auto mb-2" />
                <div className="font-display text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-24">
      <div className="container">
        <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="font-mono text-sm tracking-widest text-muted-foreground mb-2 block">01</span>
              <h2 className="section-title text-3xl md:text-4xl text-foreground mb-6">
                {t("home.about.title")}
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-forest/30 dark:bg-forest-light/30" />
                <div className="w-2 h-2 rounded-full border border-forest/40 dark:border-forest-light/40" />
                <div className="w-3 h-3 rounded-full border-2 border-gold dark:border-gold-light" />
                <div className="w-2 h-2 rounded-full border border-forest/40 dark:border-forest-light/40" />
                <div className="h-px w-8 bg-forest/30 dark:bg-forest-light/30" />
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t("home.about.text")}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <img
                  src={IMAGES.fieldwork}
                  alt="PWRlab fieldwork"
                  className="rounded-lg shadow-md w-full aspect-[4/3] object-cover"
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-gold/30 dark:border-gold-light/30 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsCard({ item, lang, index }: { item: typeof newsItems[0]; lang: "en" | "zh"; index: number }) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const tagColors: Record<string, string> = {
    paper: "bg-forest/10 text-forest dark:bg-forest-light/10 dark:text-forest-light",
    conference: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    award: "bg-gold/10 text-gold dark:bg-gold-light/10 dark:text-gold-light",
    fieldwork: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    graduation: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    general: "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  };

  return (
    <div
      ref={ref}
      className={`fade-in-up ${isVisible ? "visible" : ""} bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow duration-300`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${tagColors[item.tag] || tagColors.general}`}>
          {t(`news.tags.${item.tag}`)}
        </span>
        <span className="text-xs text-muted-foreground">{item.date}</span>
      </div>
      <h3 className="font-display text-lg font-medium text-foreground mb-2 line-clamp-2">
        {item.title[lang]}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-3">
        {item.summary[lang]}
      </p>
    </div>
  );
}
