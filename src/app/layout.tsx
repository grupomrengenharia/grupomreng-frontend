import { GoogleAnalytics } from '@next/third-parties/google';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import { Navbar } from '../components';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MR Engenharia | Início',
  description:
    'Especialistas em soluções para sistemas de prevenção e combate a incêndio e pânico (PSCIP)',
};

const GA_ID = String(process.env.NEXT_PUBLIC_GA_ID);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-svh overflow-x-hidden`}
      >
        <div className="fixed inset-0 -z-20">
          <Image
            src="/images/background.png"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="fixed inset-0 bg-black/60 -z-10" />

        <div className="relative z-10">
          <Navbar />
          <div className="px-30">{children}</div>
        </div>
      </body>
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  );
}
