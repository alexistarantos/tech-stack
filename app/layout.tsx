import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Tech Stack - Next.js Starter',
    template: '%s | Tech Stack',
  },
  description: 'Production-ready Next.js starter with MongoDB, Clerk authentication, Stripe payments, and shadcn/ui components.',
  keywords: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Clerk', 'Stripe', 'shadcn/ui', 'Tailwind CSS'],
  authors: [{ name: 'Tech Stack' }],
  creator: 'Tech Stack',
  publisher: 'Tech Stack',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    url: '/',
    title: 'Tech Stack - Next.js Starter',
    description: 'Production-ready Next.js starter with MongoDB, Clerk authentication, Stripe payments, and shadcn/ui components.',
    siteName: 'Tech Stack',
    images: [
      {
        url: 'https://techstack.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tech Stack - Next.js Starter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Stack - Next.js Starter',
    description: 'Production-ready Next.js starter with MongoDB, Clerk authentication, Stripe payments, and shadcn/ui components.',
    images: ['https://techstack.com/og-image.png'],
    creator: '@techstack',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.className}>
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
