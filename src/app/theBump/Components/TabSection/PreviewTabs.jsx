'use client';
import { useState } from 'react';
import MicrositeTab from './MicrositeTab';
import WidgetTab from './WidgetTab';

const PreviewTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabData = [
    {
      title: 'Widget',
      content: <WidgetTab selectedTab={selectedTab} />,
    },
    {
      title: 'App',
      content: <MicrositeTab selectedTab={selectedTab} />,
    },
  ];

  return (
    <div className="mx-auto mt-4">
      <div className="mx-auto max-w-3xl flex mb-4">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 text-center py-2 px-4 text-lg font-semibold transition-colors duration-300 ease-in-out ${
              selectedTab === index
                ? 'border-b-4 border-blue-500 text-blue-600'
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setSelectedTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      {/* <div className="max-w-6xl m-auto bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out"> */}
      {tabData[selectedTab].content} {/* Render the selected tab's content */}
      {/* </div> */}
    </div>
  );
};

export default PreviewTabs;
