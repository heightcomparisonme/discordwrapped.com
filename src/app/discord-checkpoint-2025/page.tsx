const heroHighlights = [
  { label: 'Verification', value: 'Checkpoint 2025' },
  { label: 'Protection', value: 'Bot & takeover defense' },
  { label: 'Time to clear', value: '< 2 minutes' },
  { label: 'Works on', value: 'Desktop & mobile web' },
]

const checkpointTriggers = [
  {
    title: 'New device or network',
    copy: 'You signed in from a new browser, country, VPN, or incognito session. The checkpoint pauses access until you confirm it is you.',
  },
  {
    title: 'Unusual volume or automation',
    copy: 'Rapid joins, mass DMs, or scripts can trigger a safety hold that blocks spam, raids, and botted behavior.',
  },
  {
    title: 'Incomplete verification',
    copy: 'Missing email or phone verification, disabled 2FA, or out-of-date recovery info raises risk and prompts the checkpoint.',
  },
  {
    title: 'Policy or age flags',
    copy: 'Account age, past security flags, or chargeback-related holds may require this additional verification step.',
  },
]

const resolveSteps = [
  {
    title: 'Stay in one tab with cookies enabled',
    detail:
      'Open the checkpoint link in the same browser, keep cookies on, and avoid switching networks mid-flow to prevent loops.',
  },
  {
    title: 'Confirm the login was you',
    detail:
      'Check the device and location shown. If it was not you, reset your password immediately, enable 2FA, and review active sessions.',
  },
  {
    title: 'Complete the human check',
    detail:
      'Finish the CAPTCHA, email PIN, or SMS code. Keep Discord open until it finishes; closing the tab can restart the challenge.',
  },
  {
    title: 'Approve the device & clean up sessions',
    detail:
      'Approve the sign-in from the Discord app, remove unknown devices under Settings → Devices, and regenerate backup codes.',
  },
]

const safetyChecklist = [
  'Use a trusted connection; VPNs, corporate gateways, or school proxies can block the handoff.',
  'Enable two-factor authentication with an authenticator app and store backup codes securely.',
  'Disable automation extensions and close third-party clients while you complete the checkpoint.',
  'If locked out, open a support ticket with the exact checkpoint message and device details.',
]

const faqItems = [
  {
    question: 'What is Discord Checkpoint 2025?',
    answer:
      'It is a required safety challenge that confirms you are a real person signing in from a trusted device before you can continue using Discord.',
  },
  {
    question: 'Why am I seeing this checkpoint?',
    answer:
      'The checkpoint appears when Discord detects a new device or network, unusual automation, missing verification, or account risk that needs review.',
  },
  {
    question: 'How do I fix a checkpoint loop?',
    answer:
      'Enable cookies, avoid switching networks, disable VPN/ad blockers, try a clean browser session, and make sure you finish the CAPTCHA or email/SMS prompt in the same tab.',
  },
  {
    question: 'Can I complete the checkpoint on mobile?',
    answer:
      'Yes. Use the official Discord mobile app or your mobile browser, stay on the same connection, and approve the sign-in request if prompted.',
  },
  {
    question: 'Does a VPN or proxy affect Discord Checkpoint?',
    answer:
      'Yes. VPNs and proxies can trigger or loop the checkpoint. Temporarily pause them, complete verification, then re-enable if needed.',
  },
  {
    question: 'What if I lost access to my email or phone?',
    answer:
      'Update your recovery email/phone from a trusted session, add 2FA with backup codes, or contact Discord Support with proof of account ownership.',
  },
]

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

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Discord Checkpoint 2025',
  description:
    'Clear the Discord Checkpoint 2025 verification with a concise checklist, safety tips, and anti-lockout best practices.',
  author: {
    '@type': 'Organization',
    name: 'Discord Wrapped',
    url: 'https://discordwrapped.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Discord Wrapped',
    logo: {
      '@type': 'ImageObject',
      url: 'https://discordwrapped.com/og-image.jpg',
    },
  },
  url: 'https://discordwrapped.com/discord-checkpoint-2025',
  image: 'https://discordwrapped.com/og-image.jpg',
  datePublished: '2025-01-01',
  dateModified: '2025-01-01',
}

