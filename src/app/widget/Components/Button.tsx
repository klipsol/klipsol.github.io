'use client';

const Button = () => {
  const toggleProductSheet = () => {
    const event = new CustomEvent('openProductListModalEvent', {
      detail: {
        productIds: '295027,300084,300083',
        productName: 'Example Product',
        additionalInfo: 'Some extra data',
      },
    });

    // Dispatch the event
    window.dispatchEvent(event);
  };

  return (
    <div
      id="step-1"
      onClick={toggleProductSheet}
      className="absolute top-4 right-4 cursor-pointer bg-white flex justify-center items-center w-8 h-8 rounded-full p-1"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
      </svg>
    </div>
  );
};

export default Button;
