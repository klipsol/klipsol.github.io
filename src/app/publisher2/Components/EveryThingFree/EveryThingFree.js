import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

export default function EveryThingFree() {
  const sectionRef = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "top center",
  //       toggleActions: "play none none reverse",
  //     },
  //   });

  //   // Pop animation for each element
  //   ["#E-brand", "#E-paid", "#E-take"].forEach((target, index) => {
  //     tl.fromTo(
  //       target,
  //       {
  //         opacity: 0,
  //         scale: 0.5,
  //         y: 50,
  //       },
  //       {
  //         opacity: 1,
  //         scale: 1,
  //         y: 0,
  //         duration: 0.7,
  //         ease: "back.out(1.7)",
  //       },
  //       index * 0.7
  //     );
  //   });

  //   return () => {
  //     tl.kill();
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);
  return <section ref={sectionRef} className="h-screen  relative"></section>;
}
