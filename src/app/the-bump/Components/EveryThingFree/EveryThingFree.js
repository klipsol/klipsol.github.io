'use client';
import { useRef } from 'react';
import HighlightedText from '../HighlightedText/HighlightedText';

export default function EveryThingFree() {
  const sectionRef = useRef(null);
  return (
    <section
      id="zero-cost-go-live"
      ref={sectionRef}
      className="scrollable-component md:h-screen flex relative sm:flex-col lg:flex-row bg-white"
    >
      {/* background */}
      {/* <div className="h-full lg:w-[60%] sm:w-full bg-[#FEF4D4]"></div>
      <div className="h-full lg:w-[40%] sm:w-full bg-[#EEF0F8]"></div> */}

      {/* actual content begins here */}

      <div className="inset-0 md:sec-container md:max-w-full flex sm:flex-col lg:flex-row">
        <div className="lg:w-[60%] p-[10px] bg-action/20 sm:w-full lg:h-full flex-col flex items-center">
          <div className="flex flex-col items-center justify-around md:h-[80%]">
            <div>
              <h1 className="title text-secondary my-[10%] text-center font-medium">
                Zero Cost. We Earn <br />
                <HighlightedText
                  text=" When You"
                  wrapperClass="bottom-1 h-[35%]"
                />{' '}
                Do
              </h1>
            </div>
            <div className="lg:pl-10 lg:pr-6">
              <img src="/laptop.png" alt="laptop" />
            </div>
          </div>
          <p className="text-[#505C6E] text-center max-w-[60%] mt-[10px] lg:text-[24px] custom-text-sm 2xl:text-2xl">
            No Upfront Costs.
            <br className="hidden lg:block" /> You Win, We Win.
          </p>
        </div>
        <div className="lg:w-[40%] p-[10px] bg-secondary/10 sm:w-full lg:h-full flex-col flex items-center">
          <div className="flex flex-col items-center justify-around md:h-[80%]">
            <div>
              <h1 className="title text-secondary my-[10%] text-center font-medium">
                Go{' '}
                <HighlightedText wrapperClass="bottom-2 h-[30%]" text="Live" />{' '}
                Within <br /> <span className="font-bold">1-5 Days</span>
              </h1>
            </div>
            <div className="lg:pl-10 lg:pr-6">
              <img src="/golive.png" alt="laptop" />
            </div>
          </div>
          <p className="text-[#505C6E] text-center max-w-[60%] mt-[10px] lg:text-[24px] custom-text-sm 2xl:text-2xl">
            Plug & Play Widgets for
            <br className="hidden lg:block" /> Website and App.
          </p>
        </div>
      </div>
    </section>
  );
}
