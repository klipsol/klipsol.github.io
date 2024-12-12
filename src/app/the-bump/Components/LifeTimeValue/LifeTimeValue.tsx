'use client';
import useAssets from '@/app/hooks/useAssets';
import DPVideo from '../DPVideo/DPVideo';
import HighlightedText from '../HighlightedText/HighlightedText';

export default function LifeTimeValue() {
  const listItems = ['Higher Engagement', 'Bundle Subscriptions'];
  const { c } = useAssets();
  return (
    <section className="sec-container h-fit lg:h-screen sm:pb-10 relative flex sm:px-[10px] lg:flex-row sm:flex-col-reverse  w-full">
      <div className="lg:w-[65%] md:h-[50vh] sm:w-full flex gap-x-3 mt-4 lg:mt-0">
        <div className="lg:h-screen sm:h-full bg-[#EEF0F8] sm:rounded-t-3xl lg:rounded-none overflow-hidden w-[50%]">
          <div className="lg:hidden bg-[#C4C7D5] text-[#234651] py-3 items-center subtitle font-semibold flex justify-center">
            Conventional
          </div>
          <div className="flex h-full justify-center items-center flex-col">
            {/* <DPVideo className="h-fit sm:mt-[-20px] sm:mb-[15px]" src={'/vid2.mp4'} /> */}
            <div className="flex h-[80%] sm:mb-[15px] md:mb-0 items-center justify-center">
              <DPVideo className="h-[90%]" src={'/vid2.mp4'} />
            </div>
            <p className="text-center text-[#254652] subtitle sm:w-[80%] lg:text-[24px] lg:w-full text-lg font-medium 2xl:text-2xl">
              <span className="font-bold">Third Party</span> User Control
            </p>
          </div>
        </div>
        <div className="lg:h-screen sm:h-full bg-[#FEF4D3] sm:rounded-t-3xl lg:rounded-none overflow-hidden w-[50%]">
          <div className="lg:hidden bg-[#FFE89B] text-[#234651] py-3 subtitle items-center font-semibold flex justify-center">
            Dpanda
          </div>
          <div className="flex h-full justify-center items-center flex-col">
            <div className="flex h-[80%] sm:mb-[15px] md:mb-0 items-center justify-center">
              <DPVideo className="h-[90%]" src={c} />
            </div>
            <p className="text-center text-[#254652] subtitle sm:w-[80%] lg:text-[24px] lg:w-full text-lg font-medium 2xl:text-2xl">
              <span className="font-bold">Your Own</span> User Ecosystem
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[35%] flex lg:flex-col sm:my-4 lg:my-0 sm:flex-row sm:gap-x-2 lg:justify-center lg:px-8 gap-y-3 sm:p-0 sm:w-full">
        <h1 className="text-[#023046]/20 title font-semibold leading-[1] sm:mt-1 lg:m-0">
          02
        </h1>
        <div className="sm:pl-[12px] md:pl-0">
          <h1 className="title text-[#1D234E] font-medium leading-[1.2] mb-[15px]">
            <HighlightedText
              text="Higher"
              wrapperClass="bottom-1 h-[30%] font-semibold"
            />{' '}
            <br />
            <span className="font-normal">Lifetime Value</span>
          </h1>
          <p className="custom-text-sm text-[#505C6E] 2xl:text-[1.4em]">
            Higher user control within your ecosystem.
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
      <hr className="bottom-0 absolute w-full custom-hr  lg:block" />
    </section>
  );
}
