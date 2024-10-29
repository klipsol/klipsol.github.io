import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SmoothScroll = ({ children }) => {
  const rootRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    const scroll = scrollRef.current;

    // Store current scroll position
    let currentScroll = 0;

    // Set initial height
    const setHeight = () => {
      document.body.style.height = `${scroll.getBoundingClientRect().height}px`;
    };

    // Smooth scrolling animation
    const smoothScroll = () => {
      currentScroll = window.scrollY;

      gsap.to(scroll, {
        y: -currentScroll,
        duration: 1.2,
        ease: "power4.out",
      });
    };

    // Initialize
    setHeight();
    smoothScroll();

    // Update ScrollTrigger
    ScrollTrigger.refresh();

    // Event listeners
    window.addEventListener("scroll", smoothScroll);
    window.addEventListener("resize", setHeight);

    return () => {
      window.removeEventListener("scroll", smoothScroll);
      window.removeEventListener("resize", setHeight);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      style={{
        overflow: "hidden",
        position: "fixed",
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
      }}
    >
      <div ref={scrollRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
