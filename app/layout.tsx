import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BG Arts',
  description: 'Website for selling arts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='min-h-screen flex flex-col bg-black text-white'>
          <Header />
        {children}
        <Footer />
        </div>
        </body>
    </html>
  )
}
