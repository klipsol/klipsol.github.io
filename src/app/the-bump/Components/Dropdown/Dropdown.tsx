import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRedirect = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'rounded-b-none' : ''} bg-[#063750] text-white px-4 py-2 flex items-center rounded-md`}
      >
        Offerings
        <span className={`${isOpen ? 'rotate-180' : ''} ml-2`}>▼</span>
      </button>

      {isOpen && (
        <div className={`${isOpen ? 'rounded-tr-none' : ''} absolute right-0 mt-0 w-[11rem] bg-white border shadow-lg rounded-md`}>
          <ul className="py-2 text-gray-700">
            <li>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleRedirect("https://discover.dpanda.in")}
              >
                Discover
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleRedirect("https://employee-rewards.dpanda.in")}
              >
                Employee Rewards
              </button>
            </li>
            <li>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
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
