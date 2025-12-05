import './globals.css'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { Metadata } from 'next'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'TikTok Wrapped',
    template: '%s | TikTok Wrapped'
  },
  description: 'Discover and Relive Your Top TikTok Moments | Wrapped for TikTok.',
  openGraph: {
    title: 'TikTok Wrapped',
    description: 'Discover and Relive Your Top TikTok Moments | Wrapped for TikTok',
    url: 'https://tiktokwrapped.app',
    siteName: 'TikTok Wrapped',
    images: [
      {
        url: 'https://tiktokwrapped.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TikTok Wrapped Preview'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TikTok Wrapped',
    description: 'Discover and Relive Your Top TikTok Moments | Wrapped for TikTok',
    images: ['https://tiktokwrapped.app/twitter-image.jpg'],
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
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="sogou_site_verification" content="4frudFYmJ8" />
        <link rel="icon" href="https://tiktokwrapped.app/favicon.ico" type="image/x-icon"></link>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-VL28XDNV54"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VL28XDNV54');
          `}
        </Script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5177457324079072"
          crossOrigin="anonymous">
        </script>
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}