/*
 * PWRlab Contact Page — Premium magazine style
 * Address, email, map, and "Join Us" section
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { IMAGES } from "@/lib/data";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import WaveDivider from "@/components/WaveDivider";
import { MapPin, Mail, Users, ExternalLink, Globe, Eye } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
  const { lang, t } = useLanguage();

  return (
    <div>
      <PageHero
        image={IMAGES.heroContact}
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      {/* Contact Info + Map */}
      <ContentSection bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-forest/10 dark:bg-forest-light/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-forest dark:text-forest-light" />
              </div>
              <div>
                <h3 className="font-display text-base font-medium text-foreground mb-1">{t("contact.address.title")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t("contact.address.text")}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-forest/10 dark:bg-forest-light/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-forest dark:text-forest-light" />
              </div>
              <div>
                <h3 className="font-display text-base font-medium text-foreground mb-1">{t("contact.email.title")}</h3>
                <a
                  href="mailto:benyexi@bjfu.edu.cn"
                  className="text-sm text-forest dark:text-forest-light hover:underline"
                >
                  benyexi@bjfu.edu.cn
                </a>
              </div>
            </div>

            {/* Join Us */}
            <div className="bg-forest/5 dark:bg-forest-light/5 rounded-xl p-6 border border-forest/10 dark:border-forest-light/10">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-forest dark:text-forest-light" />
                <h3 className="font-display text-lg font-medium text-foreground">
                  {t("contact.join.title")}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {t("contact.join.text")}
              </p>
              <a
                href="mailto:benyexi@bjfu.edu.cn"
                className="inline-flex items-center gap-2 px-4 py-2 bg-forest text-white dark:bg-forest-light dark:text-[oklch(0.16_0.015_260)] text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                {t("contact.cta")}
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div>
            <h3 className="font-display text-lg font-medium text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-forest dark:text-forest-light" />
              {t("contact.map.title")}
            </h3>
            <div className="rounded-xl overflow-hidden border border-border aspect-[4/3]">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=116.335%2C39.993%2C116.360%2C40.008&layer=mapnik&marker=40.0002%2C116.3475"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                loading="lazy"
                title="Beijing Forestry University Location"
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-muted-foreground">
                {t("contact.address.short")}
              </p>
              <a
                href="https://www.openstreetmap.org/?mlat=40.0002&mlon=116.3475#map=16/40.0002/116.3475"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-forest dark:text-forest-light hover:underline"
              >
                {t("contact.map.viewLarger")} <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </ContentSection>

      <WaveDivider fill="#f9f7f4" />

      {/* Visitor Analytics */}
      <ContentSection bg="warm">
        <div className="max-w-5xl mx-auto">
          <h3 className="font-display text-lg font-medium text-foreground mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-forest dark:text-forest-light" />
            {lang === "en" ? "Visitor Map" : "访客地图"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* ClustrMaps 3D Globe Widget */}
            <div className="mag-card bg-card border border-border p-6 flex flex-col items-center">
              <div className="w-full flex justify-center" ref={(el) => {
                if (el && !el.querySelector('#clstr_globe')) {
                  const script = document.createElement('script');
                  script.type = 'text/javascript';
                  script.id = 'clstr_globe';
                  script.src = '//clustrmaps.com/globe.js?d=eqEp0shaXfCRmJu8qZzAmcqzGTm2eQWfpQ25qgHKkTI';
                  el.appendChild(script);
                }
              }}>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                {lang === "en"
                  ? "Real-time visitor locations from around the world"
                  : "来自世界各地的实时访客位置"}
              </p>
              <VisitorCounter lang={lang} />
            </div>
            {/* Visitor Stats */}
            <div className="space-y-4">
              <div className="mag-card bg-card border border-border p-6">
                <p className="text-sm text-muted-foreground mb-2">
                  {lang === "en" ? "Website launched" : "网站上线时间"}
                </p>
                <p className="font-display text-2xl font-bold text-forest dark:text-forest-light">2026</p>
              </div>
              <div className="mag-card bg-card border border-border p-6">
                <p className="text-sm text-muted-foreground mb-2">
                  {lang === "en" ? "WeChat Public Account" : "微信公众号"}
                </p>
                <p className="font-display text-2xl font-bold text-forest dark:text-forest-light">PWRlab</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {lang === "en" ? "8,389 followers · 440,000+ reads" : "8,389 关注 · 44万+ 阅读"}
                </p>
              </div>
              <div className="mag-card bg-card border border-border p-6">
                <p className="text-sm text-muted-foreground mb-2">
                  {lang === "en" ? "Joint Columns" : "联合专栏"}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {lang === "en"
                    ? "Agricultural Water Management & Journal of Hydrology"
                    : "Agricultural Water Management 和 Journal of Hydrology"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  );
}

function VisitorCounter({ lang }: { lang: "en" | "zh" }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const KEY = "pwrlab-website-visits";
    const STORAGE_KEY = "pwrlab-visited";

    async function fetchCount() {
      try {
        // Check if already counted in this session
        const visited = sessionStorage.getItem(STORAGE_KEY);
        const endpoint = visited
          ? `https://api.countapi.xyz/get/benyexi.github.io/${KEY}`
          : `https://api.countapi.xyz/hit/benyexi.github.io/${KEY}`;

        const res = await fetch(endpoint);
        const data = await res.json();
        if (data.value != null) {
          setCount(data.value);
          if (!visited) sessionStorage.setItem(STORAGE_KEY, "1");
        }
      } catch {
        // Silently fail
      }
    }

    fetchCount();
  }, []);

  return (
    <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
      <Eye className="w-4 h-4" />
      <span className="text-sm">
        {lang === "en" ? "Total Visits: " : "总访问量："}
        <span className="font-semibold text-forest dark:text-forest-light">
          {count != null ? count.toLocaleString() : "..."}
        </span>
      </span>
    </div>
  );
}
