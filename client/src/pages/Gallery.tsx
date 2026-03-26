/*
 * PWRlab Gallery Page — Performance-optimized
 * Lazy loading + load-more pagination + thumbnail sizing
 */
import { useState, useCallback, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { galleryImages, IMAGES, type GalleryImage } from "@/lib/data";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import { X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

type Category = "all" | "fieldwork" | "lab" | "team";

const PAGE_SIZE = 12;

/* ---------- Lazy Image Component ---------- */
function LazyImage({ src, alt, className }: { src: string; alt: string; className: string }) {
  const imgRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // start loading 200px before visible
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="w-full h-full relative bg-muted">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-6 h-6 text-muted-foreground/40 animate-spin" />
        </div>
      )}
      {isVisible && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}

export default function Gallery() {
  const { lang, t } = useLanguage();
  const [category, setCategory] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = category === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === category);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const remaining = filtered.length - visibleCount;

  const handleCategoryChange = useCallback((cat: Category) => {
    setCategory(cat);
    setVisibleCount(PAGE_SIZE); // reset pagination on category switch
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  }, []);

  // Lightbox navigation
  const lightboxIndex = lightbox ? filtered.findIndex((img) => img.id === lightbox.id) : -1;
  const handlePrev = useCallback(() => {
    if (lightboxIndex > 0) setLightbox(filtered[lightboxIndex - 1]);
  }, [lightboxIndex, filtered]);
  const handleNext = useCallback(() => {
    if (lightboxIndex < filtered.length - 1) setLightbox(filtered[lightboxIndex + 1]);
  }, [lightboxIndex, filtered]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, handlePrev, handleNext]);

  const categories: { key: Category; label: string; count: number }[] = [
    { key: "all", label: t("gallery.all"), count: galleryImages.length },
    { key: "fieldwork", label: t("gallery.fieldwork"), count: galleryImages.filter((i) => i.category === "fieldwork").length },
    { key: "lab", label: t("gallery.lab"), count: galleryImages.filter((i) => i.category === "lab").length },
    { key: "team", label: t("gallery.team"), count: galleryImages.filter((i) => i.category === "team").length },
  ];

  return (
    <div>
      <PageHero
        image={IMAGES.heroGallery}
        title={t("gallery.title")}
        subtitle={t("gallery.subtitle")}
      />

      {/* Category Filter */}
      <ContentSection bg="warm" noAnimation>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleCategoryChange(cat.key)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200
                ${category === cat.key
                  ? "bg-forest text-white dark:bg-forest-light dark:text-[oklch(0.16_0.015_260)]"
                  : "bg-white/80 dark:bg-black/20 text-muted-foreground hover:bg-white dark:hover:bg-black/30"
                }`}
            >
              {cat.label}
              <span className="ml-1.5 text-xs opacity-70">({cat.count})</span>
            </button>
          ))}
        </div>
      </ContentSection>

      {/* Photo Grid */}
      <ContentSection bg="white">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {visible.map((img) => (
            <button
              key={img.id}
              onClick={() => setLightbox(img)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] mag-card"
            >
              <LazyImage
                src={img.src}
                alt={img.caption[lang]}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs text-white font-medium">{img.caption[lang]}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-forest text-white dark:bg-forest-light dark:text-[oklch(0.16_0.015_260)] text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              {lang === "en"
                ? `Load More (${Math.min(PAGE_SIZE, remaining)} of ${remaining} remaining)`
                : `加载更多（剩余 ${remaining} 张）`}
            </button>
          </div>
        )}

        {/* Counter */}
        <p className="text-center text-xs text-muted-foreground mt-4">
          {lang === "en"
            ? `Showing ${visible.length} of ${filtered.length} photos`
            : `显示 ${visible.length} / ${filtered.length} 张`}
        </p>
      </ContentSection>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev */}
          {lightboxIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {/* Next */}
          {lightboxIndex < filtered.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}

          <div className="max-w-5xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.caption[lang]}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-center text-white/80 text-sm mt-4">
              {lightbox.caption[lang]}
              <span className="ml-2 text-white/50 text-xs">
                {lightboxIndex + 1} / {filtered.length}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
