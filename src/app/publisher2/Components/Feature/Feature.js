import React, { useEffect, useRef } from "react";
import DPVideo from "../DPVideo/DPVideo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Feature() {
  const sectionRef = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "top center", // Triggers when the top of the section hits the center of the viewport
  //       toggleActions: "play none none reverse", // play on enter, reverse on leave
  //     },
  //     defaults: { duration: 2, ease: "power3.out" },
  //   });

  //   tl.fromTo(
  //     ["#leftDelight", "#rightDelight"],
  //     {
  //       opacity: 0,
  //       x: function (index) {
  //         if (index === 0) return -500;
  //         if (index === 1) return 500;
  //         return 0;
  //       },
  //       y: function (index) {
  //         return 500;
  //       },
  //     },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       y: 0,
  //     },
  //     "<"
  //   );

  //   // Cleanup
  //   return () => {
  //     tl.kill();
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <section
      className="sec-container h-screen relative flex  w-full"
      id="feature"
    >
      <div className="w-[60%] flex gap-x-3">
        <div className="h-screen bg-[#EEF0F8] rounded-t-3xl overflow-hidden w-[50%]">
          <div className=" bg-[#C4C7D5] h-[10%] text-[#234651] py-3 text-3xl font-semibold flex justify-center">
            Conventional
          </div>
          <div className="flex h-[90%] items-center justify-center">
            <DPVideo className="h-[80%]" src={"/left.mp4"} />
          </div>
        </div>
        <div className="h-screen bg-[#FEF4D3] rounded-t-3xl overflow-hidden w-[50%]">
          <div className=" bg-[#FFE89B] h-[10%] text-[#234651] py-3 text-3xl font-semibold flex justify-center">
            Dpanda
          </div>
          <div className="flex h-[90%] items-center justify-center">
            <DPVideo className="h-[80%]" src={"/right.mp4"} />
          </div>
        </div>
      </div>
      <div className="w-[40%] flex flex-col justify-center px-8 gap-y-3">
        <h1 className="text-[#023046]/20 text-6xl font-bold">01</h1>
        <h1 className="text-5xl  text-[#1D234E] font-medium">
          Better <br /> User Experience
        </h1>
        <p className="text-base text-[#505C6E]">
          Complete browsing and checkout within your site.
        </p>
      </div>
      <hr className="bottom-0 absolute w-full custom-hr" />
    </section>
  );
}
