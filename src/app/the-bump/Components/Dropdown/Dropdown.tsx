import React, { useState } from 'react';

const Dropdown = ({
  offeringsButtonWrap,
  offeringsButton,
  offeringsButtonIcon,
}) => {
  const [
    openDropdown,
    setOpenDropdown,
  ] = useState(null);

  const handleRedirect = (
    url,
    isInternal = false
  ) => {
    if (isInternal) {
      window.location.href = url;
      setOpenDropdown(null);
    } else {
      window.open(
        url,
        '_blank',
        'noopener,noreferrer'
      );
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(
      openDropdown === dropdown
        ? null
        : dropdown
    );
  };

  const renderDropdownButton = (
    label,
    dropdown
  ) => (
    <button
      onClick={() =>
        toggleDropdown(dropdown)
      }
      className={`${
        openDropdown === dropdown
          ? 'rounded-b-none'
          : ''
      } ${offeringsButton} text-[16px] font-medium px-[1rem] py-[0.3rem] flex items-center rounded-[1rem]`}
    >
      {label}
      <span
        className={`${
          openDropdown === dropdown
            ? 'rotate-180'
            : ''
        } ${offeringsButtonIcon} ml-2 triangle w-[0rem] h-[0rem] border-solid border-transparent border-l-[6px] border-r-[6px] border-t-[6px]`}
      ></span>
    </button>
  );

  const renderDropdownMenu = (
    dropdown,
    items, 
    width
  ) =>
    openDropdown === dropdown && (
      <div
        className={`absolute right-0 mt-0 w-[12rem] bg-white border shadow-lg rounded-md ${
          openDropdown === dropdown
            ? 'rounded-tr-none'
            : ''
        }`}
        style={{ width }}
      >
        <ul className='py-2 text-gray-700'>
          {items.map((item, index) => (
            <li key={index}>
              <button
                className='w-full text-[16px] font-medium text-left px-4 py-2 hover:bg-gray-100'
                onClick={() =>
                  handleRedirect(
                    item.url,
                    item.isInternal
                  )
                }
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );

  const solutionsItems = [
    {
      label: 'For Influencers',
      url: 'https://discover.dpanda.in',
    },
    {
      label:
        'Post Checkout Monetisation',
      url: 'https://www.postsell.in',
    },
    {
      label: 'Employee Rewards',
      url: 'https://employee-rewards.dpanda.in',
    },
      {
      label: 'Office-to-Office',
      url: 'https://www.dpanda.ai/',
    },
  ];

  const publishersItems = [
    {
      label: 'All Features',
      url: '/features',
      isInternal: false,
    },
  ];

  return (
    <div
      className={`relative ${offeringsButtonWrap}`}
    >
      <div className='flex space-x-4'>
        <div className='relative'>
          {renderDropdownButton(
            'Solutions',
            'solutions'
          )}
          {renderDropdownMenu(
            'solutions',
            solutionsItems, 
            '12rem'
          )}
        </div>

        <div className='relative'>
          {renderDropdownButton(
            'For Publishers',
            'publishers'
          )}
          {renderDropdownMenu(
            'publishers',
            publishersItems,
            '9.7rem'
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
