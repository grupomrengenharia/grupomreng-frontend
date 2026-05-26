import { GoogleAnalytics } from '@next/third-parties/google';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import { CartButton, CookieConsentBanner, Footer, Navbar } from '../components';
import { Toaster } from 'sonner';

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
          <div>
            <CartButton asFab />
            <CookieConsentBanner />
            {children}
            <Toaster />
          </div>
          <Footer />
          <div className="w-full bg-black h-20 text-center flex items-center justify-center">
            <span>
              Copyright © {new Date().getFullYear()}. Borge & Cardoso Solucoes
              em Engenharia Ltda. CNPJ: 30.181.459/0001-08
            </span>
          </div>
        </div>
      </body>
      <GoogleAnalytics gaId={GA_ID} />
    </html>
  );
}
