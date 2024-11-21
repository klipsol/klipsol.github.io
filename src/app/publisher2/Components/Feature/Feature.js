'use client';
import { useRef } from 'react';
import DPVideo from '../DPVideo/DPVideo';
import HighlightedText from '../HighlightedText/HighlightedText';

export default function Feature() {
  const sectionRef = useRef(null);
  const listItems = ['Higher Conversion'];

  return (
    <section className="sec-container h-fit lg:h-screen sm:pb-10 relative flex  lg:flex-row sm:flex-col-reverse  w-full">
      <div className="lg:w-[65%] h-[50vh] sm:w-full flex gap-x-3">
        <div className="lg:h-screen sm:h-full bg-[#EEF0F8] rounded-t-3xl overflow-hidden w-[50%]">
          <div className="lg:hidden bg-[#C4C7D5] h-[10%] text-[#234651] lg:py-3 items-center subtitle font-semibold flex justify-center">
            Conventional
          </div>
          <div className="h-[80%] flex justify-center flex-col items-center">
            <div className="flex h-[80%] items-center justify-center">
              <DPVideo className="h-[90%]" src={'/left.mp4'} />
            </div>
            <p className="text-center text-[#254652] sm:w-[80%] lg:w-full text-lg font-medium 2xl:text-2xl">
              Click & <br className="lg:hidden" />
              <span className="font-semibold"> Redirect </span>
            </p>
          </div>
        </div>
        <div className="lg:h-screen sm:h-full bg-[#FEF4D3] rounded-t-3xl overflow-hidden w-[50%] ">
          <div className="lg:hidden bg-[#FFE89B] h-[10%] text-[#234651] py-3 subtitle items-center font-semibold flex justify-center">
            Dpanda
          </div>
          <div className="h-[80%] flex justify-center flex-col items-center">
            <div className="flex h-[80%] items-center justify-center">
              <DPVideo className="h-[90%]" src={'/right.mp4'} />
            </div>
            <p className="text-center text-[#254652] subtitle sm:w-[80%] lg:w-full text-lg font-medium 2xl:text-2xl">
              Click & <br className="lg:hidden" />{' '}
              <span className="font-semibold">Convert</span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[35%] flex lg:flex-col sm:my-4 lg:my-0 sm:flex-row sm:gap-x-2 lg:justify-center lg:px-8 gap-y-3 sm:p-0 sm:w-full">
        <h1 className="text-[#023046]/20 title font-semibold leading-[1] sm:mt-1 lg:m-0 ">
          01
        </h1>
        <div>
          <h1 className="title text-[#1D234E] font-medium sm:leading-[2rem] lg:leading-[3rem] xxl:leading-[5rem]">
            <HighlightedText
              text="Better"
              wrapperClass="bottom-1 h-[30%] font-semibold"
            />{' '}
            <br />
            <span className="font-medium">User Experience</span>
          </h1>
          <p className="custom-text-sm text-[#505C6E] 2xl:text-[1.4em]">
            Complete browsing and checkout within your site.
          </p>
          <ul className="lg:space-y-2 sm:my-2  text-[#505C6E] custom-text-sm 2xl:text-[1.4em]">
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
