"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SmoothScroll from "../the-bump/Components/SmoothScroll/SmoothScroll";
import { getProfit } from "../utils/roiUtils";
import Navbar from "./Components/Navbar";
import { useParams, usePathname } from "next/navigation";

export default function ROICalculator() {
  const inputRef = useRef(null);
  const pathname = usePathname();
  const params = useParams();
  const [publisher, setPublisher] = useState();
  const [inputValue, setInputValue] = useState(100000);
  const [min, setMin] = useState(getProfit(inputValue, 0.1));
  const [max, setMax] = useState(getProfit(inputValue, 1.5));

  useEffect(() => {
    setPublisher(localStorage.getItem("publisher"));
  }, []);
  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    if (
      (inputValue === "" || /^[1-9]\d*$/.test(inputValue)) &&
      inputValue <= 10000000000
    ) {
      setInputValue(inputValue);
      if (inputValue !== "") {
        setMin(getProfit(inputValue, 0.1));
        setMax(getProfit(inputValue, 1.5));
      } else {
        setMax(0);
        setMin(0);
      }
    }
  };
  const handleClick = () => {
    if (inputRef?.current) {
      const input = inputRef.current;
      const length = input.value.length;
      input.focus();
      input.setSelectionRange(length, length);
    }
  };
  return (
    <main className="my-12">
      <SmoothScroll>
        <Navbar />

        <section
          id="roi-calc"
          className="my-8 max-w-2xl m-auto px-2 lg:flex-row lg:flex lg:max-w-[1280px] lg:items-center "
        >
          <div className="lg:max-w-xs lg:mr-10">
            <h1 className="text-4xl lg:text-5xl text-center lg:text-start text-[#1D234E] m-auto my-8 font-extrabold">
              ROI <br />
              <span className="font-medium">Calculator</span>
            </h1>
            <img
              className="m-auto max-w-[260px]"
              src="/money.png"
              alt="money"
            />
          </div>
          <div className="flex-1 max-w-2xl">
            <div className="text-[#1D234E] text-center my-8">
              <h2 className="font-bold text-3xl lg:text-4xl">One Time</h2>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl z-20 bg-[#FFFAE9] lg:divide-x-0 divide-x-[1px] divide-[#2b2d3a] flex p-4">
                <ul className="flex-1 text-sm lg:text-lg text-start lg:text-center space-y-2">
                  <li className="text-[#003046] text-base lg:text-xl font-semibold mb-4 md:mb-6">
                    Impressions-per-month
                  </li>
                  <li className="text-[#003046]">User Conversion*</li>
                  <li className="text-[#003046]">Margin-per-conversion</li>
                  <li className="text-[#003046]">AOV</li>
                </ul>
                <ul className="w-1/3 lg:w-1/2 text-sm lg:text-lg text-center space-y-2">
                  <div className="max-w-32 sm:w-[90%] flex gap-x-2 bg-white border px-2 py-1 items-center md:py-2 border-[#003046]  rounded-xl overflow-hidden mx-auto">
                    <input
                      ref={inputRef}
                      className="text-[#003046] text-sm lg:text-xl font-semibold px-0.5 outline-none w-[75%] lg:w-[70%] "
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                    <img
                      onClick={handleClick}
                      src="/edit.png"
                      className="sm:size-3 lg:size-4"
                      alt="edit"
                    />
                  </div>

                  <li className="text-[#003046]">0.1 - 1.5%</li>
                  <li className="text-[#003046]">10 - 25%</li>
                  <li className="text-[#003046]">$60</li>
                </ul>
              </div>
              <div className="relative pt-6 rounded-2xl z-10 -mt-3 flex rounded-t-none bg-[#F7BC31] p-4">
                <ul className="flex-1 text-sm lg:text-lg text-start lg:text-center space-y-2 lg:space-y-4">
                  <li className="text-[#1D234E] text-base lg:text-xl font-bold">
                    Profit-per-month**
                  </li>
                  <li className="text-base lg:text-xl font-medium text-[#1D234E]">
                    Effective CPM
                  </li>
                </ul>
                <ul className="w-1/3 lg:w-1/2 text-end lg:text-center text-sm lg:text-lg flex-1 space-y-2 lg:space-y-4">
                  <li className="text-[#1D234E] text-base lg:text-xl font-bold">
                    {`$${min.toFixed(2)} - $${max.toFixed(2)}`}
                  </li>
                  <li className="text-base lg:text-xl font-medium text-[#1D234E]">
                    {`$${
                      inputValue === ""
                        ? "0"
                        : (
                            (min / inputValue).toFixed(2) * 1000
                          ).toLocaleString()
                    } - $${
                      inputValue === ""
                        ? "0"
                        : (
                            (max / inputValue).toFixed(2) * 1000
                          ).toLocaleString()
                    }`}
                  </li>
                </ul>
              </div>
              <p className="px-4 lg:absolute lg:top-6 lg:-right-[124px] lg:w-32 lg:rounded-md lg:p-2 lg:bg-[#FFEFCB] text-xs font-medium text-[#003046]">
                <span>*</span>
                Outcome Based on 2M Impression Results
              </p>
              <p className="px-4 lg:absolute z-0 lg:bottom-6 lg:-right-[124px] lg:w-32 lg:rounded-md lg:p-2 lg:bg-[#FFEFCB] text-xs font-medium text-[#003046]">
                <span>**</span>
                Estimates (using average Margin of 17.5%)
              </p>
            </div>
          </div>
        </section>

        <section id="compounding" className="my-8 max-w-2xl m-auto">
          <div className="text-[#1D234E] text-center my-8">
            <h2 className="font-bold text-3xl lg:text-4xl">
              Compounding Effect
            </h2>
            <p className="lg:mt-2 text-sm">
              (from User Retention and First Party Data)
            </p>
          </div>

          <div className="relative rounded-2xl mx-2 z-10 bg-[#FFFAE9] lg:divide-x-0 divide-x-[1px] divide-[#2b2d3a] flex p-4">
            <ul className="flex-1 lg:ml-4 text-sm lg:text-lg lg:text-center text-start space-y-2">
              <li className="text-[#003046]">Repeat Orders</li>
              <li className="text-[#003046]">Personalised Recommendation</li>
              <li className="text-[#003046]">
                Media for Sharper Brand Cohorts
              </li>
              <li className="text-[#003046]">Remarketing Abandoned Users</li>
              <li className="text-[#1D234E] font-bold lg:text-xl text-base">
                Compounding Effect
              </li>
            </ul>
            <ul className="w-1/4 lg:w-1/2 text-sm lg:text-lg lg:text-center text-center space-y-2">
              <li className="text-[#003046]">1-1.2x</li>
              <li className="text-[#003046]">1-1.2x</li>
              <li className="text-[#003046]">1-1.2x</li>
              <li className="text-[#003046]">1-1.2x</li>
              <li className="text-[#1D234E] font-bold lg:text-xl text-base leading-4">
                4.3x <span className="font-normal">(average)</span>
              </li>
            </ul>
          </div>
          <div className="relative pt-6 rounded-2xl z-0 -mt-3 rounded-t-none mx-2 bg-[#F7BC31] flex p-4">
            <ul className="text-start lg:ml-4 text-sm lg:text-lg lg:text-center flex-1 space-y-2 lg:space-y-4">
              <li className="text-[#1D234E] font-bold lg:text-xl text-base">
                Long Term Profit per month
              </li>
              <li className=" font-medium lg:text-xl text-[#1D234E]">
                Long Term Effective CPM
              </li>
            </ul>
            <ul className="text-end text-sm lg:text-lg lg:text-center flex-1 space-y-7 md:space-y-2 lg:space-y-4">
              <li className="text-[#1D234E] font-bold lg:text-xl text-base">
                {`$${(min * 4).toFixed(2)} - $${(max * 4).toFixed(2)}`}
              </li>
              <li className="text-[#1D234E] lg:text-xl font-medium">
                {`$${
                  inputValue === ""
                    ? "0"
                    : (
                        (min / inputValue).toFixed(2) *
                        1000 *
                        4
                      ).toLocaleString()
                } - $${
                  inputValue === ""
                    ? "0"
                    : (
                        (max / inputValue).toFixed(2) *
                        1000 *
                        4
                      ).toLocaleString()
                }`}
              </li>
            </ul>
          </div>
        </section>

        <section id="compounding" className="my-8 max-w-2xl m-auto">
          <div className="text-[#1D234E] text-center my-8">
            <h2 className="font-bold text-3xl">CAC Reduction</h2>
            <p className="lg:mt-1 text-sm">
              (from User Retention and First Party Data)
            </p>
          </div>

          <div className="justify-between gap-2 md:gap-4 rounded-2xl mx-2 z-10 bg-[#FFFAE9] flex p-4">
            <div className="md:flex w-1/3 text-center rounded-2xl p-2 md:p-4 bg-[#F7BC31] font-semibold">
              <p className="md:m-auto lg:text-xl break-words text-wrap text-[#1D234E]">
                Data Backed Acquisition
              </p>
            </div>
            <div className="md:flex w-1/3 text-center rounded-2xl p-2 md:p-4 bg-[#F7BC31] font-semibold">
              <p className="md:m-auto lg:text-xl break-words text-wrap text-[#1D234E]">
                Organic User Retention
              </p>
            </div>
            <div className="md:flex w-1/3 text-center rounded-2xl p-2 md:p-4 text-wrap bg-[#F7BC31] font-semibold">
              <div className="md:m-auto lg:text-xl break-words text-wrap text-[#1D234E]">
                User Remarketing
              </div>
            </div>
          </div>
          <div className="p-4 text-center">
            <p className="text-[#1D234E]">
              Bundle Other Offering Like Subscription
            </p>
            <a
              href={"/widget/" + publisher + "?tab=2"}
              className="text-[12px] text-[#1D234E]"
            >
              Know More
            </a>
          </div>
        </section>
      </SmoothScroll>
    </main>
  );
}
