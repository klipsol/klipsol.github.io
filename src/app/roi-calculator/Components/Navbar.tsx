'use client';
import Calendly from '@/app/the-bump/Components/Calendly/Calendly';
import Dropdown from '@/app/the-bump/Components/Dropdown/Dropdown';
import { beaconEvents } from '@/app/utils/events';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Navbar({ customBg }) {
  const pathname = usePathname();
  const [publisher, setPublisher] = useState('');
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [visibleComponent, setVisibleComponent] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setPublisher(localStorage.getItem('publisher'));
  }, []);

  // Track the visible component and current scroll position

  // Function to find the visible component based on scroll position
  const findVisibleComponent = () => {
    const elements = document.querySelectorAll('.scrollable-component'); // Update this selector based on your component class or id
    let found = null;
    const viewportHeight = window.innerHeight;

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      // Element is considered visible if it's partially in the viewport
      // We add a buffer zone (e.g., 100px) to make detection more forgiving
      const buffer = 100;
      const isVisible =
        (rect.top >= -buffer && rect.top <= viewportHeight) || // Top edge is in view (with buffer)
        (rect.bottom >= 0 && rect.bottom <= viewportHeight + buffer) || // Bottom edge is in view (with buffer)
        (rect.top <= 0 && rect.bottom >= viewportHeight); // Element spans the viewport

      if (isVisible) {
        found = element;
      }
    });

    if (found) {
      setVisibleComponent(found.id || found.getAttribute('name') || 'Unknown');
    } else {
      setVisibleComponent('None');
    }
  };

  const handleEvent = () => {
    beaconEvents.fireEvents('page-scroll', {
      'scroll-position-y': scrollPosition,
      component: visibleComponent,
    });
    // Additional beacon event logic can go here
  };

  const onScroll = useCallback(
    (event) => {
      const currentScrollPosition = window.scrollY;

      // Update the current scroll position
      setScrollPosition(currentScrollPosition);

      // Clear the previous timeout when a new scroll happens
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Find the visible component
      findVisibleComponent();

      // Set a new timeout to trigger the beacon event after 500ms of inactivity
      const newTimeout = setTimeout(() => {
        handleEvent(); // Trigger beacon event after scroll stops
      }, 500);

      // Update the timeout state
      setScrollTimeout(newTimeout);
    },
    [scrollTimeout]
  );

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      // Clean up the event listener on unmount
      window.removeEventListener('scroll', onScroll, {
        passive: true,
      } as AddEventListenerOptions);

      // Clear any existing timeout if the component unmounts
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [onScroll, scrollTimeout]);

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
        style={{
          background: customBg && customBg,
        }}
        className={twMerge(
          'lg:sec-container opacity-1 mt-0 relative z-50 lg:pr-10 mx-0',
          customBg && 'bg-primary'
        )}
        id="nav"
      >
        <div className="lg:flex gap-4 relative px-4 pt-2 justify-between items-center flex flex-row md:flex-row bg-transparent rounded-3xl md:custom-text-base">
          <Link href={'/publisher/' + publisher}>
            <img
              src="/dpandaLogo2.png"
              alt="logo"
              className="md:hidden block w-10 absolute top-2"
            />
            <img
              src="/DpandaLogo.png"
              alt="logo"
              className="max-h-10 mt-6 mb-4 hidden md:block"
            />
          </Link>
          <Dropdown />
          {/* <div className="p-2 md:px-8 md:pt-6 md:pb-4 bg-[#043045] rounded-b-2xl lg:block">
            <div className="text-sm md:gap-x-6 text-center gap-y-2 items-center pt-0 w-full md:w-fit justify-between hidden sm:flex sm:flex-row md:flex-row lg:flex">
              {/* <LivePreviewLinks /> *
              <Link
                onClick={handleBeaconEvent}
                id="roi-calculator"
                href="/roi-calculator"
                className="rounded-[24px] bg-secondaryBg px-4 py-1 text-white font-medium"
                // variant="primary"
              >
                ROI <br className="lg:hidden" /> Calculator
              </Link>{' '}
              {pathname !== '/' && (
                <div className="bg-[#004A6C] lg:h-6 h-8 w-0.5"></div>
              )}
              {/* {pathname !== '/' && ( *
                <div
                  onClick={handleBeaconEvent}
                  className="rounded-[24px] text-white  px-4 py-1  font-medium"
                >
                  <Calendly />
                </div>
              {/* )} *
              <div className="bg-[#004A6C] lg:h-6 h-8 w-0.5"></div>
              <Link
                onClick={handleBeaconEvent}
                id="all-features"
                href="/features"
                className="rounded-[24px] text-white px-4 py-1 md:text-white font-medium"
              >
                All <br className="lg:hidden" /> Features
              </Link>
            </div>
          </div> */}
        </div>
      </div>
      {/* <CalendlyModal isOpen={isModalOpen} onClose={closeModal} /> */}
    </>
  );
}
