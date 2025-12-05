import fs from 'fs'
import path from 'path'
import { Metadata } from 'next'
import { getSortedPostsData } from '@/lib/posts'
import ResourceList from '@/components/ResourceList'
import ArticleList from '@/components/ArticleList'
import { TypeWriter } from '@/components/TypeWriter'

const siteUrl = 'https://discordwrapped.com'

const faqItems = [
  {
    question: 'Checkpoint Discord Wrapped',
    answer:
      'Verify your Discord data export is loaded, confirm server and DM ranges, and lock in the branding preset before generating your Wrapped story.',
  },
  {
    question: 'See Discord Wrapped',
    answer:
      'Preview the animated cards in-browser, share a live link, or download print-ready assets to drop directly into your social channels.',
  },
  {
    question: 'How to check Discord Wrapped',
    answer:
      'Upload your Discord data export or connect your analytics key, review the highlighted servers and DMs, then click "Generate Wrapped" to get your recap.',
  },
  {
    question: 'Discord Wrapped where',
    answer:
      'Everything happens right here on discordwrapped.com. No extra dashboards or third-party logins are required.',
  },
  {
    question: 'My Discord Wrapped',
    answer:
      'You control the narrative: reorder slides, hide sensitive moments, and export both MP4 and PNG versions tailored to your community.',
  },
  {
    question: 'How to get to Discord Wrapped',
    answer:
      'Use the primary CTA on this page to start instantly or jump to the "Get started" checklist to import your data in under two minutes.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Discord Wrapped',
  description: 'Create a Spotify Wrapped-style recap for your Discord servers, DMs, and community stats.',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Discord Wrapped | Year-in-Review for your servers, DMs, and communities',
  description:
    'Generate Discord Wrapped in minutes. Turn your chats, calls, and reactions into a share-ready story with privacy-first analytics and premium visuals.',
  keywords: [
    'Discord Wrapped',
    'Discord recap',
    'Discord analytics',
    'Spotify Wrapped for Discord',
    'Discord yearly summary',
    'Discord share card',
  ],
  authors: [{ name: 'Discord Wrapped Team', url: siteUrl }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Discord Wrapped | Year-in-Review for your servers, DMs, and communities',
    description:
      'Generate Discord Wrapped in minutes. Turn your chats, calls, and reactions into a share-ready story with privacy-first analytics and premium visuals.',
    url: siteUrl,
    siteName: 'Discord Wrapped',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Discord Wrapped share preview card with community stats',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discord Wrapped | Year-in-Review for your servers, DMs, and communities',
    description:
      'Spin up a Spotify Wrapped-style story for Discord with exportable slides, MP4, and PNG assets.',
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

export default function Home() {
  const resourcesPath = path.join(process.cwd(), 'data', 'json', 'resources.json')
  const resources = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'))
  const allPostsData = getSortedPostsData().slice(0, 6)

  const stats = [
    { label: 'Setup time', value: '< 2 minutes' },
    { label: 'Share-ready outputs', value: 'MP4 + PNG' },
    { label: 'Privacy', value: 'Data stays in your workspace' },
    { label: 'Teams', value: 'Multi-seat ready' },
  ]

  const steps = [
    {
      title: 'Import your Discord data',
      copy: 'Drop in your Discord data export or connect your analytics key. Nothing is stored; processing stays local.',
    },
    {
      title: 'Choose your visual story',
      copy: 'Select templates for servers, DMs, call time, emote heatmaps, and message streaks with brand-safe colors.',
    },
    {
      title: 'Share your Discord Wrapped',
      copy: 'Download HD slides, generate MP4 reels, and publish a live link to your community in one click.',
    },
  ]

  const featureBullets = [
    'Year-in-review visuals for top servers, DMs, reactions, and voice activity.',
    'Privacy-first by design: export in your browser, delete anytime, and no third-party scripts.',
    'Optimized for social: 9:16 reels, 1:1 cards, and crisp 1200x630 previews.',
    'Built for community leads: invite collaborators, add checkpoints, and approve slides before launch.',
  ]

  return (
    <div className="bg-white text-slate-900">
      <div className="container mx-auto px-6 py-16 space-y-20">
        <section className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/60 px-4 py-2 text-sm font-semibold text-indigo-600 ring-1 ring-indigo-500/40">
              Discord Wrapped 2025 - Private by default
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              <TypeWriter text="Discord Wrapped" delay={120} className="inline-block" />
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">
              Ship a Spotify Wrapped-style recap for Discord. Turn chats, calls, reactions, and community streaks into a
              polished story your members will want to share. Inspired by the{' '}
              <a
                className="underline decoration-indigo-400 decoration-2 underline-offset-4"
                href="https://tiktokwrapped.app/discord-wrapped"
                target="_blank"
                rel="noreferrer"
              >
                original community request
              </a>
              , delivered as a modern SaaS experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://tiktokwrapped.app/discord-wrapped"
                className="rounded-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-indigo-500/30 transition hover:scale-[1.02]"
              >
                Check my Discord Wrapped
              </a>
              <a
                href="#faq"
                className="rounded-xl border border-slate-700 px-6 py-3 text-base font-semibold text-slate-900 transition hover:border-indigo-400 hover:text-indigo-100"
              >
                View FAQ checkpoints
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200/60 bg-slate-50/40 p-6">
              {stats.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="text-xl font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-indigo-500/40 blur-3xl" />
            <div className="absolute -bottom-16 -right-12 h-32 w-32 rounded-full bg-cyan-400/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-2xl shadow-indigo-900/40">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/2VS6MNazuHo?start=90"
                  title="Discord Checkpoint | Discord Wrapped Showcase"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section id="get-started" className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Get started</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">A clear path to your Discord Wrapped</h2>
            <p className="text-slate-600">
              Follow the checkpoint checklist to import data, style your story, and deliver it to your community with
              confidence.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-lg shadow-black/10"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-base font-semibold text-indigo-100">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Video Tutorial</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">How to See Your Discord Checkpoint 2025</h2>
            <p className="text-slate-600">
              Watch this quick tutorial to learn how to generate your Discord Wrapped and view your stats.
            </p>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/iHnKkh-DYFc"
              title="How To See Your Discord Checkpoint 2025 | Discord Wrapped Tutorial (Discord Recap)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            ></iframe>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Premium SaaS polish</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Built for community managers, creators, and brand teams
            </h2>
            <p className="text-slate-600">
              Discord Wrapped pairs privacy-first analytics with cinematic visuals so you can celebrate your community
              without compromising trust.
            </p>
            <ul className="space-y-3">
              {featureBullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                  <span className="text-slate-200">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-xl shadow-indigo-900/30">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-indigo-600">Governance</p>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-100">
                Passes audits
              </span>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white/60 p-4">
                <p className="text-sm text-slate-600">Roles & approvals</p>
                <p className="text-lg font-semibold text-slate-900">
                  Reviewer checkpoints and sign-off logs keep brand teams comfortable.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/60 p-4">
                <p className="text-sm text-slate-600">Delivery formats</p>
                <p className="text-lg font-semibold text-slate-900">
                  Export MP4 reels, loop-ready GIFs, and crisp PNG slides in one bundle.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/60 p-4">
                <p className="text-sm text-slate-600">Support</p>
                <p className="text-lg font-semibold text-slate-900">
                  Guided onboarding for community leads and agencies rolling out Discord Wrapped at scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="space-y-8 rounded-3xl border border-slate-200 bg-slate-50/40 p-8 shadow-lg shadow-black/20"
        >
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">FAQ</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Key Discord Wrapped questions answered</h2>
            <p className="text-slate-600">
              Save time for support and SEO by addressing the most-searched prompts for Discord Wrapped.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {faqItems.map((item) => (
              <div key={item.question} className="space-y-2 rounded-2xl border border-slate-200 bg-white/60 p-6">
                <h2 className="text-xl font-semibold text-slate-900">{item.question}</h2>
                <p className="text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Latest product notes</h2>
          <ArticleList articles={allPostsData} />
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Resources for Discord Wrapped</h2>
          <ResourceList resources={resources} />
        </section>

        <section className="rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-10 text-slate-900 shadow-2xl shadow-indigo-900/40">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900/80">Call to action</p>
              <h2 className="text-3xl font-bold tracking-tight">Ready to see your Discord Wrapped?</h2>
              <p className="text-lg text-slate-900/90">
                Generate a checkpointed, brand-ready story today and share it with your community in minutes.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#get-started"
                className="rounded-xl bg-white px-6 py-3 text-base font-semibold text-indigo-700 shadow-md shadow-black/10 transition hover:translate-y-[-1px]"
              >
                Start for free
              </a>
              <a
                href="mailto:hello@discordwrapped.com"
                className="rounded-xl border border-white/70 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-white/10"
              >
                Talk to us
              </a>
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </div>
    </div>
  )
}
