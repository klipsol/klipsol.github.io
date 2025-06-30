import { Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Dpanda - plug n play white label e-commerce distribution platform",
  description:
    "Dpanda is a distribution platform for d2c brands, offers plug n play white label e-commerce solutions for audience monetisation of websites and mobile apps",
  keywords:
    "AI-based product recommendations, Seamless e-commerce integration, white label e-commerce solution for websites and apps, d2c distribution platform, monetise website and app traffic, advertising widgets for d2c brands, d2c campaign aggregation",
  image: "https://www.dpanda.ai/dpanda.jpg",
  url: "https://www.dpanda.ai",
  icons: {
    icon: "https://www.dpanda.ai/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="keywords" content={metadata.keywords} />
        <meta name="description" content={metadata.description} />
        {/* <link rel="icon" href="/favicon.png" /> */}

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="dpanda" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="twitter:url" content={metadata.url} />

        <meta name="linkedin:title" content={metadata.title} />
        <meta name="linkedin:description" content={metadata.description} />
        <meta name="linkedin:image" content={metadata.image} />
      </head>
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
