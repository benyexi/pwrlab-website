/*
 * PWRlab Team Page — Botanical Modernism
 * PI large card, then grid of students/collaborators/alumni
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";
import { teamMembers, type TeamMember } from "@/lib/data";
import { Mail, ExternalLink, GraduationCap } from "lucide-react";

export default function Team() {
  const { lang, t } = useLanguage();
  const pi = teamMembers.filter((m) => m.role === "pi");
  const collaborators = teamMembers.filter((m) => m.role === "collaborator");
  const phd = teamMembers.filter((m) => m.role === "phd");
  const msc = teamMembers.filter((m) => m.role === "msc");
  const alumni = teamMembers.filter((m) => m.role === "alumni");

  return (
    <div className="pt-24 pb-20">
      <div className="container">
        <SectionHeader
          number="04"
          title={t("team.title")}
          subtitle={t("team.subtitle")}
        />

        {/* PI Section */}
        {pi.map((member) => (
          <PICard key={member.id} member={member} lang={lang} />
        ))}

        {/* Collaborators */}
        {collaborators.length > 0 && (
          <TeamSection title={t("team.collaborators")} members={collaborators} lang={lang} />
        )}

        {/* PhD Students */}
        {phd.length > 0 && (
          <TeamSection title={t("team.phd")} members={phd} lang={lang} />
        )}

        {/* MSc Students */}
        {msc.length > 0 && (
          <TeamSection title={t("team.msc")} members={msc} lang={lang} />
        )}

        {/* Alumni */}
        {alumni.length > 0 && (
          <TeamSection title={t("team.alumni")} members={alumni} lang={lang} />
        )}
      </div>
    </div>
  );
}

function PICard({ member, lang }: { member: TeamMember; lang: "en" | "zh" }) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""} mb-16`}>
      <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <GraduationCap className="w-5 h-5 text-gold dark:text-gold-light" />
        {t("team.pi")}
      </h3>
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-4 p-6 lg:p-8 flex justify-center lg:justify-start">
            <img
              src={member.photo}
              alt={member.name[lang]}
              className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-forest/20 dark:border-forest-light/20"
            />
          </div>
          <div className="lg:col-span-8 p-6 lg:p-8 flex flex-col justify-center">
            <h4 className="font-display text-2xl font-bold text-foreground mb-2">
              {member.name[lang]}
            </h4>
            <p className="text-sm text-forest dark:text-forest-light font-medium mb-4">
              {t("team.interests")}: {member.interests[lang]}
            </p>
            {member.bio && (
              <p className="text-muted-foreground leading-relaxed mb-4">
                {member.bio[lang]}
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-forest dark:hover:text-forest-light transition-colors"
                >
                  <Mail className="w-4 h-4" /> {member.email}
                </a>
              )}
              {member.scholar && (
                <a href={member.scholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-forest dark:hover:text-forest-light transition-colors">
                  Google Scholar <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {member.orcid && (
                <a href={member.orcid} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-forest dark:hover:text-forest-light transition-colors">
                  ORCID <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamSection({ title, members, lang }: { title: string; members: TeamMember[]; lang: "en" | "zh" }) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""} mb-12`}>
      <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
        <div className="h-px w-6 bg-forest/30 dark:bg-forest-light/30" />
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} lang={lang} />
        ))}
      </div>
    </div>
  );
}

function MemberCard({ member, lang }: { member: TeamMember; lang: "en" | "zh" }) {
  return (
    <div className="bg-card rounded-lg border border-border p-5 hover:shadow-md transition-shadow duration-300 text-center">
      <img
        src={member.photo}
        alt={member.name[lang]}
        className="w-24 h-24 rounded-full object-cover mx-auto mb-3 border-2 border-forest/10 dark:border-forest-light/10"
      />
      <h4 className="font-display text-base font-semibold text-foreground mb-1">
        {member.name[lang]}
      </h4>
      {member.year && (
        <p className="text-xs text-muted-foreground mb-2">
          {member.role === "alumni" ? `Class of ${member.year}` : `Since ${member.year}`}
        </p>
      )}
      <p className="text-xs text-muted-foreground leading-relaxed">
        {member.interests[lang]}
      </p>
      <div className="flex justify-center gap-2 mt-3">
        {member.email && (
          <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-forest dark:hover:text-forest-light transition-colors">
            <Mail className="w-3.5 h-3.5" />
          </a>
        )}
        {member.website && (
          <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-forest dark:hover:text-forest-light transition-colors">
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
