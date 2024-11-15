import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Dpanda | Direct from brands",
  description:
    "Dpanda offer Your Gateway to E-Commerce. Enable contextual E-commerce everywhere, within minutes. Publisher can turn their site into a micro-ecommerce site.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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

        <title>Dpanda</title>
      </head>
      <body
        className={` bg-white
        ${poppins.className}
         antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
