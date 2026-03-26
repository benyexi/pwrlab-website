/*
 * PWRlab Publications Page — Botanical Modernism
 * Year-sorted list with search, year filter, DOI links
 * BibTeX import support
 */
import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";
import { publications, IMAGES, type Publication } from "@/lib/data";
import PageHero from "@/components/PageHero";
import { Search, ExternalLink, Star, FileText } from "lucide-react";

export default function Publications() {
  const { lang, t } = useLanguage();
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("all");
  const [tagFilter, setTagFilter] = useState("all");

  const years = useMemo(() => {
    const yrs = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a);
    return yrs;
  }, []);

  const filtered = useMemo(() => {
    let result = [...publications];
    if (yearFilter !== "all") {
      result = result.filter((p) => p.year === parseInt(yearFilter));
    }
    if (tagFilter !== "all") {
      result = result.filter((p) => p.tags && p.tags.includes(tagFilter));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.authors.toLowerCase().includes(q) ||
          p.journal.toLowerCase().includes(q)
      );
    }
    return result.sort((a, b) => b.year - a.year);
  }, [search, yearFilter, tagFilter]);

  const grouped = useMemo(() => {
    const map = new Map<number, Publication[]>();
    filtered.forEach((p) => {
      if (!map.has(p.year)) map.set(p.year, []);
      map.get(p.year)!.push(p);
    });
    return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  return (
    <div className="pb-20">
      <PageHero
        image={IMAGES.heroPublications}
        title={t("publications.title")}
        subtitle={t("publications.subtitle")}
      />
      <div className="container pt-12">

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("publications.search")}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-forest/30 dark:focus:ring-forest-light/30 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <select
            value={tagFilter}
            onChange={(e) => setTagFilter(e.target.value)}
            className="px-4 py-2.5 text-sm bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-forest/30 dark:focus:ring-forest-light/30 text-foreground"
          >
            <option value="all">{lang === "en" ? "All Types" : "全部类型"}</option>
            <option value="SCI">SCI</option>
            <option value="EI">EI</option>
            <option value="CSCD">CSCD</option>
            <option value="Under Review">{lang === "en" ? "Under Review" : "在审"}</option>
          </select>
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="px-4 py-2.5 text-sm bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-forest/30 dark:focus:ring-forest-light/30 text-foreground"
          >
            <option value="all">{t("publications.allYears")}</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        {/* Publication Count */}
        <p className="text-center text-sm text-muted-foreground mb-8">
          {t("publications.count").replace("{n}", String(filtered.length))}
        </p>

        {/* Grouped by Year */}
        <div className="max-w-4xl mx-auto space-y-10">
          {grouped.map(([year, pubs]) => (
            <YearGroup key={year} year={year} publications={pubs} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <FileText className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground">{t("publications.empty")}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function YearGroup({ year, publications }: { year: number; publications: Publication[] }) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
      <div className="flex items-center gap-4 mb-4">
        <h3 className="font-display text-2xl font-normal text-foreground">{year}</h3>
        <div className="h-px flex-1 bg-border" />
        <span className="text-sm text-muted-foreground">
          {t("publications.paperCount").replace("{n}", String(publications.length))}
        </span>
      </div>
      <div className="space-y-4">
        {publications.map((pub) => (
          <PubItem key={pub.id} pub={pub} />
        ))}
      </div>
    </div>
  );
}

function PubItem({ pub }: { pub: Publication }) {
  return (
    <div className="group pl-4 border-l-2 border-border hover:border-forest dark:hover:border-forest-light transition-colors duration-200 py-2">
      <div className="flex items-start gap-2">
        {pub.highlight && (
          <Star className="w-4 h-4 text-gold dark:text-gold-light mt-1 shrink-0 fill-current" />
        )}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-foreground leading-snug mb-1">
            {pub.title}
          </h4>
          <p className="text-xs text-muted-foreground mb-1">
            {pub.authors}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-xs text-muted-foreground">
              <span className="italic">{pub.journal}</span>
              {pub.volume && <>, {pub.volume}</>}
              {pub.pages && <>, {pub.pages}</>}
              {pub.doi && (
                <>
                  {" "}
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-forest dark:text-forest-light hover:underline"
                  >
                    DOI <ExternalLink className="w-3 h-3" />
                  </a>
                </>
              )}
            </p>
            {pub.tags && pub.tags.length > 0 && (
              <div className="flex gap-1">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                      tag === "SCI" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" :
                      tag === "EI" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300" :
                      tag === "CSCD" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" :
                      tag === "Under Review" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" :
                      "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
