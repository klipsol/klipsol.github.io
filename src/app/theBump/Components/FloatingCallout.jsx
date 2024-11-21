'use client';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const FloatingCallout = () => {
  const buttonRef = useRef(null); // Reference to the button
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionPosition = sectionRef.current.getBoundingClientRect().top;
      const button = buttonRef.current;
      const image = imageRef.current;
      const windowHeight = window.innerHeight;

      if (sectionPosition <= windowHeight && sectionPosition > 0) {
        // If the section is visible in the viewport
        gsap.to(button, {
          zIndex: 20,
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          opacity: 1,
          x: '-50%',
          ease: 'power1.out',
        });
        gsap.to(image, { opacity: 0.1, duration: 0.5, ease: 'power1.out' });
      } else {
        // Revert to normal flow
        gsap.to(button, {
          position: 'relative',
          bottom: 'auto',
          left: 'auto',
          opacity: 0,
          ease: 'power1.out',
        });
        gsap.to(image, { opacity: 1, duration: 0.5, ease: 'power1.out' });
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleShopStory = () => {
    window.DPWidget.toggleShopStory();
  };
  return (
    <>
      {/* Above the Fold Button */}
      <div className="relative section mt-8" id="above-the-fold">
        <span className="hidden md:block absolute -right-20 -top-12">
          <img src="/arrow-white.svg" />
          <span className="absolute text-white font-semibold top-12 left-16 w-40">
            5. Floating Callouts
          </span>
        </span>
        {/* <button className="bg-blue-500 text-white py-2 px-16 rounded-md cursor-pointer block mx-auto">
      Above the Fold
    </button> */}
        <div ref={imageRef} className="img-blog" onClick={toggleShopStory}>
          <img
            className="m-auto"
            src="https://imagekit.dpanda.in/publisher-banner/1719488194_Practic-b1.gif"
          />
        </div>
      </div>
      <div className="section mt-8" id="above-the-fold" ref={sectionRef}>
        <div
          ref={buttonRef}
          onClick={() => {
            window.DPWidget.toggleProductList();
          }}
        >
          <img
            src="https://imagekit.dpanda.in/publisher-banner/1719488194_Practic-b1.gif"
            alt="Blog"
          />
        </div>
      </div>
    </>
  );
};

export default FloatingCallout;
