import type { Metadata } from 'next';
import { Recursive } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import Providers from '@/components/Providers';
import { constructMetadata } from '@/lib/utils';

const recursive = Recursive({ subsets: ['latin'] });

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Providers>
          <Toaster />

          <NavBar />
          <main className="grainy-light flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
            <div className="flex-1 flex flex-col h-full">{children}</div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
