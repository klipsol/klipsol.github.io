'use client';
import HighlightedText from '../HighlightedText/HighlightedText';
import { Chip } from '../UI/Chip/Chip';

export default function Technology() {
  const leftPhoneChipData = [
    {
      icon: '/end-to-end-tech.png',
      label: (
        <>
          End-to-End <br /> Technology
        </>
      ),
      className:
        'featurechips-l featurechips absolute bg-action/70 right-[70%] top-[20%] sm:w-[150px] lg:w-[180px] text-primary',
    },
    {
      icon: '/ai.png',
      label: (
        <>
          AI Based <br /> Recommendation
        </>
      ),
      className:
        'featurechips-l featurechips absolute bg-action/70 right-[70%] top-[45%] sm:w-[150px] lg:w-[180px] text-primary',
    },
    {
      icon: '/data_and_analytics.png',
      label: (
        <>
          Data & <br />
          Analytics
        </>
      ),
      className:
        'featurechips-l featurechips absolute bg-action/70 right-[70%] top-[70%] sm:w-[150px] lg:w-[180px] text-primary',
    },
    {
      icon: '/payment.png',
      label: (
        <>
          Payments & <br /> Settlements
        </>
      ),
      className:
        'featurechips-r featurechips absolute left-[70%] top-[20%] bg-secondary/70 text-white sm:w-[150px] lg:w-[180px]',
    },
    {
      icon: '/cata.png',
      label: (
        <>
          Catalogue & <br /> Pricing
        </>
      ),
      className:
        'featurechips-r featurechips absolute left-[70%] top-[45%] bg-secondary/70 text-white sm:w-[150px] lg:w-[180px]',
    },
    {
      icon: '/cust.png',
      label: (
        <>
          Customer <br /> Escalations
        </>
      ),
      className:
        'featurechips-r featurechips absolute left-[70%] top-[70%] bg-secondary/70 text-white sm:w-[150px] lg:w-[180px]',
    },
  ];

  return (
    <section
      id="embed-brands-on-site"
      className="scrollable-component relative w-full"
    >
      {/* bg */}
      <div className="absolute sm:h-[35vh] xl:h-[50%] bg-brand/10 w-full"></div>

      {/* actual content starts here */}
      <div className="inset-0 sec-container lg:py-[40px]">
        <div className="relative lg:my-5 sm:my-4 xxl:my-[5%] mx-auto md:w-[60%]">
          <h1 className="text-secondary font-semibold title sm:text-center px-2 lg:py-0">
            Everything To{' '}
            <HighlightedText
              wrapperClass="bottom-[10%]"
              text="Embed Brands"
            ></HighlightedText>{' '}
            On Your Site
          </h1>
        </div>
        <div className="w-full flex sm:justify-start lg:justify-around sm:flex-col lg:flex-row">
          <div className="lg:w-[50%] flex flex-col items-center relative ">
            <h1 className="subtitle mb-[8%] text-secondary font-medium lg:text[36px]">
              Technology & Operations Support
            </h1>
            <div className="relative sm:w-[40%] xl:w-[30%]">
              {leftPhoneChipData.map((data) => (
                <Chip key={data.icon} {...data} />
              ))}
              <img src="/phone2.png" alt="phone" />
            </div>
            <p className="text-center max-w-[60%] lg:max-w-[300px] custom-text-sm lg:text-[24px] text-[#505C6E] sm:mt-5 xl:mt-10 lg:font-normal">
              Highly Configurable and White-labelled.
            </p>
          </div>

          <div className="custom-vr sm:hidden lg:block"></div>
          <div className="custom-hr mt-4 lg:hidden"></div>

          <div className="sm:w-full lg:w-[50%] sm:pb-[10px] md:pb-0 flex flex-col items-center relative ">
            <h1 className="subtitle mb-[8%] sm:text-[#1D234E] lg:text-secondary font-medium sm:mt-6 lg:mt-0 lg:text[36px]">
              Brand Supply & Integrations
            </h1>
            <div className="relative sm:w-[60%] xl:w-[65%] flex-1">
              <img src="/brandonboard.png" alt="phone" />
            </div>
            <p className="text-center custom custom-text-sm lg:text-[24px]  text-[#505C6E] sm:mt-5 xl:mt-10 max-w-[60%] lg:max-w-[300px] lg:font-normal">
              Apps, Plugins & Dashboards to Sync You with Brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
