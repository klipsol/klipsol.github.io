import { Inter_Tight } from 'next/font/google';
import './globals.css';

const inter = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Dpanda | Direct from brands',
  description:
    'Dpanda offer Your Gateway to E-Commerce. Enable contextual E-commerce everywhere, within minutes. Publisher can turn their site into a micro-ecommerce site.',
  metadataBase: new URL('https://test-dpanda.pages.dev'),
  charset: 'UTF-8',
  viewport: 'width=device-width, initial-scale=1.0',
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` bg-white
        ${inter.className}
         antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
