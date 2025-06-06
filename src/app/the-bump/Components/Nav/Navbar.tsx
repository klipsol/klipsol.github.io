'use client';

import { beaconEvents } from '@/app/utils/events';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Calendly from '../Calendly/Calendly';
import Dropdown from '../Dropdown/Dropdown';

export default function Navbar() {
  const pathname = usePathname();

  const handleBeaconEvent = (e) => {
    let elementId = e.target.id || e.currentTarget.id || '';
    if (e.target.nodeName === 'BUTTON') {
      elementId = 'calendly-button';
    }
    beaconEvents.fireEvents(`nav-item-click`, { item_name: elementId });
  };
  return (
    <>
      <div
        className={
          'md:mr-[80px] opacity-1 md:absolute md:w-full mt-6 relative z-50'
        }
        id="nav"
      >
        <div className="flex justify-between items-center flex-row bg-transparent rounded-3xl relative sm:text-sm  2xl:text-lg xxl:text-2xl">
          <div className="md:pl-[10%]">
            <img
              src="/dpandaLogo2.png"
              alt="logo"
              className="md:hidden block w-16 -mt-4"
            />
            <img
              src="/DpandaLogo.png"
              alt="logo"
              className="hidden md:block max-h-10"
            />
          </div>
          <Dropdown offeringsButtonWrap="lg:mr-[1rem]" offeringsButton="bg-[#ffffff] text-[#063750]" offeringsButtonIcon="border-t-[#063750]" />
          {/* <div className="min-w-[40%] md:relative md:gap-x-2 items-center flex-1 md:flex-none justify-around flex bg-secondary p-2 md:px-4 rounded-2xl rounded-t-none md:rounded-t-2xl">
            <Link
              onClick={handleBeaconEvent}
              id="roi-calculator"
              href="/roi-calculator"
              className="rounded-[24px] text-[16px] text-center bg-secondary/70 px-4 py-1 text-white font-medium"
            >
              ROI Calculator
            </Link>{' '}
            {pathname !== '/' && (
              <div className="bg-secondary/70 h-6 w-0.5"></div>
            )}
            {/* {pathname !== '/' && ( *
              <div
                onClick={handleBeaconEvent}
                className="rounded-[24px] text-[16px] text-white px-4 text-center py-1 font-medium"
              >
                <Calendly />
                {/* {publisher && (
									<p className="text-[12px] text-primary">
										for <span className="capitalize">{publisher}</span>
									</p>
								)} *
              </div>
            {/* )} *
            <div className="bg-secondary/70 h-6 w-0.5"></div>
            <Link
              onClick={handleBeaconEvent}
              id="all-features"
              href="/features"
              className="rounded-[24px] text-[16px] text-center bg-secondary px-4 py-1 text-white font-medium"
            >
              All Features
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
}
