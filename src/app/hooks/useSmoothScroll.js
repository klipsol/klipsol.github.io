import { useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
// import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

export const useScrollTo = () => {
  const scrollTo = useCallback((element, options = {}) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const targetPosition =
      element instanceof Element
        ? element.getBoundingClientRect().top + window.scrollY
        : null;
    if (targetPosition)
      gsap.to(window, {
        duration: options.duration || 1,
        ease: options.ease || "power2.out",
        scrollTo: { y: targetPosition },
      });
  }, []);

  return scrollTo;
};
