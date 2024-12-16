"use client";
import useAssets from "@/app/hooks/useAssets";
import Navbar from "@/app/roi-calculator/Components/Navbar";
import { beaconEvents } from "@/app/utils/events";
import { useParams } from "next/navigation";
import { twMerge } from "tailwind-merge";
import DPVideo from "../DPVideo/DPVideo";
import HighlightedText from "../HighlightedText/HighlightedText";

const HeroMobile = () => {
  const params = useParams();
  const publisher = params?.publisherId?.[0] || "dpanda";
  const { heroVideo, loading } = useAssets();

  const handleBeaconEvent = (e) => {
    let elementId = e.target.id || e.currentTarget.id || "";
    beaconEvents.fireEvents(`widget-demo-click`, { item_name: elementId });
  };

  return (
    !loading && (
      <div id="hero-mobile" className="block lg:hidden scrollable-component">
        <Navbar customBg={publisher === "dpanda" ? "#eebe50" : "bg-primary"} />
        <div
          className={twMerge(
            "absolute bg-primary w-full min-h-[400px] top-2",
            publisher === "dpanda" && "bg-action"
          )}
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)" }}
        ></div>

        <div className="text-action p-4 relative min-h-[400px] flex">
          <div>
            <h2
              className={twMerge(
                "text-secondary text-xl leading-8",
                publisher === "dpanda" && "text-white"
              )}
            >
              <span className="title">
                <span
                  className={twMerge(
                    "text-action font-extrabold",
                    publisher === "dpanda" && "text-primary"
                  )}
                >
                  Discovery
                </span>{" "}
                Meets <br /> Commerce
              </span>
            </h2>
            <p
              className={twMerge(
                "font-medium mt-5 leading-5 lg:w-full sm:w-[95%]",
                publisher === "dpanda" && "text-primary"
              )}
            >
              <span className="font-bold">
                From <span className="line-through"> Medium</span> to
                Destination for Discovery,
              </span>
              <br className="hidden lg:block" />
              as mastered by Google, Amazon, TikTok and Meta
            </p>
          </div>
          <div className="relative mt-0">
            <DPVideo
              id="videoDiv"
              className="max-w-[180px] sm:max-w-[150px] p-[4px] bg-[#023046] rounded-xl"
              src={heroVideo}
            />
          </div>
          <div className="top-[280px] px-4 pointer-events-auto text-sm z-30 w-full sec-container absolute  inset-0">
            <a
              href={"/widget/" + publisher}
              id="live-preview-mobile"
              onClick={handleBeaconEvent}
              className={twMerge(
                "flex flex-col z-[9999] cursor-pointer bg-action rounded-[46px] py-2 xxl:py-3 xxl:rounded-[50px] w-fit px-6",
                publisher === "dpanda" && "bg-primary"
              )}
              style={{ lineHeight: "1.5" }}
            >
              <div className="flex gap-x-2 items-center relative">
                {/* <span className="bg-[#F7BA30]/80 w-2 h-2 rounded-full "></span> */}
                <span
                  className={twMerge(
                    "bg-primary w-2 h-2 xxl:w-2.5 xxl:h-2.5 rounded-full animate-ping [animation-duration:0.9s] absolute top-2 md:top-2 md:-left-4",
                    publisher === "dpanda" && "bg-action"
                  )}
                ></span>
                <span
                  className={twMerge(
                    "bg-primary w-2 h-2 xxl:w-2.5 xxl:h-2.5 rounded-full  absolute top-2 md:top-2 md:-left-4",
                    publisher === "dpanda" && "bg-action"
                  )}
                ></span>
                <span
                  className={twMerge(
                    "text-primary text-center font-medium ml-4 xxl:ml-3.5 md:m-auto",
                    publisher === "dpanda" && "text-action"
                  )}
                >
                  Interactive Demo
                </span>
              </div>
              <p
                className={twMerge(
                  "text-primary text-[10px] capitalize xxl:text-[0.7em] text-center ml-3 md:m-auto",
                  publisher === "dpanda" && "text-action"
                )}
              >
                {publisher && `for ${publisher}`}
              </p>
            </a>
          </div>
        </div>
        <div className="text-primaryTextColor p-4 pb-0 mb-10">
          <h1 className="custom-text-sm-medium mt-5 font-medium xxl:text-3xl sm:text-2xl">
            <HighlightedText text={"Everything"} /> to Drive On-Site User
            Conversion and Monetization
          </h1>
          <div className="mt-4 grid grid-cols-2 gap-3 max-w-[80%] font-semibold">
            <div className="text-base py-4 p-2 bg-brand/20 sm:text-center lg:p-5 lg:py-1.5 rounded-lg 2xl:py-2 relative rounded-b-xl">
              Technology
              <div className="absolute lg:h-full bg-brand sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
            </div>
            <div className="text-base py-4 p-2 bg-brand/20 sm:text-center lg:p-5 lg:py-1.5 rounded-lg 2xl:py-2 relative rounded-b-xl">
              Operations
              <div className="absolute lg:h-full bg-brand sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
            </div>
            <div className="text-base py-4 p-2 bg-brand/20 sm:text-center lg:p-5 lg:py-1.5 rounded-lg 2xl:py-2 relative rounded-b-xl">
              Brand Supply
              <div className="absolute lg:h-full bg-brand sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
            </div>
            <div className="text-base py-4 p-2 bg-brand/20 sm:text-center lg:p-5 lg:py-1.5 rounded-lg 2xl:py-2 relative rounded-b-xl">
              Intelligence
              <div className="absolute lg:h-full bg-brand sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default HeroMobile;
