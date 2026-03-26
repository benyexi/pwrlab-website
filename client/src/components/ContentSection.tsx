/*
 * ContentSection — wrapper that provides alternating backgrounds,
 * subtle texture overlay, and scroll-reveal animation
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ContentSectionProps {
  children: React.ReactNode;
  /** "white" | "warm" | "sage" */
  bg?: "white" | "warm" | "sage";
  className?: string;
  /** Disable scroll animation */
  noAnimation?: boolean;
  /** Full-width (no container) */
  fullWidth?: boolean;
}

export default function ContentSection({
  children,
  bg = "white",
  className = "",
  noAnimation = false,
  fullWidth = false,
}: ContentSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.05);

  const bgClasses: Record<string, string> = {
    white: "bg-white dark:bg-[oklch(0.16_0.015_260)]",
    warm: "bg-[#f9f7f4] dark:bg-[oklch(0.18_0.01_260)]",
    sage: "bg-[#f5f7f3] dark:bg-[oklch(0.17_0.015_150)]",
  };

  const textureStyle =
    bg !== "white"
      ? {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 Q35 15 30 25 Q25 35 30 45 Q35 55 30 55' fill='none' stroke='%23000' stroke-width='0.3' opacity='0.04'/%3E%3Cpath d='M10 0 Q15 10 10 20 Q5 30 10 40 Q15 50 10 60' fill='none' stroke='%23000' stroke-width='0.3' opacity='0.03'/%3E%3Cpath d='M50 0 Q55 10 50 20 Q45 30 50 40 Q55 50 50 60' fill='none' stroke='%23000' stroke-width='0.3' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }
      : undefined;

  return (
    <section
      ref={noAnimation ? undefined : ref}
      className={`relative py-16 md:py-20 ${bgClasses[bg] || bgClasses.white} ${
        !noAnimation ? `transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}` : ""
      } ${className}`}
      style={textureStyle}
    >
      {fullWidth ? children : <div className="container">{children}</div>}
    </section>
  );
}
