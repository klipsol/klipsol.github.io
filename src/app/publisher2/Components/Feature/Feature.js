import React, { useEffect, useRef } from "react";
import DPVideo from "../DPVideo/DPVideo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HighlightedText from "../HighlightedText/HighlightedText";

export default function Feature() {
  const sectionRef = useRef(null);
  const listItems = ["Higher Conversion"];

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
      <div className="w-[65%] flex gap-x-3">
        <div className="h-screen bg-[#EEF0F8] rounded-t-3xl overflow-hidden w-[50%]">
          <div className=" bg-[#C4C7D5] h-[10%] text-[#234651] py-3 subtitle font-semibold flex justify-center">
            Conventional
          </div>
          <div className="flex h-[80%] items-center justify-center">
            <DPVideo className="h-[80%]" src={"/left.mp4"} />
          </div>
          <p className="text-center text-[#254652] text-lg font-medium 2xl:text-2xl">
            Click & <span className="font-bold"> Redirect </span>
          </p>
        </div>
        <div className="h-screen bg-[#FEF4D3] rounded-t-3xl overflow-hidden w-[50%] ">
          <div className=" bg-[#FFE89B] h-[10%] text-[#234651] py-3 subtitle font-semibold flex justify-center">
            Dpanda
          </div>
          <div className="flex h-[80%] items-center justify-center">
            <DPVideo className="h-[80%]" src={"/right.mp4"} />
          </div>
          <p className="text-center text-[#254652] text-lg font-medium 2xl:text-2xl">
            Click & <span className="font-bold">Convert</span>
          </p>
        </div>
      </div>
      <div className="w-[35%] flex flex-col justify-center px-8 gap-y-3 ">
        <h1 className="text-[#023046]/20 title font-semibold leading-[1]">
          01
        </h1>
        <h1 className="title text-5xl  text-[#1D234E] font-medium leading-[3rem]">
          <HighlightedText text="Better" wrapperClass="bottom-3 h-[30%]" />{" "}
          <br /> User Experience
        </h1>
        <p className="custom-text-sm text-[#505C6E] 2xl:text-[1.4em]">
          Complete browsing and checkout within your site.
        </p>

        <ul className="space-y-2 text-[#505C6E] custom-text-sm 2xl:text-[1.4em]">
          {listItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 flex-shrink-0"
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
      <hr className="bottom-0 absolute w-full custom-hr" />
    </section>
  );
}
