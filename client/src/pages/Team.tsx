/*
 * PWRlab Team Page — Botanical Modernism
 * Enhanced PI card with education, honors, positions, awards
 * Editorial roles, teaching, team stats
 * Then grid of collaborators, students, alumni
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";
import { teamMembers, awards, editorialRoles, courses, type TeamMember } from "@/lib/data";
import { Mail, ExternalLink, GraduationCap, Award, BookOpen, Briefcase, Trophy, Users, PenTool, BookMarked } from "lucide-react";

export default function Team() {
  const { lang, t } = useLanguage();
  const pi = teamMembers.filter((m) => m.role === "pi");
  const collaborators = teamMembers.filter((m) => m.role === "collaborator");
  const faculty = teamMembers.filter((m) => m.role === "faculty");
  const engineers = teamMembers.filter((m) => m.role === "engineer");
  const phd = teamMembers.filter((m) => m.role === "phd");
  const msc = teamMembers.filter((m) => m.role === "msc");
  const alumniPhd = teamMembers.filter((m) => m.role === "alumni_phd");
  const alumniMsc = teamMembers.filter((m) => m.role === "alumni_msc");

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

        {/* Awards Section */}
        <AwardsSection lang={lang} />

        {/* Editorial Roles */}
        <EditorialSection lang={lang} />

        {/* Teaching */}
        <TeachingSection lang={lang} />

        {/* Team Stats */}
        <TeamStats lang={lang} phd={phd.length} msc={msc.length} collaborators={collaborators.length} />

        {/* Faculty Members */}
        {faculty.length > 0 && (
          <TeamSection title={lang === "en" ? "Faculty Members" : "团队教师"} members={faculty} lang={lang} />
        )}

        {/* Engineer */}
        {engineers.length > 0 && (
          <TeamSection title={lang === "en" ? "Engineers" : "工程师"} members={engineers} lang={lang} />
        )}

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

        {/* Alumni PhD */}
        {alumniPhd.length > 0 && (
          <TeamSection title={lang === "en" ? "Graduated PhD Students" : "已毕业博士研究生"} members={alumniPhd} lang={lang} />
        )}

        {/* Alumni MSc */}
        {alumniMsc.length > 0 && (
          <TeamSection title={lang === "en" ? "Graduated MSc Students" : "已毕业硕士研究生"} members={alumniMsc} lang={lang} />
        )}
      </div>
    </div>
  );
}

