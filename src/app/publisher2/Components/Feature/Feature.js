import React, { useEffect, useRef } from "react";
import DPVideo from "../DPVideo/DPVideo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Feature() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center", // Triggers when the top of the section hits the center of the viewport
        toggleActions: "play none none reverse", // play on enter, reverse on leave
      },
      defaults: { duration: 2, ease: "power3.out" },
    });

    tl.fromTo(
      ["#leftDelight", "#rightDelight"],
      {
        opacity: 0,
        x: function (index) {
          if (index === 0) return -500;
          if (index === 1) return 500;
          return 0;
        },
      },
      {
        opacity: 1,
        x: 0,
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
      id="feature"
      className="h-screen section bg-secondaryBg px-20 flex items-center justify-center relative"
    >
      <div className="h-[80%] mx-16 flex gap-x-8 relative z-20">
        <div className="h-full flex items-center" id="leftDelight">
          <div className=" ">
            <h2 className="text-white text-3xl font-extrabold mr-4">
              Conventional
            </h2>
            <div className="text-white font-semibold text-4xl bg-[#EEBC11] pl-8 py-4 rounded-l-[42px] mt-4">
              {" "}
              <h2 className="">
                Click & <br />{" "}
                <span className="font-extrabold text-[#013046]">Redirect</span>
              </h2>
            </div>
          </div>
          <DPVideo className="h-full object-cover" src="/left.mp4" />
        </div>
        <div className="h-full flex items-center" id="rightDelight">
          <DPVideo className="h-full object-cover" src="/right.mp4" />
          <div className=" ">
            <h2 className="text-white text-3xl font-extrabold ml-4">Dpanda:</h2>
            <div className="text-white font-semibold text-4xl bg-[#EEBC11] px-8 py-4 rounded-r-[42px] mt-4">
              {" "}
              <h2 className="">
                Click & <br />{" "}
                <span className="font-extrabold text-[#013046]">Convert</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <h2 className="capitalize opacity-70 -bottom-3 text-center text-9xl absolute font-bold w-full text-[#274653]">
        User Delight
      </h2>
    </section>
  );
}
