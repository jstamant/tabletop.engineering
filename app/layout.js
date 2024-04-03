import './globals.css';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

// Fix Font Awesome for use with Next.js (need to manually import FA's CSS)
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// TODO change description
export const metadata = {
  title: 'Tabletop Engineering',
  description: 'A compilation of my experiences and learning as a Game Master - a curator of experiences!',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

import Header from '../components/header';
import Footer from '../components/footer';

// TODO add menu, too

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main className="mx-auto my-16 w-11/12 md:w-2/3 text-lg">
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-8338ZTXXB4" />
    </html>
  );
}
