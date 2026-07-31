import './globals.css';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://srananstorycollective.com'),
  title: {
    default: 'Sranan Story Collective',
    template: '%s | Sranan Story Collective',
  },
  description:
    'Sranan Story Collective verbindt gemeenschappen, erfgoed en onderzoek rond Surinaamse geschiedenissen.',
  applicationName: 'Sranan Story Collective',
  keywords: [
    'Sranan Story Collective',
    'Suriname Time Machine',
    'Surinaamse geschiedenis',
    'diaspora',
    'erfgoed',
    'community verhalen',
  ],
  authors: [{ name: 'Sranan Story Collective' }],
  creator: 'Sranan Story Collective',
  publisher: 'Sranan Story Collective',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://srananstorycollective.com',
    siteName: 'Sranan Story Collective',
    title: 'Sranan Story Collective',
    description:
      'Sranan Story Collective verbindt gemeenschappen, erfgoed en onderzoek rond Surinaamse geschiedenissen.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sranan Story Collective',
    description:
      'Sranan Story Collective verbindt gemeenschappen, erfgoed en onderzoek rond Surinaamse geschiedenissen.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/ssc-logo.svg',
    shortcut: '/ssc-logo.svg',
    apple: '/ssc-logo.svg',
  },
  category: 'culture',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
