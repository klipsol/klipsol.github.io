'use client';
import useAssets from '@/app/hooks/useAssets';
import DPVideo from '../DPVideo/DPVideo';
import HighlightedText from '../HighlightedText/HighlightedText';

export default function Feature() {
  const listItems = ['Higher Conversion'];
  const { a2, b2 } = useAssets();

  return (
    <section
      id="better-user-experience"
      className="scrollable-component sec-container h-fit lg:h-screen sm:pb-10 relative flex sm:px-[10px] lg:flex-row sm:flex-col-reverse  w-full"
    >
      <div className="lg:w-[65%] md:h-[50vh] sm:w-full flex gap-x-3 mt-4 lg:mt-0">
        <div className="lg:h-screen sm:h-full bg-[#EEF0F8] rounded-t-3xl overflow-hidden w-[50%]">
          <div className="bg-[#C4C7D5] text-[#234651] py-2 items-center subtitle font-bold flex justify-center">
            Conventional
          </div>
          <div className="h-[80%] sm:p-[15px] flex justify-center flex-col items-center">
            <div className="flex h-[80%] sm:mb-[15px] md:mb-0 items-center justify-center">
              <DPVideo className="h-[90%]" src={a2} />
            </div>
            <p className="text-center text-[#254652] sm:w-[80%] lg:w-full lg:text-[24px] text-lg font-medium 2xl:text-2xl">
              Click & <br className="lg:hidden" />
              <span className="font-bold"> Redirect </span>
            </p>
          </div>
        </div>
        <div className="lg:h-screen sm:h-full bg-[#FEF4D3] rounded-t-3xl overflow-hidden w-[50%] ">
          <div className="bg-[#FFE89B] text-[#234651] py-2 subtitle items-center font-bold flex justify-center">
            Dpanda
          </div>
          <div className="h-[80%] sm:p-[15px] flex justify-center flex-col items-center">
            <div className="flex h-[80%] sm:mb-[15px] md:mb-0 items-center justify-center">
              <DPVideo className="h-[90%]" src={b2} />
            </div>
            <p className="text-center text-[#254652] subtitle sm:w-[80%] lg:text-[24px] lg:w-full text-lg font-medium 2xl:text-2xl">
              Click & <br className="lg:hidden" />{' '}
              <span className="font-bold">Convert</span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[35%] flex lg:flex-col sm:my-4 sm:mt-8 lg:my-0 sm:flex-row sm:gap-x-2 lg:justify-center lg:px-8 gap-y-3 sm:p-0 sm:w-full">
        <h1 className="text-[#023046]/20 title font-bold leading-[1] sm:mt-1 lg:m-0 ">
          01
        </h1>
        <div className="sm:pl-[12px] md:pl-0">
          <h1 className="title text-[#1D234E] font-medium leading-[1.2] mb-[15px]">
            <HighlightedText
              text="Better"
              wrapperClass="bottom-1 h-[30%] font-bold"
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
