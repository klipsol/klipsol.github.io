import React, { useEffect, useRef } from "react";
import DPVideo from "../DPVideo/DPVideo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LifeTimeValue() {
  const sectionRef = useRef(null);
  const listItems = ["Conversion", "Sessions", "Repeat"];

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
      ["#L-demo-video", "#L-text-banner"],
      {
        opacity: 0,
        x: function (index) {
          if (index === 0) return -500;
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
      className="bg-[#FFFAEA] h-screen flex justify-center  px-20 overflow-hidden relative"
    >
      <div className="h-[70%] mx-16 flex gap-x-8 relative z-20 mt-[5%]">
        <div className="h-full flex items-center">
          <div id="L-demo-video">
            <DPVideo className="h-full object-cover" src="/vid3.mp4" />
          </div>
          <div className=" " id="L-text-banner">
            <h2 className="text-primaryTextColor text-3xl font-extrabold ml-4">
              Higher
            </h2>
            <div className="text-primaryTextColor font-semibold text-4xl bg-[#EEBC11] px-8 py-4 rounded-r-[42px] mt-4">
              <ul className="space-y-2">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 flex-shrink-0"
                    >
                      <path
                        d="M3 12.5l6 6 12-12"
                        stroke="#22c55e"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h2
        className="capitalize opacity-70 -bottom-6 text-center text-9xl absolute font-bold w-full text-[#FFEFB9]"
        style={{
          fontSize: "min(12vw, 9rem)", // Responsive font size
          lineHeight: "1",
          bottom: "-0.1em", // Adjust based on your needs
          letterSpacing: "-0.02em",
        }}
      >
        {" "}
        LIFETIME VALUE
      </h2>
    </section>
  );
}
