/*
 * PWRlab Projects Page — Botanical Modernism
 * Current / Completed tabs, project cards with funding & period
 */
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";
import { projects, IMAGES, type Project } from "@/lib/data";
import PageHero from "@/components/PageHero";
import { Calendar, Banknote } from "lucide-react";

export default function Projects() {
  const { lang, t } = useLanguage();
  const [tab, setTab] = useState<"current" | "completed">("current");
  const filtered = projects.filter((p) => p.status === tab);

  return (
    <div className="pb-20">
      <PageHero
        image={IMAGES.heroProjects}
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      />
      <div className="container pt-12">

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {(["current", "completed"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setTab(status)}
              className={`px-5 py-2.5 text-sm font-medium rounded-md transition-colors duration-200
                ${tab === status
                  ? "bg-forest text-white dark:bg-forest-light dark:text-[oklch(0.16_0.015_260)]"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
            >
              {t(`projects.${status}`)}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="space-y-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, lang, index }: { project: Project; lang: "en" | "zh"; index: number }) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`fade-in-up ${isVisible ? "visible" : ""} bg-card rounded-xl border border-border overflow-hidden card-hover duration-300`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {project.image && (
          <div className="lg:col-span-4">
            <img
              src={project.image}
              alt={project.title[lang]}
              className="w-full h-48 lg:h-full object-cover"
            />
          </div>
        )}
        <div className={`${project.image ? "lg:col-span-8" : "lg:col-span-12"} p-6 lg:p-8`}>
          <h3 className="font-display text-xl font-medium text-foreground mb-3">
            {project.title[lang]}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {project.description[lang]}
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Banknote className="w-4 h-4 text-gold dark:text-gold-light" />
              <span className="font-medium">{t("projects.funding")}:</span>
              {project.funding[lang]}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4 text-forest dark:text-forest-light" />
              <span className="font-medium">{t("projects.period")}:</span>
              {project.period}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
