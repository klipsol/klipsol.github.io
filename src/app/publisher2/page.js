"use client";
import Feature from "./Components/Feature/Feature";
import Hero from "./Components/Hero.js/Hero";

import "../utils/gsap";
import SmoothScroll from "./Components/SmoothScroll/SmoothScroll";
import LifeTimeValue from "./Components/LifeTimeValue/LifeTimeValue";
import FirstParty from "./Components/FirstParty/FirstParty";
import Technology from "./Components/Technology/Technology";
import Operations from "./Components/Operation/Operation";
import EveryThingFree from "./Components/EveryThingFree/EveryThingFree";
import Final from "./Components/Final/Final";
import { Testimonial } from "./Components/Testimonial/Testimonial";
import { DirectRelationShip } from "./Components/DirectRelationShip/DirectRelationShip";
import { BrandList } from "./Components/BrandList/BrandList";
import InstantRoi from "./Components/InstantRoi/InstantRoi";
import Footer from "./Components/Footer/Footer";

export default function Publisher2() {
  return (
    <main>
      <SmoothScroll>
        <Hero />
        <BrandList />
        <Feature />
        <LifeTimeValue />
        <FirstParty />
        <InstantRoi />
        <Technology />
        {/* <Operations /> */}
        {/* <DirectRelationShip /> */}
        <EveryThingFree />
        <Final />
        <Testimonial />
        <Footer />
      </SmoothScroll>
    </main>
  );
}
