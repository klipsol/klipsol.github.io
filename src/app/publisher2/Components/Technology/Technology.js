import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

export default function Technology() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    // Pop animation for each element
    ["#T-end", "#T-ai", "#T-data", "#T-retarget"].forEach((target, index) => {
      tl.fromTo(
        target,
        {
          opacity: 0,
          scale: 0.5,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          ease: "back.out(1.7)", // This creates the pop-out elastic effect
        },
        index * 0.4 // Stagger the animations by 0.3 seconds
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FFFAEA] h-screen flex justify-between  overflow-hidden relative"
    >
      <div className="h-[70%] flex items-center  text-7xl font-extrabold  w-1/2 pl-[10%] mt-[5%]">
        <h2 className="text-black">
          We Deliver <br /> Everything:
          <br /> <span className="text-[#F7B801] mt-2">Free & Fast</span>
        </h2>
      </div>
      <div className="h-[70%] w-1/2 pl-[5%]  z-20 mt-[5%]">
        <div className="relative w-fit h-full">
          <div
            id="T-end"
            className="flex items-center px-6 py-2 bg-[#FFDF74] gap-x-3 rounded-3xl absolute top-14 w-fit -left-32 "
          >
            <img
              className="h-8 w-8"
              src="/end-to-end-tech.png"
              alt="end to end"
            />
            <p className="text-black text-sm font-semibold ">
              End-to-End <br /> Technology
            </p>
          </div>
          <div
            id="T-data"
            className="flex items-center px-6 py-2 bg-[#FFDF74] gap-x-3 rounded-3xl absolute bottom-14 w-fit -left-24 "
          >
            <img
              className="h-8 w-8"
              src="/data_and_analytics.png"
              alt="end to end"
            />
            <p className="text-black text-sm font-semibold ">
              Data & <br /> Analytics
            </p>
          </div>

          <div
            id="T-ai"
            className="flex items-center px-6 py-2 bg-[#FFDF74] gap-x-3 rounded-3xl absolute top-10 w-fit  -right-44"
          >
            <img className="h-8 w-8" src="/ai.png" alt="end to end" />
            <p className="text-black text-sm font-semibold ">
              AI Based <br /> Recommendation{" "}
            </p>
          </div>

          <div
            id="T-retarget"
            className="flex items-center px-6 py-2 bg-[#FFDF74] gap-x-3 rounded-3xl absolute bottom-32 w-fit -right-32 "
          >
            <img className="h-8 w-8" src="/retargeting.png" alt="end to end" />
            <p className="text-black text-sm font-semibold ">
              Retargeting &
              <br />
              Loyalty
            </p>
          </div>
          <img className="h-full" src="/phone2.png" alt="phone" />
        </div>
      </div>
      <h2 className="capitalize opacity-70 -bottom-6 text-center text-9xl z-10 absolute font-bold w-full text-[#FFEFB9]">
        TECHNOLOGY
      </h2>
    </section>
  );
}
