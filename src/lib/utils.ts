import { type ClassValue, clsx } from 'clsx';
import { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(price);
};

interface ConstrucMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
}

export function constructMetadata({
  title = 'CaseCobra - Custom high-quality phone cases',
  description = 'Create high-quality phone cases in seconds',
  image = '/thumbnail.png',
  icons = '/favicon.ico'
}: ConstrucMetadataProps = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: 'https://www.linkedin.com/in/kevinlitardo/'
    },
    icons,
    metadataBase: new URL('https://casecobrastore.vercel.app/')
  };
}
