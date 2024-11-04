import React, { useEffect, useRef } from "react";
import DPVideo from "../DPVideo/DPVideo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FirstParty() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
      defaults: { duration: 2, ease: "power3.out" },
    });

    tl.fromTo(
      ["#F-text-banner", "#F-demo-video"],
      {
        opacity: 0,
        x: function (index) {
          if (index === 0) return 500;
          return 0;
        },
        y: function (index) {
          return index === 1 ? 500 : 0;
        },
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
      },
      "<"
    );

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="bg-[#003046] h-screen flex justify-center  px-20 overflow-hidden relative"
    >
      <div className="h-[70%] mx-16 flex gap-x-8 relative z-20 mt-[5%]">
        <div className="h-full flex items-center">
          <div id="F-demo-video">
            <DPVideo className="h-full object-cover" src="/vid2.mp4" />
          </div>
          <div className=" " id="F-text-banner">
            <h2 className="text-white text-3xl font-extrabold ml-4">
              Higher User:
            </h2>
            <div className="text-primaryTextColor font-semibold text-4xl bg-[#EEBC11] px-8 py-4 rounded-r-[42px] mt-4">
              <ul className="list-disc pl-5">
                <li>Better Targeting</li>
                <li>Higher CPMs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h2 className="capitalize opacity-70 -bottom-6 text-center text-9xl absolute font-bold w-full text-[#274653]">
        FIRST-PARTY DATA
      </h2>
    </section>
  );
}
