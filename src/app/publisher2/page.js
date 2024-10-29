"use client";
import Feature from "./Components/Feature/Feature";
import Hero from "./Components/Hero.js/Hero";

import "../utils/gsap";
import SmoothScroll from "./Components/SmoothScroll/SmoothScroll";
import LifeTimeValue from "./Components/LifeTimeValue/LifeTimeValue";
import FirstParty from "./Components/FirstParty/FirstParty";

export default function Publisher2() {
  return (
    <main>
      <SmoothScroll>
        <Hero />
        <Feature />
        <LifeTimeValue />
        <FirstParty />
      </SmoothScroll>
    </main>
  );
}
