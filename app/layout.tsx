import type { Metadata } from 'next'
import '../styles/globals.css'
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import { Header } from '@/components/Header'
import { BlobBackground } from '@/components/BlobBackground'
import { Cursor } from '@/components/Cursor'
import { CommandPalette } from '@/components/CommandPalette'
import { SmoothScroll } from '@/components/SmoothScroll'

const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk' })
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['300','400','500','700'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Rida • Portfolio',
  description: 'Generative Design, UX Engineering, and Front-end work.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${grotesk.variable} ${mono.variable} bg-bg text-text`}>
        <svg width="0" height="0">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
              <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <BlobBackground />
        <SmoothScroll />
        <Header />
        {children}
        <CommandPalette />
        <Cursor />
      </body>
    </html>
  )
}