export default function DiscordCheckpointPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="container mx-auto px-6 py-20 space-y-16">
          <section className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-100">
                Security Check • Discord Checkpoint 2025
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Resolve the Discord Checkpoint 2025 verification
                </h1>
                <p className="text-lg leading-relaxed text-slate-300">
                  A step-by-step playbook to pass the Checkpoint challenge, confirm it is really you, and secure your
                  Discord account without getting stuck in verification loops. Built for a premium SaaS feel with clear
                  calls-to-action.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#resolve"
                  className="rounded-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-indigo-500/30 transition hover:scale-[1.02]"
                >
                  Resolve the checkpoint
                </a>
                <a
                  href="#faq"
                  className="rounded-xl border border-slate-700 px-6 py-3 text-base font-semibold text-slate-50 transition hover:border-indigo-300 hover:text-indigo-100"
                >
                  FAQ & troubleshooting
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                {heroHighlights.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="text-xl font-semibold text-slate-50">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 -top-10 h-24 w-24 rounded-full bg-indigo-400/30 blur-2xl" />
              <div className="absolute -bottom-12 -right-10 h-28 w-28 rounded-full bg-cyan-400/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-2xl shadow-indigo-900/50">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-semibold text-indigo-300">Checkpoint preview</span>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-100">
                    Secure access
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">What you see</p>
                    <p className="mt-2 text-xl font-bold text-slate-50">Confirm it&apos;s really you</p>
                    <p className="text-sm text-slate-400">
                      Discord pauses login when the signal looks unusual. Verify your session to continue safely.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                      <p className="text-sm text-slate-400">Human check</p>
                      <p className="text-2xl font-semibold text-slate-50">CAPTCHA + code</p>
                      <p className="text-xs text-slate-500">Complete without closing the tab.</p>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                      <p className="text-sm text-slate-400">Device trust</p>
                      <p className="text-2xl font-semibold text-slate-50">Approve login</p>
                      <p className="text-xs text-slate-500">Approve from your app or email.</p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                    <p className="text-sm text-slate-400">Next steps</p>
                    <p className="text-lg font-semibold text-slate-50">
                      Remove unknown sessions, enable 2FA, and keep recovery info current.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">What it is</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50">Why Discord Checkpoint appears</h2>
              <p className="text-slate-300">
                The checkpoint is a protective gate that stops suspicious sign-ins before they reach your account. Here
                are the most common signals that trigger it.
              </p>
              <a
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 underline underline-offset-4 transition hover:text-indigo-100"
                href="https://support.discord.com/hc/en-us/articles/36415877391511-Discord-Checkpoint-2025"
                target="_blank"
                rel="noreferrer"
              >
                View the official Discord Support article
                <span aria-hidden>↗</span>
              </a>
            </div>
            <div className="lg:col-span-2 grid gap-4 md:grid-cols-2">
              {checkpointTriggers.map((item) => (
                <div
                  key={item.title}
                  className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/20"
                >
                  <h3 className="text-xl font-semibold text-slate-50">{item.title}</h3>
                  <p className="text-slate-300">{item.copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="resolve" className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-xl shadow-indigo-900/40">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Step-by-step</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50">
                Resolve the checkpoint and keep access secure
              </h2>
              <p className="text-slate-300">
                Follow this checklist exactly—staying in one tab and one network is key to avoid loops.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {resolveSteps.map((step, index) => (
                <div key={step.title} className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/20 text-base font-semibold text-indigo-100">
                      {index + 1}
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Checkpoint</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-50">{step.title}</h3>
                  <p className="text-slate-300">{step.detail}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
                <h3 className="text-lg font-semibold text-emerald-100">Best practices</h3>
                <ul className="space-y-2 text-sm text-emerald-50">
                  {safetyChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
                <h3 className="text-lg font-semibold text-slate-50">If you still cannot pass</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>Try a different trusted browser without extensions, staying off VPN.</li>
                  <li>Clear site data for discord.com, then retry with cookies enabled.</li>
                  <li>Use the official Discord mobile app to approve the device.</li>
                  <li>Submit a ticket with screenshots of the checkpoint and the exact error text.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">Trust & safety</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50">
                Keep your account healthy after clearing the checkpoint
              </h2>
              <p className="text-slate-300">
                Discord Checkpoint 2025 is the first line of defense. Pair it with good hygiene to avoid repeat holds
                and protect your community presence.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-slate-50">Update recovery paths</h3>
                <p className="text-slate-300">
                  Keep your email, phone, and backup codes current. Remove old numbers before they cause failed logins.
                </p>
              </div>
              <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-slate-50">Review connected apps</h3>
                <p className="text-slate-300">
                  Revoke suspicious OAuth apps and automation bots. Limit tokens to what you actually use daily.
                </p>
              </div>
              <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-slate-50">Harden devices</h3>
                <p className="text-slate-300">
                  Patch your OS and browser, run malware scans, and avoid sharing devices without separate profiles.
                </p>
              </div>
              <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                <h3 className="text-lg font-semibold text-slate-50">Stay policy-aligned</h3>
                <p className="text-slate-300">
                  Follow Discord&apos;s Community Guidelines to prevent additional reviews or holds on your account.
                </p>
              </div>
            </div>
          </section>

          <section
            id="faq"
            className="space-y-8 rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-lg shadow-black/30"
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">FAQ</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50">Discord Checkpoint 2025 FAQs</h2>
              <p className="text-slate-300">
                Answers to the most common questions so you can clear the verification quickly.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {faqItems.map((item) => (
                <div key={item.question} className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                  <h3 className="text-xl font-semibold text-slate-50">{item.question}</h3>
                  <p className="text-slate-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-10 text-slate-900 shadow-2xl shadow-indigo-900/40">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900/80">Call to action</p>
                <h2 className="text-3xl font-bold tracking-tight">Ready to clear Discord Checkpoint 2025?</h2>
                <p className="text-lg text-slate-900/90">
                  Follow the checklist, approve the device, and lock down your account with 2FA and updated recovery
                  info.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#resolve"
                  className="rounded-xl bg-white px-6 py-3 text-base font-semibold text-indigo-700 shadow-md shadow-black/10 transition hover:translate-y-[-1px]"
                >
                  Start the checklist
                </a>
                <a
                  href="mailto:hello@discordwrapped.com"
                  className="rounded-xl border border-white/70 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-white/10"
                >
                  Request support
                </a>
              </div>
            </div>
          </section>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        </div>
      </div>
    </div>
  )
}
