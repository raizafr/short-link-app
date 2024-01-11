import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import 'react-toastify/dist/ReactToastify.css';


export const metadata: Metadata = {
  title: 'LinkOn | URL Shortener',
  description: 'LinkOn adalah layanan penyingkat url atau shortlink gratis dan generate QR code tanpa daftar dan pungutan biaya',
  keywords: 'URL Shortener, LinkOn, linkon, penyingkat url, penyingkat link, short link, create short link, generate short URL, link generator',
  openGraph:{
    title:'LinkOn | URL Shortener',
    description:'LinkOn adalah layanan penyingkat url atau shortlink gratis dan generate QR code tanpa daftar dan pungutan biaya',
    type:'website',
    locale:'id_ID',
    url:'https://linkon.cfd/',
    siteName:'linkon'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <ThemeContextProvider>
        <body>
          <Navbar/>
          {children}
          <Footer/>
        </body>
      </ThemeContextProvider>
    </html>
  )
}
