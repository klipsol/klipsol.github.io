"use client";
import { useEffect, useRef } from "react";

const DPVideo = ({
  src,
  type = "video/mp4",
  className = "",
  fallbackText = "Your browser does not support the video tag.",
}) => {
  const videoRef = useRef(null);
  const observerRef = useRef(null);

  // useEffect(() => {
  //   if (!videoRef.current) return;

  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.4, // 40% visibility threshold
  //   };

  //   const handleIntersect = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         // Play when 40% or more is visible
  //         //   console.log("] visible---", videoRef.current);
  //         //   setTimeout(() => {
  //         videoRef.current?.play().catch((error) => {
  //           console.warn('Video autoplay failed:', error);
  //         });
  //         //   }, 1000);
  //       } else {
  //         //   console.log("] hidden---", videoRef.current);
  //         // Pause when less than 40% is visible
  //         videoRef.current?.pause();
  //       }
  //     });
  //   };

  //   observerRef.current = new IntersectionObserver(handleIntersect, options);
  //   observerRef.current.observe(videoRef.current);

  //   return () => {
  //     if (observerRef.current) {
  //       observerRef.current.disconnect();
  //     }
  //   };
  // }, []);

  return (
    <video autoPlay className={className} playsInline muted loop>
      <source src={src} type={type} />
      {fallbackText}
    </video>
  );
};

export default DPVideo;
