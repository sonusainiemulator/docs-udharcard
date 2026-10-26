import Link from 'next/link';
import { ArrowRight, BookOpen, Search, ShieldCheck, Sparkles } from 'lucide-react';

const sections = [
  {
    number: '01',
    title: 'Merchant dashboard',
    description: 'Manage customers, transactions, subscriptions, and lending workflows.',
    href: '/docs/admin',
    accent: 'bg-[#e5f1ea] text-[#416a4d]',
  },
  {
    number: '02',
    title: 'Merchant app',
    description: 'Learn OTP login, customers, ledgers, reminders, and reports.',
    href: '/docs/merchant-app',
    accent: 'bg-[#f5ead7] text-[#986f35]',
  },
  {
    number: '03',
    title: 'User app',
    description: 'Help customers view their khata, repay online, and track dues.',
    href: '/docs/user-app',
    accent: 'bg-[#e7e8f6] text-[#5b6090]',
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f8f7f3] text-[#17241d]">
      <header className="border-b border-[#dfe7df] bg-[#f8f7f3]/95 px-5 sm:px-8">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5" aria-label="UdharCard Docs home">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#17241d] text-white shadow-sm">
              <BookOpen className="size-4" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold tracking-[-0.02em]">UdharCard</span>
              <span className="block text-[11px] font-medium text-[#718078]">Documentation</span>
            </span>
          </Link>
          <nav className="flex items-center gap-2 text-sm font-semibold" aria-label="Main navigation">
            <Link href="/docs" className="rounded-lg px-3 py-2 text-[#617066] transition-colors hover:bg-white hover:text-[#17241d]">Guides</Link>
            <Link href="/docs" className="inline-flex items-center gap-1.5 rounded-lg bg-[#dcecdf] px-3 py-2 text-[#315c3d] transition-colors hover:bg-[#cfe4d2]">
              Open docs <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cfe1d2] bg-[#edf6ee] px-3 py-1.5 text-xs font-bold text-[#416a4d]">
            <Sparkles className="size-3.5" aria-hidden="true" />
            The simple way to understand UdharCard
          </div>
          <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">Everything you need to use Udharcard.</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#69776d] sm:text-lg">Simple guides for merchants and customers. Find a topic, follow the steps, and get back to work.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/docs" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#17241d] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#31443a]">Start reading <ArrowRight className="size-4" aria-hidden="true" /></Link>
            <Link href="#guides" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#c7d1c9] bg-white px-5 text-sm font-semibold text-[#31443a] hover:bg-[#fbfbf9]">Choose a guide</Link>
          </div>
        </div>
      </section>

      <section id="guides" className="border-y border-[#e1e5e0] bg-white px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 max-w-xl"><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#70917a]">Browse the guides</p><h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Start with what you use.</h2><p className="mt-3 text-sm leading-6 text-[#69776d]">Each guide is short, practical, and written in plain language.</p></div>
          <div className="grid gap-3 lg:grid-cols-3">{sections.map((section) => <Link key={section.number} href={section.href} className="group flex min-h-52 flex-col rounded-2xl border border-[#dfe5df] bg-[#fbfbf9] p-5 transition-all hover:-translate-y-0.5 hover:border-[#a9c3ae] hover:bg-white hover:shadow-[0_12px_30px_rgba(42,65,51,0.08)] sm:p-6"><div className="flex items-center justify-between"><span className={`flex size-9 items-center justify-center rounded-xl text-xs font-bold ${section.accent}`}>{section.number}</span><ArrowRight className="size-4 text-[#92a096] transition-transform group-hover:translate-x-1 group-hover:text-[#548063]" aria-hidden="true" /></div><div className="mt-auto pt-10"><h3 className="text-xl font-semibold tracking-[-0.03em]">{section.title}</h3><p className="mt-2 text-sm leading-6 text-[#6c786f]">{section.description}</p><span className="mt-4 inline-block text-sm font-semibold text-[#548063]">Open guide</span></div></Link>)}</div>
        </div>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col gap-5 px-5 py-14 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:justify-between"><div><h2 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">Looking for something specific?</h2><p className="mt-2 text-sm leading-6 text-[#69776d]">Search all Udharcard documentation in one place.</p></div><Link href="/docs" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#c7d1c9] bg-white px-5 text-sm font-semibold text-[#31443a] shadow-sm hover:border-[#91af99]"><Search className="size-4" /> Search docs</Link></section>

      <footer className="border-t border-[#dfe7df] bg-[#eef5ef] px-5 py-8 sm:px-8"><div className="mx-auto flex max-w-5xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-start gap-3"><span className="flex size-9 items-center justify-center rounded-xl bg-[#d9eadc] text-[#416a4d]"><ShieldCheck className="size-4" aria-hidden="true" /></span><div><p className="text-sm font-bold">Built for clear money conversations.</p><p className="mt-1 max-w-sm text-xs leading-5 text-[#6d7c71]">Practical documentation for every UdharCard workflow.</p></div></div><div className="flex gap-4 text-xs font-semibold text-[#5e7063]"><Link href="/docs" className="hover:text-[#17241d]">Documentation</Link><Link href="https://github.com/sonusainiemulator/docs-udharcard" className="hover:text-[#17241d]">GitHub</Link></div></div></footer>
    </main>
  );
}
