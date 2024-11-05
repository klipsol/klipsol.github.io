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
        y: function (index) {
          return 500;
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
      id="feature"
      className="h-screen section bg-secondaryBg px-20 flex  justify-center relative overflow-hidden"
    >
      <div className="h-[70%] mx-16 flex gap-x-8 relative z-20 mt-[5%]">
        <div
          className="h-full flex items-center bg-[#EEF0F8] px-4 py-2 rounded-2xl"
          id="leftDelight"
        >
          <div className=" ">
            <h2 className="text-[#EFBA09] text-3xl font-extrabold mr-4">
              Conventional
            </h2>
            <div className="text-[#013046] font-semibold text-4xl bg-[#F8F8FC] pl-8 py-4 rounded-l-[42px] mt-4">
              {" "}
              <h2 className="">
                Click & <br /> <span className="font-extrabold ">Redirect</span>
              </h2>
            </div>
          </div>
          <DPVideo className="h-full object-cover" src="/left.mp4" />
        </div>
        <div
          className="h-full flex items-center bg-[#EFBA09] px-4 py-2 rounded-2xl"
          id="rightDelight"
        >
          <DPVideo className="h-full object-cover" src="/right.mp4" />
          <div className=" ">
            <h2 className="text-white text-3xl font-extrabold ml-4">Dpanda:</h2>
            <div className="text-[#013046] font-semibold text-4xl bg-[#F8F8FC] px-8 py-4 rounded-r-[42px] mt-4">
              {" "}
              <h2 className="">
                Click & <br /> <span className="font-extrabold ">Convert</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <h2
        className="capitalize opacity-70 -bottom-6 text-center text-9xl absolute font-bold w-full text-[#274653]"
        style={{
          fontSize: "min(12vw, 9rem)", // Responsive font size
          lineHeight: "1",
          bottom: "-0.1em", // Adjust based on your needs
          letterSpacing: "-0.02em",
        }}
      >
        {" "}
        User Delight
      </h2>
    </section>
  );
}
