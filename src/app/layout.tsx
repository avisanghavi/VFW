import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryProvider } from "@/providers/query-provider"
import { ThemeProvider } from "@/providers/theme-provider"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'VideoForce.ai - AI Agents for Profitable Video Marketing',
    template: '%s | VideoForce.ai'
  },
  description: 'AI Agents that work 24/7 to source authentic creators, extract high-value video assets, and run campaigns with winning ad formulas. Where Human Creativity Meets AI Brilliance.',
  keywords: [
    'AI video marketing',
    'video creation',
    'content marketing',
    'creator sourcing',
    'performance media',
    'video highlights',
    'AI agents',
    'marketing automation'
  ],
  authors: [{ name: 'VideoForce.ai' }],
  creator: 'VideoForce.ai',
  publisher: 'VideoForce.ai',
  metadataBase: new URL('https://videoforce.ai'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://videoforce.ai',
    title: 'VideoForce.ai - AI Agents for Profitable Video Marketing',
    description: 'AI Agents that work 24/7 to source authentic creators, extract high-value video assets, and run campaigns with winning ad formulas.',
    siteName: 'VideoForce.ai',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VideoForce.ai - AI Agents for Profitable Video Marketing'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VideoForce.ai - AI Agents for Profitable Video Marketing',
    description: 'AI Agents that work 24/7 to source authentic creators, extract high-value video assets, and run campaigns with winning ad formulas.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // Add other verification codes as needed
  },
  icons: {
    icon: '/icon.svg?v=2',
    shortcut: '/icon.svg?v=2',
    apple: '/icon.svg?v=2',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <TooltipProvider>
              {children}
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
