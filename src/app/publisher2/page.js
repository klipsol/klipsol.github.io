// 'use client';
import Feature from "./Components/Feature/Feature";
import Hero from "./Components/Hero.js/Hero";

import "../utils/gsap";
import { BrandList } from "./Components/BrandList/BrandList";
import EveryThingFree from "./Components/EveryThingFree/EveryThingFree";
import Final from "./Components/Final/Final";
import FirstParty from "./Components/FirstParty/FirstParty";
import Footer from "./Components/Footer/Footer";
import HeroMobile from "./Components/Hero.js/HeroMobile";
import InstantRoi from "./Components/InstantRoi/InstantRoi";
import LifeTimeValue from "./Components/LifeTimeValue/LifeTimeValue";
import SmoothScroll from "./Components/SmoothScroll/SmoothScroll";
import Technology from "./Components/Technology/Technology";
import { Testimonial } from "./Components/Testimonial/Testimonial";
import CoreFeatures from "./Components/CoreFeatures/CoreFeatures";
import HigherMonitization from "./Components/HigherMonitization/HigherMonitization";

export async function generateMetadata({ params }) {
  // Get the path from params
  const path = params.slug ? params.slug.join("/") : "/";

  return {
    title: "Innovative Digital Solutions for Modern Businesses",
    description:
      "Transforming digital landscapes with cutting-edge technology and strategic insights across multiple domains.",
    openGraph: {
      title: "Innovative Digital Solutions for Modern Businesses",
      description:
        "Transforming digital landscapes with cutting-edge technology and strategic insights across multiple domains.",
      images: ["https://www.dummyimage.com/1200x630/"],
    },
  };
}

export default function Publisher2() {
  return (
    <main>
      <SmoothScroll>
        <Hero />
        <HeroMobile />
        <BrandList />
        <HigherMonitization />
        <Feature />
        <LifeTimeValue />
        <FirstParty />
        <InstantRoi />
        <CoreFeatures />
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
