/*
 * PageHero — Inner page hero banner
 * Full-width image with dark gradient overlay, title, subtitle, decorative divider
 * Subtle zoom-in animation on load
 */
import { useEffect, useState } from "react";

interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ image, title, subtitle }: PageHeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[250px] md:h-[350px] flex items-end overflow-hidden">
      {/* Background image with zoom animation */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] ease-out ${loaded ? "scale-100" : "scale-110"}`}
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/25" />
      {/* Content */}
      <div className="relative container pb-10 md:pb-14">
        <div
          className={`transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h1 className="hero-title text-white !text-3xl md:!text-5xl mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/85 text-base md:text-lg max-w-2xl leading-relaxed mb-4">
              {subtitle}
            </p>
          )}
          {/* Decorative divider — tree ring motif */}
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-white/30" />
            <div className="w-1.5 h-1.5 rounded-full border border-white/40" />
            <div className="w-2.5 h-2.5 rounded-full border-2 border-[oklch(0.82_0.08_85)]" />
            <div className="w-1.5 h-1.5 rounded-full border border-white/40" />
            <div className="h-px w-8 bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
