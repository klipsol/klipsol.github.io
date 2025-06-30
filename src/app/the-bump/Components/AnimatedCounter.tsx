"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = ({
  value,
  duration = 2.5,
  suffix = "",
  prefix = "",
  delay = 0,
}) => {
  const counterRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);

  useGSAP(() => {
    const element = counterRef.current;
    if (!element) return;

    // Create counter object for GSAP to animate
    const counter = { value: 0 };

    // GSAP timeline for the counter animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        onToggle: (self) => {
          if (self.isActive) {
            // Reset and play animation when entering viewport
            gsap.set(counter, { value: 0 });
            setDisplayValue(0);
            tl.restart();
          }
        },
      },
    });

    tl.to(counter, {
      value: value,
      duration: duration,
      delay: delay,
      ease: "power2.out",
      onUpdate: () => {
        setDisplayValue(Math.floor(counter.value));
      },
    });

    return () => {
      tl.kill();
    };
  }, [value, duration, delay]);

  return (
    <span ref={counterRef}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

const AnimatedStatsComponent = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const helpTextRef = useRef(null);

  useGSAP(() => {
    // Animate title on page load
    // gsap.from(titleRef.current, {
    //   y: -30,
    //   opacity: 0,
    //   duration: 0.8,
    //   ease: "power2.out",
    // });

    // Animate help text
    gsap.from(helpTextRef.current, {
      opacity: 0,
      duration: 0.6,
      delay: 1.5,
      ease: "power2.out",
    });

    // Container and cards animation
    const cards = containerRef.current.querySelectorAll(".stat-card");

    gsap.set(containerRef.current, { opacity: 0, y: 50 });
    gsap.set(cards, { opacity: 0, y: 40, scale: 0.9 });

    // Timeline for container and cards
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(containerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    }).to(
      cards,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.2)",
      },
      "-=0.3"
    );

    // Add hover animations for number elements
    cards.forEach((card) => {
      const numberElement = card.querySelector(".stat-number");
      if (numberElement) {
        numberElement.addEventListener("mouseenter", () => {
          gsap.to(numberElement, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        numberElement.addEventListener("mouseleave", () => {
          gsap.to(numberElement, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <h2
          ref={titleRef}
          className="text-3xl font-bold text-center mb-8 text-gray-800"
        >
          Our Impact Statistics
        </h2>

        <div
          ref={containerRef}
          className="across-the-funnel bg-[#003C63] text-white rounded-lg p-6 flex flex-wrap justify-center md:justify-between gap-4 md:gap-0"
        >
          <div className="stat-card flex-1 min-w-[160px] px-4 py-4 text-center">
            <p className="stat-number text-[60px] text-[#FFCF3B] font-bold leading-tight cursor-pointer">
              <AnimatedCounter
                value={40}
                suffix="%"
                duration={2.5}
                delay={0.2}
              />
            </p>
            <p className="text-[24px] leading-[36px]">
              Increase in
              <br /> Ticket Size
            </p>
          </div>

          <div
            className="stat-card flex-1 min-w-[160px] px-4 py-4 border-t md:border-t-0 md:border-l text-center"
            style={{ borderColor: "#656B6F" }}
          >
            <p className="stat-number text-[60px] text-[#FFCF3B] font-bold leading-tight cursor-pointer">
              <AnimatedCounter
                value={85}
                suffix="%"
                duration={2.5}
                delay={0.4}
              />
            </p>
            <p className="text-[24px] leading-[36px]">+ EMI Approval Rates</p>
          </div>

          <div
            className="stat-card flex-1 min-w-[160px] px-4 py-4 border-t md:border-t-0 md:border-l text-center"
            style={{ borderColor: "#656B6F" }}
          >
            <p className="stat-number text-[60px] text-[#FFCF3B] font-bold leading-tight cursor-pointer">
              <AnimatedCounter
                value={50}
                suffix="%"
                duration={2.5}
                delay={0.6}
              />
            </p>
            <p className="text-[24px] leading-[36px]">Lower Processing Costs</p>
          </div>

          <div
            className="stat-card flex-1 min-w-[160px] px-4 py-4 border-t md:border-t-0 md:border-l text-center"
            style={{ borderColor: "#656B6F" }}
          >
            <p className="stat-number text-[60px] text-[#FFCF3B] font-bold leading-tight cursor-pointer">
              <AnimatedCounter
                value={2}
                prefix="<"
                suffix="%"
                duration={2.5}
                delay={0.8}
              />
            </p>
            <p className="text-[24px] leading-[36px]">
              Default
              <br /> Risk
            </p>
          </div>

          <div
            className="stat-card flex-1 min-w-[160px] px-4 py-4 border-t md:border-t-0 md:border-l text-center"
            style={{ borderColor: "#656B6F" }}
          >
            <p className="stat-number text-[60px] text-[#FFCF3B] font-bold leading-tight cursor-pointer">
              <AnimatedCounter
                value={5000}
                suffix="+"
                duration={3}
                delay={1.0}
              />
            </p>
            <p className="text-[24px] leading-[36px]">integrated POS points</p>
          </div>
        </div>

        <div ref={helpTextRef} className="mt-8 text-center text-gray-600">
          <p>Scroll up and down to see the animation trigger again!</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedStatsComponent;
