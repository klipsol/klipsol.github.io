import Link from 'next/link';

const WidgetModal = ({ url, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 min-h-screen bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 max-w-7xl rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="p-4">
          <Link
            className="absolute bottom-2 left-4 flex justify-center items-center mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
            // href={url}
            href="/theBump"
            // target="_blank"
            rel="noopener noreferrer"
          >
            Get full experience
          </Link>

          <iframe
            src={url}
            width="100%"
            height="600"
            frameBorder="0"
            title="Preview"
            className="rounded-lg"
            id="demosite-iframe"
            allow="*"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WidgetModal;
