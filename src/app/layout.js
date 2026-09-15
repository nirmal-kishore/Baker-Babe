import { Playfair_Display, Poppins, Dancing_Script } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import './globals.css'

const playfairDisplay = Playfair_Display({
  weight: ['400', '700', '900'],
  variable: '--font-playfair-display',
  subsets: ['latin'],
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins-body',
  subsets: ['latin'],
})

const dancingScript = Dancing_Script({
  weight: ['400', '700'],
  variable: '--font-dancing-script',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Baker Babe | Custom Cakes Melbourne',
  description:
    'Handcrafted custom cakes made with love in Melbourne, Australia. Birthday cakes, wedding cakes, party cakes and more — designed to make every celebration unforgettable.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${poppins.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-poppins)] bg-baker-cream text-baker-dark">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
