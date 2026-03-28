/*
 * PWRlab News Detail Page — Full article view with markdown-like rendering
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { newsItems } from "@/lib/data";
import ContentSection from "@/components/ContentSection";
import { Calendar, ArrowLeft } from "lucide-react";
import { Link, useParams } from "wouter";

function renderContent(content: string) {
  const parts = content.split(/(\!\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    const imgMatch = part.match(/^\!\[(.*?)\]\((.*?)\)$/);
    if (imgMatch) {
      return (
        <figure key={i} className="my-8">
          <img
            src={imgMatch[2]}
            alt={imgMatch[1]}
            className="w-full rounded-lg shadow-md"
          />
          {imgMatch[1] && (
            <figcaption className="text-center text-sm text-muted-foreground mt-3">
              {imgMatch[1]}
            </figcaption>
          )}
        </figure>
      );
    }
    if (!part.trim()) return null;
    return part.split("\n\n").map((paragraph, j) => {
      if (!paragraph.trim()) return null;
      return (
        <p key={`${i}-${j}`} className="text-base text-foreground/85 leading-relaxed mb-4">
          {paragraph.trim()}
        </p>
      );
    });
  });
}

export default function NewsDetail() {
  const { lang, t } = useLanguage();
  const params = useParams<{ id: string }>();
  const item = newsItems.find((n) => n.id === params.id);

  if (!item || !item.content) {
    return (
      <ContentSection bg="white">
        <div className="max-w-3xl mx-auto text-center py-20">
          <p className="text-muted-foreground mb-4">
            {lang === "en" ? "Article not found" : "文章未找到"}
          </p>
          <Link href="/news" className="text-forest dark:text-forest-light hover:underline inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            {lang === "en" ? "Back to News" : "返回新闻"}
          </Link>
        </div>
      </ContentSection>
    );
  }

  const tagColors: Record<string, string> = {
    paper: "bg-forest/10 text-forest dark:bg-forest-light/10 dark:text-forest-light",
    conference: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    award: "bg-gold/10 text-gold dark:bg-gold-light/10 dark:text-gold-light",
    fieldwork: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    graduation: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    general: "bg-muted text-muted-foreground",
  };

  return (
    <div>
      {item.image && (
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img
            src={item.image}
            alt={item.title[lang]}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <ContentSection bg="white">
        <div className="max-w-3xl mx-auto">
          <Link href="/news" className="text-sm text-forest dark:text-forest-light hover:underline inline-flex items-center gap-1.5 mb-8">
            <ArrowLeft className="w-4 h-4" />
            {lang === "en" ? "Back to News" : "返回新闻列表"}
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tagColors[item.tag] || tagColors.general}`}>
              {t(`news.tags.${item.tag}`)}
            </span>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {item.date}
            </div>
          </div>

          <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
            {item.title[lang]}
          </h1>

          <div className="prose-custom">
            {renderContent(item.content[lang])}
          </div>
        </div>
      </ContentSection>
    </div>
  );
}
