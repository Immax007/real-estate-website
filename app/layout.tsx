import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'EstateX | Find a place you\'ll love',
  description: 'Discover beautiful homes, apartments, land and commercial properties from trusted agents.',
  generator: 'Next.js',
  applicationName: 'EstateX',
  keywords: ['real estate', 'properties', 'homes', 'apartments', 'Lagos', 'Nigeria'],
  authors: [{ name: 'EstateX Team' }],
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-dark">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
