"use client"
import { useRef, useState } from 'react';
import GetInTouchModal from '../Modal/GetInTouchModal';
import { beaconEvents } from '@/app/utils/events';

const GetInTouchCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState('');
  const buttonRef = useRef(null);

  const openModal = (url) => {
    setModalUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalUrl('');
  };

  const handleBeaconEvent = (e) => {
    let elementId = e.target.id || e.currentTarget.id || '';
    if (e.target.nodeName === 'BUTTON') {
      elementId = 'get-in-touch';
    }
    beaconEvents.fireEvents(`${elementId}-click`, {});
  };

  return (
    <>
    <button id="get-in-touch"
      onClick={(e) => {
        handleBeaconEvent(e);
        openModal('https://test-dpanda.pages.dev/theBump')
      }}
      ref={buttonRef}
      className="bg-[#f7ba30] bg-[url(/get-in-touch-icon.webp)] bg-no-repeat bg-center bg-auto w-[40px] h-[40px] rounded-full fixed bottom-[5rem] right-[1rem] z-[100]">
    </button>
    {isModalOpen && <GetInTouchModal url={modalUrl} onClose={closeModal} />}
    </>
  );
};

export default GetInTouchCTA;
