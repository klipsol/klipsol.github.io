import type { Metadata } from 'next';
import LandingPage from '../_landing/LandingPage';

export const metadata: Metadata = {
  title: 'DPanda LOMS — Turn Every Touchpoint Into an EMI Sales Channel',
  description:
    'Enable digital financing across retail stores, online checkout, and merchant networks — seamlessly and at scale.',
  openGraph: {
    title: 'DPanda LOMS — Turn Every Touchpoint Into an EMI Sales Channel',
    description:
      'Enable digital financing across retail stores, online checkout, and merchant networks — seamlessly and at scale.',
    images: ['https://dpanda-portfolio-813973891851.asia-south2.run.app/image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DPanda LOMS — Turn Every Touchpoint Into an EMI Sales Channel',
    description:
      'Enable digital financing across retail stores, online checkout, and merchant networks — seamlessly and at scale.',
    images: ['https://dpanda-portfolio-813973891851.asia-south2.run.app/image.png'],
  },
};

export default function DiscoveryPage() {
  return <LandingPage />;
}
