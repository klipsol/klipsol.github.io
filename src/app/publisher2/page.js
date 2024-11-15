// 'use client';
import Feature from './Components/Feature/Feature';
import Hero from './Components/Hero.js/Hero';

import '../utils/gsap';
import { BrandList } from './Components/BrandList/BrandList';
import EveryThingFree from './Components/EveryThingFree/EveryThingFree';
import Final from './Components/Final/Final';
import FirstParty from './Components/FirstParty/FirstParty';
import Footer from './Components/Footer/Footer';
import InstantRoi from './Components/InstantRoi/InstantRoi';
import LifeTimeValue from './Components/LifeTimeValue/LifeTimeValue';
import SmoothScroll from './Components/SmoothScroll/SmoothScroll';
import Technology from './Components/Technology/Technology';
import { Testimonial } from './Components/Testimonial/Testimonial';

export const metadata = {
  title: 'Your Page Title',
  metadataBase: new URL('https://test-dpanda.pages.dev'),
  charset: 'UTF-8',
  viewport: 'width=device-width, initial-scale=1.0',
  description: 'Monetize By Embedding Brands Within Your Site',
  keywords: ['brand', 'monetization', 'publisher', 'site'],
  authors: [{ name: 'Your Name' }],

  openGraph: {
    title: 'Everything To Transact Brands On Your Site',
    description: 'Monetize By Embedding Brands Within Your Site',
    url: '/publisher2',
    siteName: 'Dpanda',
    images: [
      {
        url: 'https://imagekit.dpanda.in/publisher-banner/1731586986_image.png',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Everything To Transact Brands On Your Site',
    description: 'Monetize By Embedding Brands Within Your Site',
    images: [
      'https://imagekit.dpanda.in/publisher-banner/1731586986_image.png',
    ],
    site: '@yourtwitterhandle',
    creator: '@yourtwitterhandle',
  },

  other: {
    'linkedin:title': 'Everything To Transact Brands On Your Site',
    'linkedin:description': 'Monetize By Embedding Brands Within Your Site',
    'linkedin:image':
      'https://imagekit.dpanda.in/publisher-banner/1731586986_image.png',

    'whatsapp:title': 'Everything To Transact Brands On Your Site',
    'whatsapp:description': 'Monetize By Embedding Brands Within Your Site',
    'whatsapp:image':
      'https://imagekit.dpanda.in/publisher-banner/1731586986_image.png',

    'slack:title': 'Everything To Transact Brands On Your Site',
    'slack:description': 'Monetize By Embedding Brands Within Your Site',
    'slack:image':
      'https://imagekit.dpanda.in/publisher-banner/1731586986_image.png',
  },
};

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
