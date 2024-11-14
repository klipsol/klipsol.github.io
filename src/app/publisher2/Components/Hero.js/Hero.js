import { useScrollTo } from "@/app/hooks/useSmoothScroll";
import { useRef } from "react";
import DPVideo from "../DPVideo/DPVideo";
import HighlightedText from "../HighlightedText/HighlightedText";
import Navbar from "../Nav/Navbar";

export default function Hero() {
  const scroll = useScrollTo();
  const secondSectionRef = useRef(null);
  const logoRef = useRef(null);

  // const heroAnimation = () => {
  //   const tl = gsap.timeline({
  //     defaults: { duration: 2, ease: "power3.out" },
  //   });

  //   tl.fromTo(
  //     ["#left", "#right", "#switch", "#videoDiv"],
  //     {
  //       opacity: 0,
  //       x: function (index) {
  //         // Left element moves from left, right from right, switch no horizontal movement
  //         if (index === 0) return -500;
  //         if (index === 1) return 500;
  //         if (index === 3) return 1000;
  //         return 0;
  //       },
  //       y: function (index) {
  //         // Only switch moves vertically
  //         return index === 2 ? 100 : 0;
  //       },
  //     },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       y: 0,
  //     },
  //     "<" // This makes all animations start at the same time
  //   );
  // };

  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const featureElement = document.getElementById("feature");
  //   const calculateEndPosition = () => {
  //     if (featureElement) {
  //       const featurePosition =
  //         featureElement.getBoundingClientRect().top + window.scrollY; // Get absolute position in the DOM
  //       return featurePosition + 100; // Add 100 pixels to the position
  //     }
  //     return 420; // Fallback value in case the feature element is not found
  //   };

  //   const logoPin = gsap.to(logoRef.current, {
  //     y: 320,
  //     x: -100,
  //     scrollTrigger: {
  //       pin: true,
  //       trigger: logoRef.current,
  //       start: "top 53%",
  //       end: calculateEndPosition(),
  //       scrub: true,
  //       onLeave: () => {},
  //     },
  //   });

  //   heroAnimation();

  //   return () => {
  //     logoPin.kill();
  //   };
  // });

  return (
    <>
      <section className="h-screen relative overflow-hidden bg-white">
        <Navbar />
        {/* yellow image layout  */}

        <img
          src="/yellow-layout.svg"
          className="absolute -top-[10%] 2xl:-top-[7%] w-full  z-10"
          alt="bg"
        />
        <div className="absolute inset-0 bg-transparent h-full w-full z-10 sec-container">
          <div className="h-[90%] 2xl:h-[95%] w-1/2 relative ">
            <div className="text-primaryTextColor absolute bottom-0">
              <h1 className="py-4 custom-text-sm-medium xxl:text-3xl">
                <HighlightedText text={"Everything"} /> To Transact Brands On
                Your Site Site
              </h1>
              <div className="flex gap-x-3  custom-text-xs">
                <div className="bg-[#FEF4D3] p-5 py-1.5 2xl:py-2 rounded-lg  relative">
                  Direct Relationship <br />
                  With Brands
                  <div className="absolute h-full bg-[#F7BB30] 2xl:py-2 w-1.5 left-0 top-0"></div>
                </div>
                <div className="bg-[#FEF4D3] p-5 py-1.5 rounded-lg 2xl:py-2 relative">
                  Complete Tech & <br /> Operations Support
                  <div className="absolute h-full bg-[#F7BB30] w-1.5 2xl:py-2 left-0 top-0"></div>
                </div>
                <div className="bg-[#FEF4D3] p-5 py-1.5 rounded-lg 2xl:py-2 relative">
                  Plug & <br />
                  Play Setup
                  <div className="absolute h-full bg-[#F7BB30] w-1.5 left-0 2xl:py-2 top-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 sec-container flex justify-between">
          {/* left section */}
          <div className="z-10">
            <h2 className="text-white lg:mt-[20%] 2xl:mt-[15%] ">
              <span className="text-white title pt-3">
                <span className="text-[#023046] font-extrabold">Monetize</span>{" "}
                By Embedding
                <br /> Brands Within Your Site
              </span>
            </h2>

            {/* description */}
            <h2 className="custom-text-sm-medium text-[#023046] font-extrabold mt-[3%]">
              <HighlightedText
                text="Drive"
                wrapperClass="bg-[#FEF4D4] bottom-1"
              />
            </h2>
            <div className="flex gap-x-4 mt-[5%] xxl:mt-[7%] justify-start text-primaryTextColor">
              <div className="bg-[#FFF9E6] rounded-2xl lg:p-3 2xl:p-4 xxl:pt-8 lg:pt-4 whitespace-nowrap custom-text-sm relative 2xl:min-w-[188px] lg:w-[120px] ">
                <h1 className="absolute -top-[35%] xxl:top-[-50%] font-medium title left-4 text-[#9E8637] ">
                  01
                </h1>
                <h1 className="font-medium custom-text-sm">
                  User <br />
                  Experience
                </h1>
              </div>
              <div className="bg-[#FFF9E6] rounded-2xl font-medium lg:p-3 lg:pt-4 2xl:p-4 xxl:pt-8 whitespace-nowrap custom-text-sm 2xl:min-w-[188px] relative h-fit lg:w-[120px]">
                <h1 className="absolute -top-[35%] xxl:top-[-50%] title left-4 text-[#9E8637]">
                  02
                </h1>
                <h1 className="font-medium custom-text-sm">
                  Lifetime <br />
                  Value
                </h1>
              </div>
              <div className="bg-[#FFF9E6] rounded-2xl lg:p-3 2xl:p-4  xxl:pt-8 lg:pt-4 whitespace-nowrap custom-text-sm 2xl:min-w-[188px] relative w-fit h-fit lg:w-[120px]">
                <h1 className="absolute -top-[35%] xxl:top-[-50%] font-medium title left-4 text-[#9E8637]">
                  03
                </h1>
                <h1 className="font-medium custom-text-sm">
                  First-Party <br />
                  Data
                </h1>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="h-[90%] xxl:h-[95%] rounded-b-full bg-red z-10 w-[45%] bg-[#003045]">
            <div className="flex justify-center items-center h-full">
              <DPVideo
                id="videoDiv"
                className="h-[60%] w-fit object-cover"
                src="/HeroVideo.mp4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
