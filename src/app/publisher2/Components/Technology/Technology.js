import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { Chip } from "../UI/Chip/Chip";
import HighlightedText from "../HighlightedText/HighlightedText";

export default function Technology() {
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
  //   ["#T-end", "#T-ai", "#T-data", "#T-retarget"].forEach((target, index) => {
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
  //         ease: "back.out(1.7)", // This creates the pop-out elastic effect
  //       },
  //       index * 0.4 // Stagger the animations by 0.3 seconds
  //     );
  //   });

  //   return () => {
  //     tl.kill();
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  const leftPhoneChipData = [
    {
      icon: "/end-to-end-tech.png",
      label: (
        <>
          End-to-End <br /> Technology
        </>
      ),
      className: "absolute top-[15%] -left-[60%] ",
    },
    {
      icon: "/data_and_analytics.png",
      label: (
        <>
          Data & <br />
          Analytics
        </>
      ),
      className: "absolute bottom-[25%] -left-[60%]",
    },
    {
      icon: "/ai.png",
      label: (
        <>
          AI Based <br /> Recommendation
        </>
      ),
      className: "absolute top-[15%] -right-[80%]",
    },
    {
      icon: "/retargeting.png",
      label: (
        <>
          Retargeting & <br /> Loyalty
        </>
      ),
      className: "absolute bottom-[35%] -right-[60%]",
    },
  ];

  const rightPhoneChipData = [
    {
      icon: "/brand.png",
      label: (
        <>
          Brand <br /> Supply
        </>
      ),
      className: "absolute top-[15%] -left-[45%] bg-[#033046] text-white",
    },
    {
      icon: "/payment.png",
      label: (
        <>
          Payments & <br /> Settlements
        </>
      ),
      className: "absolute bottom-[25%] -left-[60%] bg-[#033046] text-white",
    },
    {
      icon: "/cata.png",
      label: (
        <>
          Catalogue & <br /> Pricing
        </>
      ),
      className: "absolute top-[15%] -right-[60%] bg-[#033046] text-white",
    },
    {
      icon: "/cust.png",
      label: (
        <>
          Customer <br /> Service
        </>
      ),
      className: "absolute bottom-[35%] -right-[50%] bg-[#033046] text-white",
    },
  ];

  return (
    <section className="h-screen relative w-full" id="feature">
      {/* bg */}
      <div className="h-[50vh] bg-[#F7BB30] w-full"></div>
      <div className="h-[50vh] bg-transparent w-full"></div>

      {/* actual content starts here */}
      <div className="absolute inset-0 sec-container">
        <div className="h-[15%] relative my-5">
          <h1 className="text-[#1D234E] title text-center font-medium absolute top-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap -translate-y-1/2">
            Everything To{" "}
            <HighlightedText
              text="Embed Brands"
              wrapperClass="bg-[#ffdf74] bottom-2 h-[35%]"
            />{" "}
            <br /> On Your Site
          </h1>
        </div>
        <div className="h-[70%] flex justify-around">
          <div className="w-fit h-[80%] flex flex-col items-center relative ">
            <h1 className="subtitle mb-[8%] text-[#1D234E] font-medium">
              Technology
            </h1>
            <div className="relative h-full  w-fit">
              {leftPhoneChipData.map((data) => (
                <Chip key={data.icon} {...data} />
              ))}
              <img className="h-full" src="/phone2.png" alt="phone" />
            </div>
            <p className="text-center max-w-[60%] custom-text-sm text-[#505C6E] mt-4">
              Highly configurable and 100% White-labelled.
            </p>
          </div>

          <div className="custom-vr"></div>

          <div className="w-fit h-[80%] flex flex-col items-center relative ">
            <h1 className="subtitle mb-[8%] text-[#1D234E] font-medium">
              Operations
            </h1>
            <div className="relative h-full w-fit">
              {rightPhoneChipData.map((data) => (
                <Chip key={data.icon} {...data} />
              ))}
              <img className="h-full" src="/phone2.png" alt="phone" />
            </div>
            <p className="max-w-[60%] text-center custom-text-sm text-[#505C6E] mt-4">
              For your complete peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
