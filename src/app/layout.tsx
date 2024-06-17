import React from 'react';
import type { Metadata } from 'next';
import './styles/globals.scss';

export const metadata: Metadata = {
  description: 'Estás cordialmente invitado a nuestra boda.',
  openGraph: {
    description: 'Estás cordialmente invitado a nuestra boda.',
    images: [
      {
        width: 1600,
        height: 1067,
        url: 'https://nuestraboda.love/Brenda-y-JoseLuis/wp-content/uploads/sites/2599/2024/05/Final.jpg',
        type: 'image/jpeg',
      },
    ],
    locale: 'es_ES',
    siteName: 'Brenda & José Luis',
    title: 'Brenda & José Luis - Nuestra Boda',
    type: 'website',
    url: 'https://brendayjoseluis.love',
  },
  robots: 'noindex, nofollow',
  title: 'Brenda & José Luis',
  twitter: {
    card: 'summary_large_image',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
