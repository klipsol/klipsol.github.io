'use client';
import { useRef } from 'react';
import DPVideo from '../DPVideo/DPVideo';
import HighlightedText from '../HighlightedText/HighlightedText';

export default function FirstParty() {
  const sectionRef = useRef(null);
  const listItems = ['Brand & User Relationships', 'Unmatched Personalisation'];

  return (
    <section className="sec-container lg:h-screen sm:pb-5 sm:h-fit relative flex  lg:flex-row sm:flex-col-reverse  w-full">
      <div className="lg:w-[65%] h-[50vh] sm:w-full flex gap-x-3">
        <div className="lg:h-screen sm:h-full bg-[#EEF0F8] sm:rounded-t-3xl lg:rounded-none overflow-hidden w-[50%]">
          <div className="flex h-full  justify-center flex-col">
            <DPVideo className="h-fit" src={'/fl.mp4'} />
            <p className="text-center text-[#254652] text-lg font-medium 2xl:text-2xl">
              Data Blackbox
            </p>
          </div>
        </div>
        <div className="lg:h-screen sm:h-full bg-[#FEF4D3] sm:rounded-t-3xl lg:rounded-none overflow-hidden w-[50%]">
          <div className="flex h-full  justify-center flex-col">
            <DPVideo className="h-fit" src={'/fr.mp4'} />
            <p className="text-center text-[#254652] text-lg font-medium 2xl:text-2xl">
              Full Data Access
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[35%] flex lg:flex-col sm:my-4 lg:my-0 sm:flex-row sm:gap-x-2 lg:justify-center lg:px-8 gap-y-3 sm:p-0 sm:w-full">
        <h1 className="text-[#023046]/20 title font-semibold leading-[1] sm:mt-1 lg:m-0">
          03
        </h1>
        <div>
          <h1 className="title text-[#1D234E] font-medium sm:leading-[2rem] lg:leading-[3rem] xxl:leading-[5rem]">
            <HighlightedText text="Better" wrapperClass="bottom-2 h-[30%]" />{' '}
            <br /> First-Party Data
          </h1>
          <p className="custom-text-sm text-[#505C6E] 2xl:text-2xl">
            First party access to customers, behaviour and order data
          </p>
          <ul className="lg:space-y-2 sm:my-2  text-[#505C6E] custom-text-sm 2xl:text-2xl">
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
      </div>
      <hr className="bottom-0 absolute w-full custom-hr lg:block" />
    </section>
  );
}
