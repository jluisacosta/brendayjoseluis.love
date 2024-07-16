import React from 'react';
import type { Metadata } from 'next';
import './styles/globals.scss';

const DESCRIPTION = 'Te invitamos a ser parte de nuestra historia.';
const HOSTNAME = 'https://brendayjoseluis.love';
const TITLE = 'Brenda & José Luis - 14.09.2024';

export const metadata: Metadata = {
  description: DESCRIPTION,
  openGraph: {
    description: DESCRIPTION,
    images: [
      {
        width: 1600,
        height: 1067,
        url: `${HOSTNAME}/preview.jpg`,
        type: 'image/jpeg',
      },
    ],
    locale: 'es_ES',
    siteName: TITLE,
    title: TITLE,
    type: 'website',
    url: HOSTNAME,
  },
  robots: 'noindex, nofollow',
  title: TITLE,
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
