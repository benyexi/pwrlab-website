/*
 * PWRlab Footer — Botanical Modernism
 * Deep forest green background, academic styling
 * WeChat public account info included
 */
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, MapPin, ExternalLink, MessageCircle, BookOpen, Users } from "lucide-react";

export default function Footer() {
  const { lang, t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.2_0.04_155)] text-white/90">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-xl font-bold mb-3">
              <span className="text-[oklch(0.65_0.1_148)]">PWR</span>lab
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              {t("footer.lab")}
            </p>
            <p className="text-sm text-white/60">
              {t("footer.affiliation")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {[
                { label: t("nav.research"), href: "/research" },
                { label: t("nav.publications"), href: "/publications" },
                { label: t("nav.team"), href: "/team" },
                { label: t("nav.news"), href: "/news" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              {t("nav.contact")}
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{t("footer.address")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:xibenye@bjfu.edu.cn" className="hover:text-white transition-colors">
                  xibenye@bjfu.edu.cn
                </a>
              </div>
            </div>
          </div>

          {/* WeChat Public Account */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              {lang === "en" ? "WeChat Account" : "微信公众号"}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[oklch(0.65_0.1_148)]" />
                <span className="text-sm text-white/80 font-medium">PWRlab</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Users className="w-4 h-4 shrink-0" />
                <span>{lang === "en" ? "8,389 followers" : "8,389 关注者"}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>{lang === "en" ? "440,000+ reads" : "44万+ 阅读量"}</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed">
                {lang === "en"
                  ? "Joint columns with Agricultural Water Management & Journal of Hydrology"
                  : "与Agricultural Water Management、Journal of Hydrology联合专栏"}
              </p>
            </div>
          </div>

          {/* External Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              {t("footer.links")}
            </h4>
            <ul className="space-y-2">
              {[
                { label: t("footer.bjfu"), href: "https://www.bjfu.edu.cn" },
                { label: t("footer.uidaho"), href: "https://www.uidaho.edu" },
                { label: "Google Scholar", href: "https://scholar.google.com/citations?user=8L5SxYIAAAAJ" },
                { label: "ResearchGate", href: "https://www.researchgate.net/profile/Benye-Xi" },
                { label: "ORCID", href: "https://orcid.org/0000-0003-4730-6384" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {year} {t("footer.copyright")}
          </p>
          <p className="text-xs text-white/40">
            {t("footer.affiliation")}
          </p>
        </div>
      </div>
    </footer>
  );
}