function PICard({ member, lang }: { member: TeamMember; lang: "en" | "zh" }) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""} mb-12`}>
      <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <GraduationCap className="w-5 h-5 text-gold dark:text-gold-light" />
        {t("team.pi")}
      </h3>
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-4 p-6 lg:p-8 flex flex-col items-center lg:items-start">
            <img
              src={member.photo}
              alt={member.name[lang]}
              className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-forest/20 dark:border-forest-light/20 mb-4"
            />
            {/* Links */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-forest dark:hover:text-forest-light transition-colors"
                >
                  <Mail className="w-4 h-4" /> Email
                </a>
              )}
              {member.scholar && (
                <a href={member.scholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-forest dark:hover:text-forest-light transition-colors">
                  {t("team.googleScholar")} <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {member.researchgate && (
                <a href={member.researchgate} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-forest dark:hover:text-forest-light transition-colors">
                  ResearchGate <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {member.orcid && (
                <a href={member.orcid} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-forest dark:hover:text-forest-light transition-colors">
                  ORCID <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
          <div className="lg:col-span-8 p-6 lg:p-8 flex flex-col justify-center">
            <h4 className="font-display text-2xl font-bold text-foreground mb-1">
              {member.name[lang]}
            </h4>
            {member.title && (
              <p className="text-sm text-forest dark:text-forest-light font-medium mb-4">
                {member.title[lang]}
              </p>
            )}
            {member.bio && (
              <p className="text-muted-foreground leading-relaxed mb-5">
                {member.bio[lang]}
              </p>
            )}

            {/* Honors */}
            {member.honors && member.honors.length > 0 && (
              <div className="mb-4">
                <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                  <Award className="w-4 h-4 text-gold dark:text-gold-light" />
                  {lang === "en" ? "Honors" : "荣誉称号"}
                </h5>
                <ul className="space-y-1">
                  {member.honors.map((h, i) => (
                    <li key={i} className="text-sm text-muted-foreground pl-6 relative before:absolute before:left-1.5 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gold/50 dark:before:bg-gold-light/50">
                      {h[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Positions */}
            {member.positions && member.positions.length > 0 && (
              <div className="mb-4">
                <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                  <Briefcase className="w-4 h-4 text-forest dark:text-forest-light" />
                  {lang === "en" ? "Current Positions" : "现任职务"}
                </h5>
                <ul className="space-y-1">
                  {member.positions.map((p, i) => (
                    <li key={i} className="text-sm text-muted-foreground pl-6 relative before:absolute before:left-1.5 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-forest/30 dark:before:bg-forest-light/30">
                      {p[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Education */}
            {member.education && member.education.length > 0 && (
              <div>
                <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                  <BookOpen className="w-4 h-4 text-forest dark:text-forest-light" />
                  {lang === "en" ? "Education" : "教育经历"}
                </h5>
                <ul className="space-y-1">
                  {member.education.map((e, i) => (
                    <li key={i} className="text-sm text-muted-foreground pl-6 relative before:absolute before:left-1.5 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-forest/30 dark:before:bg-forest-light/30">
                      {e[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AwardsSection({ lang }: { lang: "en" | "zh" }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""} mb-12`}>
      <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <Trophy className="w-5 h-5 text-gold dark:text-gold-light" />
        {lang === "en" ? "Awards & Honors" : "获奖情况"}
      </h3>
      <div className="bg-card rounded-xl border border-border overflow-hidden max-h-[500px] overflow-y-auto">
        <div className="divide-y divide-border">
          {awards.map((award) => (
            <div key={award.id} className="flex items-start gap-4 p-4 lg:p-5 hover:bg-muted/30 transition-colors">
              <div className="font-mono text-sm font-semibold text-forest dark:text-forest-light shrink-0 w-12 text-center pt-0.5">
                {award.year}
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground leading-relaxed">
                  {award.title[lang]}
                </p>
                {award.rank && (
                  <span className="inline-block mt-1 text-xs bg-gold/10 text-gold dark:bg-gold-light/10 dark:text-gold-light px-2 py-0.5 rounded">
                    {lang === "en" ? `Rank: ${award.rank}` : `排名: ${award.rank}`}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EditorialSection({ lang }: { lang: "en" | "zh" }) {
  const { ref, isVisible } = useScrollAnimation();
  const editors = editorialRoles.filter((r) => r.type === "editor");
  const guestEditors = editorialRoles.filter((r) => r.type === "guest_editor");

  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""} mb-12`}>
      <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <PenTool className="w-5 h-5 text-forest dark:text-forest-light" />
        {lang === "en" ? "Editorial Service" : "学术兼职"}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Editorial Board */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h4 className="text-sm font-semibold text-foreground mb-4">
            {lang === "en" ? "Editorial Board" : "编委"}
          </h4>
          <ul className="space-y-3">
            {editors.map((r) => (
              <li key={r.id} className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{r.role[lang]}</span>
                <br />
                <span className="text-xs">{r.journal}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Guest Editor */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h4 className="text-sm font-semibold text-foreground mb-4">
            {lang === "en" ? "Guest Editor" : "客座编辑"}
          </h4>
          <ul className="space-y-3">
            {guestEditors.map((r) => (
              <li key={r.id} className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{r.role[lang]}</span>
                <br />
                <span className="text-xs italic">{r.journal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function TeachingSection({ lang }: { lang: "en" | "zh" }) {
  const { ref, isVisible } = useScrollAnimation();
  const undergrad = courses.filter((c) => c.level === "undergraduate");
  const grad = courses.filter((c) => c.level === "graduate");
  const intl = courses.filter((c) => c.level === "international");

  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""} mb-12`}>
      <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <BookMarked className="w-5 h-5 text-forest dark:text-forest-light" />
        {lang === "en" ? "Teaching" : "教学"}
      </h3>
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Undergraduate */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              {lang === "en" ? "Undergraduate" : "本科课程"}
            </h4>
            <ul className="space-y-2">
              {undergrad.map((c) => (
                <li key={c.id} className="text-sm text-muted-foreground">
                  {c.name[lang]}
                  {c.distinction && (
                    <span className="block text-xs text-gold dark:text-gold-light mt-0.5">
                      {c.distinction[lang]}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Graduate */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              {lang === "en" ? "Graduate" : "研究生课程"}
            </h4>
            <ul className="space-y-2">
              {grad.map((c) => (
                <li key={c.id} className="text-sm text-muted-foreground">
                  {c.name[lang]}
                </li>
              ))}
            </ul>
          </div>
          {/* International */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              {lang === "en" ? "International Programs" : "留学生课程"}
            </h4>
            <ul className="space-y-2">
              {intl.map((c) => (
                <li key={c.id} className="text-sm text-muted-foreground">
                  {c.name[lang]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamStats({ lang, phd, msc, collaborators }: { lang: "en" | "zh"; phd: number; msc: number; collaborators: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const stats = [
    { value: `${phd}`, label: lang === "en" ? "PhD Students" : "博士研究生", sub: lang === "en" ? "Including 3 international" : "含3名留学生" },
    { value: `${msc}`, label: lang === "en" ? "MSc Students" : "硕士研究生" },
    { value: `${collaborators}`, label: lang === "en" ? "International Collaborators" : "国际合作者" },
    { value: "3+20", label: lang === "en" ? "Graduated (PhD+MSc)" : "已毕业（博+硕）", sub: lang === "en" ? "43 undergrad mentees" : "指导本科生43人" },
    { value: "1", label: lang === "en" ? "Presidential Scholarship" : "校长奖学金" },
    { value: "7", label: lang === "en" ? "National Scholarships" : "国家奖学金", sub: lang === "en" ? "Among students" : "学生获得" },
    { value: "3", label: lang === "en" ? "Shen Guofang Awards" : "沈国舫奖学金" },
    { value: "3+1", label: lang === "en" ? "Outstanding Dissertations" : "优秀论文", sub: lang === "en" ? "3 PhD + 1 MSc" : "博士3篇 + 硕士1篇" },
  ];

  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""} mb-12`}>
      <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
        <Users className="w-5 h-5 text-forest dark:text-forest-light" />
        {lang === "en" ? "Team Overview" : "团队概况"}
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-card rounded-lg border border-border p-5 text-center">
            <div className="font-display text-3xl font-bold text-forest dark:text-forest-light mb-1">{s.value}</div>
            <div className="text-sm font-medium text-foreground">{s.label}</div>
            {s.sub && <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamSection({ title, members, lang }: { title: string; members: TeamMember[]; lang: "en" | "zh" }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""} mb-12`}>
      <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
        <div className="h-px w-6 bg-forest/30 dark:bg-forest-light/30" />
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} lang={lang} />
        ))}
      </div>
    </div>
  );
}

function MemberCard({ member, lang }: { member: TeamMember; lang: "en" | "zh" }) {
  const { t } = useLanguage();

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
      {member.title && (member.role === "faculty" || member.role === "engineer") && (
        <p className="text-xs font-medium text-forest dark:text-forest-light mb-1">
          {member.title[lang]}
        </p>
      )}
      {member.currentPosition && (member.role === "faculty" || member.role === "engineer") && (
        <p className="text-xs text-muted-foreground mb-2">
          {member.currentPosition[lang]}
        </p>
      )}
      {member.year && (
        <p className="text-xs text-muted-foreground mb-2">
          {member.role === "alumni_phd" || member.role === "alumni_msc"
            ? `${t("team.classOf")} ${member.year}`
            : member.role === "faculty" || member.role === "engineer" ? "" : `${t("team.since")} ${member.year}`}
        </p>
      )}
      {!(member.role === "faculty" || member.role === "engineer") && member.currentPosition && member.currentPosition[lang] ? (
        <p className="text-xs text-muted-foreground leading-relaxed">
          {member.currentPosition[lang]}
        </p>
      ) : !(member.role === "faculty" || member.role === "engineer") ? (
        <p className="text-xs text-muted-foreground leading-relaxed">
          {member.interests[lang]}
        </p>
      ) : (
        <p className="text-xs text-muted-foreground leading-relaxed">
          {member.interests[lang]}
        </p>
      )}
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
