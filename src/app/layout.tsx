import { Inter_Tight } from 'next/font/google';
import './globals.css';

const inter = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
        {children}
      </body>
    </html>
  );
}
