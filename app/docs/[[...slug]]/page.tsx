import React from 'react';
import Link from 'next/link';
import { source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

function Callout({ type = 'info', title, children }: { type?: string; title?: string; children?: React.ReactNode }) {
  const borderColors: Record<string, string> = {
    info: 'border-blue-500 bg-blue-500/10 text-blue-900 dark:text-blue-200',
    warning: 'border-amber-500 bg-amber-500/10 text-amber-900 dark:text-amber-200',
    error: 'border-rose-500 bg-rose-500/10 text-rose-900 dark:text-rose-200',
    success: 'border-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200',
    tip: 'border-emerald-500 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200',
  };
  const cls = borderColors[type] || borderColors.info;
  return (
    <div className={`my-4 p-4 border-l-4 rounded-r-lg ${cls}`}>
      {title && <div className="font-semibold mb-1 text-base">{title}</div>}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function Cards({ children }: { children?: React.ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">{children}</div>;
}

function Card({ title, description, href, children }: { title: string; description?: string; href?: string; children?: React.ReactNode }) {
  const content = (
    <div className="p-4 rounded-xl border border-fd-border bg-fd-card hover:bg-fd-accent/40 transition-colors duration-200 h-full">
      <h3 className="font-semibold text-fd-foreground text-base mb-1">{title}</h3>
      {description && <p className="text-sm text-fd-muted-foreground">{description}</p>}
      {children}
    </div>
  );
  if (href) {
    return <Link href={href} className="no-underline block h-full">{content}</Link>;
  }
  return content;
}

function Steps({ children }: { children?: React.ReactNode }) {
  return <div className="my-6 pl-4 border-l-2 border-fd-primary/30 space-y-4">{children}</div>;
}

function Step({ children }: { children?: React.ReactNode }) {
  return <div className="relative pl-2">{children}</div>;
}

const customComponents = {
  Callout,
  Cards,
  Card,
  Steps,
  Step,
};

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={customComponents} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
