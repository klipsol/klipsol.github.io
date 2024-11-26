import React from "react";
import { ArrowBigRight, CheckIcon, MoveRight, XIcon } from "lucide-react";
import HighlightedText from "../HighlightedText/HighlightedText";

const CoreFeatures = () => {
  return (
    <div className="bg-[#FFFAEA] pb-10 flex ">
      <div className="sec-container">
        <h1 className="text-[#1D234E] font-semibold title text-center my-10">
          <HighlightedText
            wrapperClass="bottom-[10%]"
            text="Full-Stack"
          ></HighlightedText>{" "}
          eCommerce Over SAAS
        </h1>
        <div className="flex justify-between">
          <div>
            <h2 className="text-[#505C6E] font-semibold custom-text-base mb-4 py-2">
              Core Features
            </h2>
            <ul className="space-y-4 text-[#505C6E] lg:text-[1.125em] 2xl:text-[1.6em] ">
              <li>Seamless Integration</li>
              <li>Brand Enablement</li>
              <li>Smart Cart</li>
              <li>Shopper Marketing</li>
              <li>Operations (team)</li>
              <li>AI Intelligence</li>
              <li>Advance Analytics</li>
              <li>Marketplace Features</li>
            </ul>
          </div>
          <div className="bg-[#EEF0F8] rounded-t-3xl overflow-hidden">
            <h2 className="text-[#505C6E] font-semibold custom-text-base mb-4 bg-[#C4C7D5] text-center py-2">
              Checkout SAAS
            </h2>
            <div className="grid gap-4 text-[#505C6E] px-5 pb-4 lg:text-[1.125em] 2xl:text-[1.6em]">
              <div className="flex items-center">
                <XIcon className="text-red-500 mr-2" />
                <span>Manual, link by Link</span>
              </div>
              <div className="flex items-center">
                <XIcon className="text-red-500 mr-2" />
                <span>Limited, no personalisation</span>
              </div>
              <div className="flex items-center">
                <XIcon className="text-red-500 mr-2" />
                <span>Manual cart creation</span>
              </div>
              <div className="flex items-center">
                <XIcon className="text-red-500 mr-2" />
                <span>Minimal tools</span>
              </div>
              <div className="flex items-center">
                <XIcon className="text-red-500 mr-2" />
                <span>Not included</span>
              </div>
              <div className="flex items-center">
                <XIcon className="text-red-500 mr-2" />
                <span>Not included</span>
              </div>
              <div className="flex items-center">
                <XIcon className="text-red-500 mr-2" />
                <span>Limited reporting</span>
              </div>
              <div className="flex items-center">
                <XIcon className="text-red-500 mr-2" />
                <span>Not included</span>
              </div>
            </div>
          </div>
          <div className="bg-[#FEF4D3] rounded-t-3xl overflow-hidden">
            <h2 className="text-[#505C6E] font-semibold custom-text-base mb-4 bg-[#F7BB30] text-center  py-2 px-4">
              Dpanda: Full Stack eCommerce
            </h2>
            <div className="space-y-4 px-5 pb-4 text-[#505C6E] lg:text-[1.125em] 2xl:text-[1.6em]">
              <div className="flex items-center">
                <CheckIcon className="text-green-500 mr-2" />
                <span>Effortless, one-time</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="text-green-500 mr-2" />
                <span>Bidding & personalisation</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="text-green-500 mr-2" />
                <span>Unified, feature-rich</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="text-green-500 mr-2" />
                <span>Integrated optimization</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="text-green-500 mr-2" />
                <span>Marketing, customer ops & more</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="text-green-500 mr-2" />
                <span>Personalized & adaptive</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="text-green-500 mr-2" />
                <span>Integrated & network level</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="text-green-500 mr-2" />
                <span>Mini-marketplace ecosystem</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="text-[#505C6E] hover:underline cursor-pointer flex gap-x-1 items-center custom-text-xs mt-4">
            <span className="">See all features</span>
            <MoveRight color="#505C6E" className="size-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
