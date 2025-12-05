import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Y/N Meaning TikTok - what does y/n mean on tiktok?',
    template: '%s | TikTok Wrapped'
  },
  description: 'Discover what Y/N means on TikTok and how to use the "Your Name" storytelling format. Learn about this immersive fanfiction trend and create personalized content that engages viewers.',
  keywords: [
    'Y/N meaning TikTok',
    'Your Name TikTok',
    'YN storytelling format',
    'TikTok storytelling trends',
    'What does Y/N mean',
    'TikTok fanfiction format',
    'Your Name placeholder TikTok',
    'TikTok content creation',
    'Personalized storytelling TikTok',
    'TikTok narrative trends',
    'Y/N format explained',
    'TikTok writing format',
    'Immersive storytelling TikTok',
    'TikTok character format',
    'Storytelling techniques TikTok'
  ],
  authors: [{ name: 'TikTok Wrapped Team' }],
  creator: 'TikTok Wrapped',
  publisher: 'TikTok Wrapped',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tiktokwrapped.app'),
  alternates: {
    canonical: 'https://tiktokwrapped.app/y/n-meaning-tiktok',
  },
  openGraph: {
    title: 'Y/N Meaning TikTok - Complete Guide to Your Name Storytelling Format',
    description: 'Discover what Y/N means on TikTok and how to use the "Your Name" storytelling format. Learn about this immersive fanfiction trend and create personalized content.',
    url: 'https://tiktokwrapped.app/y/n-meaning-tiktok',
    siteName: 'TikTok Wrapped',
    images: [
      {
        url: 'https://tiktokwrapped.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Y/N Meaning TikTok Guide',
      },
      {
        url: 'https://tiktokwrapped.app/og-image-square.jpg',
        width: 800,
        height: 800,
        alt: 'Your Name TikTok Format',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Y/N Meaning TikTok - Complete Guide to Your Name Storytelling Format',
    description: 'Discover what Y/N means on TikTok and how to use the "Your Name" storytelling format. Learn about this immersive fanfiction trend.',
    images: [
      'https://tiktokwrapped.app/twitter-image.jpg',
      'https://tiktokwrapped.app/twitter-image-square.jpg'
    ],
    site: '@tiktokwrapped',
    creator: '@tiktokwrapped',
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
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'msvalidate.01': 'your-bing-verification-code',
    'facebook-domain-verification': 'your-facebook-verification',
  },
  category: 'education',
  classification: 'Social Media Guide',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light dark',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}