import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Y/N Meaning Discord - what does y/n mean on Discord?',
    template: '%s | Discord Wrapped'
  },
  description: 'Discover what Y/N means on Discord and how to use the "Your Name" storytelling format. Learn about this immersive fanfiction trend and create personalized content that engages viewers.',
  keywords: [
    'Y/N meaning Discord',
    'Your Name Discord',
    'YN storytelling format',
    'Discord storytelling trends',
    'What does Y/N mean',
    'Discord fanfiction format',
    'Your Name placeholder Discord',
    'Discord content creation',
    'Personalized storytelling Discord',
    'Discord narrative trends',
    'Y/N format explained',
    'Discord writing format',
    'Immersive storytelling Discord',
    'Discord character format',
    'Storytelling techniques Discord'
  ],
  authors: [{ name: 'Discord Wrapped Team' }],
  creator: 'Discord Wrapped',
  publisher: 'Discord Wrapped',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://Discordwrapped.app'),
  alternates: {
    canonical: 'https://Discordwrapped.app/y/n-meaning-Discord',
  },
  openGraph: {
    title: 'Y/N Meaning Discord - Complete Guide to Your Name Storytelling Format',
    description: 'Discover what Y/N means on Discord and how to use the "Your Name" storytelling format. Learn about this immersive fanfiction trend and create personalized content.',
    url: 'https://Discordwrapped.app/y/n-meaning-Discord',
    siteName: 'Discord Wrapped',
    images: [
      {
        url: 'https://Discordwrapped.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Y/N Meaning Discord Guide',
      },
      {
        url: 'https://Discordwrapped.app/og-image-square.jpg',
        width: 800,
        height: 800,
        alt: 'Your Name Discord Format',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Y/N Meaning Discord - Complete Guide to Your Name Storytelling Format',
    description: 'Discover what Y/N means on Discord and how to use the "Your Name" storytelling format. Learn about this immersive fanfiction trend.',
    images: [
      'https://Discordwrapped.app/twitter-image.jpg',
      'https://Discordwrapped.app/twitter-image-square.jpg'
    ],
    site: '@Discordwrapped',
    creator: '@Discordwrapped',
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