import { useState } from "react";

const Dropdown = ({ offeringsButtonWrap, offeringsButton, offeringsButtonIcon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRedirect = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className={` relative inline-block ${offeringsButtonWrap}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'rounded-b-none' : ''} ${offeringsButton} bg-[#063750] text-white text-[16px] font-medium px-[1rem] py-[0.3rem] flex items-center rounded-[1rem]`}>
        Offerings
        <span className={`${isOpen ? 'rotate-180' : ''} ${offeringsButtonIcon} ml-2 triangle w-[0rem] h-[0rem] border-solid border-transparent border-l-[6px] border-r-[6px] border-t-[6px] border-t-white`}></span>
      </button>

      {isOpen && (
        <div className={`${isOpen ? 'rounded-tr-none' : ''} absolute right-0 mt-0 w-[12rem] bg-white border shadow-lg rounded-md`}>
          <ul className="py-2 text-gray-700">
            <li>
              <button
                className="w-full text-[16px] font-medium text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleRedirect("https://discover.dpanda.in")}
              >
                Discover
              </button>
            </li>
            <li>
              <button
                className="w-full text-[16px] font-medium text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleRedirect("https://employee-rewards.dpanda.in")}
              >
                Employee Rewards
              </button>
            </li>
            <li>
              <button
                className="w-full text-[16px] font-medium text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleRedirect("https://www.postsell.in")}
              >
                PostSell
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
