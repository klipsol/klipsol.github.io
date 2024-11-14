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
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Monetize By Embedding Brands Within Your Site"
        />
        <meta name="keywords" content="brand, monetization, publisher, site" />
        <meta name="author" content="Your Name" />

        <meta
          property="og:title"
          content="Everything To Transact Brands On Your Site"
        />
        <meta
          property="og:description"
          content="Monetize By Embedding Brands Within Your Site"
        />
        <meta
          property="og:image"
          content="https://imagekit.dpanda.in/publisher-banner/1731586986_image.png"
        />
        <meta
          property="og:url"
          content="https://test-dpanda.pages.dev/publisher2"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dpanda" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Everything To Transact Brands On Your Site"
        />
        <meta
          name="twitter:description"
          content="Monetize By Embedding Brands Within Your Site"
        />
        <meta
          name="twitter:image"
          content="https://imagekit.dpanda.in/publisher-banner/1731586986_image.png"
        />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:creator" content="@yourtwitterhandle" />

        <meta
          name="linkedin:title"
          content="Everything To Transact Brands On Your Site"
        />
        <meta
          name="linkedin:description"
          content="Monetize By Embedding Brands Within Your Site"
        />
        <meta
          name="linkedin:image"
          content="https://imagekit.dpanda.in/publisher-banner/1731586986_image.png"
        />

        <meta
          name="whatsapp:title"
          content="Everything To Transact Brands On Your Site"
        />
        <meta
          name="whatsapp:description"
          content="Monetize By Embedding Brands Within Your Site"
        />
        <meta
          name="whatsapp:image"
          content="https://imagekit.dpanda.in/publisher-banner/1731586986_image.png"
        />

        <meta
          name="slack:title"
          content="Everything To Transact Brands On Your Site"
        />
        <meta
          name="slack:description"
          content="Monetize By Embedding Brands Within Your Site"
        />
        <meta
          name="slack:image"
          content="https://imagekit.dpanda.in/publisher-banner/1731586986_image.png"
        />

        <title>Your Page Title</title>
      </head>
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
    </>
  );
}
