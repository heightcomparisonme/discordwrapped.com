// components/Footer.js
import Link from 'next/link'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Articles' },
  { href: '/discord-checkpoint-2025', label: 'Checkpoint 2025' },
]

export function Footer() {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-indigo-600">About</h3>
            <p className="text-base text-slate-600">
              Discord Wrapped turns your Discord journey into shareable videos and images with clean CTAs and mobile-first
              experiences.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-indigo-600">Quick Links</h3>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-indigo-600">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://discordwrapped.com/"
                  target="_blank"
                  className="text-base text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  Discord Wrapped
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Discord Wrapped.</p>
          <p className="text-sm text-slate-500">
            Built for communities.
          </p>
        </div>
      </div>
    </footer>
  )
}
