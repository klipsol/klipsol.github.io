import { Inter_Tight } from 'next/font/google';
import './globals.css';

const inter = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Dpanda - plug n play white label e-commerce distribution platform',
  description:
    'Dpanda is a distribution platform for d2c brands, offers plug n play white label e-commerce solutions for audience monetisation of websites and mobile apps',
  keywords:
    'AI-based product recommendations, Seamless e-commerce integration, white label e-commerce solution for websites and apps, d2c distribution platform, monetise website and app traffic, advertising widgets for d2c brands, d2c campaign aggregation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        id="root"
        className={` bg-white
        ${inter.className}
         antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
