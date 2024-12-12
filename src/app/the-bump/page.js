// 'use client';
import Feature from './Components/Feature/Feature';

import '../utils/gsap';
import { BrandList } from './Components/BrandList/BrandList';
import CoreFeatures from './Components/CoreFeatures/CoreFeatures';
import EveryThingFree from './Components/EveryThingFree/EveryThingFree';
import Final from './Components/Final/Final';
import FirstParty from './Components/FirstParty/FirstParty';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import HeroMobile from './Components/Hero/HeroMobile';
import HigherMonitization from './Components/HigherMonitization/HigherMonitization';
import InstantRoi from './Components/InstantRoi/InstantRoi';
import LifeTimeValue from './Components/LifeTimeValue/LifeTimeValue';
import Technology from './Components/Technology/Technology';
import { Testimonial } from './Components/Testimonial/Testimonial';

export default function Publisher2() {
  return (
    <main>
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
      <EveryThingFree />
      <Final />
      <Testimonial />
      <Footer />
    </main>
  );
}
