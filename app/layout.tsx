import type { Metadata } from 'next';
import './globals.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'Grooming Wala | Luxury Pet Spa',
  description: 'Premium pet grooming appointments, membership plans, and luxury spa services.',
  metadataBase: new URL('https://groomingwala.example.com'),
  openGraph: {
    title: 'Grooming Wala',
    description: 'Luxury pet grooming appointments and spa experiences.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-offwhite text-deep antialiased font-body">
        {/* Animated background */}
        <div className="animated-bg" />
        {/* Floating particles */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="particle particle-1" />
          <div className="particle particle-2" />
          <div className="particle particle-3" />
        </div>
        {/* Content */}
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
