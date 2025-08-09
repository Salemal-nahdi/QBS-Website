import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QBS - Professional Cleaning Services | South Australia',
  description: 'QBS provides premium commercial cleaning services in South Australia. Specialising in clinic cleaning and builders clean. Get a free quote today!',
  keywords: 'cleaning services, commercial cleaning, clinic cleaning, builders clean, South Australia, Adelaide, professional cleaning',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'QBS - Professional Cleaning Services',
    description: 'Premium commercial cleaning services in South Australia',
    type: 'website',
    locale: 'en_AU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
