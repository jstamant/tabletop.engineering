import './globals.css'
// import { Source_Sans_3 } from 'next/font/google'
// import { GoogleAnalytics } from '@next/third-parties/google'
// googleAnalytics = "G-8338ZTXXB4"
// <GoogleAnalytics gaId="G-?" /> place right after body

// // Fix Font Awesome for use with Next.js (need to manually import FA's CSS)
// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'

// const source_sans = Source_Sans_3({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-source-sans',
// })

// TODO change description
export const metadata = {
  title: 'Tabletop Engineering',
  description: 'A compilation of my experiences and learning as a Game Master - a curator of experiences!',
  generator: 'Next.js',
  icons: {
    icon: 'favicon.ico',
    shortcut: 'favicon.ico',
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

import Header from '../components/header'
import Footer from '../components/footer'

// TODO add menu, too

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
