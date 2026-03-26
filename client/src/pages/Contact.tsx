/*
 * PWRlab Contact Page — Botanical Modernism
 * Address, email, map, and "Join Us" section
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";
import { MapPin, Mail, Users, ExternalLink } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-20">
      <div className="container">
        <SectionHeader
          number="08"
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <ContactBlock
              icon={MapPin}
              title={t("contact.address.title")}
              content={t("contact.address.text")}
            />
            <ContactBlock
              icon={Mail}
              title={t("contact.email.title")}
              content="xibenye@bjfu.edu.cn"
              isLink
              href="mailto:xibenye@bjfu.edu.cn"
            />
            <JoinUs />
          </div>

          {/* Right: Map */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-forest dark:text-forest-light" />
              {t("contact.map.title")}
            </h3>
            <div className="rounded-xl overflow-hidden border border-border bg-muted aspect-[4/3] flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.5!2d116.35!3d39.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f0515!2sBeijing+Forestry+University!5e0!3m2!1sen!2scn!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Beijing Forestry University Location"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Beijing Forestry University, No. 35 Tsinghua East Road, Haidian District, Beijing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactBlock({
  icon: Icon,
  title,
  content,
  isLink,
  href,
}: {
  icon: typeof MapPin;
  title: string;
  content: string;
  isLink?: boolean;
  href?: string;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-forest/10 dark:bg-forest-light/10 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-forest dark:text-forest-light" />
        </div>
        <div>
          <h3 className="font-display text-base font-semibold text-foreground mb-1">{title}</h3>
          {isLink && href ? (
            <a
              href={href}
              className="text-sm text-forest dark:text-forest-light hover:underline"
            >
              {content}
            </a>
          ) : (
            <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function JoinUs() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
      <div className="bg-forest/5 dark:bg-forest-light/5 rounded-xl p-6 border border-forest/10 dark:border-forest-light/10">
        <div className="flex items-center gap-3 mb-3">
          <Users className="w-5 h-5 text-forest dark:text-forest-light" />
          <h3 className="font-display text-lg font-semibold text-foreground">
            {t("contact.join.title")}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {t("contact.join.text")}
        </p>
        <a
          href="mailto:xibenye@bjfu.edu.cn"
          className="inline-flex items-center gap-2 px-4 py-2 bg-forest text-white dark:bg-forest-light dark:text-[oklch(0.16_0.015_260)] text-sm font-medium rounded-md hover:opacity-90 transition-opacity"
        >
          <Mail className="w-4 h-4" />
          Contact Prof. Xi
        </a>
      </div>
    </div>
  );
}
