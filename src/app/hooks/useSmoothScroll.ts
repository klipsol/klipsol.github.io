import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback } from "react";
// import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

interface scrollOptions {
  duration: number,
  ease: string
}

export const useScrollTo = () => {
  const scrollTo = useCallback((element, options:scrollOptions) => {
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
