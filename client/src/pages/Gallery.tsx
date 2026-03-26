/*
 * PWRlab Gallery Page — Premium magazine style
 * Photo grid with category filter and lightbox
 */
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { galleryImages, IMAGES, type GalleryImage } from "@/lib/data";
import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import { X } from "lucide-react";

type Category = "all" | "fieldwork" | "lab" | "team";

export default function Gallery() {
  const { lang, t } = useLanguage();
  const [category, setCategory] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered = category === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === category);

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: t("gallery.all") },
    { key: "fieldwork", label: t("gallery.fieldwork") },
    { key: "lab", label: t("gallery.lab") },
    { key: "team", label: t("gallery.team") },
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
        <div className="flex justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200
                ${category === cat.key
                  ? "bg-forest text-white dark:bg-forest-light dark:text-[oklch(0.16_0.015_260)]"
                  : "bg-white/80 dark:bg-black/20 text-muted-foreground hover:bg-white dark:hover:bg-black/30"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </ContentSection>

      {/* Photo Grid */}
      <ContentSection bg="white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((img) => (
            <button
              key={img.id}
              onClick={() => setLightbox(img)}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] mag-card"
            >
              <img
                src={img.src}
                alt={img.caption[lang]}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm text-white font-medium">{img.caption[lang]}</p>
              </div>
            </button>
          ))}
        </div>
      </ContentSection>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.caption[lang]}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-center text-white/80 text-sm mt-4">
              {lightbox.caption[lang]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
