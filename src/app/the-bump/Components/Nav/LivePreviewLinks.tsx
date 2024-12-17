// import { useEffect, useRef, useState } from 'react';
// import WidgetModal from '../Modal/WidgetModal';

// const LivePreviewLinks = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalUrl, setModalUrl] = useState('');
//   const [isButtonsVisible, setIsButtonsVisible] = useState(false);
//   const buttonRef = useRef(null);
//   const buttonsRef = useRef(null);

//   const openModal = (url) => {
//     setModalUrl(url);
//     setIsModalOpen(true);
//     setIsButtonsVisible(false);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalUrl('');
//     setIsButtonsVisible(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         buttonRef.current &&
//         !buttonRef.current.contains(event.target) &&
//         buttonsRef.current &&
//         !buttonsRef.current.contains(event.target)
//       ) {
//         setIsButtonsVisible(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleBeaconEvent = (e) => {
//     let elementId = e.target.id || e.currentTarget.id || '';
//     if (e.target.nodeName === 'BUTTON') {
//       elementId = 'calendly-button';
//     }
//     beaconEvents.fireEvents(`${elementId}-click`, {});
//   };

//   return (
//     <div className="relative" ref={buttonRef}>
//       <div
//         id="live-preview"
//         className="flex flex-col cursor-pointer"
//         onClick={() => {
//           handleBeaconEvent();
//           setIsButtonsVisible((prev) => !prev);
//         }} // Toggle buttons visibility
//       >
//         <div className="flex gap-x-2 items-center relative">
//           <span className="bg-[#F7BA30]/80 w-2 h-2 rounded-full "></span>
//           <span className="bg-[#F7BA30] w-2 h-2 rounded-full animate-ping [animation-duration:0.9s] absolute"></span>
//           <span className="text-white font-medium">Live Preview</span>
//         </div>
//         <p className="text-[#F7BA30] text-[10px] text-center">for Pinterest</p>
//       </div>

//       {isButtonsVisible && (
//         <div
//           ref={buttonsRef}
//           className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 flex gap-x-4"
//         >
//           <a
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//             href={'https://yourstore.dpanda.online/?user_id=1234567899'}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Microsite
//           </a>
//           {/* <button
//             onClick={() => openModal('https://yourstore.dpanda.online/?user_id=1234567899')}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Microsite
//           </button> */}
//           {/* <button
//             onClick={() => openModal('https://yourstore.dpanda.online/?user_id=1234567899')}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Microsite
//           </button> */}
//           <button
//             onClick={() => openModal('https://test-dpanda.pages.dev/theBump')}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Widget
//           </button>
//         </div>
//       )}

//       {isModalOpen && <WidgetModal url={modalUrl} onClose={closeModal} />}
//     </div>
//   );
// };

// export default LivePreviewLinks;
