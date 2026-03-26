import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal animation hook.
 * Elements start visible (no blank screen). Animation only triggers
 * for elements that are initially below the viewport fold.
 */
export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true); // default visible to prevent blank screens

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if element is already in viewport on mount
    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (inViewport) {
      // Already visible — keep visible, no animation needed
      setIsVisible(true);
      return;
    }

    // Element is below fold — hide it and animate on scroll
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
