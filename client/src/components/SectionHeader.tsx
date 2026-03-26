/*
 * PWRlab Section Header — Botanical Modernism
 * Section number + title + subtitle with tree-ring divider
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({ number, title, subtitle, align = "center", light }: SectionHeaderProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`fade-in-up ${isVisible ? "visible" : ""} mb-12 lg:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {number && (
        <span className={`font-mono text-sm tracking-widest ${light ? "text-white/40" : "text-muted-foreground"} mb-2 block`}>
          {number}
        </span>
      )}
      <h2 className={`section-title text-3xl md:text-4xl lg:text-5xl ${light ? "text-white" : "text-foreground"} mb-4`}>
        {title}
      </h2>
      {/* Tree-ring divider */}
      <div className={`flex items-center gap-2 ${align === "center" ? "justify-center" : ""} mb-4`}>
        <div className={`h-px w-8 ${light ? "bg-white/30" : "bg-forest/30 dark:bg-forest-light/30"}`} />
        <div className={`w-2 h-2 rounded-full border ${light ? "border-white/40" : "border-forest/40 dark:border-forest-light/40"}`} />
        <div className={`w-3 h-3 rounded-full border-2 ${light ? "border-gold-light" : "border-gold dark:border-gold-light"}`} />
        <div className={`w-2 h-2 rounded-full border ${light ? "border-white/40" : "border-forest/40 dark:border-forest-light/40"}`} />
        <div className={`h-px w-8 ${light ? "bg-white/30" : "bg-forest/30 dark:bg-forest-light/30"}`} />
      </div>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl ${align === "center" ? "mx-auto" : ""} ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
