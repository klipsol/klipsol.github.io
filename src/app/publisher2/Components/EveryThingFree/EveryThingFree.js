import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

export default function EveryThingFree() {
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
    ["#E-brand", "#E-paid", "#E-take"].forEach((target, index) => {
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
          ease: "back.out(1.7)",
        },
        index * 0.7
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
      className="bg-[#FFFAEA] h-screen flex  flex-col items-center px-20 overflow-hidden relative"
    >
      <h2 className="text-5xl text-[#013046] font-semibold pt-7 pb-4">
        Everything <span className="text-[#EFBA09] font-medium ">FREE:</span>
      </h2>
      <h3 className="text-3xl font-normal mt-2 text-black pb-5">
        We Earn After You Do
      </h3>
      <div className="relative w-fit flex justify-center mt-[3%] ">
        <div id="E-brand" className="absolute -top-6 left-48">
          <div className="rounded-3xl w-fit bg-[#F5BA0C] text-primaryTextColor font-extrabold text-base px-5 py-3 left-0">
            Brands Pay
          </div>
          <img
            className="h-16 w-16 ml-28 z-10 relative -mt-6"
            src="/arrow-t-r.png"
            alt="arrow"
          />
        </div>
        <div id="E-paid" className="absolute -bottom-10 left-48 z-[100]">
          <img
            className="h-16 w-16 ml-28 z-10 relative -mt-4"
            src="/arrow-b-l.png"
            alt="arrow"
          />
          <div className="rounded-3xl w-fit bg-[#F5BA0C] text-primaryTextColor font-extrabold text-base px-5 py-3 left-0 ">
            You Get Paid
          </div>
        </div>
        <div id="E-take" className="absolute bottom-16 right-36">
          <div className="rounded-3xl w-fit bg-[#003046] text-[#F5BB0B] font-extrabold text-base px-5 py-3 left-0">
            We Take A Cut
          </div>
          <img
            className="h-10 z-10 relative mt-2"
            src="/arrow-right-center.png"
            alt="arrow"
          />
        </div>
        <img src="/dollar.png" className="w-[45%] " alt="dollar" />
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
        EVERYTHING FREE
      </h2>
    </section>
  );
}
