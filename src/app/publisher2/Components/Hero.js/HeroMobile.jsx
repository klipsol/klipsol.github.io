'use client';
import Navbar from '@/app/roi-calculator/Components/Navbar';
import DPVideo from '../DPVideo/DPVideo';
import HighlightedText from '../HighlightedText/HighlightedText';

const HeroMobile = () => {
  return (
    <div className="block md:hidden">
      <Navbar customBg="#eebe50" />

      <div className="text-primaryTextColor p-4 relative bg-[#eebe50]">
        <h2 className="text-white mt-6 text-xl leading-10">
          <span className="text-white title">
            <span className="text-[#023046] font-extrabold">Monetize</span> By
            Embedding
            <br /> Brands Within Your Site
          </span>
        </h2>
        <div className="flex gap-4 justify-between my-8 mt-0">
          <div>
            {/* description */}
            <h2 className="custom-text-sm-medium text-[#023046] font-extrabold my-4">
              <HighlightedText
                text="Drive"
                wrapperClass="bg-[#FEF4D4] bottom-1"
              />
            </h2>
            <div className="flex flex-col gap-6 justify-start text-primaryTextColor">
              <div className="bg-[#FFF9E6] rounded-2xl lg:p-3 2xl:p-4 xxl:pt-8 lg:pt-4 whitespace-nowrap custom-text-sm relative 2xl:min-w-[188px] lg:w-[120px] sm:rounded-xl sm:w-[110px] sm:px-2 sm:py-2">
                <h1 className="absolute font-semibold lg:-top-[35%] xxl:top-[-50%] font-medium title left-2 text-[#9E8637] sm:-top-[30%] ">
                  01
                </h1>
                <h1 className="pt-2 leading-5 font-medium custom-text-sm">
                  User <br />
                  Experience
                </h1>
              </div>
              <div className="bg-[#FFF9E6] rounded-2xl font-medium lg:p-3 lg:pt-4 2xl:p-4 xxl:pt-8 whitespace-nowrap custom-text-sm 2xl:min-w-[188px] relative h-fit lg:w-[120px] sm:rounded-xl sm:w-[110px] sm:px-2 sm:py-2">
                <h1 className="absolute font-semibold lg:-top-[35%] xxl:top-[-50%] title left-2 text-[#9E8637] sm:-top-[30%]">
                  02
                </h1>
                <h1 className="pt-2 leading-5 font-medium custom-text-sm ">
                  Lifetime <br />
                  Value
                </h1>
              </div>
              <div className="bg-[#FFF9E6] rounded-2xl lg:p-3 2xl:p-4  xxl:pt-8 lg:pt-4 whitespace-nowrap custom-text-sm 2xl:min-w-[188px] relative w-fit h-fit lg:w-[120px] sm:rounded-xl sm:w-[110px] sm:px-2 sm:py-2">
                <h1 className="absolute font-semibold lg:-top-[35%] xxl:top-[-50%] font-medium title left-2 text-[#9E8637] sm:-top-[30%]">
                  03
                </h1>
                <h1 className="pt-2 leading-5 font-medium custom-text-sm">
                  First-Party <br />
                  Data
                </h1>
              </div>
            </div>
          </div>
          <DPVideo
            id="videoDiv"
            className="absolute right-4 -bottom-8 max-w-[180px] border-4 border-[#023046] rounded-xl"
            src="/HeroVideo2.mp4"
          />
        </div>
      </div>
      <div className="text-primaryTextColor p-4 pb-0">
        <h1 className="custom-text-sm-medium text-center mt-10 xxl:text-3xl sm:text-xl">
          <HighlightedText text={'Everything'} /> To Transact <br /> Brands On
          Your Site
        </h1>
        <div className="mt-4 justify-center flex gap-x-3 custom-text-sm">
          <div className="text-xs p-2 bg-[#FEF4D3] sm:text-center lg:p-5 lg:py-1.5 rounded-lg 2xl:py-2 relative">
            Direct Relationship <br />
            With Brands
            <div className="absolute lg:h-full bg-[#F7BB30]  sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
          </div>
          <div className="text-xs p-2 bg-[#FEF4D3] sm:text-center lg:p-5 lg:py-1.5 rounded-lg 2xl:py-2 relative">
            Complete Tech & <br /> Operations Support
            <div className="absolute lg:h-full bg-[#F7BB30]  sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
          </div>
          <div className="text-xs p-2 bg-[#FEF4D3] sm:text-center lg:p-5 lg:py-1.5 rounded-lg 2xl:py-2 relative">
            Plug & <br />
            Play Setup
            <div className="absolute lg:h-full bg-[#F7BB30]  sm:p 2xl:py-2 lg:w-1.5 sm:w-full sm:h-1.5 left-0 top-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMobile;
