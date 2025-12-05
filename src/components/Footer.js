// components/Footer.js
import Link from 'next/link'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/tiktok-watermark-remover', label: 'TikTok Watermark Remover' },
  { href: '/tiktok-downloader', label: 'TikTok Downloader' },
  { href: '/download-tiktok-mp3', label: 'TikTok to MP3' },
  { href: '/TikTok-Wrapped-2025', label: 'TikTok Wrapped 2025' },
  { href: '/tiktok-viewer', label: 'TikTok Viewer' },
  { href: '/download-tiktok-stories', label: 'Download Stories' },
  { href: '/tiktok-sounds', label: 'TikTok Sounds' },
  { href: '/tiktok-username-generator', label: 'Username Generator' },
  { href: '/tiktok-engagement-rate-calculator', label: 'Engagement Calculator' },
  { href: '/free-tiktok-likes', label: 'Free TikTok Likes' },
  { href: '/get-tiktok-coins', label: 'Free TikTok Coins' },
  { href: '/y-n-meaning-tiktok', label: 'Y/N Meaning TikTok' },
  { href: '/resources', label: 'Resources' },
  { href: '/posts', label: 'Articles' },
]

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-emerald-200">About</h3>
            <p className="text-base text-slate-300">
              TikTok Wrapped turns your TikTok journey into shareable videos and images with clean CTAs and mobile-first
              experiences across all our tools.
            </p>
            <Link
              href="/tools"
              className="inline-flex items-center text-sm font-semibold text-emerald-200 hover:text-emerald-100"
            >
              Explore all tools →
            </Link>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-emerald-200">Quick Links</h3>
              <Link
                href="/tiktok-watermark-remover"
                className="text-xs font-semibold text-emerald-200 hover:text-emerald-100"
              >
                New: Watermark Remover
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-emerald-200">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://aibesttop.com/"
                  target="_blank"
                  className="text-base text-slate-300 hover:text-white transition-colors"
                >
                  TikTok Wrapped
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tiktok-Wrapped/tiktokwrapped.app"
                  target="_blank"
                  className="text-base text-slate-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/aigweb3"
                  target="_blank"
                  className="text-base text-slate-300 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} TikTok Wrapped.</p>
          <p className="text-sm text-slate-500">
            Built for creators: watermark remover, downloader, MP3 converter, viewer, and more.
          </p>
        </div>
      </div>
    </footer>
  )
}
