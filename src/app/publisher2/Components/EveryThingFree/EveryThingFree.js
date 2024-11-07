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
  return (
    <section ref={sectionRef} className="h-screen flex relative">
      {/* background */}
      <div className="h-full w-1/2 bg-white"></div>
      <div className="h-full w-1/2 bg-[#EEF0F8]"></div>

      {/* actual content begins here */}

      <div className="absolute inset-0 sec-container flex">
        <div className="w-1/2 h-full flex-col flex items-center ">
          <div className="flex flex-col items-center h-[80%]">
            <h1 className="text-4xl text-[#1D234E] my-[10%] text-center font-medium">
              We Earn <br /> After You Do
            </h1>
            <div className="pb-10">
              <img src="/laptop.png" className="h-[85%]" alt="laptop" />
            </div>
          </div>
          <p className="text-[#505C6E] text-center max-w-[60%] text-lg">
            No Upfront Costs. You win, we win.
          </p>
        </div>
        <div className="w-1/2 h-full flex-col flex items-center">
          <div className="flex flex-col items-center h-[80%]">
            <h1 className="text-4xl text-[#1D234E] my-[10%] text-center font-medium">
              Go Live Within Go <br />{" "}
              <span className="font-bold">1-5 Days</span>
            </h1>
            <div className="h-[70%]">
              <img src="/phone2.png" className="h-[90%]" alt="laptop" />
            </div>
          </div>
          <p className="text-[#505C6E] text-center max-w-[60%] text-lg">
            Plug & play widgets for website and app.
          </p>
        </div>
      </div>
    </section>
  );
}
