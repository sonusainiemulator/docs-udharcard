import Link from 'next/link';
import { ArrowRight, BookOpen, Check, Command, Search, Sparkles } from 'lucide-react';

const sections = [
  {
    number: '01',
    title: 'Merchant dashboard',
    description: 'Manage customers, transactions, subscriptions, and every detail of your lending workflow.',
    href: '/docs/admin',
    accent: 'bg-[#e5f1ea]',
  },
  {
    number: '02',
    title: 'Merchant app',
    description: 'A practical guide to OTP login, adding customers, ledgers, reminders, and reports.',
    href: '/docs/merchant-app',
    accent: 'bg-[#f5ead7]',
  },
  {
    number: '03',
    title: 'User app',
    description: 'Help customers sign in, view their khata, repay online, and stay on top of their dues.',
    href: '/docs/user-app',
    accent: 'bg-[#e7e8f6]',
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f8f7f3] text-[#17241d]">
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 sm:px-10 lg:px-16 lg:pb-32 lg:pt-24">
        <div className="pointer-events-none absolute -right-28 -top-28 size-96 rounded-full bg-[#d9e9dc] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 size-56 rounded-full bg-[#f4e0bd] blur-3xl" />
        <div className="relative grid items-end gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#cad8ce] bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#4c6658]">
              <Sparkles className="size-3.5" aria-hidden="true" />
              The Udharcard handbook
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-7xl lg:text-[6.6rem]">
              A clearer way to <span className="text-[#548063]">understand</span> every step.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#607066] sm:text-xl">
              Everything you need to build, run, and grow Udharcard — written for humans, not just developers.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/docs" className="group inline-flex items-center gap-3 rounded-full bg-[#17241d] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
                Start reading
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="#chapters" className="inline-flex items-center gap-2 rounded-full border border-[#bdc9c0] bg-white/60 px-6 py-3.5 text-sm font-semibold text-[#31443a] hover:bg-white">
                Browse chapters
              </Link>
            </div>
          </div>

          <div className="relative lg:pb-3">
            <div className="rounded-[2rem] border border-[#d7ded8] bg-white p-3 shadow-[0_24px_70px_rgba(42,65,51,0.12)]">
              <div className="rounded-[1.4rem] bg-[#eef3ee] p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-[#d4ded6] pb-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#6c7c70]">
                  <span>Quick start</span><span>Read · 06 min</span>
                </div>
                <div className="py-8">
                  <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-[#d1e5d6] text-[#416a4d]"><BookOpen className="size-5" aria-hidden="true" /></div>
                  <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#213228]">How Udharcard works</h2>
                  <p className="mt-3 text-sm leading-6 text-[#68796d]">Start here for the big picture, then choose the guide that matches your role.</p>
                </div>
                <div className="flex items-center gap-3 border-t border-[#d4ded6] pt-5 text-sm font-medium text-[#416a4d]">
                  <span className="flex size-6 items-center justify-center rounded-full bg-[#c9dfcf]"><Check className="size-3.5" aria-hidden="true" /></span>
                  Beginner friendly
                  <span className="ml-auto text-xs text-[#87958b]">Updated today</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-[#d7ded8] bg-white px-4 py-3 shadow-lg sm:flex sm:items-center sm:gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-[#f5ead7] text-[#986f35]"><Command className="size-4" aria-hidden="true" /></div>
              <div><p className="text-xs font-semibold text-[#31443a]">Find anything</p><p className="text-[11px] text-[#7b877e]">Press ⌘ K to search</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="chapters" className="border-y border-[#e1e5e0] bg-white/65 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#70917a]">Choose your path</p><h2 className="max-w-lg text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">The docs, organized around you.</h2></div>
            <p className="max-w-xs text-sm leading-6 text-[#69776d]">Short chapters. Clear language. No hunting around for the one thing you came to find.</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {sections.map((section) => (
              <Link key={section.number} href={section.href} className="group rounded-3xl border border-[#dfe5df] bg-[#fbfbf9] p-6 transition-all hover:-translate-y-1 hover:border-[#a9c3ae] hover:bg-white hover:shadow-[0_18px_45px_rgba(42,65,51,0.1)] sm:p-8">
                <div className="mb-16 flex items-start justify-between"><span className={`flex size-11 items-center justify-center rounded-2xl text-sm font-bold ${section.accent}`}>{section.number}</span><ArrowRight className="size-5 text-[#92a096] transition-transform group-hover:translate-x-1 group-hover:text-[#548063]" aria-hidden="true" /></div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">{section.title}</h3>
                <p className="mt-3 min-h-20 text-sm leading-6 text-[#6c786f]">{section.description}</p>
                <span className="mt-6 inline-block text-sm font-semibold text-[#548063]">Open guide <span aria-hidden="true">↗</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-28">
        <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#70917a]">Need a shortcut?</p><h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Search the whole handbook.</h2><p className="mt-3 text-[#69776d]">Jump straight to the answer with our fast, focused search.</p></div>
        <Link href="/docs" className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#c7d1c9] bg-white px-5 py-3 text-sm font-semibold text-[#31443a] shadow-sm hover:border-[#91af99] lg:mt-0"><Search className="size-4" aria-hidden="true" /> Search documentation <span className="rounded-md bg-[#eef1ed] px-1.5 py-0.5 text-xs text-[#87958b]">⌘K</span></Link>
      </section>
    </main>
  );
}
