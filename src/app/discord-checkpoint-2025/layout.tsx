import { Metadata } from 'next'
import React from 'react'

const siteUrl = 'https://discordwrapped.com'
const canonicalUrl = `${siteUrl}/discord-checkpoint-2025`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Discord Checkpoint 2025 | Resolve verification and secure your account',
  description:
    'Step-by-step guidance to clear the Discord Checkpoint 2025 verification, confirm your identity, and keep your account protected.',
  keywords: [
    'Discord Checkpoint 2025',
    'Discord checkpoint',
    'Discord verification',
    'Discord login security',
    'Discord safety check',
    'Discord account recovery',
  ],
  authors: [{ name: 'Discord Wrapped Team', url: siteUrl }],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: 'Discord Checkpoint 2025 | Resolve verification and secure your account',
    description:
      'Clear the Discord Checkpoint 2025 verification with a concise checklist, safety tips, and anti-lockout best practices.',
    url: canonicalUrl,
    siteName: 'Discord Wrapped',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Discord Checkpoint 2025 guidance and verification overview',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Checkpoint 2025 | Resolve verification and secure your account',
    description: 'Follow the steps to pass Discord Checkpoint 2025 and lock down your account.',
    images: [`${siteUrl}/twitter-image.jpg`],
    creator: '@discordwrapped',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function DiscordCheckpointLayout({ children }: { children: React.ReactNode }) {
  return children
}
