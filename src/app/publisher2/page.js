"use client";
import Feature from "./Components/Feature/Feature";
import Hero from "./Components/Hero.js/Hero";

import "../utils/gsap";
import SmoothScroll from "./Components/SmoothScroll/SmoothScroll";

export default function Publisher2() {
  return (
    <main>
      <SmoothScroll>
        <Hero />
        <Feature />
      </SmoothScroll>
    </main>
  );
}
