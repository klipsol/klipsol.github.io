'use client';
import { beaconEvents } from '@/app/utils/events';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Incentive from './IncentiveTab';
import MicrositeTab from './MicrositeTab';
import WidgetTab from './WidgetTab';

const PreviewTabs = () => {
  const search = useSearchParams();
  const [selectedTab, setSelectedTab] = useState(+search.get('tab'));

  const tabData = [
    {
      title: 'Website - Widget',
      content: <WidgetTab selectedTab={selectedTab} />,
    },
    {
      title: 'App - mWeb',
      content: <MicrositeTab selectedTab={selectedTab} />,
    },
    {
      title: 'Bundle Your Subscription',
      content: <Incentive selectedTab={selectedTab} />,
    },
  ];

  const handleBeaconEvent = (e) => {
    let elementId = e.target.id || '';
    beaconEvents.fireEvents(`widget-tab-clicks`, { tab_name: elementId });
  };

  return (
    <div className="mx-2 md:mx-auto mt-4">
      <div className="mx-auto max-w-3xl flex mb-4 gap-x-3 lg:gap-x-5 pt-4 text-center">
        {tabData.map((tab, index) => (
          <button
            id={tab.title}
            key={index}
            className={`flex-1 text-white text-center py-1 lg:py-2 px-4 text-xs lg:text-base 2xl:text-lg font-medium transition-colors duration-300 ease-in-out rounded-3xl 
    ${
      selectedTab === index
        ? 'bg-[#3B81F6] hover:bg-[#4A8EF7]'
        : 'bg-[#0C1D5F] hover:bg-[#1C2D7F]'
    } 
    hover:scale-103 active:scale-100 transform transition-all`}
            onClick={(e) => {
              handleBeaconEvent(e);
              setSelectedTab(index);
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={twMerge('', selectedTab !== 0 && 'hidden')}>
        {tabData[0].content}
      </div>
      <div className={twMerge('', selectedTab !== 1 && 'hidden')}>
        {tabData[1].content}
      </div>
      <div className={twMerge('', selectedTab !== 2 && 'hidden')}>
        {tabData[2].content}
      </div>
    </div>
  );
};

export default PreviewTabs;