/*
 * PWRlab Header — Botanical Modernism
 * Sticky nav, transparent on hero → solid on scroll
 * Language toggle (EN/中文), Theme toggle, Mobile hamburger
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";

const navKeys = [
  { key: "nav.home", path: "/" },
  { key: "nav.research", path: "/research" },
  { key: "nav.projects", path: "/projects" },
  { key: "nav.publications", path: "/publications" },
  { key: "nav.team", path: "/team" },
  { key: "nav.facilities", path: "/facilities" },
  { key: "nav.news", path: "/news" },
  { key: "nav.gallery", path: "/gallery" },
  { key: "nav.contact", path: "/contact" },
];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location === "/";
  const headerBg = scrolled || !isHome
    ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
    : "bg-transparent";

  const textColor = scrolled || !isHome
    ? "text-foreground"
    : "text-white";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className={`font-display font-normal text-lg tracking-wide ${textColor} transition-colors duration-300`}>
              <span className="text-forest dark:text-forest-light">PWR</span>
              <span className={scrolled || !isHome ? "text-foreground" : "text-white/90"}>lab</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navKeys.map(({ key, path }) => {
              const active = path === "/" ? location === "/" : location.startsWith(path);
              return (
                <Link
                  key={key}
                  href={path}
                  className={`px-3 py-2 text-sm font-normal tracking-wider rounded-md transition-colors duration-200 no-underline
                    ${active
                      ? "text-forest dark:text-forest-light bg-forest/10 dark:bg-forest-light/10"
                      : `${textColor} hover:text-forest dark:hover:text-forest-light hover:bg-forest/5`
                    }`}
                >
                  {t(key)}
                </Link>
              );
            })}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-md border transition-colors duration-200
                ${scrolled || !isHome
                  ? "border-border text-foreground hover:bg-muted"
                  : "border-white/30 text-white hover:bg-white/10"
                }`}
              aria-label="Switch language"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === "en" ? "中文" : "EN"}
            </button>

            {/* Theme Toggle */}
            {toggleTheme && (
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-md transition-colors duration-200
                  ${scrolled || !isHome
                    ? "text-foreground hover:bg-muted"
                    : "text-white hover:bg-white/10"
                  }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors duration-200
                ${scrolled || !isHome
                  ? "text-foreground hover:bg-muted"
                  : "text-white hover:bg-white/10"
                }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border">
          <nav className="container py-4 flex flex-col gap-1">
            {navKeys.map(({ key, path }) => {
              const active = path === "/" ? location === "/" : location.startsWith(path);
              return (
                <Link
                  key={key}
                  href={path}
                  className={`px-4 py-2.5 text-sm font-normal tracking-wider rounded-md transition-colors no-underline
                    ${active
                      ? "text-forest dark:text-forest-light bg-forest/10"
                      : "text-foreground hover:text-forest hover:bg-forest/5"
                    }`}
                >
                  {t(key)}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
