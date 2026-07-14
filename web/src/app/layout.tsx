import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist_Mono, Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-story',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Sranan Story Collective',
  description:
    'Sranan Story Collective verbindt gemeenschappen, erfgoed en onderzoek rond Surinaamse geschiedenissen.',
  icons: {
    icon: '/ssc-logo.svg',
    shortcut: '/ssc-logo.svg',
    apple: '/ssc-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${montserrat.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
