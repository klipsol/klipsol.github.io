"use client";
import { useRef } from "react";
import HighlightedText from "../HighlightedText/HighlightedText";
import { Chip } from "../UI/Chip/Chip";
import DPVideo from "../DPVideo/DPVideo";

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
      className: "absolute top-[15%] -left-[115px] 2xl:-left-[120px]",
    },
    {
      icon: "/data_and_analytics.png",
      label: (
        <>
          Data & <br />
          Analytics
        </>
      ),
      className:
        "absolute sm:bottom-[10%] bottom-[25%] -left-[100px] 2xl:-left-[110px]",
    },
    {
      icon: "/ai.png",
      label: (
        <>
          AI Based <br /> Recommendation
        </>
      ),
      className: "absolute top-[40%] -left-[150px] 2xl:-right-[170px]",
    },
    {
      icon: "/payment.png",
      label: (
        <>
          Payments & <br /> Settlements
        </>
      ),
      className:
        "absolute top-[15%] -right-[120px] bg-[#033046] 2xl:-left-[130px] text-white",
    },
    {
      icon: "/cata.png",
      label: (
        <>
          Catalogue & <br /> Pricing
        </>
      ),
      className:
        "absolute  top-[40%] -right-[120px] bg-[#033046] 2xl:-right-[120px] text-white",
    },
    {
      icon: "/cust.png",
      label: (
        <>
          Customer <br /> Escalations
        </>
      ),
      className:
        "absolute sm:bottom-[10%] bottom-[25%] -right-[100px] bg-[#033046] 2xl:-right-[130px] text-white",
    },
  ];

  return (
    <section className="h-screen relative w-full">
      {/* bg */}
      <div className="lg:h-[50vh] sm:h-[30vh] bg-[#F7BB30] w-full"></div>
      <div className="h-[50vh] bg-transparent w-full"></div>

      {/* actual content starts here */}
      <div className="absolute inset-0 sec-container">
        <div className="lg:h-[15%] sm:h-[10%] relative lg:my-5 sm:my-2 xxl:mt-[5%]">
          <h1 className="text-[#1D234E] title text-center font-medium absolute top-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap -translate-y-1/2">
            Everything To{" "}
            <HighlightedText
              text="Embed Brands"
              wrapperClass="bg-[#ffdf74] bottom-2 h-[35%]"
            />{" "}
            <br /> On Your Site
          </h1>
        </div>
        <div className=" h-full w-full lg:h-[70%] flex sm:justify-start lg:justify-around sm:flex-col lg:flex-row">
          <div className="lg:w-[50%]  h-[40%] lg:h-[80%] xxl:h-[70%] flex flex-col items-center relative ">
            <h1 className="subtitle mb-[8%] text-[#1D234E] font-medium">
              Technology
            </h1>
            <div className="relative h-[60%] lg:h-full  w-fit ">
              {leftPhoneChipData.map((data) => (
                <Chip key={data.icon} {...data} />
              ))}
              <img className="h-full" src="/phone2.png" alt="phone" />
            </div>
            <p className="text-center max-w-[60%] custom-text-sm text-[#505C6E] mt-4">
              Highly configurable and 100% White-labelled.
            </p>
          </div>

          <div className="custom-vr sm:hidden lg:block"></div>
          <div className="custom-hr  lg:hidden"></div>

          <div className="sm:w-full lg:w-[50%] h-[40%] lg:h-[80%] xxl:h-[70%]   flex flex-col items-center relative ">
            <h1 className="subtitle mb-[8%] text-[#1D234E] font-medium sm:mt-6 lg:mt-0">
              Operations
            </h1>
            <div className="relative sm:h-[60%] lg:h-full w-fit">
              <img className="h-full" src="/brandonboard.png" alt="phone" />
            </div>
            <p className="max-w-[60%] text-center custom -text-sm text-[#505C6E] mt-4">
              Apps & Plugins to Synch Products, Pricing, Inventory & Delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
