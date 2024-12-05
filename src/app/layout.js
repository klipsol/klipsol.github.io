import { Inter_Tight } from "next/font/google";
import "./globals.css";
import ScrollableNavbar from "./the-bump/Components/Nav/Nav2";
import ThemeProvider from "./ThemeProvider";

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        id="root"
        className={` bg-white
        ${inter.className}
         antialiased`}
      >
        <ThemeProvider /> <ScrollableNavbar />
        {children}
      </body>
    </html>
  );
}
